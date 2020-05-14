export default {
  props: {
    theme: { type: String, default: 'primary' },
    as: { type: String, default: 'button' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
  },
};
