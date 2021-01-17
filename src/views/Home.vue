<template>
  <div class="col-full push-top">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
//  
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },
  computed:{
    categories () {
      return Object.values(this.$store.state.sourceData.categories)
    }
  },
  beforeCreate(){
    console.log('before create', this.categories)
  },
  created (){
    console.log('create', this.categories)
  },
  beforeMount(){
    console.log('before mount', this.categories)
  },
  mounted(){
    console.log('mounted', this.categories, this.$el.innerText)
  }
}
</script>
