/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    fontFamily: {
      primary: 'Barlow Semi Condensed',
    },
    extend: {
      colors: {
        from: 'hsl(214, 47%, 23%)',
        to: 'hsl(237, 49%, 15%)',
        headerOutline: 'hsl(217, 16%, 45%)',
        scoreText: 'hsl(229, 64%, 46%)',
        darkText: 'hsl(229, 25%, 31%)',
        paper: 'hsl(230, 89%, 65%)',
        scissor: 'hsl(40, 84%, 53%)',
        rock: 'hsl(349, 70%, 56%)',
      },

      outlineWidth: {
        circle: '18px',
        mobileCircle: '12px',
      },
    },
  },
  plugins: [],
};
