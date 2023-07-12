/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
        },
      },
      // spacing: {
      //   // @TODO should customize spacing to match correct rem ratio?
      //   // https://tailwindcss.com/docs/customizing-spacing
      // }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ]
}
