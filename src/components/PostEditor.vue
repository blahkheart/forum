<template>
    <div>
        <form @keyup.enter="save" @submit.prevent="save">
            <div class="form-group">
            <textarea 
                name="" 
                class="form-input" 
                id="" 
                cols="30" 
                rows="10"
                v-model="text"
            ></textarea>
            </div>
            <div class="form-actions">
            <button type="submit" class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        threadId: {
            required: true
        }
    },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      save () {
        const postId = 'someString' + Math.random()
        const post = {
          text: this.text,
          publishedAt: Math.floor(Date.now()/1000),
          threadId: this.threadId,
          userId: "7uVPJS9GHoftN58Z2MXCYDqmNAh2",
          ".key": postId
        }
        this.$emit('save', {post})
        this.text = ''

      }
    }
}
</script>