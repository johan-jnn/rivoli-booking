<script lang="ts" context="module">
	export interface FAQItem {
		question: string;
		answers: string[];
	}
</script>

<script lang="ts">
	import { fly } from "svelte/transition";
	export let item: FAQItem;

	let showAnswer = false;
</script>

<div class="faq-item">
	<button
		type="button"
		class="nodefault"
		on:click={() => (showAnswer = !showAnswer)}
	>
		<div class="icon" class:cross={showAnswer}></div>
		<h5>{item.question}</h5>
	</button>

	{#if showAnswer}
		<div class="answer" transition:fly>
			{#each item.answers as answer}
				<p>{answer}</p>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@import "$lib/scss/colors";

	.faq-item {
		width: 100%;
		margin: 25px 0;

		> button {
			width: 100%;
			border: none;
			background-color: transparent;
			cursor: pointer;
			text-align: left;
			font-family: inherit;
			font-size: 1em;

			display: grid;
			grid-template-columns: 24px 1fr;
			align-items: center;
			gap: 15px;

			> .icon {
				aspect-ratio: 1 / 1;
				position: relative;

				&::before,
				&::after {
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					width: 75%;
					height: 10%;

					transform-origin: center center;
					translate: -50% -50%;

					border-radius: 999px;

					background-color: var(--color-black);
				}
				&::before {
					rotate: 90deg;
					transition: rotate 0.15s;
				}

				&.cross::before {
					rotate: 0deg;
				}
			}
		}

		> .answer {
			margin-top: 25px;

			color: darken($color: map-get($colors, "white"), $amount: 50);
		}
	}
</style>
