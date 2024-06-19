<script lang="ts">
	import clients, { getClientBannerURL, getClientURL } from "$lib/components/clients/_list";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import Card from "./Card.svelte";
	import splide_default_opt from "$lib/data/splide_default_opt";
	import Section from "./Section.svelte";
</script>

<Section
	heading={{
		button: {
			label: "Contacter",
			url: "/contact",
		},
		link: {
			label: "Voir tous nos clients",
			url: "/clients"
		}
	}}
>
	<div class="slider">
		<Splide options={splide_default_opt}>
			{#each clients as client}
				<SplideSlide>
					<Card
						content={{
							title: client.name,
							description: client.description,
							link: {
								url: getClientURL(client),
								label: "Découvrir",
							},
							tags: client.tags,
							image: getClientBannerURL(client),
						}}
					/>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</Section>

<style lang="scss">
	.slider {
		margin: 15px 0;
	}
</style>
