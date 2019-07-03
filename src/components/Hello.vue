<template>
   <div class="hello">
      <News></News>
   </div>
</template>

<script>
import News from './News'
import api from '@/axios/api'
export default {
  name:'',
  components: {
    News
  },
  data(){
   return {

   }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      api.http('/news/index','type=top&key=123456').then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style lang='less' scoped>

</style>
