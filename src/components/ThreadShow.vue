<template>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <div class="post-list">
        <div v-for="(postId, n) in thread.posts" :key="n" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
            <a href="#"><img :src="users[posts[postId].userId].avatar" alt="" class="avatar-large"></a>
            <p class="desktop-only text-small">107 posts</p>
            <p class="desktop-only text-small">23 threads</p>
          </div>
          <div class="post-content">
            <div>
              <p>
                {{posts[postId].text}}
              </p>
            </div>
          </div>
          <div class="post-date text-faded">
            6 hours ago
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import sourceData from '@/assets/js/data'

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            thread: sourceData.threads[this.id],
            posts: sourceData.posts,
            users: sourceData.users
        }
    }
}
</script>