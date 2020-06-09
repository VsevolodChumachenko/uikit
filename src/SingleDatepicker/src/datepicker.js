import Datepicker from './components/Datepicker';
import insertIf from './utils/insertIf';

export default {
  inheritAttrs: false,
  components: {
    Datepicker,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * `Vuelidate` meta object https://vuelidate.js.org/
     */
    meta: {
      type: Object,
      default: () => ({}),
    },
    theme: {
      type: String,
      default: 'default',
    },
    pattern: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    tooltip: {
      type: Boolean,
      default: false,
    },
    dateFormat: {
      type: String,
      default: 'dd.MM.yyyy',
    },
  },
  data() {
    return {
      elOffsetWidth: 0,
      isBlur: true,
    };
  },
  computed: {
    styles() {
      return [
        'single-datepicker',
        `single-datepicker_theme_${this.theme}`,
        ...insertIf(this.isSmall, 'single-datepicker_size_sm'),
        ...insertIf(!this.isBlur, 'single-datepicker_focused'),
        ...insertIf(this.disabled, 'single-datepicker_disabled'),
        ...insertIf(this.value, 'single-datepicker_active'),
        ...insertIf(
          this.isValid && this.isBlur,
          'single-datepicker_valid_true'
        ),
        ...insertIf(this.isInvalid, 'single-datepicker_valid_false'),
        ...insertIf(
          this.isInvalid && this.error,
          'single-datepicker_valid_has-error'
        ),
      ];
    },
    isValid() {
      return !this.disabled && this.meta && !this.meta.$invalid;
    },
    isInvalid() {
      return this.meta && this.meta.$error;
    },
    isSmall() {
      if (this.elOffsetWidth === 0) return;
      return this.elOffsetWidth < 300;
    },
  },
  methods: {
    setElementOffsetWidth() {
      this.elOffsetWidth = this.$el.offsetWidth;
    },
    input(date) {
      this.$emit('input', date);
    },
    focus(event) {
      this.isBlur = false;
      this.meta.$touch();
      this.$emit('focus', event);
    },
    blur(event) {
      this.isBlur = true;
      this.$emit('blur', event);
    },
  },
  mounted() {
    this.setElementOffsetWidth();

    this.$nextTick(() => {
      window.addEventListener('resize', this.setElementOffsetWidth);
    });
  },
};
