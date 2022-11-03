module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Tinymce',
  },
  fields: {
    add: {
      html: {
        type: 'string',
      }
    }
  },
  webpack: {
    extensions: {
      utilsAlias: {
        resolve: {
          alias: {
            'tinymce': './node_modules/tinymce/'
          }
        }
      }
    }
  }
};