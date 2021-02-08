<template>
    <div class="col-full push-top">
        <h1>Create new thread in <i>{{forum.name}}</i></h1>
        <form @submit.prevent="save">
            <div class="form-group">
                <label for="thread_title">Title:</label>
                <input 
                    type="text" 
                    v-model="title" 
                    id="thread_title" 
                    class="form-input" 
                    name="title"
                >
            </div>
            <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea 
                  v-model="text"
                  name="content" 
                  id="thread_content" 
                  class="form-input" 
                  cols="140" 
                  rows="8">
                </textarea>
            </div>
            <div class="btn-groups">
                <button @click="cancel" class="btn btn-ghost">Cancel</button>
                <button class="btn btn-blue" type="submit" name="publish" >Publish</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        forum: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        save () {
            this.$store.dispatch('createThread', {
                forumId: this.forum['.key'],
                title: this.title,
                text: this.text
            }).then(thread => {
                this.$router.push({name: 'ThreadShow', params: {id: thread['.key']}})
            }).catch(error => console.log(error.message))

        },
        cancel () {
            this.$router.push({name:'Forum', params: {id: this.forum['.key']}})
        }
    }
}
</script>