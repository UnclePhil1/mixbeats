const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#169B45',
        'light': '#ffffff',
        'dark': '#000000',
        'brown': '#919496',
      },
    },
  },
  plugins: [],
};

module.exports = config;
