<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ComponentWithStore/>
  </div>
</template>

<script>
import ComponentWithStore from '@/components/ComponentWithStore.vue';

export default {
  components: { ComponentWithStore }
}
</script>