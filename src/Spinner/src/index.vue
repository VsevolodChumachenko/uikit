<template lang="pug" functional>
  .spinner(:class="[{ inline: props.inline }, props.size || 'md']")
</template>

<script>
export default {
  props: {
    /**
     * Place spinner in its order. Switch off `absolute` position
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * Available size: `md`, `sm`
     */
    size: {
      type: String,
      default: 'md',
    },
  },
};
</script>

<style src="./styles.scss" lang="scss"></style>
