import { IMaskComponent } from 'vue-imask';
import * as transform from './utils/transformInput';
import insertIf from './utils/insertIf';

export default {
  components: {
    'imask-input': IMaskComponent,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    /**
     * Set RegExp that describe what characters are able to be entered in input.
     * For example: `\d` -- one numeric digit
     */
    pattern: {
      type: String,
    },
    /**
     * `HTML` string that will be added after inputted text after `blur`
     * For example: `м<sup>2</sup>`
     */
    postfix: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Format function than formats value after `input`.
     * Available values: `locale`
     */
    format: {
      type: String,
      validator(val) {
        return /(^locale$)/.test(val);
      },
    },
    /**
     * Available values: `'' | 'outlined' | 'registration'`
     */
    theme: {
      type: String,
      default: '',
    },
    /**
     * `Input imask` property see https://imask.js.org/
     */
    mask: [String, RegExp, Number, Function],
    /**
     * `Input imask` property that adds `_` digit at the empty mask position when `false`
     */
    lazy: {
      type: Boolean,
      default: true,
    },
    /**
     * Transform function that transform value after `input` event.
     * Available values: `'uppercase' | 'commaToDot'`
     */
    transform: String,
    /**
     * Small size of input
     */
    small: {
      type: Boolean,
      default: false,
    },
    /**
     * `Vuelidate` meta object.
     */
    meta: Object,
    /**
     * Error string. Used with `meta` property
     */
    error: {
      type: String,
      default: '',
    },
    /**
     * Prompt string.
     */
    prompt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isBlur: true,
      val: '',
    };
  },
  computed: {
    isValid() {
      return !this.disabled && this.meta && !this.meta.$invalid;
    },
    isInvalid() {
      return this.meta && this.meta.$error;
    },
    classes() {
      return [
        'input',
        `input_theme_${this.theme}`,
        ...insertIf(this.small, 'input_size_small'),
        ...insertIf(this.val, 'input_state_active'),
        ...insertIf(!this.isBlur, 'input_state_focused'),
        ...insertIf(this.isValid && this.isBlur, 'input_valid_true'),
        ...insertIf(this.isInvalid, 'input_valid_false'),
        ...insertIf(
          this.isInvalid && this.error.length !== 0,
          'input_state_has-error'
        ),
      ];
    },
    showPostfix() {
      return this.value && this.isBlur;
    },
    autosizeOpts() {
      return {
        comfortZone: 1,
        minWidth: this.postfix ? '10px' : '100%',
        maxWidth: this.postfix
          ? `calc(100% - ${this.postfix.length * 8}px)`
          : '100%',
      };
    },
  },
  methods: {
    formatValue(val) {
      if (!val) {
        return '';
      }
      let replacedValue = val;
      if (this.transform) {
        replacedValue = transform[this.transform](val);
      }
      if (!this.pattern) {
        return replacedValue;
      }
      replacedValue = replacedValue
        .toString()
        .replace(new RegExp(this.pattern, 'g'), '');

      if (replacedValue && this.format === 'locale') {
        const trimmedValue = replacedValue.replace(/\s/g, '');
        replacedValue = parseInt(trimmedValue, 10).toLocaleString('ru');
      }
      return replacedValue;
    },
    updateValue(val) {
      this.val = this.formatValue(val);
      return this.val;
    },
    input(value) {
      this.$emit('input', this.updateValue(value));
    },
    focus(event) {
      this.isBlur = false;
      this.meta.$touch();
      return this.$emit('focus', event);
    },
    blur(event) {
      this.isBlur = true;
      this.$emit('blur', event);
    },
    getTextWidth(val) {
      input;
    },
  },
  watch: {
    value() {
      this.$nextTick(() => {
        this.updateValue(this.value);
        this.val = this.value;
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateValue(this.value);
      this.val = this.value;
    });
  },
};
