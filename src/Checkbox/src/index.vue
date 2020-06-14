<template lang="pug">
  .checkbox-root(@click.stop="")
    label.checkbox(:class="classes")
      input(
        :checked='value'
        :disabled="disabled"
        @change="$emit('input', $event.target.checked)"
        type='checkbox'
        v-bind="$attrs"
      )
      span.checkbox__check
      slot
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      default: 'white',
    },
    /**
     * Big size of check box
     */
    big: {
      type: Boolean,
      default: false,
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
  },
  computed: {
    classes() {
      return [
        `checkbox_theme_${this.theme}`,
        {
          checkbox_disabled: this.disabled,
          checkbox_valid_false: this.invalid,
          checkbox_size_big: this.big,
        },
      ];
    },
    invalid() {
      return this.meta && this.meta.$error;
    },
  },
};
</script>
<style lang="scss" scoped src="./styles.scss"></style>
