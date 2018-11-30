import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-7be92.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            Object.keys(res.data).forEach(key => {
              postsArray.push({ ...res.data[key], id: key })
            })
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = { 
          ...post, 
          updateDate: new Date 
        }
        return axios.post('https://nuxt-blog-7be92.firebaseio.com/posts.json', createdPost)
          .then(result => {

            vuexContext.commit('addPost', { ...createdPost, id: result.data.name})
          })
          .catch(e => console.log(e))
      },
      editedPost(vuexContext, editedPost) {
        return axios.put('https://nuxt-blog-7be92.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
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