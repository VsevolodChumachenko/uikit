<template lang="pug">
  div(:class='styles')
    Datepicker(
      :disabled="disabled"
      :typeable="true"
      :color="color"
      :highlighted="{dates: [new Date()], includeDisabled: true}"
      :full-month-name="true"
      :format="dateFormat"
      :value="value"
      :pattern="pattern"
      @focus="focus"
      @blur="blur"
      @input="input"
      v-bind="$attrs"
      v-on="$listeners"
    )
      span(:class="['single-datepicker__label', value && 'single-datepicker__label_active']", slot="afterDateInput")
        | {{ label }}
      v-popover.single-datepicker__hint(v-if="tooltip && !value" slot="tooltip-label")
        Icon(name="question" width="5" height="10" class="tooltip-target b3")
        template(slot="popover")
          slot(name="tooltip")
    p.single-datepicker__error(v-if="error.length !== 0 && isInvalid")
      | {{ error }}
</template>

<script src="./datepicker.js"></script>
<style src="./styles.scss" lang="scss"></style>
