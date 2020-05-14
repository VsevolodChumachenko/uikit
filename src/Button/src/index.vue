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

<script src="./button.js" lang="ts"></script>
<style src="./styles.scss" lang="scss"></style>
