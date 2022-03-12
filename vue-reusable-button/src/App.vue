<template> </template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomButton from '@/components/CustomButton.vue';

export default defineComponent({
	components: {
		CustomButton,
	},
	methods: {
		doSomething: ($event: MouseEvent, text: string) => {
			console.log(text, $event.target);
		},
	},
});
</script>

<style lang="scss">
body,
html {
	background-color: $second;
	font-size: 10px;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

* {
	box-sizing: border-box;
}
</style>
