<template>
  <div>
    <h3>兄弟组件A</h3>
    <siblings-a></siblings-a>
    <h3>兄弟组件B</h3>
    <siblings-b></siblings-b>
  </div>
</template>

<script>
import siblingsA from '@/components/eventbus/siblingsA.vue'
import siblingsB from '@/components/eventbus/siblingsB.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    siblingsA,
    siblingsB
  }
}
</script>
