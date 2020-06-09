<template lang="pug">
  .radio-group(:class="[`radio-group_size_${size}`,{'radio-group_disabled': disabled}]")
    .radio-group__label.radio-group__label_left
      slot(name="left-label")
    label.radio(
      :key="id"
      v-for="{label, id} in options"
      :class="{radio_active: value === id.toString(), radio_valid_false: invalid}"
    )
      input(
        type="radio"
        :name="name"
        :value="id"
        :checked="value === id.toString()"
        @change="$emit('input', $event.target.value)"
        :disabled="disabled"
      )
      span {{ label }}
    .radio-group__label.radio-group__label_right
      slot(name="right-label")
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    /**
     * template: `{id: '0', label: 'Label'}`
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * input radio name
     */
    name: {
      type: String,
      default: '',
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
    /**
     * Available values: `'md' | 'lg'`
     */
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    invalid() {
      return this.meta && this.meta.$error;
    },
  },
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>
