<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Section from "$lib/components/Section.svelte";
	import artists from "$lib/constants/artists.json";
	import Faq from "$lib/components/faq/FAQ.svelte";
	import { onMount } from "svelte";
	import { Loader } from "@googlemaps/js-api-loader";

	let selectedArtist: string | null;
	let locationElement: HTMLInputElement;
	onMount(async () => {
		selectedArtist = new URLSearchParams(location.search).get("artist");

		const loader = new Loader({
			apiKey: "AIzaSyDaZKPknXhC5l2U693JwVGbVgSxugtOgzA",
			language: "fr",
		});
		const places = await loader.importLibrary("places");
		new places.Autocomplete(locationElement, {
			componentRestrictions: {
				country: "fr",
			},
		});
	});
</script>

<svelte:head>
	<title>Nous contacter - Rivoli Booking</title>
</svelte:head>

<!-- <Hero
	hero_info={{
		title: "Nous contacter",
		description: "Une question ? Un DJ à booker ? Contactez-nous !",
	}}
/> -->

<Section
	heading={{
		title: "Booker un DJ",
		description: "Demandez à booker un DJ : nous reviendrons vers vous pour finaliser le booking !",
		customID: "booking",
		link: {
			label: "Voir la liste de nos artistes",
			url: "/artists#list"
		}
	}}
>
	<form method="post" data-netlify="true" name="booking">
		<fieldset>
			<legend>Vos informations</legend>

			<label for="name">
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Votre nom"
					required
				/>
			</label>
			<label for="email">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Votre adresse email"
					required
				/>
			</label>
			<label for="phone">
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="Votre numéro de téléphone (optionel)"
				/>
			</label>
			<label for="needs">
				<textarea
					name="besoins"
					id="needs"
					placeholder="Décrivez-nous vos besoins"
					required
				></textarea>
			</label>
		</fieldset>

		<fieldset>
			<legend>Information sur l'artiste</legend>

			<label for="artist">
				Choisissez votre artiste
				<select name="artiste" id="artist" required>
					<option
						value="Peu importe"
						selected={!artists.find(
							(artist) => artist.name === selectedArtist
						)}>Nous laisser choisir le plus adapté</option
					>
					{#each artists as { name, styles }}
						<option value={name} selected={name === selectedArtist}
							>{name}</option
						>
					{/each}
				</select>
			</label>

			<label for="date">
				Date de l'événement
				<input type="date" name="date" id="date" required />
			</label>

			<!-- 
					https://developers.google.com/maps/documentation/javascript/place-autocomplete?hl=fr
				 -->
			<label for="location">
				Lieu de l'événement
				<input
					type="text"
					name="lieu"
					bind:this={locationElement}
					id="location"
					required
				/>
			</label>
		</fieldset>

		<button type="submit">Booker dès maintenant !</button>
	</form>
</Section>

<Section
	heading={{
		title: "Autre information",
		description: "Pour toutes questions ou informations complémentaire",
		customID: "any",
		link: {
			label: "Voir la FAQ",
			url: "#faq",
		},
	}}
>
	<form name="contact" data-netlify="true" method="post">
		<label for="name">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Votre nom"
				required
			/>
		</label>
		<label for="email">
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Votre adresse email"
				required
			/>
		</label>
		<label for="phone">
			<input
				type="tel"
				name="phone"
				id="phone"
				placeholder="Votre numéro de téléphone (optionel)"
			/>
		</label>
		<label for="request">
			<textarea
				name="requête"
				id="request"
				placeholder="Décrivez-nous votre requête"
				required
			></textarea>
		</label>

		<button type="submit">Prendre contact</button>
	</form>
</Section>

<Faq include_contact_link={false} />

<style lang="scss">
	form {
		max-width: 850px;
		margin: 0 auto;

		@media screen and (min-width: 850px) {
			&[name="booking"] {
				display: grid;
				grid-template-areas:
					"infos artist"
					"submit submit";
				grid-template-columns: repeat(2, 1fr);
				gap: 0 15px;
				max-width: 1200px;

				> :first-child {
					grid-area: infos;
				}
				> :nth-child(2) {
					grid-area: artist;
				}
				> :last-child {
					grid-area: submit;
				}
			}
		}
	}
</style>
