module.exports = {
  siteTitle: 'Alan Joseph | IT Graduate',
  siteDescription:
    'I\'m an IT graduate primarily interested in Web Development, Design and History.',
  siteKeywords: 'Alan Joseph, alanjsebas, alan-joseph, IT Graduate, web developer, javascript',
  siteUrl: ' https://al-joseph.netlify.app/',
  siteLanguage: 'en_US',
  email: 'alanjsebas@gmail.com',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/alanjsebas',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_al_1877/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alan-joseph-/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#ffffff',
    navy: '#ffffff',
    darkNavy: '#000000',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
