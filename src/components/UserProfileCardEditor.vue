<template>
    <div class="col-3 push-top">
        <div class="profile-card">
            <p class="text-center">
                <img :src="user.avatar" alt="" class="avatar-xlarge img-update">
            </p>

            <form>
                <div class="form-group">
                    <input v-model="activeUser.username" type="text" placeholder="username" class="form-input text-lead text-bold">
                </div>
                <div class="form-group">
                    <input v-model="activeUser.name" type="text" placeholder="Full Name" class="form-input text-lead">
                </div>
                <div class="form-group">
                    <label for="user_bio">Bio</label>
                    <textarea v-model="activeUser.bio" id="form-input" class="form-input" placeholder="Write a few words about yourself."></textarea>
                </div>
                <div class="stats">
                    <span>{{userPostsCount}} posts</span>
                    <span>{{userThreadsCount}} threads</span>
                </div>
                <hr>
                <div class="form-group">
                    <label for="user_website" class="form-label">Website</label>
                    <input v-model="activeUser.website" type="text" autocomplete="off" class="form-input" id="user_website">
                </div>
                <div class="form-group">
                    <label for="user_email" class="form-label">Email</label>
                    <input v-model="activeUser.email" type="email" autocomplete="off" class="form-input" id="user_email">
                </div>
                <div class="form-group">
                    <label for="user_location" class="form-label">Location</label>
                    <input v-model="activeUser.location" type="text" autocomplete="off" class="form-input" id="user_location">
                </div>
                <div class="btn-group space-between">
                    <button @click="cancel" class="btn-ghost">Cancel</button>
                    <button type="submit" @click.prevent="save" class="btn-blue">Save</button>
                </div>
                <p class="text-small text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            required: true,
            type: Object
        },
        userPostsCount: {
            required: true,
            type: Number
        },
        userThreadsCount: {
            required: true,
            type: Number
        }
    },
    data () {
      return { 
        activeUser: {...this.user}
      }
    },
    // data: () => ({
    //     activeUser: {...this.user}
    // }),
    methods: {
        save () {
            this.$store.dispatch('updateUser', {...this.activeUser})
            this.$router.push('/profile')

        },
        cancel () {
            this.$router.push('/profile')
        }
    }
}
</script>