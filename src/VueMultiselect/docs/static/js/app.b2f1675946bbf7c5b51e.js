webpackJsonp(
  [1],
  [
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(134);
      }
      var i = n(56),
        o = n(157),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      t.a = {
        props: ['langs', 'current'],
        methods: {
          select: function (e) {
            this.$emit('select', e);
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            badges: [
              {
                img:
                  'https://camo.githubusercontent.com/d0e25b09a82bc4bfde9f1e048a092752eebbb4f3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e7376673f7374796c653d666c6174',
                name: 'License',
              },
              {
                img:
                  'https://img.shields.io/github/stars/shentao/vue-multiselect.svg?label=Stars',
                name: 'GitHub Stars',
              },
              {
                img:
                  'https://camo.githubusercontent.com/64f9a2333bb303d34b1587e1436b24dee6a8e134/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652d6d756c746973656c6563742e737667',
                name: 'Npm Monthly Downloads',
              },
              {
                img:
                  'https://camo.githubusercontent.com/47ff0923e959e736113988e900268dfc7a601d3b/68747470733a2f2f636972636c6563692e636f6d2f67682f6d6f6e74657261696c2f7675652d6d756c746973656c6563742f747265652f6d61737465722e7376673f7374796c653d736869656c6426636972636c652d746f6b656e3d35633933316666323866643132353837363130663833353437326265636464353134643039636566',
                name: 'Full Test Coverage',
              },
              {
                img:
                  'https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat',
                name: 'NO Dependencies',
              },
            ],
            value: [],
          };
        },
        methods: {
          onTagging: function (e) {
            this.source.push({ name: e, language: e }),
              this.value.push({ name: e, language: e });
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return { actions: ['alert', 'console.log', 'scrollTop'] };
        },
        methods: {
          dispatchAction: function (e) {
            switch (e) {
              case 'alert':
                window.alert('You just dispatched "alert" action!');
                break;
              case 'console.log':
                console.log('You just dispatched "console.log" action!');
                break;
              case 'scrollTop':
                window.scrollTo(0, 0);
            }
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3),
        i = n(94);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return { selectedCountries: [], countries: [], isLoading: !1 };
        },
        methods: {
          limitText: function (e) {
            return 'and '.concat(e, ' other countries');
          },
          asyncFind: function (e) {
            var t = this;
            (this.isLoading = !0),
              n
                .i(i.a)(e)
                .then(function (e) {
                  (t.countries = e), (t.isLoading = !1);
                });
          },
          clearAll: function () {
            this.selectedCountries = [];
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(79),
        i = (n.n(a), n(3));
      t.a = {
        components: { Multiselect: i.a },
        data: function () {
          return {
            isDisabled: !1,
            isTouched: !1,
            value: [],
            options: [
              'Select option',
              'Disable me!',
              'Reset me!',
              'mulitple',
              'label',
              'searchable',
            ],
          };
        },
        computed: {
          isInvalid: function () {
            return this.isTouched && 0 === this.value.length;
          },
        },
        methods: {
          onChange: function (e) {
            (this.value = e),
              -1 !== e.indexOf('Reset me!') && (this.value = []);
          },
          onSelect: function (e) {
            'Disable me!' === e && (this.isDisabled = !0);
          },
          onTouch: function () {
            this.isTouched = !0;
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            value: {
              title: 'Explorer',
              desc: 'Discovering new species!',
              img: 'static/posters/creatures.png',
            },
            options: [
              {
                title: 'Space Pirate',
                desc: 'More space battles!',
                img: 'static/posters/fleet.png',
              },
              {
                title: 'Merchant',
                desc: 'PROFIT!',
                img: 'static/posters/trading_post.png',
              },
              {
                title: 'Explorer',
                desc: 'Discovering new species!',
                img: 'static/posters/creatures.png',
              },
              {
                title: 'Miner',
                desc: 'We need to go deeper!',
                img: 'static/posters/resource_lab.png',
              },
            ],
          };
        },
        methods: {
          customLabel: function (e) {
            var t = e.title,
              n = e.desc;
            return ''.concat(t, ' – ').concat(n);
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            options: [
              {
                language: 'Javascript',
                libs: [
                  { name: 'Vue.js', category: 'Front-end' },
                  { name: 'Adonis', category: 'Backend' },
                ],
              },
              {
                language: 'Ruby',
                libs: [
                  { name: 'Rails', category: 'Backend' },
                  { name: 'Sinatra', category: 'Backend' },
                ],
              },
              {
                language: 'Other',
                libs: [
                  { name: 'Laravel', category: 'Backend' },
                  { name: 'Phoenix', category: 'Backend' },
                ],
              },
            ],
            value: [],
          };
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            value: [],
            options: [
              { name: 'Vue.js', language: 'JavaScript' },
              { name: 'Adonis', language: 'JavaScript' },
              { name: 'Rails', language: 'Ruby' },
              { name: 'Sinatra', language: 'Ruby' },
              { name: 'Laravel', language: 'PHP' },
              { name: 'Phoenix', language: 'Elixir' },
            ],
          };
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            value: null,
            options: [
              { name: 'Vue.js', language: 'JavaScript' },
              { name: 'Rails', language: 'Ruby' },
              { name: 'Sinatra', language: 'Ruby' },
              { name: 'Laravel', language: 'PHP', $isDisabled: !0 },
              { name: 'Phoenix', language: 'Elixir' },
            ],
          };
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            value: '',
            options: [
              'Select option',
              'options',
              'selected',
              'mulitple',
              'label',
              'searchable',
              'clearOnSelect',
              'hideSelected',
              'maxHeight',
              'allowEmpty',
              'showLabels',
              'onChange',
              'touched',
            ],
          };
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(80),
        i = (n.n(a), n(3));
      t.a = {
        components: { Multiselect: i.a },
        data: function () {
          return {
            value: { name: 'Vue.js', language: 'JavaScript' },
            options: [
              { name: 'Vue.js', language: 'JavaScript' },
              { name: 'Rails', language: 'Ruby' },
              { name: 'Sinatra', language: 'Ruby' },
              { name: 'Laravel', language: 'PHP' },
              { name: 'Phoenix', language: 'Elixir' },
            ],
          };
        },
        methods: {
          nameWithLang: function (e) {
            var t = e.name,
              n = e.language;
            return ''.concat(t, ' — [').concat(n, ']');
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(3);
      t.a = {
        components: { Multiselect: a.a },
        data: function () {
          return {
            value: [{ name: 'Javascript', code: 'js' }],
            options: [
              { name: 'Vue.js', code: 'vu' },
              { name: 'Javascript', code: 'js' },
              { name: 'Open Source', code: 'os' },
            ],
          };
        },
        methods: {
          addTag: function (e) {
            var t = {
              name: e,
              code: e.substring(0, 2) + Math.floor(1e7 * Math.random()),
            };
            this.options.push(t), this.value.push(t);
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(38),
        i = n(41),
        o = n.n(i),
        s = n(172),
        l = n(3),
        r = s.a.mapActions,
        c = s.a.mapState;
      o.a.use(s.a);
      var u = new s.a.Store({
        state: {
          value: 'Vuex',
          options: [
            'Vuex',
            'Vue',
            'Vuelidate',
            'Vue-Multiselect',
            'Vue-Router',
          ],
        },
        mutations: {
          updateValue: function (e, t) {
            e.value = t;
          },
        },
        actions: {
          updateValueAction: function (e, t) {
            (0, e.commit)('updateValue', t);
          },
        },
      });
      t.a = {
        store: u,
        components: { Multiselect: l.a },
        computed: n.i(a.a)({}, c(['value', 'options'])),
        methods: n.i(a.a)({}, r(['updateValueAction'])),
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(37),
        i = (n.n(a), n(95)),
        o = n(96);
      t.a = {
        name: 'vue-multiselect',
        mixins: [i.a, o.a],
        props: {
          name: { type: String, default: '' },
          selectLabel: { type: String, default: 'Press enter to select' },
          selectGroupLabel: {
            type: String,
            default: 'Press enter to select group',
          },
          selectedLabel: { type: String, default: 'Selected' },
          deselectLabel: { type: String, default: 'Press enter to remove' },
          deselectGroupLabel: {
            type: String,
            default: 'Press enter to deselect group',
          },
          showLabels: { type: Boolean, default: !0 },
          limit: { type: Number, default: 99999 },
          maxHeight: { type: Number, default: 300 },
          limitText: {
            type: Function,
            default: function (e) {
              return 'and '.concat(e, ' more');
            },
          },
          loading: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          openDirection: { type: String, default: '' },
          showNoOptions: { type: Boolean, default: !0 },
          showNoResults: { type: Boolean, default: !0 },
          tabindex: { type: Number, default: 0 },
        },
        computed: {
          isSingleLabelVisible: function () {
            return (
              (this.singleValue || 0 === this.singleValue) &&
              (!this.isOpen || !this.searchable) &&
              !this.visibleValues.length
            );
          },
          isPlaceholderVisible: function () {
            return !(
              this.internalValue.length ||
              (this.searchable && this.isOpen)
            );
          },
          visibleValues: function () {
            return this.multiple ? this.internalValue.slice(0, this.limit) : [];
          },
          singleValue: function () {
            return this.internalValue[0];
          },
          deselectLabelText: function () {
            return this.showLabels ? this.deselectLabel : '';
          },
          deselectGroupLabelText: function () {
            return this.showLabels ? this.deselectGroupLabel : '';
          },
          selectLabelText: function () {
            return this.showLabels ? this.selectLabel : '';
          },
          selectGroupLabelText: function () {
            return this.showLabels ? this.selectGroupLabel : '';
          },
          selectedLabelText: function () {
            return this.showLabels ? this.selectedLabel : '';
          },
          inputStyle: function () {
            if (
              this.searchable ||
              (this.multiple && this.value && this.value.length)
            )
              return this.isOpen
                ? { width: '100%' }
                : { width: '0', position: 'absolute', padding: '0' };
          },
          contentStyle: function () {
            return this.options.length
              ? { display: 'inline-block' }
              : { display: 'block' };
          },
          isAbove: function () {
            return (
              'above' === this.openDirection ||
              'top' === this.openDirection ||
              ('below' !== this.openDirection &&
                'bottom' !== this.openDirection &&
                'above' === this.preferredOpenDirection)
            );
          },
          showSearchInput: function () {
            return (
              this.searchable &&
              (!this.hasSingleSelectedSlot ||
                (!this.visibleSingleValue && 0 !== this.visibleSingleValue) ||
                this.isOpen)
            );
          },
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(153),
        i = n(152),
        o = n(154),
        s = n(151),
        l = n(147),
        r = n(155),
        c = n(149),
        u = n(156),
        d = n(148),
        p = n(150),
        m = n(146);
      n.d(t, 'SingleSelectPrimitive', function () {
        return a.a;
      }),
        n.d(t, 'SingleSelectObject', function () {
          return i.a;
        }),
        n.d(t, 'SingleSelectSearch', function () {
          return o.a;
        }),
        n.d(t, 'MultiSelect', function () {
          return s.a;
        }),
        n.d(t, 'AjaxSearch', function () {
          return l.a;
        }),
        n.d(t, 'Tagging', function () {
          return r.a;
        }),
        n.d(t, 'CustomOption', function () {
          return c.a;
        }),
        n.d(t, 'VuexActions', function () {
          return u.a;
        }),
        n.d(t, 'CustomConfig', function () {
          return d.a;
        }),
        n.d(t, 'Groups', function () {
          return p.a;
        }),
        n.d(t, 'ActionDispatcher', function () {
          return m.a;
        });
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t, n) {
      'use strict';
      var a = n(43),
        i = n(167),
        o = n(2),
        s = o(a.a, i.a, !1, null, null, null);
      t.a = s.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(139);
      }
      var i = n(44),
        o = n(162),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t) {
      e.exports = [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'American Samoa', code: 'AS' },
        { name: 'AndorrA', code: 'AD' },
        { name: 'Angola', code: 'AO' },
        { name: 'Anguilla', code: 'AI' },
        { name: 'Antarctica', code: 'AQ' },
        { name: 'Antigua and Barbuda', code: 'AG' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Armenia', code: 'AM' },
        { name: 'Aruba', code: 'AW' },
        { name: 'Australia', code: 'AU' },
        { name: 'Austria', code: 'AT' },
        { name: 'Azerbaijan', code: 'AZ' },
        { name: 'Bahamas', code: 'BS' },
        { name: 'Bahrain', code: 'BH' },
        { name: 'Bangladesh', code: 'BD' },
        { name: 'Barbados', code: 'BB' },
        { name: 'Belarus', code: 'BY' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Belize', code: 'BZ' },
        { name: 'Benin', code: 'BJ' },
        { name: 'Bermuda', code: 'BM' },
        { name: 'Bhutan', code: 'BT' },
        { name: 'Bolivia', code: 'BO' },
        { name: 'Bosnia and Herzegovina', code: 'BA' },
        { name: 'Botswana', code: 'BW' },
        { name: 'Bouvet Island', code: 'BV' },
        { name: 'Brazil', code: 'BR' },
        { name: 'British Indian Ocean Territory', code: 'IO' },
        { name: 'Brunei Darussalam', code: 'BN' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Burkina Faso', code: 'BF' },
        { name: 'Burundi', code: 'BI' },
        { name: 'Cambodia', code: 'KH' },
        { name: 'Cameroon', code: 'CM' },
        { name: 'Canada', code: 'CA' },
        { name: 'Cape Verde', code: 'CV' },
        { name: 'Cayman Islands', code: 'KY' },
        { name: 'Central African Republic', code: 'CF' },
        { name: 'Chad', code: 'TD' },
        { name: 'Chile', code: 'CL' },
        { name: 'China', code: 'CN' },
        { name: 'Christmas Island', code: 'CX' },
        { name: 'Cocos (Keeling) Islands', code: 'CC' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Comoros', code: 'KM' },
        { name: 'Congo', code: 'CG' },
        { name: 'Congo, The Democratic Republic of the', code: 'CD' },
        { name: 'Cook Islands', code: 'CK' },
        { name: 'Costa Rica', code: 'CR' },
        { name: 'Cote D"Ivoire', code: 'CI' },
        { name: 'Croatia', code: 'HR' },
        { name: 'Cuba', code: 'CU' },
        { name: 'Cyprus', code: 'CY' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Djibouti', code: 'DJ' },
        { name: 'Dominica', code: 'DM' },
        { name: 'Dominican Republic', code: 'DO' },
        { name: 'Ecuador', code: 'EC' },
        { name: 'Egypt', code: 'EG' },
        { name: 'El Salvador', code: 'SV' },
        { name: 'Equatorial Guinea', code: 'GQ' },
        { name: 'Eritrea', code: 'ER' },
        { name: 'Estonia', code: 'EE' },
        { name: 'Ethiopia', code: 'ET' },
        { name: 'Falkland Islands (Malvinas)', code: 'FK' },
        { name: 'Faroe Islands', code: 'FO' },
        { name: 'Fiji', code: 'FJ' },
        { name: 'Finland', code: 'FI' },
        { name: 'France', code: 'FR' },
        { name: 'French Guiana', code: 'GF' },
        { name: 'French Polynesia', code: 'PF' },
        { name: 'French Southern Territories', code: 'TF' },
        { name: 'Gabon', code: 'GA' },
        { name: 'Gambia', code: 'GM' },
        { name: 'Georgia', code: 'GE' },
        { name: 'Germany', code: 'DE' },
        { name: 'Ghana', code: 'GH' },
        { name: 'Gibraltar', code: 'GI' },
        { name: 'Greece', code: 'GR' },
        { name: 'Greenland', code: 'GL' },
        { name: 'Grenada', code: 'GD' },
        { name: 'Guadeloupe', code: 'GP' },
        { name: 'Guam', code: 'GU' },
        { name: 'Guatemala', code: 'GT' },
        { name: 'Guernsey', code: 'GG' },
        { name: 'Guinea', code: 'GN' },
        { name: 'Guinea-Bissau', code: 'GW' },
        { name: 'Guyana', code: 'GY' },
        { name: 'Haiti', code: 'HT' },
        { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
        { name: 'Holy See (Vatican City State)', code: 'VA' },
        { name: 'Honduras', code: 'HN' },
        { name: 'Hong Kong', code: 'HK' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Iceland', code: 'IS' },
        { name: 'India', code: 'IN' },
        { name: 'Indonesia', code: 'ID' },
        { name: 'Iran, Islamic Republic Of', code: 'IR' },
        { name: 'Iraq', code: 'IQ' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Isle of Man', code: 'IM' },
        { name: 'Israel', code: 'IL' },
        { name: 'Italy', code: 'IT' },
        { name: 'Jamaica', code: 'JM' },
        { name: 'Japan', code: 'JP' },
        { name: 'Jersey', code: 'JE' },
        { name: 'Jordan', code: 'JO' },
        { name: 'Kazakhstan', code: 'KZ' },
        { name: 'Kenya', code: 'KE' },
        { name: 'Kiribati', code: 'KI' },
        { name: 'Korea, Democratic People"S Republic of', code: 'KP' },
        { name: 'Korea, Republic of', code: 'KR' },
        { name: 'Kuwait', code: 'KW' },
        { name: 'Kyrgyzstan', code: 'KG' },
        { name: 'Lao People"S Democratic Republic', code: 'LA' },
        { name: 'Latvia', code: 'LV' },
        { name: 'Lebanon', code: 'LB' },
        { name: 'Lesotho', code: 'LS' },
        { name: 'Liberia', code: 'LR' },
        { name: 'Libyan Arab Jamahiriya', code: 'LY' },
        { name: 'Liechtenstein', code: 'LI' },
        { name: 'Lithuania', code: 'LT' },
        { name: 'Luxembourg', code: 'LU' },
        { name: 'Macao', code: 'MO' },
        { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
        { name: 'Madagascar', code: 'MG' },
        { name: 'Malawi', code: 'MW' },
        { name: 'Malaysia', code: 'MY' },
        { name: 'Maldives', code: 'MV' },
        { name: 'Mali', code: 'ML' },
        { name: 'Malta', code: 'MT' },
        { name: 'Marshall Islands', code: 'MH' },
        { name: 'Martinique', code: 'MQ' },
        { name: 'Mauritania', code: 'MR' },
        { name: 'Mauritius', code: 'MU' },
        { name: 'Mayotte', code: 'YT' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Micronesia, Federated States of', code: 'FM' },
        { name: 'Moldova, Republic of', code: 'MD' },
        { name: 'Monaco', code: 'MC' },
        { name: 'Mongolia', code: 'MN' },
        { name: 'Montserrat', code: 'MS' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Mozambique', code: 'MZ' },
        { name: 'Myanmar', code: 'MM' },
        { name: 'Namibia', code: 'NA' },
        { name: 'Nauru', code: 'NR' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'Netherlands Antilles', code: 'AN' },
        { name: 'New Caledonia', code: 'NC' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Nicaragua', code: 'NI' },
        { name: 'Niger', code: 'NE' },
        { name: 'Nigeria', code: 'NG' },
        { name: 'Niue', code: 'NU' },
        { name: 'Norfolk Island', code: 'NF' },
        { name: 'Northern Mariana Islands', code: 'MP' },
        { name: 'Norway', code: 'NO' },
        { name: 'Oman', code: 'OM' },
        { name: 'Pakistan', code: 'PK' },
        { name: 'Palau', code: 'PW' },
        { name: 'Palestinian Territory, Occupied', code: 'PS' },
        { name: 'Panama', code: 'PA' },
        { name: 'Papua New Guinea', code: 'PG' },
        { name: 'Paraguay', code: 'PY' },
        { name: 'Peru', code: 'PE' },
        { name: 'Philippines', code: 'PH' },
        { name: 'Pitcairn', code: 'PN' },
        { name: 'Poland', code: 'PL' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Puerto Rico', code: 'PR' },
        { name: 'Qatar', code: 'QA' },
        { name: 'Reunion', code: 'RE' },
        { name: 'Romania', code: 'RO' },
        { name: 'Russian Federation', code: 'RU' },
        { name: 'RWANDA', code: 'RW' },
        { name: 'Saint Helena', code: 'SH' },
        { name: 'Saint Kitts and Nevis', code: 'KN' },
        { name: 'Saint Lucia', code: 'LC' },
        { name: 'Saint Pierre and Miquelon', code: 'PM' },
        { name: 'Saint Vincent and the Grenadines', code: 'VC' },
        { name: 'Samoa', code: 'WS' },
        { name: 'San Marino', code: 'SM' },
        { name: 'Sao Tome and Principe', code: 'ST' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'Senegal', code: 'SN' },
        { name: 'Serbia and Montenegro', code: 'CS' },
        { name: 'Seychelles', code: 'SC' },
        { name: 'Sierra Leone', code: 'SL' },
        { name: 'Singapore', code: 'SG' },
        { name: 'Slovakia', code: 'SK' },
        { name: 'Slovenia', code: 'SI' },
        { name: 'Solomon Islands', code: 'SB' },
        { name: 'Somalia', code: 'SO' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
        { name: 'Spain', code: 'ES' },
        { name: 'Sri Lanka', code: 'LK' },
        { name: 'Sudan', code: 'SD' },
        { name: 'Suriname', code: 'SR' },
        { name: 'Svalbard and Jan Mayen', code: 'SJ' },
        { name: 'Swaziland', code: 'SZ' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Syrian Arab Republic', code: 'SY' },
        { name: 'Taiwan, Province of China', code: 'TW' },
        { name: 'Tajikistan', code: 'TJ' },
        { name: 'Tanzania, United Republic of', code: 'TZ' },
        { name: 'Thailand', code: 'TH' },
        { name: 'Timor-Leste', code: 'TL' },
        { name: 'Togo', code: 'TG' },
        { name: 'Tokelau', code: 'TK' },
        { name: 'Tonga', code: 'TO' },
        { name: 'Trinidad and Tobago', code: 'TT' },
        { name: 'Tunisia', code: 'TN' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Turkmenistan', code: 'TM' },
        { name: 'Turks and Caicos Islands', code: 'TC' },
        { name: 'Tuvalu', code: 'TV' },
        { name: 'Uganda', code: 'UG' },
        { name: 'Ukraine', code: 'UA' },
        { name: 'United Arab Emirates', code: 'AE' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'United States', code: 'US' },
        { name: 'United States Minor Outlying Islands', code: 'UM' },
        { name: 'Uruguay', code: 'UY' },
        { name: 'Uzbekistan', code: 'UZ' },
        { name: 'Vanuatu', code: 'VU' },
        { name: 'Venezuela', code: 'VE' },
        { name: 'Viet Nam', code: 'VN' },
        { name: 'Virgin Islands, British', code: 'VG' },
        { name: 'Virgin Islands, U.S.', code: 'VI' },
        { name: 'Wallis and Futuna', code: 'WF' },
        { name: 'Western Sahara', code: 'EH' },
        { name: 'Yemen', code: 'YE' },
        { name: 'Zambia', code: 'ZM' },
        { name: 'Zimbabwe', code: 'ZW' },
      ];
    },
    ,
    function (e, t, n) {
      'use strict';
      function a() {
        b = Array.from(document.querySelectorAll('[data-section]')).map(
          function (e) {
            return {
              id: e.id,
              offset: e.getBoundingClientRect().top + window.pageYOffset - 50,
            };
          }
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(38),
        o = n(85),
        s = (n.n(o), n(83)),
        l = (n.n(s), n(40)),
        r = (n.n(l), n(39)),
        c = (n.n(r), n(84)),
        u = (n.n(c), n(86)),
        d = (n.n(u), n(41)),
        p = n.n(d),
        m = n(82),
        h = n(89),
        f = n(90),
        g = n(3),
        v = n(88);
      n.n(v);
      n(87).polyfill();
      var b,
        _ = ', 100%, 85%';
      new p.a({
        el: '#app',
        components: n.i(i.a)({}, m, {
          MultiselectExample: f.a,
          LangSwitcher: h.a,
          Multiselect: g.a,
        }),
        data: function () {
          return {
            markupLangs: ['pug', 'html'],
            markupLanguage: 'pug',
            isNavSticky: !1,
            firstColor: Math.floor(255 * Math.random()),
            secondColor: Math.floor(255 * Math.random()),
            currentPosition: '',
            versions: ['v1.x', 'v2.0'],
            version: 'v2.0',
          };
        },
        computed: {
          gradient: function () {
            return {
              background: 'linear-gradient(to left bottom, hsl('
                .concat(this.firstColor + _, ') 0%, hsl(')
                .concat(this.secondColor + _, ') 100%)'),
            };
          },
        },
        methods: {
          pickVersion: function (e) {
            switch (e) {
              case 'v1.x':
                window.location.assign('v1/index.html');
                break;
              case 'v2.0':
                window.location.assign('https://vue-multiselect.js.org/');
            }
          },
          selectLanguage: function (e) {
            this.markupLanguage = e;
          },
          adjustNav: function () {
            (this.isNavSticky = window.scrollY > window.innerHeight), b || a();
            for (var e = b.length - 1; e >= 0; e--)
              if (window.scrollY > b[e].offset) {
                this.currentPosition = b[e].id;
                break;
              }
          },
          onTagging: function (e) {
            this.source.push({ name: e, language: e }),
              this.value.push({ name: e, language: e });
          },
        },
        mounted: function () {
          this.adjustNav(),
            window.addEventListener('scroll', this.adjustNav),
            setTimeout(function () {
              a();
            }, 1e3);
        },
      });
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        return new Promise(function (t, n) {
          setTimeout(function () {
            var n = c.a.filter(function (t, n, a) {
              return t.name.toLowerCase().includes(e.toLowerCase());
            });
            t(n);
          }, 1e3);
        });
      }
      t.a = a;
      var i = n(80),
        o = (n.n(i), n(132)),
        s = (n.n(o), n(130)),
        l = (n.n(s), n(77)),
        r = (n.n(l), n(91)),
        c = n.n(r);
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        return 0 !== e && (!(!Array.isArray(e) || 0 !== e.length) || !e);
      }
      function i(e) {
        return function () {
          return !e.apply(void 0, arguments);
        };
      }
      function o(e, t) {
        return (
          void 0 === e && (e = 'undefined'),
          null === e && (e = 'null'),
          !1 === e && (e = 'false'),
          -1 !== e.toString().toLowerCase().indexOf(t.trim())
        );
      }
      function s(e, t, n, a) {
        return e.filter(function (e) {
          return o(a(e, n), t);
        });
      }
      function l(e) {
        return e.filter(function (e) {
          return !e.$isLabel;
        });
      }
      function r(e, t) {
        return function (n) {
          return n.reduce(function (n, a) {
            return a[e] && a[e].length
              ? (n.push({ $groupLabel: a[t], $isLabel: !0 }), n.concat(a[e]))
              : n;
          }, []);
        };
      }
      function c(e, t, a, i, o) {
        return function (l) {
          return l.map(function (l) {
            var r;
            if (!l[a])
              return (
                console.warn(
                  'Options passed to vue-multiselect do not contain groups, despite the config.'
                ),
                []
              );
            var c = s(l[a], e, t, o);
            return c.length
              ? ((r = {}), n.i(h.a)(r, i, l[i]), n.i(h.a)(r, a, c), r)
              : [];
          });
        };
      }
      var u = n(92),
        d = n(78),
        p = (n.n(d), n(128)),
        m = (n.n(p), n(37)),
        h = (n.n(m), n(42)),
        f = n(40),
        g = (n.n(f), n(133)),
        v = (n.n(g), n(125)),
        b = (n.n(v), n(77)),
        _ = (n.n(b), n(131)),
        y = (n.n(_), n(79)),
        S = (n.n(y), n(129)),
        C = (n.n(S), n(126)),
        w = (n.n(C), n(124)),
        k =
          (n.n(w),
          function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          });
      t.a = {
        data: function () {
          return {
            search: '',
            isOpen: !1,
            preferredOpenDirection: 'below',
            optimizedHeight: this.maxHeight,
          };
        },
        props: {
          internalSearch: { type: Boolean, default: !0 },
          options: { type: Array, required: !0 },
          multiple: { type: Boolean, default: !1 },
          value: {
            type: null,
            default: function () {
              return [];
            },
          },
          trackBy: { type: String },
          label: { type: String },
          searchable: { type: Boolean, default: !0 },
          clearOnSelect: { type: Boolean, default: !0 },
          hideSelected: { type: Boolean, default: !1 },
          placeholder: { type: String, default: 'Select option' },
          allowEmpty: { type: Boolean, default: !0 },
          resetAfter: { type: Boolean, default: !1 },
          closeOnSelect: { type: Boolean, default: !0 },
          customLabel: {
            type: Function,
            default: function (e, t) {
              return a(e) ? '' : t ? e[t] : e;
            },
          },
          taggable: { type: Boolean, default: !1 },
          tagPlaceholder: {
            type: String,
            default: 'Press enter to create a tag',
          },
          tagPosition: { type: String, default: 'top' },
          max: { type: [Number, Boolean], default: !1 },
          id: { default: null },
          optionsLimit: { type: Number, default: 1e3 },
          groupValues: { type: String },
          groupLabel: { type: String },
          groupSelect: { type: Boolean, default: !1 },
          blockKeys: {
            type: Array,
            default: function () {
              return [];
            },
          },
          preserveSearch: { type: Boolean, default: !1 },
          preselectFirst: { type: Boolean, default: !1 },
        },
        mounted: function () {
          !this.multiple &&
            this.max &&
            console.warn(
              '[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.'
            ),
            this.preselectFirst &&
              !this.internalValue.length &&
              this.options.length &&
              this.select(this.filteredOptions[0]);
        },
        computed: {
          internalValue: function () {
            return this.value || 0 === this.value
              ? Array.isArray(this.value)
                ? this.value
                : [this.value]
              : [];
          },
          filteredOptions: function () {
            var e = this.search || '',
              t = e.toLowerCase().trim(),
              n = this.options.concat();
            return (
              (n = this.internalSearch
                ? this.groupValues
                  ? this.filterAndFlat(n, t, this.label)
                  : s(n, t, this.label, this.customLabel)
                : this.groupValues
                ? r(this.groupValues, this.groupLabel)(n)
                : n),
              (n = this.hideSelected ? n.filter(i(this.isSelected)) : n),
              this.taggable &&
                t.length &&
                !this.isExistingOption(t) &&
                ('bottom' === this.tagPosition
                  ? n.push({ isTag: !0, label: e })
                  : n.unshift({ isTag: !0, label: e })),
              n.slice(0, this.optionsLimit)
            );
          },
          valueKeys: function () {
            var e = this;
            return this.trackBy
              ? this.internalValue.map(function (t) {
                  return t[e.trackBy];
                })
              : this.internalValue;
          },
          optionKeys: function () {
            var e = this;
            return (this.groupValues
              ? this.flatAndStrip(this.options)
              : this.options
            ).map(function (t) {
              return e.customLabel(t, e.label).toString().toLowerCase();
            });
          },
          currentOptionLabel: function () {
            return this.multiple
              ? this.searchable
                ? ''
                : this.placeholder
              : this.internalValue.length
              ? this.getOptionLabel(this.internalValue[0])
              : this.searchable
              ? ''
              : this.placeholder;
          },
        },
        watch: {
          internalValue: function () {
            this.resetAfter &&
              this.internalValue.length &&
              ((this.search = ''),
              this.$emit('input', this.multiple ? [] : null));
          },
          search: function () {
            this.$emit('search-change', this.search, this.id);
          },
        },
        methods: {
          getValue: function () {
            return this.multiple
              ? this.internalValue
              : 0 === this.internalValue.length
              ? null
              : this.internalValue[0];
          },
          filterAndFlat: function (e, t, n) {
            return k(
              c(t, n, this.groupValues, this.groupLabel, this.customLabel),
              r(this.groupValues, this.groupLabel)
            )(e);
          },
          flatAndStrip: function (e) {
            return k(r(this.groupValues, this.groupLabel), l)(e);
          },
          updateSearch: function (e) {
            this.search = e;
          },
          isExistingOption: function (e) {
            return !!this.options && this.optionKeys.indexOf(e) > -1;
          },
          isSelected: function (e) {
            var t = this.trackBy ? e[this.trackBy] : e;
            return this.valueKeys.indexOf(t) > -1;
          },
          isOptionDisabled: function (e) {
            return !!e.$isDisabled;
          },
          getOptionLabel: function (e) {
            if (a(e)) return '';
            if (e.isTag) return e.label;
            if (e.$isLabel) return e.$groupLabel;
            var t = this.customLabel(e, this.label);
            return a(t) ? '' : t;
          },
          select: function (e, t) {
            if (e.$isLabel && this.groupSelect) return void this.selectGroup(e);
            if (
              !(
                -1 !== this.blockKeys.indexOf(t) ||
                this.disabled ||
                e.$isDisabled ||
                e.$isLabel
              ) &&
              (!this.max ||
                !this.multiple ||
                this.internalValue.length !== this.max) &&
              ('Tab' !== t || this.pointerDirty)
            ) {
              if (e.isTag)
                this.$emit('tag', e.label, this.id),
                  (this.search = ''),
                  this.closeOnSelect && !this.multiple && this.deactivate();
              else {
                if (this.isSelected(e))
                  return void ('Tab' !== t && this.removeElement(e));
                this.$emit('select', e, this.id),
                  this.multiple
                    ? this.$emit(
                        'input',
                        this.internalValue.concat([e]),
                        this.id
                      )
                    : this.$emit('input', e, this.id),
                  this.clearOnSelect && (this.search = '');
              }
              this.closeOnSelect && this.deactivate();
            }
          },
          selectGroup: function (e) {
            var t = this,
              n = this.options.find(function (n) {
                return n[t.groupLabel] === e.$groupLabel;
              });
            if (n)
              if (this.wholeGroupSelected(n)) {
                this.$emit('remove', n[this.groupValues], this.id);
                var a = this.internalValue.filter(function (e) {
                  return -1 === n[t.groupValues].indexOf(e);
                });
                this.$emit('input', a, this.id);
              } else {
                var o = n[this.groupValues].filter(
                  i(this.isOptionDisabled || this.isSelected)
                );
                this.$emit('select', o, this.id),
                  this.$emit('input', this.internalValue.concat(o), this.id);
              }
          },
          wholeGroupSelected: function (e) {
            var t = this;
            return e[this.groupValues].every(function (e) {
              return t.isSelected(e) || t.isOptionDisabled(e);
            });
          },
          wholeGroupDisabled: function (e) {
            return e[this.groupValues].every(this.isOptionDisabled);
          },
          removeElement: function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (!this.disabled && !e.$isDisabled) {
              if (!this.allowEmpty && this.internalValue.length <= 1)
                return void this.deactivate();
              var a =
                'object' === n.i(u.a)(e)
                  ? this.valueKeys.indexOf(e[this.trackBy])
                  : this.valueKeys.indexOf(e);
              if ((this.$emit('remove', e, this.id), this.multiple)) {
                var i = this.internalValue
                  .slice(0, a)
                  .concat(this.internalValue.slice(a + 1));
                this.$emit('input', i, this.id);
              } else this.$emit('input', null, this.id);
              this.closeOnSelect && t && this.deactivate();
            }
          },
          removeLastElement: function () {
            -1 === this.blockKeys.indexOf('Delete') &&
              0 === this.search.length &&
              Array.isArray(this.internalValue) &&
              this.removeElement(
                this.internalValue[this.internalValue.length - 1],
                !1
              );
          },
          activate: function () {
            var e = this;
            this.isOpen ||
              this.disabled ||
              (this.adjustPosition(),
              this.groupValues &&
                0 === this.pointer &&
                this.filteredOptions.length &&
                (this.pointer = 1),
              (this.isOpen = !0),
              this.searchable
                ? (this.preserveSearch || (this.search = ''),
                  this.$nextTick(function () {
                    return e.$refs.search.focus();
                  }))
                : this.$el.focus(),
              this.$emit('open', this.id));
          },
          deactivate: function () {
            this.isOpen &&
              ((this.isOpen = !1),
              this.searchable ? this.$refs.search.blur() : this.$el.blur(),
              this.preserveSearch || (this.search = ''),
              this.$emit('close', this.getValue(), this.id));
          },
          toggle: function () {
            this.isOpen ? this.deactivate() : this.activate();
          },
          adjustPosition: function () {
            if ('undefined' != typeof window) {
              var e = this.$el.getBoundingClientRect().top,
                t =
                  window.innerHeight - this.$el.getBoundingClientRect().bottom;
              t > this.maxHeight ||
              t > e ||
              'below' === this.openDirection ||
              'bottom' === this.openDirection
                ? ((this.preferredOpenDirection = 'below'),
                  (this.optimizedHeight = Math.min(t - 40, this.maxHeight)))
                : ((this.preferredOpenDirection = 'above'),
                  (this.optimizedHeight = Math.min(e - 40, this.maxHeight)));
            }
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      var a = n(78),
        i = (n.n(a), n(37));
      n.n(i);
      t.a = {
        data: function () {
          return { pointer: 0, pointerDirty: !1 };
        },
        props: {
          showPointer: { type: Boolean, default: !0 },
          optionHeight: { type: Number, default: 40 },
        },
        computed: {
          pointerPosition: function () {
            return this.pointer * this.optionHeight;
          },
          visibleElements: function () {
            return this.optimizedHeight / this.optionHeight;
          },
        },
        watch: {
          filteredOptions: function () {
            this.pointerAdjust();
          },
          isOpen: function () {
            this.pointerDirty = !1;
          },
        },
        methods: {
          optionHighlight: function (e, t) {
            return {
              'multiselect__option--highlight':
                e === this.pointer && this.showPointer,
              'multiselect__option--selected': this.isSelected(t),
            };
          },
          groupHighlight: function (e, t) {
            var n = this;
            if (!this.groupSelect)
              return [
                'multiselect__option--group',
                'multiselect__option--disabled',
              ];
            var a = this.options.find(function (e) {
              return e[n.groupLabel] === t.$groupLabel;
            });
            return a && !this.wholeGroupDisabled(a)
              ? [
                  'multiselect__option--group',
                  {
                    'multiselect__option--highlight':
                      e === this.pointer && this.showPointer,
                  },
                  {
                    'multiselect__option--group-selected': this.wholeGroupSelected(
                      a
                    ),
                  },
                ]
              : 'multiselect__option--disabled';
          },
          addPointerElement: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'Enter',
              t = e.key;
            this.filteredOptions.length > 0 &&
              this.select(this.filteredOptions[this.pointer], t),
              this.pointerReset();
          },
          pointerForward: function () {
            this.pointer < this.filteredOptions.length - 1 &&
              (this.pointer++,
              this.$refs.list.scrollTop <=
                this.pointerPosition -
                  (this.visibleElements - 1) * this.optionHeight &&
                (this.$refs.list.scrollTop =
                  this.pointerPosition -
                  (this.visibleElements - 1) * this.optionHeight),
              this.filteredOptions[this.pointer] &&
                this.filteredOptions[this.pointer].$isLabel &&
                !this.groupSelect &&
                this.pointerForward()),
              (this.pointerDirty = !0);
          },
          pointerBackward: function () {
            this.pointer > 0
              ? (this.pointer--,
                this.$refs.list.scrollTop >= this.pointerPosition &&
                  (this.$refs.list.scrollTop = this.pointerPosition),
                this.filteredOptions[this.pointer] &&
                  this.filteredOptions[this.pointer].$isLabel &&
                  !this.groupSelect &&
                  this.pointerBackward())
              : this.filteredOptions[this.pointer] &&
                this.filteredOptions[0].$isLabel &&
                !this.groupSelect &&
                this.pointerForward(),
              (this.pointerDirty = !0);
          },
          pointerReset: function () {
            this.closeOnSelect &&
              ((this.pointer = 0),
              this.$refs.list && (this.$refs.list.scrollTop = 0));
          },
          pointerAdjust: function () {
            this.pointer >= this.filteredOptions.length - 1 &&
              (this.pointer = this.filteredOptions.length
                ? this.filteredOptions.length - 1
                : 0),
              this.filteredOptions.length > 0 &&
                this.filteredOptions[this.pointer].$isLabel &&
                !this.groupSelect &&
                this.pointerForward();
          },
          pointerSet: function (e) {
            (this.pointer = e), (this.pointerDirty = !0);
          },
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    function (e, t, n) {
      'use strict';
      var a = n(45),
        i = n(165),
        o = n(2),
        s = o(a.a, i.a, !1, null, null, null);
      t.a = s.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(140);
      }
      var i = n(46),
        o = n(164),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(135);
      }
      var i = n(47),
        o = n(158),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(138);
      }
      var i = n(48),
        o = n(161),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(141);
      }
      var i = n(49),
        o = n(166),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(143);
      }
      var i = n(50),
        o = n(170),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(137);
      }
      var i = n(51),
        o = n(160),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      var a = n(52),
        i = n(169),
        o = n(2),
        s = o(a.a, i.a, !1, null, null, null);
      t.a = s.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(142);
      }
      var i = n(53),
        o = n(168),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      function a(e) {
        n(136);
      }
      var i = n(54),
        o = n(159),
        s = n(2),
        l = a,
        r = s(i.a, o.a, !1, l, null, null);
      t.a = r.exports;
    },
    function (e, t, n) {
      'use strict';
      var a = n(55),
        i = n(163),
        o = n(2),
        s = o(a.a, i.a, !1, null, null, null);
      t.a = s.exports;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            {
              staticClass: 'multiselect',
              class: {
                'multiselect--active': e.isOpen,
                'multiselect--disabled': e.disabled,
                'multiselect--above': e.isAbove,
              },
              attrs: { tabindex: e.searchable ? -1 : e.tabindex },
              on: {
                focus: function (t) {
                  e.activate();
                },
                blur: function (t) {
                  !e.searchable && e.deactivate();
                },
                keydown: [
                  function (t) {
                    return 'button' in t ||
                      !e._k(t.keyCode, 'down', 40, t.key, ['Down', 'ArrowDown'])
                      ? t.target !== t.currentTarget
                        ? null
                        : (t.preventDefault(), void e.pointerForward())
                      : null;
                  },
                  function (t) {
                    return 'button' in t ||
                      !e._k(t.keyCode, 'up', 38, t.key, ['Up', 'ArrowUp'])
                      ? t.target !== t.currentTarget
                        ? null
                        : (t.preventDefault(), void e.pointerBackward())
                      : null;
                  },
                ],
                keypress: function (t) {
                  return 'button' in t ||
                    !e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ||
                    !e._k(t.keyCode, 'tab', 9, t.key, 'Tab')
                    ? (t.stopPropagation(),
                      t.target !== t.currentTarget
                        ? null
                        : void e.addPointerElement(t))
                    : null;
                },
                keyup: function (t) {
                  if (
                    !('button' in t) &&
                    e._k(t.keyCode, 'esc', 27, t.key, 'Escape')
                  )
                    return null;
                  e.deactivate();
                },
              },
            },
            [
              e._t(
                'caret',
                [
                  n('div', {
                    staticClass: 'multiselect__select',
                    on: {
                      mousedown: function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                      },
                    },
                  }),
                ],
                { toggle: e.toggle }
              ),
              e._v(' '),
              e._t('clear', null, { search: e.search }),
              e._v(' '),
              n(
                'div',
                { ref: 'tags', staticClass: 'multiselect__tags' },
                [
                  e._t(
                    'selection',
                    [
                      n(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.visibleValues.length > 0,
                              expression: 'visibleValues.length > 0',
                            },
                          ],
                          staticClass: 'multiselect__tags-wrap',
                        },
                        [
                          e._l(e.visibleValues, function (t, a) {
                            return [
                              e._t(
                                'tag',
                                [
                                  n(
                                    'span',
                                    { key: a, staticClass: 'multiselect__tag' },
                                    [
                                      n('span', {
                                        domProps: {
                                          textContent: e._s(
                                            e.getOptionLabel(t)
                                          ),
                                        },
                                      }),
                                      e._v(' '),
                                      n('i', {
                                        staticClass: 'multiselect__tag-icon',
                                        attrs: {
                                          'aria-hidden': 'true',
                                          tabindex: '1',
                                        },
                                        on: {
                                          keypress: function (n) {
                                            if (
                                              !('button' in n) &&
                                              e._k(
                                                n.keyCode,
                                                'enter',
                                                13,
                                                n.key,
                                                'Enter'
                                              )
                                            )
                                              return null;
                                            n.preventDefault(),
                                              e.removeElement(t);
                                          },
                                          mousedown: function (n) {
                                            n.preventDefault(),
                                              e.removeElement(t);
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                ],
                                {
                                  option: t,
                                  search: e.search,
                                  remove: e.removeElement,
                                }
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                      e._v(' '),
                      e.internalValue && e.internalValue.length > e.limit
                        ? [
                            e._t('limit', [
                              n('strong', {
                                staticClass: 'multiselect__strong',
                                domProps: {
                                  textContent: e._s(
                                    e.limitText(
                                      e.internalValue.length - e.limit
                                    )
                                  ),
                                },
                              }),
                            ]),
                          ]
                        : e._e(),
                    ],
                    {
                      search: e.search,
                      remove: e.removeElement,
                      values: e.visibleValues,
                      isOpen: e.isOpen,
                    }
                  ),
                  e._v(' '),
                  n(
                    'transition',
                    { attrs: { name: 'multiselect__loading' } },
                    [
                      e._t('loading', [
                        n('div', {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.loading,
                              expression: 'loading',
                            },
                          ],
                          staticClass: 'multiselect__spinner',
                        }),
                      ]),
                    ],
                    2
                  ),
                  e._v(' '),
                  e.searchable
                    ? n('input', {
                        ref: 'search',
                        staticClass: 'multiselect__input',
                        style: e.inputStyle,
                        attrs: {
                          name: e.name,
                          id: e.id,
                          type: 'text',
                          autocomplete: 'off',
                          placeholder: e.placeholder,
                          disabled: e.disabled,
                          tabindex: e.tabindex,
                        },
                        domProps: { value: e.search },
                        on: {
                          input: function (t) {
                            e.updateSearch(t.target.value);
                          },
                          focus: function (t) {
                            t.preventDefault(), e.activate();
                          },
                          blur: function (t) {
                            t.preventDefault(), e.deactivate();
                          },
                          keyup: function (t) {
                            if (
                              !('button' in t) &&
                              e._k(t.keyCode, 'esc', 27, t.key, 'Escape')
                            )
                              return null;
                            e.deactivate();
                          },
                          keydown: [
                            function (t) {
                              if (
                                !('button' in t) &&
                                e._k(t.keyCode, 'down', 40, t.key, [
                                  'Down',
                                  'ArrowDown',
                                ])
                              )
                                return null;
                              t.preventDefault(), e.pointerForward();
                            },
                            function (t) {
                              if (
                                !('button' in t) &&
                                e._k(t.keyCode, 'up', 38, t.key, [
                                  'Up',
                                  'ArrowUp',
                                ])
                              )
                                return null;
                              t.preventDefault(), e.pointerBackward();
                            },
                            function (t) {
                              if (
                                !('button' in t) &&
                                e._k(t.keyCode, 'delete', [8, 46], t.key, [
                                  'Backspace',
                                  'Delete',
                                ])
                              )
                                return null;
                              t.stopPropagation(), e.removeLastElement();
                            },
                          ],
                          keypress: function (t) {
                            return 'button' in t ||
                              !e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                              ? (t.preventDefault(),
                                t.stopPropagation(),
                                t.target !== t.currentTarget
                                  ? null
                                  : void e.addPointerElement(t))
                              : null;
                          },
                        },
                      })
                    : e._e(),
                  e._v(' '),
                  e.isSingleLabelVisible
                    ? n(
                        'span',
                        {
                          staticClass: 'multiselect__single',
                          on: {
                            mousedown: function (t) {
                              return t.preventDefault(), e.toggle(t);
                            },
                          },
                        },
                        [
                          e._t(
                            'singleLabel',
                            [[e._v(e._s(e.currentOptionLabel))]],
                            { option: e.singleValue }
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(' '),
                  e.isPlaceholderVisible
                    ? n(
                        'span',
                        {
                          staticClass: 'multiselect__placeholder',
                          on: {
                            mousedown: function (t) {
                              return t.preventDefault(), e.toggle(t);
                            },
                          },
                        },
                        [
                          e._t('placeholder', [
                            e._v(
                              '\n            ' +
                                e._s(e.placeholder) +
                                '\n        '
                            ),
                          ]),
                        ],
                        2
                      )
                    : e._e(),
                ],
                2
              ),
              e._v(' '),
              n('transition', { attrs: { name: 'multiselect' } }, [
                n(
                  'div',
                  {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: e.isOpen,
                        expression: 'isOpen',
                      },
                    ],
                    ref: 'list',
                    staticClass: 'multiselect__content-wrapper',
                    style: { maxHeight: e.optimizedHeight + 'px' },
                    attrs: { tabindex: '-1' },
                    on: {
                      focus: e.activate,
                      mousedown: function (e) {
                        e.preventDefault();
                      },
                    },
                  },
                  [
                    n(
                      'ul',
                      {
                        staticClass: 'multiselect__content',
                        style: e.contentStyle,
                      },
                      [
                        e._t('beforeList'),
                        e._v(' '),
                        e.multiple && e.max === e.internalValue.length
                          ? n('li', [
                              n(
                                'span',
                                { staticClass: 'multiselect__option' },
                                [
                                  e._t('maxElements', [
                                    e._v(
                                      'Maximum of ' +
                                        e._s(e.max) +
                                        ' options selected. First remove a selected option to select another.'
                                    ),
                                  ]),
                                ],
                                2
                              ),
                            ])
                          : e._e(),
                        e._v(' '),
                        !e.max || e.internalValue.length < e.max
                          ? e._l(e.filteredOptions, function (t, a) {
                              return n(
                                'li',
                                { key: a, staticClass: 'multiselect__element' },
                                [
                                  t && (t.$isLabel || t.$isDisabled)
                                    ? e._e()
                                    : n(
                                        'span',
                                        {
                                          staticClass: 'multiselect__option',
                                          class: e.optionHighlight(a, t),
                                          attrs: {
                                            'data-select':
                                              t && t.isTag
                                                ? e.tagPlaceholder
                                                : e.selectLabelText,
                                            'data-selected':
                                              e.selectedLabelText,
                                            'data-deselect':
                                              e.deselectLabelText,
                                          },
                                          on: {
                                            click: function (n) {
                                              n.stopPropagation(), e.select(t);
                                            },
                                            mouseenter: function (t) {
                                              if (t.target !== t.currentTarget)
                                                return null;
                                              e.pointerSet(a);
                                            },
                                          },
                                        },
                                        [
                                          e._t(
                                            'option',
                                            [
                                              n('span', [
                                                e._v(e._s(e.getOptionLabel(t))),
                                              ]),
                                            ],
                                            { option: t, search: e.search }
                                          ),
                                        ],
                                        2
                                      ),
                                  e._v(' '),
                                  t && (t.$isLabel || t.$isDisabled)
                                    ? n(
                                        'span',
                                        {
                                          staticClass: 'multiselect__option',
                                          class: e.groupHighlight(a, t),
                                          attrs: {
                                            'data-select':
                                              e.groupSelect &&
                                              e.selectGroupLabelText,
                                            'data-deselect':
                                              e.groupSelect &&
                                              e.deselectGroupLabelText,
                                          },
                                          on: {
                                            mouseenter: function (t) {
                                              if (t.target !== t.currentTarget)
                                                return null;
                                              e.groupSelect && e.pointerSet(a);
                                            },
                                            mousedown: function (n) {
                                              n.preventDefault(),
                                                e.selectGroup(t);
                                            },
                                          },
                                        },
                                        [
                                          e._t(
                                            'option',
                                            [
                                              n('span', [
                                                e._v(e._s(e.getOptionLabel(t))),
                                              ]),
                                            ],
                                            { option: t, search: e.search }
                                          ),
                                        ],
                                        2
                                      )
                                    : e._e(),
                                ]
                              );
                            })
                          : e._e(),
                        e._v(' '),
                        n(
                          'li',
                          {
                            directives: [
                              {
                                name: 'show',
                                rawName: 'v-show',
                                value:
                                  e.showNoResults &&
                                  0 === e.filteredOptions.length &&
                                  e.search &&
                                  !e.loading,
                                expression:
                                  'showNoResults && (filteredOptions.length === 0 && search && !loading)',
                              },
                            ],
                          },
                          [
                            n(
                              'span',
                              { staticClass: 'multiselect__option' },
                              [
                                e._t('noResult', [
                                  e._v(
                                    'No elements found. Consider changing the search query.'
                                  ),
                                ]),
                              ],
                              2
                            ),
                          ]
                        ),
                        e._v(' '),
                        n(
                          'li',
                          {
                            directives: [
                              {
                                name: 'show',
                                rawName: 'v-show',
                                value:
                                  e.showNoOptions &&
                                  0 === e.options.length &&
                                  !e.search &&
                                  !e.loading,
                                expression:
                                  'showNoOptions && (options.length === 0 && !search && !loading)',
                              },
                            ],
                          },
                          [
                            n(
                              'span',
                              { staticClass: 'multiselect__option' },
                              [e._t('noOptions', [e._v('List is empty.')])],
                              2
                            ),
                          ]
                        ),
                        e._v(' '),
                        e._t('afterList'),
                      ],
                      2
                    ),
                  ]
                ),
              ]),
            ],
            2
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            { class: { invalid: e.isInvalid } },
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Customized multiselect'),
              ]),
              n('multiselect', {
                attrs: {
                  placeholder: 'Pick at least one',
                  'select-label': 'Enter doesn’t work here!',
                  value: e.value,
                  options: e.options,
                  multiple: !0,
                  searchable: !0,
                  'allow-empty': !1,
                  'hide-selected': !0,
                  'max-height': 150,
                  max: 3,
                  disabled: e.isDisabled,
                  'block-keys': ['Tab', 'Enter'],
                },
                on: { input: e.onChange, close: e.onTouch, select: e.onSelect },
              }),
              n(
                'label',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.isInvalid,
                      expression: 'isInvalid',
                    },
                  ],
                  staticClass: 'typo__label form__label',
                },
                [e._v('Must have at least one value')]
              ),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [e._v('Tagging')]),
              n('multiselect', {
                attrs: {
                  'tag-placeholder': 'Add this as new tag',
                  placeholder: 'Search or add a tag',
                  label: 'name',
                  'track-by': 'code',
                  options: e.options,
                  multiple: !0,
                  taggable: !0,
                },
                on: { tag: e.addTag },
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Single select / dropdown'),
              ]),
              n('multiselect', {
                attrs: {
                  'deselect-label': "Can't remove this value",
                  'track-by': 'name',
                  label: 'name',
                  placeholder: 'Select one',
                  options: e.options,
                  searchable: !1,
                  'allow-empty': !1,
                },
                scopedSlots: e._u([
                  {
                    key: 'singleLabel',
                    fn: function (t) {
                      var a = t.option;
                      return [
                        n('strong', [e._v(e._s(a.name))]),
                        e._v(' is written in'),
                        n('strong', [e._v('  ' + e._s(a.language))]),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Custom option template'),
              ]),
              n('multiselect', {
                attrs: {
                  placeholder: 'Fav No Man’s Sky path',
                  label: 'title',
                  'track-by': 'title',
                  options: e.options,
                  'option-height': 104,
                  'custom-label': e.customLabel,
                  'show-labels': !1,
                },
                scopedSlots: e._u([
                  {
                    key: 'singleLabel',
                    fn: function (t) {
                      return [
                        n('img', {
                          staticClass: 'option__image',
                          attrs: { src: t.option.img, alt: 'No Man’s Sky' },
                        }),
                        n('span', { staticClass: 'option__desc' }, [
                          n('span', { staticClass: 'option__title' }, [
                            e._v(e._s(t.option.title)),
                          ]),
                        ]),
                      ];
                    },
                  },
                  {
                    key: 'option',
                    fn: function (t) {
                      return [
                        n('img', {
                          staticClass: 'option__image',
                          attrs: { src: t.option.img, alt: 'No Man’s Sky' },
                        }),
                        n('div', { staticClass: 'option__desc' }, [
                          n('span', { staticClass: 'option__title' }, [
                            e._v(e._s(t.option.title)),
                          ]),
                          n('span', { staticClass: 'option__small' }, [
                            e._v(e._s(t.option.desc)),
                          ]),
                        ]),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n(
                'multiselect',
                {
                  attrs: {
                    label: 'name',
                    'track-by': 'name',
                    placeholder: 'Pick badges',
                    options: e.badges,
                    multiple: !0,
                    'show-labels': !1,
                    limit: 3,
                  },
                  on: { tag: e.onTagging },
                  scopedSlots: e._u([
                    {
                      key: 'option',
                      fn: function (t) {
                        return [
                          n('span', { staticClass: 'badge__name' }, [
                            e._v(e._s(t.option.name)),
                          ]),
                          n('img', {
                            staticClass: 'badge__img',
                            attrs: { src: t.option.img, alt: t.option.name },
                          }),
                        ];
                      },
                    },
                  ]),
                  model: {
                    value: e.value,
                    callback: function (t) {
                      e.value = t;
                    },
                    expression: 'value',
                  },
                },
                [
                  n('span', { attrs: { slot: 'noResult' }, slot: 'noResult' }, [
                    e._v('Badge not found. Suggest a badge '),
                    n(
                      'a',
                      {
                        staticClass: 'typo__link',
                        attrs: {
                          href:
                            'https://github.com/shentao/vue-multiselect/issues',
                          target: '_blank',
                        },
                      },
                      [e._v('here')]
                    ),
                    e._v('.'),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Vuex example.'),
              ]),
              n('multiselect', {
                attrs: {
                  placeholder: 'Pick action',
                  value: e.value,
                  options: e.options,
                  searchable: !1,
                },
                on: { input: e.updateValueAction },
              }),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n(
                'label',
                { staticClass: 'typo__label', attrs: { for: 'ajax' } },
                [e._v('Async multiselect')]
              ),
              n(
                'multiselect',
                {
                  attrs: {
                    id: 'ajax',
                    label: 'name',
                    'track-by': 'code',
                    placeholder: 'Type to search',
                    'open-direction': 'bottom',
                    options: e.countries,
                    multiple: !0,
                    searchable: !0,
                    loading: e.isLoading,
                    'internal-search': !1,
                    'clear-on-select': !1,
                    'close-on-select': !1,
                    'options-limit': 300,
                    limit: 3,
                    'limit-text': e.limitText,
                    'max-height': 600,
                    'show-no-results': !1,
                    'hide-selected': !0,
                  },
                  on: { 'search-change': e.asyncFind },
                  scopedSlots: e._u([
                    {
                      key: 'tag',
                      fn: function (t) {
                        var a = t.option,
                          i = t.remove;
                        return [
                          n('span', { staticClass: 'custom__tag' }, [
                            n('span', [e._v(e._s(a.name))]),
                            n(
                              'span',
                              {
                                staticClass: 'custom__remove',
                                on: {
                                  click: function (e) {
                                    i(a);
                                  },
                                },
                              },
                              [e._v('❌')]
                            ),
                          ]),
                        ];
                      },
                    },
                    {
                      key: 'clear',
                      fn: function (t) {
                        return [
                          e.selectedCountries.length
                            ? n('div', {
                                staticClass: 'multiselect__clear',
                                on: {
                                  mousedown: function (n) {
                                    n.preventDefault(),
                                      n.stopPropagation(),
                                      e.clearAll(t.search);
                                  },
                                },
                              })
                            : e._e(),
                        ];
                      },
                    },
                  ]),
                  model: {
                    value: e.selectedCountries,
                    callback: function (t) {
                      e.selectedCountries = t;
                    },
                    expression: 'selectedCountries',
                  },
                },
                [
                  n('span', { attrs: { slot: 'noResult' }, slot: 'noResult' }, [
                    e._v(
                      'Oops! No elements found. Consider changing the search query.'
                    ),
                  ]),
                ]
              ),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.selectedCountries))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Open console to see logs.'),
              ]),
              n('multiselect', {
                attrs: {
                  placeholder: 'Pick action',
                  options: e.actions,
                  searchable: !1,
                  'reset-after': !0,
                },
                on: { select: e.dispatchAction },
              }),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [e._v('Groups')]),
              n(
                'multiselect',
                {
                  attrs: {
                    options: e.options,
                    multiple: !0,
                    'group-values': 'libs',
                    'group-label': 'language',
                    'group-select': !0,
                    placeholder: 'Type to search',
                    'track-by': 'name',
                    label: 'name',
                  },
                  model: {
                    value: e.value,
                    callback: function (t) {
                      e.value = t;
                    },
                    expression: 'value',
                  },
                },
                [
                  n('span', { attrs: { slot: 'noResult' }, slot: 'noResult' }, [
                    e._v(
                      'Oops! No elements found. Consider changing the search query.'
                    ),
                  ]),
                ]
              ),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            { staticClass: 'tabs' },
            e._l(e.langs, function (t) {
              return n(
                'a',
                {
                  staticClass: 'tabs__link',
                  class: { 'tabs__link--active': t === e.current },
                  on: {
                    click: function (n) {
                      e.select(t);
                    },
                  },
                },
                [e._v(e._s(t))]
              );
            })
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Select with search'),
              ]),
              n('multiselect', {
                attrs: {
                  options: e.options,
                  'custom-label': e.nameWithLang,
                  placeholder: 'Select one',
                  label: 'name',
                  'track-by': 'name',
                },
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Single select'),
              ]),
              n('multiselect', {
                attrs: {
                  options: e.options,
                  searchable: !1,
                  'close-on-select': !1,
                  'show-labels': !1,
                  placeholder: 'Pick a value',
                },
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            [
              n('label', { staticClass: 'typo__label' }, [
                e._v('Simple select / dropdown'),
              ]),
              n('multiselect', {
                attrs: {
                  options: e.options,
                  multiple: !0,
                  'close-on-select': !1,
                  'clear-on-select': !1,
                  'preserve-search': !0,
                  placeholder: 'Pick some',
                  label: 'name',
                  'track-by': 'name',
                  'preselect-first': !0,
                },
                scopedSlots: e._u([
                  {
                    key: 'selection',
                    fn: function (t) {
                      var a = t.values,
                        i = (t.search, t.isOpen);
                      return [
                        a.length && !i
                          ? n('span', { staticClass: 'multiselect__single' }, [
                              e._v(e._s(a.length) + ' options selected'),
                            ])
                          : e._e(),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.value,
                  callback: function (t) {
                    e.value = t;
                  },
                  expression: 'value',
                },
              }),
              n('pre', { staticClass: 'language-json' }, [
                n('code', [e._v(e._s(e.value))]),
              ]),
            ],
            1
          );
        },
        i = [],
        o = { render: a, staticRenderFns: i };
      t.a = o;
    },
  ],
  [93]
);
//# sourceMappingURL=app.b2f1675946bbf7c5b51e.js.map
