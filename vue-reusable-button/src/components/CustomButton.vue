<template>
	<button
		class="custom-button"
		:class="theme"
		@click="$emit('click', $event)"
		:disabled="disabled">
		{{ label }}
	</button>
</template>

<script>
export default {
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
			default: 'prime',
			validator(value) {
				return ['prime', 'secondary'].includes(value);
			},
		},
	},
	emits: ['click'],
};
</script>

<style lang="scss" scoped>
.custom-button {
	border: none;
	border-radius: 1rem;
	margin: 1rem;
	padding: 1.5rem 2rem;
	font-size: 1.7rem;
	font-weight: 700;
	font-family: $roboto;
	transition: all 250ms ease-in-out;
	&:hover,
	&:focus {
		cursor: pointer;
		transform: translate(0, -1rem);
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
		&:hover,
		&:focus {
			cursor: auto;
			transform: translate(0, 0);
		}
	}
}
</style>
