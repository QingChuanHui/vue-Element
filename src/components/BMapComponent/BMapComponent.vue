<template>
  <!--地图容器-->
  <div id="allmap" class="allmap"></div>
</template>
<script>
import BMap from 'BMap'
export default {
  name: '',
  data() {
    return {

    }
  },
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map('allmap') // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
  }
}

</script>
<style scoped>
html,
body,
.allmap {
  height: 600px;
}

</style>