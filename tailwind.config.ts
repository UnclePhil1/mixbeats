import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       'primary' : '#169B45',
       'light' : '#ffffff',
       'dark' : '#000000',
       'gray' : '#A7A7A7',
      },
    },
  },
  plugins: [],
}
export default config
