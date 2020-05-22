<template lang="pug">
  .input(:class="classes")
    label.inner(:class="theme")
      imask-input.field(
        v-autowidth="autosizeOpts"
        @focus="focus"
        @blur="blur"
        @input="input"
        v-model="val"
        :disabled="disabled"
        :lazy="lazy && isBlur"
        :mask="mask"
        v-bind="$attrs"
        tabindex="0"
      )
      span.postfix(v-if='postfix && showPostfix' v-html="'&nbsp;' + postfix")
      .label(v-html="label")
    p.error(v-if="isInvalid && error.length !== 0")
      | {{error}}
    p.prompt(v-if="error.length === 0")
      | {{prompt}}
</template>

<script src="./input.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>
