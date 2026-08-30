/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'ra-green-600': '#64af2e',
        'ra-green-500': '#78b94e',
        'ra-green-400': '#8dc46e',
        'ra-green-300': '#a2cf8e',
        'ra-green-200': '#b7daae',
        'ra-green-100': '#cce5ce',
        'ra-orange': '#cb3814',
        'ra-blue': '#152B68',
        'ra-yellow': '#FFD700'
      },
      typography: {
        DEFAULT: {
          css: {
            a: { color: '#152B68' },
            // les tableaux servant de grille d'images ont un en-tete vide :
            // on le masque pour supprimer le filet gris et son espacement
            'thead:not(:has(th:not(:empty)))': { display: 'none' }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
