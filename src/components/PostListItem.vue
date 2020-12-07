<template>
  <div class="post">
    <div class="user-info">
        <a href="#" class="user-name">{{user.name}}</a>
        <a href="#">
            <img :src="user.avatar" alt="" class="avatar-large">
        </a>
        <p class="desktop-only text-small">{{userPostsCount}}</p>
    </div>
    <div class="post-content">
        <div>
            {{post.text}}
        </div>
    </div>
    <div class="post-date text-faded" :title="post.publishedAt | userFriendlyDate">
        {{post.publishedAt | userFriendlyDateRelative}}
    </div>
  </div>
</template>

<script>
import sourceData from '@/assets/js/data'
import moment from 'moment'

export default {
    props: {
        post: {
            required: true,
            type: Object
        }
    },
    computed: {
        user () {
            return sourceData.users[this.post.userId]
        },
        userPostsCount () {
            return Object.keys(this.user.posts).length
        }
    },
    filters: {
        userFriendlyDate (date) {
            return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
        },
        userFriendlyDateRelative (date) {
            return moment.unix(date).fromNow()
        }
    }
}
</script>