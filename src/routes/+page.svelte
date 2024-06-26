<script lang="ts">
	import Artists from "$lib/components/Artists.svelte";
	import ContactCta from "$lib/components/ContactCTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import FAQ from "$lib/components/faq/FAQ.svelte";
	import Clients from "$lib/components/Clients.svelte";
</script>

<svelte:head>
	<title>Rivoli Booking</title>
</svelte:head>

<Hero
	hero_info={{
		title: "Rivoli Booking",
		description:
			"Rivoli Booking, la touche créative qui donne vie à vos projets. Avec une palette complète de services en Image, Digital et Artistes, nous vous aidons à atteindre vos objectifs avec élégance et excellence.",
		background: {
			video: "/videos/homepage-background.webm",
			overlay: {
				blur: 10,
			},
		},
		button: {
			label: "Découvrir nos clients",
			link: "/clients",
		},
	}}
/>

<main>
	<Artists />
	<Clients />
	<ContactCta />

	<FAQ />
</main>

<style lang="scss">
	main {
		padding: 0 15px;
	}
</style>
