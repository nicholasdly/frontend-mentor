import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        outfit: 'Outfit, sans-serif'
      },
      colors: {
        background: 'hsl(212, 45%, 89%)',
        primary: 'hsl(218, 44%, 22%)',
        accent: 'hsl(220, 15%, 55%)'
      }
    }
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap')`
  }
} as Options;
