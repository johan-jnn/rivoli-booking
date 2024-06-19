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
			video: "/videos/abstract_fluid_background_colored.mp4",
			overlay: {
				blur: 5
			}
		},
		button: {
			label: "Découvrir nos clients",
			link: "/clients",
		},
		mode: "invert"
	}}
/>

<main>
	<section class="accroche">
		<p>
			Choisissez le service qui correspond à votre vision. Rivoli Booking
			vous accompagne en Image, Digital et Artistes pour une réalisation
			sur mesure !
		</p>
	</section>

	<h2>Une vision sur-mesure</h2>

	<Clients />
	<Artists />
	<ContactCta />

	<FAQ />
</main>

<style lang="scss">
	main {
		padding: 0 15px;
		> section {
			margin: 50px 0;
		}
		.accroche {
			margin: 10vh auto;
			width: min(100%, 550px);
			text-align: center;
		}
	}
</style>
