<template>
    <div 
      class="col-full" 
      :class="$style.centered"
    >
        <h1 :class="$style.headingLarge">Not Found</h1>
        <p>Opps we couldn't find what you're looking for, why don't you <router-link :to="{name: 'Home'}">go home instead?</router-link></p>
    </div>
</template>
<style lang="scss" module>
    .centered{ 
        text-align: center;
    }
    .headingLarge {
        font-size: 100px; 
    }
    p {
        font-weight: 100;
        font-size: 30px;
    }
</style>