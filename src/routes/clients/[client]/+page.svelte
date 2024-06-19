<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import ContactCTA from "$lib/components/ContactCTA.svelte";
	import Card from "$lib/components/Card.svelte";
	import {
		getClientBannerURL,
		getClientURL,
	} from "$lib/components/clients/_list";
	import type { PageData } from "./$types";

	export let data: PageData;
	$: metadata = data.client.metadata;
	$: component = data.client.component;
</script>

<svelte:head>
	<title>{metadata.name} - Rivoli Booking</title>
</svelte:head>

<Hero
	hero_info={{
		title: metadata.name,
		description: metadata.description,
		background: metadata.banner_file
			? {
					image: getClientBannerURL(metadata) || "",
				}
			: undefined,
		mode: metadata.use_light_theme ? "light" : "auto",
	}}
/>

<ul class="tags">
	{#each metadata.tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<div class="project">
	<svelte:component this={component}></svelte:component>
</div>

<div class="relative_projects">
	<h2>Autres réalisations</h2>
	<div class="projects">
		{#each data.relativeClients.slice(0, 2) as client}
			<Card
				content={{
					title: client.name,
					description: client.description,
					image: getClientBannerURL(client),
					tags: client.tags,
					link: {
						label: "Découvrir",
						url: getClientURL(client),
					},
				}}
			/>
		{/each}
	</div>
</div>

<ContactCTA />

<style lang="scss">
	@import "$lib/scss/mixins/tag";

	ul.tags {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;

		> li {
			@include Tag;
		}
	}

	.project {
		padding: 15px 10px;
	}

	.relative_projects {
		margin: 25px 0;
		padding: 0 15px;

		> h2 {
			font-size: 5vw;
			text-align: center;
		}

		> .projects {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
