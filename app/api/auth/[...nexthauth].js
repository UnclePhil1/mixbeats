import spotifyApi, { LOGIN_URL } from "@/lib/mixbeat";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("Refresh Token is", refreshedToken);

    return {
        ...token,
        accessToken: refreshedToken.access_token,
        accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
        refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    }

  } catch (error) {
    console.error("Error", error);


    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_PUBLIC_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // IF THIS IS THE USER INITIAL SIGNIN
      if (account && user) {
        return {
          ...token,
          accountToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: Date.now() + account.expires_at * 1000, //handle expiring in millisecs...
        };
      }
      //   Return prev token if access_token has not expired
      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing token Valid");
        return token;
      }

      //   If access_token expires
      console.log("access toen has Expired, refreshing...");
      return await refreshAccessToken(token);
    },
  },

  async session({ session, token }) {
    session.user.accessToken = token.accessToken;
    session.user.refreshToken = token.refreshToken;
    session.user.username = token.username;

    return session;
  }
};

export default NextAuth(authOptions);
