module.exports = {
    extend: '@apostrophecms/page-type',
    fields: {
        add: {
            subtitle: {
                type: 'string',
            },
            main: {
                type: 'area',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {
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
                        },
                        '@apostrophecms/image': {},
                        'column': {},
                    }
                }
            }
        },
        group: {
            basics: {
                fields: ['title', 'subtitle', 'main']
            }
        }
    }
};