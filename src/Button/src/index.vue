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
export default {
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
    },
    as: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style src="./styles.scss" lang="scss"></style>
