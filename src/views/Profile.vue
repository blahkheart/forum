<template>
    <div class="flex-grid">
        <UserProfileCard
            v-if="!edit"
            :user="user"
            :userThreadsCount="userThreadsCount"
            :userPostsCount="userPostsCount"
        />
        <UserProfileCardEditor
            v-else
            :user="user"
            :userThreadsCount="userThreadsCount"
            :userPostsCount="userPostsCount"
        />

        <div class="col-7 push-top">
            <div class="profile-header">
                <span class="text-lead">
                    {{user.username}}'s recent activity
                </span>
                <a href="#">see only started threads</a>
            </div>
            <hr>

            <postList :posts="userPosts" />

            <!-- <div class="activity-list">
                <div class="activity">
                    <div class="activity-header">
                        <img src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg" alt="" class="hide-small avatar-small">
                        <p class="title">
                            How can I chop onions without crying?
                            <span>joker started a topic in cooking</span>
                        </p>
                    </div>

                    <div class="post-content">
                        <div>
                            <p>I absolutely love onions, but they hurt my eyes! is there a way you can chop onions without crying?</p>
                        </div>
                    </div>

                    <div class="thread-details">
                        <span>4 minutes ago </span>
                        <span>1 comment</span>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import postList from '@/components/PostList'
import {mapGetters} from 'vuex'
import {countObjectProperties} from '@/utils'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '../components/UserProfileCardEditor.vue'

export default {
    components: {
        postList,
        UserProfileCard,
        UserProfileCardEditor
    },
    props:{
        edit: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser'
        }),
        userThreadsCount () {
            return countObjectProperties(this.user.threads)
        },
        userPostsCount () {
            return countObjectProperties(this.user.posts)
        }
        ,
        userPosts () {
            if(this.user.posts) {
                return Object.values(this.$store.state.sourceData.posts)
                .filter(post => post.userId === this.user['.key'])
            }
            return []
        }
    }
}
</script>