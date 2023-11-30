<template>
  <h3>引入第三方组件</h3>
  <div class="hello">
    <Swiper>
      <SwiperSlide>
        <img src="../assets/logo.png">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/logo.png">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper,SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: "component",
  components:{
    Swiper,
    SwiperSlide
  },
}
</script>

<style scoped>

</style>