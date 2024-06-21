<script lang="ts">
	import header from "$lib/constants/header.json";

	let menuOpenner: HTMLInputElement;
	const closeMenu = () => (menuOpenner.checked = false);
</script>

<header>
	<a href="/" class="banner" on:click={closeMenu}>
		<img src="/banner.png" alt="Logo de la marque" />
	</a>

	<nav>
		<ul>
			{#each Object.entries(header) as [title, link]}
				<li>
					{#if link}
						<a
							href={link}
							target={link.startsWith("http") ? "_blank" : null}
							on:click={closeMenu}>{title}</a
						>
					{:else}
						<p>{title}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<a href="/contact" class="contact" on:click={closeMenu}>
		<button type="button">Nous contacter</button>
	</a>

	<input type="checkbox" title="Open/close the mobile navigation menu" bind:this={menuOpenner} />
</header>

<style lang="scss">
	:global(:root) {
		--header-height: 75px;

		scroll-padding-top: calc(var(--header-height) + 15px);
	}

	header {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--header-height);
		background-color: var(--color-dark);

		z-index: 10;

		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		grid-template-rows: 100%;
		align-items: center;

		padding: 0 15px;

		> .banner {
			height: 75%;
			width: fit-content;
			> img {
				height: 100%;
			}
		}

		> nav ul {
			list-style: none;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 15px;

			text-transform: uppercase;
		}

		a {
			color: inherit !important;
			text-decoration: none;
		}

		> .contact {
			margin: 0;
			margin-left: auto;
			display: block;
		}

		> input {
			display: none;
		}

		@media screen and (max-width: 720px) {
			display: flex;
			align-items: center;
			justify-content: space-between;

			> input {
				display: unset;
				appearance: none;
				height: 60%;
				aspect-ratio: 1 / 1;
				position: relative;
				margin: 0 15px;
				transition: rotate 0.25s;

				$bar-edge-distance: 35%;

				&::before,
				&::after {
					content: "";
					position: absolute;
					left: 50%;
					width: 75%;
					height: 5%;

					transform-origin: center center;
					translate: -50% -50%;

					border-radius: 999px;

					background-color: var(--color-light);

					transition: 0.25s;
				}
				&::before {
					top: $bar-edge-distance;
				}
				&::after {
					top: calc(100% - $bar-edge-distance);
				}

				&:checked {
					rotate: 45deg;
					&::before,
					&::after {
						top: 50%;
					}
					&::before {
						rotate: 90deg;
					}
				}
			}

			> nav {
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 0;
				padding: 0;
				overflow: hidden;
				background-color: var(--color-dark);

				&,
				> ul {
					transition: 0.75s cubic-bezier(0.5, 0, 0.25, 1.25);
				}

				> ul {
					height: 100%;
					font-size: 50px;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
					opacity: 0;
					scale: 0;
				}

				&:has(~ :checked) {
					padding: 25px 15px;
					height: calc(100vh - var(--header-height));
					> ul {
						opacity: 1;
						scale: 1;
					}
				}
			}
		}
	}
</style>
