<template>
	<div class="buttons">
		<CustomButton
			@click="doSomething($event)"
			theme="prime"
			label="Custom Button" />
		<CustomButton
			@click="doSomething($event)"
			theme="secondary"
			label="Custom Button" />
		<CustomButton
			@click="doSomething($event)"
			theme="secondary"
			disabled
			label="Custom Button" />
	</div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
export default {
	components: { CustomButton },
	methods: {
		doSomething: ($event) => {
			console.log($event);
		},
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: $roboto;
	src: url('@/assets/fonts/Roboto-Bold.ttf');
	font-weight: 700;
}

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
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
}

* {
	box-sizing: border-box;
}
</style>
