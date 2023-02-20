<template>
  <div class="three-content" id="three-dom" style="width: 100%; height: 100%">

  </div>
</template>

<script>
import ThreeMap from './ThreeMap.js';
import {SceneData} from "./sceneData2"

export default {
name: "test",
  data() {
  return {
    map: null
  }
  },
  mounted() {
    let props={domID:"three-dom"}
    this.map = new ThreeMap(props, SceneData);
    this.map.init();
  },
}
</script>

<style scoped>

</style>
