module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'railway' : ['Raleway', 'sans-serif'],
      'openSans' : ['Open Sans', 'sans-serif'],
    },
    colors: {
      // primary
      'DarkBlue1' : 'hsl(217, 28%, 15%)', //(intro and email sign up background)
      'DarkBlue2' : 'hsl(218, 28%, 13%)', //(main background)
      'DarkBlue3' : 'hsl(216, 53%, 9%)', //(footer background)
      'DarkBlue4' : 'hsl(219, 30%, 18%)', //(testimonials background)
      

      // accent
      'Cyan' : 'hsl(176, 68%, 64%)', //(inside call-to-action gradient)
      'Blue' : 'hsl(198, 60%, 50%)', //(inside call-to-action gradient)
      'LightRed' : 'hsl(0, 100%, 63%)', //(error)
      'btnHover' : 'hsl(198, 71%, 73%)', // hover

      // nuetral
      'White' : 'hsl(0, 0%, 100%)',
      'pColor' : 'hsl(0, 0%, 75%)',
    },
    screens: {
      'desktop': {'max': '1051px'},
      // => @media (max-width: 1051px) { ... }
      'desktopMd' : {'max': '1005px'},

      'desktopSm': {'max': '937px'},
      // => @media (max-width: 937px) { ... }
      'tabletSm': {'max': '937px'},
      // => @media (max-width: 937px) { ... }
      'tabletMD': {'max': '890px'},
      // => @media (max-width: 890px) { ... }
      'tabletXmd': {'max' : '849px'},
      'tabletSm': {'max': '814px'},
      // => @media (max-width: 937px) { ... }
      'tablet': {'max': '600px'},
      // => @media (max-width: 600px) { ... }

      'mobileLg': {'max': '566px'},
      // => @media (max-width: 566px) { ... }

      'mobileMd': {'max': '414px'},
      // => @media (max-width: 414px) { ... }

      'mobile': {'max': '370px'},
      // => @media (max-width: 370px) { ... }
    },
    extend: {}
  },
  plugins: [],
}
