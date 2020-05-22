import '../assets/styles/main.scss';

import Vue from 'vue';
import Spinner from '@uikit/spinner';
import Button from '@uikit/button';
import VueInputAutowidth from 'vue-input-autowidth';
import Vuelidate from 'vuelidate';
import { IMaskComponent } from 'vue-imask';

Vue.component('spinner', Spinner);
Vue.component('base-button', Button);
Vue.component('imask-input', IMaskComponent);
Vue.use(VueInputAutowidth);
Vue.use(Vuelidate);
