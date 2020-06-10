<template lang="pug">
  div(:class='classes')
    Multiselect(
      :value="value"
      :searchable="searchable"
      :multiple="multiple"
      :disabled="disabled"
      :options="options"
      :allow-empty="allowEmpty"
      :small="small"
      :show-no-options="false"
      :clear-on-select="clearOnSelect"
      :preserve-search="preserveSearch"
      :close-on-select="closeOnSelect"
      :put-item-value-on-select="putItemValueOnSelect"
      :search-value="searchValue"
      :maxHeight="250"
      :pattern="pattern"
      :filter-correction="filterCorrection"
      :track-by="trackBy"
      label="text"
      deselect-label=""
      select-label=""
      @input="onChange"
      @close="onBlur"
      v-bind="$attrs"
      v-on="$listeners"
      placeholder=""
    )
      template(#noResult)
        span.
          Не найдено
    .select__label {{ inputLabel }}
    .select__postfix(v-if='postfix', :style='{left: postfixOffset}')
      | {{ pluralPostfix }}
    p.select__error(v-if="isInvalid && error")
      | {{error}}
    p.select__prompt(v-if="prompt && !isInvalid")
      | {{prompt}}
</template>

<script src="./select.js"></script>
<style src="./Multiselect/styles.scss" lang="scss"></style>
<style src="./styles.scss" scoped lang="scss"></style>
