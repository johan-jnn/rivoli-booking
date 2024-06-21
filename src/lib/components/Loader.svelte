<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div class="loader" transition:fade>
	<h2>
		Un instant
		<span class="dots">
			{#each new Array(3) as _}
				<span>.</span>
			{/each}
		</span>
	</h2>
	<p>Des éléments de la page sont en train d'être chargés</p>
</div>

<style lang="scss">
	$translate-distance: 0.2em;
	$animation-duration: 0.5s;

	@keyframes dotAnimation {
		0%,
		15% {
			translate: 0 0;
		}
		100% {
			translate: 0 (-$translate-distance);
		}
	}

	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

    background-color: var(--color-dark);

		color: var(--color-light);
		display: grid;
		text-align: center;
		place-content: center;

		z-index: 15;

    > h2 {
      font-size: max(5vw, 50px);
    }

		.dots {
			> span {
				display: inline-block;
				animation: dotAnimation $animation-duration infinite ease-in-out
					alternate;
        will-change: translate;

				@for $i from 0 to 3 {
					&:nth-of-type(#{$i + 1}) {
						animation-delay: calc($animation-duration / 10 * $i);
					}
				}
			}
		}

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      width: min(100%, 500px);
      aspect-ratio: 1 / 1;

      background: url("/logo.png");
      background-size: cover;
      background-position: center;
    }
	}
</style>
