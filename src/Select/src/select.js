import Multiselect from './Multiselect';
import insertIf from '../../../utils/insertIf';
import plural from '../../../utils/plural';

export default {
  inheritAttrs: false,
  components: {
    Multiselect,
  },
  props: {
    // type: {
    //   type: String,
    //   default: 'text',
    // },
    inputLabel: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    /**
     * Options structure: `[{ text: string, value: any }]`
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * `Vuelidate` meta object
     */
    meta: Object,
    /**
     *`Vue-Multiselect` searchable property, that switch ability to search
     *
     * https://vue-multiselect.js.org/#sub-select-with-search
     */
    searchable: {
      type: Boolean,
      default: false,
    },
    /**
     * `Vue-Multiselect` property for multi selecting
     */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * Set this if your track value different from `value`
     */
    trackBy: {
      type: String,
      default: 'value',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value postfix that will be added after selecting. It's used only for UI and isn't added to data.
     */
    postfix: String,
    /**
     * Input pattern attribute
     */
    pattern: String,
    /**
     * Used for correction search query by calling additional search with replaced value.
     *
     * Structure: `[]: {key: string | regexp, value: string }`
     *
     * **Example:**
     * Correction country search
     * `[{key: 'Тай', value: 'Таи'}]`
     */
    filterCorrection: Array,
    /**
     * Available values: ` '' | 'outlined' | 'registration' `
     */
    theme: {
      type: String,
      default: '',
    },
    /**
     * Small size of select
     */
    small: {
      type: Boolean,
      default: false,
    },
    /**
     * `Vue-Multiselect` property for clearing the search query after select
     */
    clearOnSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * `Vue-Multiselect` property for closing the select list after select
     */
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * `Vue-Multiselect` property for saving search query after select
     */
    preserveSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * Set the `searchValue` property to search query after select.
     * Useful when you want to continue searching.
     */
    putItemValueOnSelect: {
      type: Boolean,
      default: false,
    },
    /**
     * Value that must be put in to search on select
     * Worked only with `putItemValueOnSelect === true`
     */
    searchValue: {
      type: String,
      default: '',
    },
    /**
     * Error message
     */
    error: String,
    /**
     * Prompt message
     */
    prompt: String,
    /**
     * `Vue-Multiselect` property that allows select value be empty
     */
    allowEmpty: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return [
        'select',
        ...insertIf(this.theme, `select_theme_${this.theme}`),
        ...insertIf(this.small, `select_size_small`),
        ...insertIf(this.value, 'select_filled'),
        ...insertIf(this.disabled, 'select_disabled'),
        ...insertIf(!this.disabled && this.isInvalid, 'select_valid_false'),
        ...insertIf(
          this.isInvalid && this.error.length !== 0,
          'select_has-error'
        ),
      ];
    },
    pluralPostfix() {
      if (!this.value || this.multiple) return null;
      return plural(this.value.value, ...this.postfix.split('|'));
    },
    isInvalid() {
      return this.meta && this.meta.$error;
    },
    isValid() {
      return this.meta && !this.meta.$invalid;
    },
    postfixOffset() {
      if (!this.value || !this.value.text || !this.postfix) return '0';

      return `${this.value.text.toString().length * 10 + 20}px`;
    },
  },
  methods: {
    onChange(val) {
      this.$emit('input', val);
    },
    onBlur(value, filtered, id, searching, prevent) {
      this.$emit('close');
      this.meta.$touch();
      if (!this.searchable || (this.value && !searching) || prevent) {
        return;
      } else if (!this.value && !searching) {
        this.$emit('input', null);
        return;
      }
      this.$emit('input', filtered);
    },
  },
};
