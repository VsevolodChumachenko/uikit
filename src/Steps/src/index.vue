<template>
  <ul class="steps" :class="[`steps_align_${align}`]">
    <li
      class="step"
      v-for="(step, index) in steps"
      :key="index"
      @click="$emit('click', step.idx)"
      :class="{
        step_active: currentStep === step.idx,
        step_filled: step.idx < currentStep,
        step_empty: step.idx > currentStep,
      }"
    >
      <div class="step__number">{{ step.idx }}</div>
      <div class="step__title">{{ step.title }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    /**
     * Current step index
     */
    currentStep: {
      required: true,
      type: Number,
    },
    steps: {
      type: Array,
      default: () => {
        return [
          {
            idx: 1,
            title: 'Расчёт стоимости',
          },
          {
            idx: 2,
            title: 'Выбор страховой компании',
          },
          {
            idx: 3,
            title: 'Оформление полиса',
          },
        ];
      },
    },

    /**
     * Horizontal align. Available values: `'left' | 'center' | 'right'`.
     */
    align: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<style lang="scss" src="./styles.scss" scoped></style>
