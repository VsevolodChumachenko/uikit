<template lang="pug" functional>
  component(:is="props.tagName" :class="['typography', props.type, data.staticClass, props.align]")
    slot
</template>

<script src="./typography.js"></script>
<style lang="scss" src="./styles.scss"></style>
