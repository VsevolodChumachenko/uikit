<template lang="pug" functional>
  component(
    :is="props.as"
    :class="['btn', props.theme, props.size, data.staticClass, { block: props.block }]",
    v-on="listeners"
    :disabled="props.disabled || props.loading"
    v-bind="data.attrs"
  )
    spinner(v-if="props.loading" size="sm" type="inline")
    span(:class="{loading: props.loading}")
      slot
</template>

<script>
export default {
  props: {
    /**
     * Color theme of button
     */
    theme: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
    },
    /**
     * HTML tag that will be used as tag of component.
     */
    as: {
      type: String,
      default: 'button',
    },
    /**
     * Add a spinner to the button
     */
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button takes up the entire width of the container
     * and has a `display: block;` style
     */
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style src="./styles.scss" lang="scss"></style>
