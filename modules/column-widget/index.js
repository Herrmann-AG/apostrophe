module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Spalten",
    icon: "view-column-icon",
  },
  fields: {
    add: {
      colNumber: {
        type: "integer",
        label: "Anzahl der Spalten",
        min: 1,
        max: 4,
      },
      col1: {
        type: "area",
        label: "Spalte 1",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
        if: {
          $or: [
            { colNumber: 1 },
            { colNumber: 2 },
            { colNumber: 3 },
            { colNumber: 4 },
          ],
        },
      },
      col2: {
        type: "area",
        label: "Spalte 2",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
        if: {
          $or: [
            { colNumber: 2 },
            { colNumber: 3 },
            { colNumber: 4 },
          ],
        },
      },
      col3: {
        type: "area",
        label: "Spalte 3",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
        if: {
          $or: [
            { colNumber: 3 },
            { colNumber: 4 },
          ],
        },
      },
      col4: {
        type: "area",
        label: "Spalte 4",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
        if: {
          colNumber: 4
        },
      },
    },
  },
};
