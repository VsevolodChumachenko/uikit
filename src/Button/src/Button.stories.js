import Button from './index.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const MyButton = () => ({
  components: { 'my-button': Button },
  template:
    '<my-button @click="action" theme="primary">Hello Button</my-button>',
  methods: { action: action('clicked') },
});
