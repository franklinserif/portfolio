/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#011627',
      'primary-light': '#01080E',
      'primary-dark': '#011221',
      'primary-ultra-dark': '#010C15',
      'primary-hover': '#1e2d3d74',

      secondary: '#607B96',
      'secondary-green': '#3C9D93',
      'secondary-blue': '#4D5BCE',

      'accent-green': '#43D9AD',
      'accent-orange': '#FEA55F',
      'accent-salmon': '#E99287',
      'accent-violet': '#C98BDF',

      lines: '#1E2D3D',
      'button-hover': '#263b50',
      white: '#fff',
    },
    fontSize: {
      'headline-text': ['62px'],
      'subheadline-text': ['32px'],

      body: ['18px'],
      labels: ['16px', '16px'],
      snippets: ['14px'],
      'small-letter': ['12px'],
    },
    extend: {},
  },
  plugins: [],
}
