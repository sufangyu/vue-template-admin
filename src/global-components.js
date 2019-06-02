import Vue from 'vue';
import Flex, { FlexItem } from '@/components/flex';
import WhiteSpace from '@/components/white-space';
import WingBlank from '@/components/wing-blank';
import Card from '@/components/card';
import Pagination from '@/components/pagination';

// register global components
Vue.component('card', Card);
Vue.component('pagination', Pagination);
Vue.component('flex', Flex);
Vue.component('flex-item', FlexItem);
Vue.component('white-space', WhiteSpace);
Vue.component('wing-blank', WingBlank);
