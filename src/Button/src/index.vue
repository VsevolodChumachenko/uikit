<template lang="pug" functional>
  component(
    :is="props.as"
    :class="['btn', props.theme, props.size, data.staticClass, { block: props.block }]",
    v-on="listeners"
    :disabled="props.disabled || props.loading"
    v-bind="data.attrs"
  )
    Spinner(v-if="props.loading" size="sm" type="inline")
    span(:class="{loading: props.loading}")
      slot
</template>

<script>
import Spinner from '@uikit/spinner';

export default {
  components: {
    Spinner,
  },
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
