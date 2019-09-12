export default {
  methods: {
    /**
     * 设置 tags-view title
     *
     * @param {string} [title='']
     */
    setTagsViewTitle(title = '') {
      const tempRoute = Object.assign({}, this.$route);
      this.$nextTick(() => {
        const route = Object.assign({}, tempRoute, { title });
        this.$store.dispatch('tags-view/updateVisitedView', route);
      });
    },
  },
};
