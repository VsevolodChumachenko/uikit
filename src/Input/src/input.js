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
    pattern: String,
    postfix: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    format: String,
    theme: {
      type: String,
      default: 'primary',
    },
    mask: [String, RegExp],
    lazy: {
      type: Boolean,
      default: true,
    },
    transform: String,
    small: Boolean,
    meta: Object,
    error: {
      type: String,
      default: '',
    },
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
        this.theme,
        ...insertIf(this.small, 'small'),
        ...insertIf(this.val, 'filled'),
        ...insertIf(!this.isBlur, 'isFocus'),
        ...insertIf(this.value, 'isActive'),
        ...insertIf(this.isValid && this.isBlur, 'isValid'),
        ...insertIf(this.isInvalid, 'isInvalid'),
        ...insertIf(this.isInvalid && this.error.length !== 0, 'has-error'),
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
