<template lang="pug">
  .input(:class="classes")
    label.input__inner
      imask-input.input__field(
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
      | &nbsp;
      span.input__postfix(v-if='postfix && showPostfix' v-html="postfix")
      .input__label(v-html="label")
    p.input__error(v-if="isInvalid && error.length !== 0")
      | {{error}}
    p.input__prompt(v-else)
      | {{prompt}}
</template>

<script src="./input.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>
