<template>
  <div :class="{ 'input-group': bootstrapStyling }">
    <!-- Calendar Button -->
    <span
      v-if="calendarButton"
      class="vdp-datepicker__calendar-button"
      :class="{ 'input-group-prepend': bootstrapStyling }"
      @click="showCalendar"
      v-bind:style="{ 'cursor:not-allowed;': disabled }"
    >
      <span :class="{ 'input-group-text': bootstrapStyling }">
        <i :class="calendarButtonIcon">
          {{ calendarButtonIconContent }}
          <span v-if="!calendarButtonIcon">&hellip;</span>
        </i>
      </span>
    </span>
    <!-- Input -->
    <input
      :type="inline ? 'hidden' : 'text'"
      :class="computedInputClass"
      :name="name"
      :ref="refName"
      :id="id"
      :value="formattedValue"
      :open-date="openDate"
      :placeholder="placeholder"
      :clear-button="clearButton"
      :disabled="disabled"
      :required="required"
      :readonly="!typeable"
      @keyup="parseTypedDate"
      @input="parseTypedDate"
      @blur="inputBlurred"
      @focus="inputFocus"
      autocomplete="off"
      maxlength="10"
      mixlength="10"
    />
    <!-- Clear Button -->
    <span
      v-if="clearButton && selectedDate"
      class="vdp-datepicker__clear-button"
      :class="{ 'input-group-append': bootstrapStyling }"
      @click="clearDate()"
    >
      <span :class="{ 'input-group-text': bootstrapStyling }">
        <i :class="clearButtonIcon">
          <span v-if="!clearButtonIcon">&times;</span>
        </i>
      </span>
    </span>
    <slot name="afterDateInput"></slot>
    <slot name="tooltip-label" />
  </div>
</template>
<script>
import { IMaskDirective } from 'vue-imask';
import { makeDateUtils } from '../utils/DateUtils';
export default {
  directives: {
    imask: IMaskDirective,
  },
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean,
    pattern: String,
  },
  data() {
    const constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils,
    };
  },
  computed: {
    formattedValue() {
      if (!this.selectedDate) {
        return null;
      }
      if (this.typedDate) {
        return this.typedDate;
      }
      return typeof this.format === 'function'
        ? this.format(this.selectedDate)
        : this.utils.formatDate(
            new Date(this.selectedDate),
            this.format,
            this.translation
          );
    },

    computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }
        return { 'form-control': true, ...this.inputClass };
      }
      return this.inputClass;
    },
  },
  watch: {
    resetTypedDate() {
      this.typedDate = false;
    },
  },
  methods: {
    showCalendar() {
      this.$emit('showCalendar');
    },
    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if (
        [
          27, // escape
          13, // enter
        ].includes(event.keyCode)
      ) {
        this.input.blur();
      }
      let currentValue = this.input.value.replace(/[^0-9.]/g, '');
      if (currentValue.length < 8) {
        currentValue = currentValue
          .toString()
          .replace(/(\d\d)(?=(\d)+(?!\d))/g, '$1.');
      }

      if (this.pattern) {
        currentValue = currentValue
          .toString()
          .replace(new RegExp(this.pattern, 'g'), '');
      }

      this.input.value = currentValue;
      if (this.typeable && this.input.value.length === 10) {
        const normalizedDate = this.normalizeDate(this.input.value);
        const typedDate = Date.parse(normalizedDate);

        if (!isNaN(typedDate)) {
          if (!this.isDateDisabled(typedDate)) {
            this.typedDate = this.input.value;
            this.$emit('typedDate', new Date(normalizedDate));
          }
          // else, we need default value
        }

        this.$emit('closeCalendar');
      }
    },
    isDateDisabled(date) {
      let disabledDates = this.$parent.disabledDates;
      if (disabledDates) {
        if (
          (disabledDates.from && date > disabledDates.from) ||
          (disabledDates.to && date < disabledDates.to)
        )
          return true;
      }
      return false;
    },
    parseDate(value) {
      const [dd, mm, yyyy] = value.split('.');
      return new Date(`${dd}.${mm}.${yyyy}`);
    },
    normalizeDate(value) {
      const [dd, mm, yyyy] = value.split('.');
      return new Date(`${yyyy}-${mm}-${dd}`);
    },
    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred() {
      const normalizedDate = this.normalizeDate(this.input.value);
      if (this.typeable && isNaN(Date.parse(normalizedDate))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar', true);
      this.$emit('blur');
    },
    inputFocus(event) {
      this.$emit('focus', event);
    },
    /**
     * emit a clearDate event
     */
    clearDate() {
      this.$emit('clearDate');
    },
  },
  mounted() {
    this.input = this.$el.querySelector('input');
  },
};
// eslint-disable-next-line
</script>
