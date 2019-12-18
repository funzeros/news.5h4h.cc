<template>
  <div>
    <v-header class="pos-header"></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vNav from '@/components/vNav'
export default {
  created() {
    let likelist = JSON.parse(window.localStorage.getItem('likelist'))
    this.$store.state.collection = likelist || []
  },
  components: {
    vHeader,
    vNav
  },
  computed: {
 
  }
}
</script>

<style lang="css" scoped>
.pos-header {
  position: fixed;
  top: 0;
}
</style>
