import { requiredIf } from 'vuelidate/lib/validators';
import { select, boolean, text } from '@storybook/addon-knobs';
import Input from '@uikit/input';

export const InteractiveStory = () => ({
  validations: {
    value: {
      required: requiredIf(function () {
        return this.isRequired;
      }),
    },
  },
  components: {
    'base-input': Input,
  },
  props: {
    label: {
      default: text('Label', 'Город'),
    },
    isRequired: {
      default: boolean('Required', true),
    },
    error: {
      default: text('Error', 'Поле обязательно для заполнения'),
    },
    prompt: {
      default: text('Prompt', 'Подсказываю тебе заполнить это поле'),
    },
    postfix: {
      default: text('Postfix', 'м'),
    },
    mask: {
      default: text('Mask', ''),
    },
    pattern: {
      default: text('Pattern', ''),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    format: {
      default: select('Format', ['', 'locale'], 'locale'),
    },
    theme: {
      default: select('Theme', ['primary', 'registration'], 'primary'),
    },
    lazy: {
      default: boolean('Lazy', false),
    },
    transform: {
      default: select('Transform', ['', 'uppercase', 'commaToDot'], ''),
    },
    small: {
      default: boolean('Small', false),
    },
  },
  data() {
    return {
      value: '',
    };
  },
  template: `
    <div class="container">
      <base-input
        v-model="$v.value.$model"
        :meta="$v.value"
        :label="label"
        :error="error"
        :prompt="prompt"
        :postfix="postfix"
        :mask="mask"
        :pattern="pattern"
        :disabled="disabled"
        :format="format"
        :theme="theme"
        :lazy="lazy"
        :transform="transform"
        :small="small"
      />
    </div>
  `,
});
