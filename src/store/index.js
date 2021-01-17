import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/assets/js/data'
 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sourceData,
    authUserId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3"
  },
  getters: {
    authUser (state){
      return sourceData.users[state.authUserId]
    }
  },
  mutations: {
    setPost (state, {postId, post}) {
      Vue.set(state.sourceData.posts, postId, post)
    },
    setThread (state, {threadId, thread}) {
      Vue.set(state.sourceData.threads, threadId, thread)
    },
    setUser (state, {userId, user}) {
      Vue.set(state.sourceData.users, userId, user)
    },
    appendPostToThread(state, {postId, threadId}){
      const thread = state.sourceData.threads[threadId]
      if(!thread.posts){
        Vue.set(thread, 'posts', {})
      }
      Vue.set(thread.posts, postId, postId)
    },
    appendPostToUser (state, {postId, userId}){
      const user = state.sourceData.users[userId]
      if(!user.posts){
        Vue.set(user, 'posts', {})
      }
      Vue.set(user.posts, postId, postId)
    },
    appendThreadToForum (state, {forumId, threadId}){
      const forum = state.sourceData.users[threadId]
      if(!forum.threads){
        Vue.set(forum, 'threads', {})
      }
      Vue.set(forum.threads, forumId, forumId)
    },
    appendThreadToUser (state, {userId, threadId}){
      const user = state.sourceData.users[threadId]
      if(!user.threads){
        Vue.set(user, 'threads', {})
      }
      Vue.set(user.threads, userId, userId)
    }

  },
  actions: {
    createPost ( context, post){
      const postId = 'somePost' + Math.random()
      post['.key'] = postId
      post.publishedAt = Math.floor(Date.now()/1000)
      post.userId = context.state.authUser
      context.commit('setPost', {post, postId})
      context.commit('appendPostToThread', {threadId: post.threadId, postId})
      context.commit('appendPostToUser', {userId: post.userId, postId})
    },
    
    createThread ({state, commit, dispatch}, {text, title, forumId}) {
      const userId = state.authUser
      const publishedAt = Math.floor(Date.now()/1000)
      const threadId = 'someThread' + Math.random()

      const thread = {
        '.key': threadId,
        forumId,
        title,
        publishedAt,
        userId
      }

      commit('setThread', {threadId, thread})
      commit('appendThreadToForum', {forumId, threadId})
      commit('appendThreadToUser', {userId, threadId})
      dispatch('createPost', {text, threadId})
    },

    updateUser ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },
  modules: {
  }
})
