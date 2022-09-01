module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'xs-mobile': '320px',
                // => @media (min-width: 320px) { ... }
                's-movile': '375px',
                // => @media (min-width: 375px) { ... }
                'm-mobile': '480', 
                // => @media (min-width: 480px) { ... }
              },
        },
    },
    plugins: [],
}
