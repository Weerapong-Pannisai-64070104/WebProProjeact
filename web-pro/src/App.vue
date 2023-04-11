<template>
  <router-view>
   
  </router-view>
  
</template>
<script>
export default{
  methods:{
    logout(){
      this.$store.commit('logout')
    }
  },
  mounted(){
    this.$store.commit('initializeStore')
  }
}
</script> 