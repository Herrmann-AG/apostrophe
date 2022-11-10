const sanitizeHtml = require('sanitize-html');

module.exports = {
  init(self) {
    self.options.editorTools = {
      ...self.options.editorTools,
      color: {
        component: "ColorPicker",
        label: "Textfarbe ändern",
        icon: "palette-icon",
        command: "setColor",
      },
      font: {
        component: "FontPicker",
        label: "Schriftart ändern",
      }
    };
    self.options.defaultOptions = {
      ...self.options.defaultOptions,
      styles: [
        {
          tag: 'p',
          label: 'Paragraph (P)'
        },
      ],
      toolbar: [
        "font",
        "color",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "bulletList",
        "orderedList",
        "|",
        "alignLeft",
        "alignCenter",
        "alignRight",
        "alignJustify",
        "|",
        "undo",
        "redo",
      ],
      fonts: [
        "Schriftart",
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "Georgia",
        "Helvetica",
        "Impact",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
      ],
    };
  },
  extendMethods(self) {
    return {
      ...self.extendMethods,
      sanitize(_super, req, input, options){
        const sanitized = sanitizeHtml(input.content, {
          allowedTags: [
            "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
            "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
            "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
            "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
            "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
            "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
            "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
          ],
          disallowedTagsMode: 'discard',
          allowedAttributes: {
            '*': ['style'], 
            a: [ 'href', 'name', 'target' ],
            // We don't currently allow img itself by default, but
            // these attributes would make sense if we did.
            img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
          },
          // Lots of these won't come up by default because we don't allow them
          selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
          // URL schemes we permit
          allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'tel' ],
          allowedSchemesByTag: {},
          allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
          allowProtocolRelative: true,
          enforceHtmlBoundary: false
        });

        return {
          ...input,
          content: sanitized
        };
      }
    }
  },
  icons: {
    "palette-icon": "Palette",
  }
};
