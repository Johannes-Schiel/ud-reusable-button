<script lang="ts">
import { defineComponent } from 'vue';

enum CustomButtonThemes {
	prime = 'prime',
	secondary = 'secondary',
}

export default defineComponent({
	name: 'CustomButton',
	inheritAttrs: false,
	props: {
		label: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
		theme: {
			type: String,
			required: false,
			default: CustomButtonThemes.prime,
			validator(value: string) {
				return Object.keys(CustomButtonThemes).includes(value);
			},
		},
	},
	emits: ['click'],
});
</script>

<template>
	<button
		@click="$emit('click', $event)"
		class="custom-button"
		:class="theme"
		:disabled="disabled">
		{{ label }}
	</button>
</template>

<style lang="scss">
.custom-button {
	border: none;
	border-radius: 1rem;
	padding: 1.5rem 2rem;
	font-size: 1.7rem;
	font-family: $roboto;
	font-weight: 700;
	transition: all 250ms ease-in-out;
	margin: 1rem;
	&:focus,
	&:hover {
		cursor: pointer;
		transform: translate(0, -0.5rem);
	}
	&.prime {
		background-color: $ciGreen;
		color: $second;
	}
	&.secondary {
		background-color: transparent;
		border: 0.2rem solid $ciGreen;
		color: $ciGreen;
	}
	&:disabled {
		background-color: transparent;
		border: 0.2rem solid $ciGrey;
		color: $ciGrey;
		&:focus,
		&:hover {
			cursor: auto;
			transform: translate(0, 0);
		}
	}
}
</style>
