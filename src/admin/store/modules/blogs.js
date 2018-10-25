const blogs = {
    namespaced: true,
    state: {
      data: []
    },
    mutations: {
      loadBlogs: (state, blogs) => state.data = blogs,
      addNewBlog: (state, newBlog) => state.data.push(newBlog),
      removeBlog: (state, blogId) => state.data = state.data.filter(blog => blog.id !== blogId)
    },
    actions: {
      fetch({commit}) {
        this.$axios.get('/posts/34').then(
          response => {
            commit('loadBlogs', response.data);
          },
          error => {
            console.error(error);
          }
        );
      },
      add({commit}, blog) {
        this.$axios.post('/posts', blog).then(
          response => {
            commit('addNewBlog', response.data);
          },
          error => {
            console.error(error)
          }
        );
      },
      remove({commit}, blogId) {
        this.$axios.delete(`/posts/${blogId}`).then(
          response => {
            commit('removeBlog', blogId)
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  };
  
  export default blogs;