<template>
    <div class="apos-tiptap-select">
      <select
        :value="active"
        @change="setFontFamily"
        class="apos-tiptap-control apos-tiptap-control--select"
      >
        <option
          v-for="(font, i) in options.fonts"
          :value="i"
          :key="font"
        >
          {{ font }}
        </option>
      </select>
      <chevron-down-icon
        :size="11"
        class="apos-tiptap-select__icon"
        fill-color="currentColor"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FontPicker',
    props: {
      name: {
        type: String,
        required: true
      },
      editor: {
        type: Object,
        required: true,
      },
      tool: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      active() {
        const fonts = this.options.fonts || [];
        for (let i = 0; (i < fonts.length); i++) {
          const font = fonts[i];
          if (this.editor.isActive(font)) {
            return i;
          }
        }
        return 0;
      },
      moduleOptions() {
        return window.apos.modules['@apostrophecms/rich-text-widget'];
      }
    },
    methods: {
      setFontFamily($event) {
        const font = this.options.fonts[$event.target.value];
        this.editor.commands.focus();
        this.editor.commands.setFontFamily(font);
      }
    }
  };
  </script>
  
  <font lang="scss" scoped>
    // If another select el is needed for the rich-text toolbar these fonts should be made global
    .apos-tiptap-control--select {
      @include apos-button-reset();
      @include type-small;
      height: 100%;
      padding: 0 15px 0 10px;
      &:focus, &:active {
        background-color: var(--a-base-9);
        outline: none;
      }
      &:hover {
        background-color: var(--a-base-8);
      }
    }
    .apos-tiptap-select {
      position: relative;
    }
    .apos-tiptap-select ::v-deep .apos-tiptap-select__icon {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      height: 11px;
      pointer-events: none;
    }
  </font>