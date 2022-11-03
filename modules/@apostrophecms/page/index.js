// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Standard'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Startseite'
      },
      {
        name: 'gallery-page',
        label: 'Galerie'
      }
    ]
  }
};
