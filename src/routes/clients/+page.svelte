<script lang="ts">
	import ContactCta from "$lib/components/ContactCTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Partners from "$lib/components/Partners.svelte";
	import clients, { getClientURL, getClientBannerURL } from "$lib/components/clients/_list";

	import { reveal } from "svelte-reveal";
</script>

<svelte:head>
	<title>Nos clients - Rivoli Booking</title>
</svelte:head>

<Hero
	hero_info={{
		title: "L'expertise Rivoli",
		description:
			"Découvrez notre domaine d'expertise à travers tous nos projets",
	}}
/>

<ul class="projects">
	{#each clients as client, index}
		<li>
			<a
				href={getClientURL(client)}
				style:--bg-url="url({getClientBannerURL(client)})"
				use:reveal={{
					duration: 750,
					blur: 5,
					y: 20,
					delay: index % 2 ? 100 : 0
				}}
			>
				<ul>
					{#each client.tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>

				<h3>{client.name}</h3>
			</a>
		</li>
	{/each}
</ul>

<Partners />
<ContactCta />

<style lang="scss">
	@import "$lib/scss/colors";
	$hover-margin: 10px;
	$hover-transition: 0.5s ease-in-out;

	ul.projects {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 0 25px;

		@media screen and (max-width: 850px) {
			grid-template-columns: 1fr;
		}

		> li {
			a {
				aspect-ratio: 2 / 1;
				display: block;
				width: 100%;
				height: 100%;
				padding: 5%;
				color: var(--color-white);
				text-decoration: none;

				position: relative;

				background: var(--bg-url),
					lighten($color: map-get($colors, "black"), $amount: 10);
				background-position: center;
				background-size: cover;

				clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
				transition: clip-path $hover-transition;

				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					pointer-events: none;

					background-color: var(--color-black);
					opacity: 0;
					transition: opacity $hover-transition;

					z-index: -1;
				}

				&:hover {
					clip-path: polygon(
						$hover-margin $hover-margin,
						calc(100% - $hover-margin) $hover-margin,
						calc(100% - $hover-margin) calc(100% - $hover-margin),
						$hover-margin calc(100% - $hover-margin)
					);

					&::before {
						opacity: 0.35;
					}
				}

				> ul {
					list-style: none;
					margin-bottom: 2.5%;
					font-size: 12.5px;
				}

				> h3 {
					font-size: 24px;
				}
			}
		}
	}
</style>
