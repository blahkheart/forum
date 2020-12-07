<template>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>
      <PostEditor :threadId="id" @save="addPost" />
      <!-- <form @keyup.enter="addPost" @submit.prevent="addPost">
        <div class="form-group">
          <textarea 
            name="" 
            class="form-input" 
            id="" 
            cols="30" 
            rows="10"
            v-model="newPostText"
          ></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-blue">Submit post</button>
        </div>
      </form> -->
    </div>
</template>
<script>
import sourceData from '@/assets/js/data'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
    props: {
        id: {
          required: true,
          type: String
        }
    },
    components: {
      PostList,
      PostEditor
    },
    data () {
      return {
        thread: sourceData.threads[this.id],
      }
    },
    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        return Object.values(sourceData.posts)
          .filter(post =>postIds.includes(post['.key']))
        }
    },
    methods: {
      addPost ({post}) {
        const postId = post['.key']
        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
}
</script>