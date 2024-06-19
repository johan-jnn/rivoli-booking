<script lang="ts">
	import artists from "$lib/constants/artists.json";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import Card from "./Card.svelte";
	import splide_default_opt from "$lib/data/splide_default_opt";
	import Section from "./Section.svelte";
	import { getArtistBookingURL, getArtistPDPURL } from "$lib/utils/artists";
</script>

<Section
	heading={{
		title: "Booking Artistes",
		description: `Avec plus de ${Math.floor(artists.length / 10) * 10 || artists.length} DJ, musiciens
	et chanteurs talentueux dans notre catalogue, nous sommes fiers de dire que nous
	sommes la référence pour les besoins de bookings de nos clients.`,
		button: {
			label: "Booker un artiste",
			url: "/contact#booking"
		},
		link: {
			label: "Voir tous nos artistes",
			url: "/artists"
		}
	}}
>
	<div class="slider">
		<Splide options={splide_default_opt}>
			{#each artists as artist}
				<SplideSlide>
					<Card
						content={{
							title: artist.name,
							description: artist.bio,
							link: {
								url: getArtistBookingURL(artist),
								label: "Booker",
							},
							tags: artist.styles,
							image: artist.pdp_file
								? getArtistPDPURL(artist)
								: undefined,
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
