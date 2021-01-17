<template>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>
      <PostEditor :threadId="id"/>
    </div>
</template>
<script>
 
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
    computed: {
      thread () {
        return this.$store.state.sourceData.threads[this.id]
      },
      posts () {
        const postIds = Object.values(this.thread.posts)
        return Object.values(this.$store.state.sourceData.posts)
          .filter(post =>postIds.includes(post['.key']))
        }
    }
}
</script>