export default () => {
    apos.util.widgetPlayers.tinymce = {
        selector: '[data-tinymce-widget]',
        player: (el) => {
            tinymce.init({
                selector: `textarea#tinymce${el.dataset._id}`,
                toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | emoticons link fullscreen searchreplace',
                menubar: 'edit',
                plugins: 'autoresize emoticons link fullscreen searchreplace'
            });
        }
    };
}