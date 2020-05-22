import Button from '@uikit/button';
import { action } from '@storybook/addon-actions';
import './styles.story.scss';

const themes = ['primary', 'secondary', 'ghost'];
const sizes = ['md', 'sm', 'xs', 'xxs'];

const data = () => {
  return { themes, sizes };
};

export const AllButtons = () => ({
  components: { 'base-button': Button },
  data,
  template: `
    <table class="story__table">
      <thead>
      <tr>
        <th></th>
        <th v-for="theme of themes">{{ theme }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="size of sizes">
        <td>{{size}}</td>
        <td v-for="theme of themes">
          <base-button
            @click="action"
            :theme="theme"
            :size="size"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  methods: { action: action('clicked') },
});

export const LoadingButtons = () => ({
  components: { 'base-button': Button },
  data,
  template: `
    <table class="story__table">
      <thead>
      <tr>
        <th></th>
        <th v-for="theme of themes">{{ theme }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="size of sizes">
        <td>{{size}}</td>
        <td v-for="theme of themes">
          <base-button
            @click="action"
            :theme="theme"
            :size="size"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  methods: { action: action('clicked') },
});

export const DisabledButtons = () => ({
  components: { 'base-button': Button },
  data,
  template: `
    <table class="story__table">
      <thead>
      <tr>
        <th></th>
        <th v-for="theme of themes">{{ theme }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="size of sizes">
        <td>{{size}}</td>
        <td v-for="theme of themes">
          <base-button
            @click="action"
            :theme="theme"
            :size="size"
            :disabled="true"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  methods: { action: action('clicked') },
});
