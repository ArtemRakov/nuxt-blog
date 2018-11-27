import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              { id: '1', title: "First Post", author: 'Artem', contect: 'Dummy text', previewText: 'Amazing post', thumbnail: 'https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Top-Tech-Trends.jpg' },
              { id: '2', title: 'Second Post', previewText: 'Amazing post', thumbnail: 'https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Top-Tech-Trends.jpg' },
              { id: '3', title: 'Third Post', previewText: 'Amazing post', thumbnail: 'https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Top-Tech-Trends.jpg' }
            ])
            resolve()
          }, 1000);
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore