<template>
  <div>
      <!-- 三级联动注册全局主键,不需要重复引入 -->
      <TypeNav></TypeNav>
      <button @click="add">+1</button>
      <h1>{{count}}</h1>
  </div>
</template>

<script>

// 引入vuex中的数据
import {mapState} from 'vuex';
export default {
  name:'Home',
  components:{},
  computed:{
    ...mapState(['count'])
  },
  methods:{
    add(){
      //派发action
      this.$store.dispatch('add')
    }
  }

}
</script>

<style>

</style>