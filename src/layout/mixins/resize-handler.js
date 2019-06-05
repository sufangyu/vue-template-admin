import store from '@/store';

const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('closeSideBar', { withoutAnimation: false });
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();

    if (isMobile) {
      store.dispatch('toggleDevice', 'mobile');
      store.dispatch('closeSideBar', { withoutAnimation: true });
    }

    this.$_resizeHandler();
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = document.body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop');

        if (isMobile && this.screenSize !== 'screen-xs') {
          store.dispatch('closeSideBar', { withoutAnimation: true });
        }

        this.$_getScreenSize();
      }
    },
    $_getScreenSize() {
      const rect = document.body.getBoundingClientRect();
      let screenSize = 'screen-xl';

      if (rect.width < 576) {
        screenSize = 'screen-xs';
      } else if (rect.width < 768) {
        screenSize = 'screen-sm';
      } else if (rect.width < 992) {
        screenSize = 'screen-md';
      } else if (rect.width < 1200) {
        screenSize = 'screen-lg';
      }

      store.dispatch('toggleScreenSize', screenSize);
    },
  },
};
