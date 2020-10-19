<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ComponentWithStore/>
  </div>
</template>

<script>
import ComponentWithStore from '@/components/ComponentWithStore.vue';

export default {
  name: "Home",
  components: {
    ComponentWithStore
  }
};
</script>
