<template>
    <div>Component with store</div>
</template>

<script>
import module from './componentStore.js';

export default {
    beforeCreate() {
		this.$store.registerModule(module.name, module);
	},

	beforeDestroy() {
		this.$store.unregisterModule(module.name);
	}
}
</script>