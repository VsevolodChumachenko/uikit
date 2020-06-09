import { contains, __ } from 'lodash/fp';

export default {
  functional: true,
  props: {
    /**
     * Set tag name, that will be display in `DOM`
     */
    tagName: {
      type: String,
      default: 'div',
    },
    /**
     * Set style preset for component typography
     *
     * Available values:
     * `h1` | `h2` | `h2-n` | `h3` | `h4` | `h5` | `text` | `caption` | `subtitle`
     */
    type: {
      type: String,
      validator: contains(__, [
        'h1',
        'h2',
        'h2-n',
        'h3',
        'h4',
        'h5',
        'text',
        'caption',
        'subtitle',
      ]),
      default: 'text',
    },
    /**
     * Add `text-align` to component
     *
     * Available values:
     * `inherit` | `left` | `right` | `center` | `justify`
     */
    align: {
      type: String,
      validator: contains(__, [
        'inherit',
        'left',
        'center',
        'right',
        'justify',
      ]),
      default: 'inherit',
    },
  },
};
