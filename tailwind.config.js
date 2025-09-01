// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    extend: {
      colors: {
        ash: {
          DEFAULT: "#4F4F4F",  // dark ash
          light: "#6B6B6B",    // lighter ash
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')
    
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
}
