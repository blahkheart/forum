<template>
    <div class="thread">
        <div>
            <p>
                <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']} }">{{thread.title}}</router-link>
            </p>
            <p class="text-faded text-xsmall">
              By  <a href="#">{{user.name}}</a> 
              <app-date :timestamp="thread.publishedAt"/>
              <!-- <AppDate :timestamp="thread.publishedAt"/> -->
            </p>
        </div>
        <div class="activity">
            <p class="replies-count">
                {{repliesCount}} <span v-if="repliesCount > 1">replies</span> <span v-else>reply</span>
            </p>
            <!-- <img src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="" class="avatar-medium"> -->
            <!-- <div>
                <p class="text-small">
                    <a href="#" class="text-xsmall">name</a>
                </p>
                <p class="text-faded text-xsmall">1 month ago</p>
            </div> -->
        </div>
    </div>
</template>

<script>
 import {countObjectProperties} from '@/utils'
export default {
    props: {
        thread: {
            required: true,
            type: Object
        }
    },
    computed: {
        repliesCount () {
            return countObjectProperties(this.thread.posts) - 1
        },
        user () {
            return this.$store.state.sourceData.users[this.thread.userId]
        }
    }
}
</script>