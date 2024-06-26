<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Social from "$lib/components/Social.svelte";
	import { getArtistPDPURL, getArtistBookingURL } from "$lib/utils/artists";
	import type { PageData } from "./$types";

	export let data: PageData;
	const { artist } = data;
</script>

<Hero
	hero_info={{
		title: artist.name,
		description: artist.bio,
		background: artist.pdp_file
			? {
					image: getArtistPDPURL(artist),
				}
			: undefined,
		button: {
			label: `Booker ${artist.name}`,
			link: getArtistBookingURL(artist),
		},
	}}
/>

<Social icons={artist.contact} />
