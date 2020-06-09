import { required } from 'vuelidate/lib/validators';
import { select, boolean, text } from '@storybook/addon-knobs';
import SingleDatepicker from '@strahovkaru/single-datepicker';

const defaultData = {
  validations: {
    value: {
      required,
    },
  },
  components: {
    SingleDatepicker,
  },
  data() {
    return {
      value: new Date(),
      themes: ['default', 'outlined', 'registration'],
    };
  },
};

export const DefaultStory = () => ({
  extends: defaultData,
  template: `
    <div>
      <h3 style="margin-bottom: 10px">Default</h3>
      <single-datepicker
        style="min-width: 200px"
        v-model="$v.value.$model"
        :meta="$v.value"
        label="Дата"
        error="Поле обязательно для заполнения"
        prompt="Что-то введите"
      />
    </div>
  `,
});

export const OutlinedStory = () => ({
  extends: defaultData,
  template: `
    <div>
      <h3 style="margin-bottom: 10px">Outlined</h3>
      <single-datepicker
        v-model="$v.value.$model"
        :meta="$v.value"
        label="Дата"
        error="Поле обязательно для заполнения"
        prompt="Что-то введите"
        theme="outlined"
      />
    </div>
  `,
});

export const RegistrationStory = () => ({
  extends: defaultData,
  template: `
    <div>
      <h3 style="margin-bottom: 10px">Registration</h3>
      <single-datepicker
        style="min-width: 200px"
        v-model="$v.value.$model"
        :meta="$v.value"
        label="Дата"
        error="Поле обязательно для заполнения"
        prompt="Что-то введите"
        theme="registration"
      />
    </div>
  `,
});

export const DisabledStory = () => ({
  extends: defaultData,
  template: `
    <form class="form">
      <div class="row">
        <div class="col col-xl-4" v-for="theme of themes">
          <h3 style="margin-bottom: 10px">{{theme}}</h3>
          <single-datepicker
            style="min-width: 200px"
            v-model="$v.value.$model"
            :meta="$v.value"
            :disabled="true"
            :theme="theme"
            label="Дата"
            error="Поле обязательно для заполнения"
            prompt="Что-то введите"
          />
        </div>
      </div>
    </form>
  `,
});

export const InvalidStory = () => ({
  extends: defaultData,
  template: `
    <form class="form">
      <div class="row">
        <div class="col col-xl-4" v-for="theme of themes">
          <h3 style="margin-bottom: 10px">{{theme}}</h3>
          <single-datepicker
            style="min-width: 200px"
            v-model="value"
            :meta="{$error: true, $touch() {}}"
            :theme="theme"
            label="Дата"
            error="Поле обязательно для заполнения"
            prompt="Что-то введите"
          />
        </div>
      </div>
    </form>
  `,
});
