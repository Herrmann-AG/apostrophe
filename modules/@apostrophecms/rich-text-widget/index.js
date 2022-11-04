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
    };
  },
  options: {
    defaultOptions: {
      toolbar: [
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
      styles: [
        {
          tag: "p",
          label: "Paragraph (P)",
        },
        {
          tag: "h3",
          label: "Überschrift 3 (H3)",
        },
        {
          tag: "h4",
          label: "Überschrift 4 (H4)",
        },
      ],
    },
  },
  icons: {
    "palette-icon": "Palette",
  },
};
