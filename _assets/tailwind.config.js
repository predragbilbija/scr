module.exports = {
  mode: 'jit',
  purge: ['../**/*.php'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        40: '40px',
      },
      colors: {
        darkBlue: '#213977',
      },
      maxWidth: {
        1200: '1200px',
        600: '600px',
      },
      width: {
        180: '180px',
        51: '51px',
        200: '200px',
      },
      lineHeight: {
        60: '60px',
      },
      height: {
        60: '60px',
        143: '143px',
        150: '150px',
        250: '250px',
        280: '280px',
        310: '310px',
        400: '400px',
        530: '530px',
        650: '650px',
        900: '900px',
      },
      boxShadow: {
        11: 'rgb(0 0 0 / 25%) 0 0 11px 0',
        header: ' rgba(0, 0, 0, 0.25) 0px 3px 11px 0px',
      },
      backgroundImage: {
        'hero-pattern':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/GettyImages-165995076-1920w.jpg)',
        'good-contractors':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/bg1-1920w.png)',
        'service-pattern': 'linear-gradient(90deg, #005f9c 0, #213977 100%)',
        'dallas-house':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/test3-1920w.png)',
        'choose-bg':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/bg1-1920w.png)',
        'sponsor-1':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/soap-solid-border-640w.png)',
        'sponsor-2':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/toprated-solid-border-640w.png)',
        'sponsor-3':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/elite-solid-border-640w.png)',
        'sponsor-4':
          '  url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/boha-2019-solid-border-640w.png)',
        'sponsor-5':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/1year-solid-border-640w.png)',
        'sponsor-6':
          ' url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/20reviews-solid-border-640w.png)',
        'footer-texture': 'linear-gradient(90deg, #213977 0, #005f9c 100%)',
        // ABOUT PAGE
        'roof-repair':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/bg3-2880w.png)',
        'our-team': 'background: linear-gradient(90deg,#005F9C 0,#213977 100%)',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
