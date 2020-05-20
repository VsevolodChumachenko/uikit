import Button from '@uikit/button';
import { action } from '@storybook/addon-actions';
import './styles.story.scss';

export const AllButtons = () => ({
  components: { 'base-button': Button },
  template: `
    <table class="story__table">
      <thead>
      <tr>
        <th></th>
        <th>Primary</th>
        <th>Secondary</th>
        <th>Ghost</th>
        <th>Registration</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>md</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="md"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="md"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="md"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="md"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>sm</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="sm"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="sm"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="sm"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="sm"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>xs</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="xs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="xs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="xs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="xs"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>xxs</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="xxs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="xxs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="xxs"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="xxs"
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
  template: `
    <table class="story__table">
      <thead>
      <tr>
        <th></th>
        <th>Primary</th>
        <th>Secondary</th>
        <th>Ghost</th>
        <th>Registration</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>md</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="md"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="md"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="md"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="md"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>sm</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="sm"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="sm"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="sm"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="sm"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>xs</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="xs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="xs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="xs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="xs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
      </tr>
      <tr>
        <td>xxs</td>
        <td>
          <base-button
            @click="action"
            theme="primary"
            size="xxs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="secondary"
            size="xxs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="ghost"
            size="xxs"
            :loading="true"
          >
            Hello Button
          </base-button>
        </td>
        <td>
          <base-button
            @click="action"
            theme="registration"
            size="xxs"
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
