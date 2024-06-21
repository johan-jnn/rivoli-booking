<script>
	import Hero from "$lib/components/Hero.svelte";
	import artists from "$lib/constants/artists.json";

	import FAQ from "$lib/components/faq/FAQ.svelte";
	import Partners from "$lib/components/Partners.svelte";
	import ContactCTA from "$lib/components/ContactCTA.svelte";
	import { getArtistBookingURL, getArtistPDPURL } from "$lib/utils/artists";
</script>

<svelte:head>
	<title>Nos artistes - Rivoli Booking</title>
</svelte:head>

<Hero
	hero_info={{
		title: "Les artistes",
		description: "Bookez nos talents",
		background: {
			video: "https://assets-global.website-files.com/632adb498dc5518bbb594467/63ebb8b7c3ee5062bea8614c_production%20ID_4043980-transcode.webm",
		},
		button: {
			label: "Booker un artiste",
			link: "#list",
		},
		mode: "light",
	}}
/>

<ul id="list">
	{#each artists as artist}
		<li
			style:--bg-url="url({artist.pdp_file
				? getArtistPDPURL(artist)
				: "/logo.png"})"
		>
			<div>
				<div class="topside">
					<ul>
						{#each artist.styles as style}
							<li>{style}</li>
						{/each}
					</ul>

					<h4>{artist.name}</h4>
					<p>{artist.bio}</p>
				</div>

				<a href={getArtistBookingURL(artist)}>Booker</a>
			</div>
		</li>
	{/each}
</ul>

<FAQ />
<ContactCTA />

<style lang="scss">
	@import "$lib/scss/colors";
	@import "$lib/scss/mixins/tag";

	ul#list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15px;
		padding: 10px 25px;

		@media screen and (max-width: 920px) {
			grid-template-columns: repeat(2, 1fr);
			.topside {
				gap: 10px !important;
			}
		}
		@media screen and (max-width: 550px) {
			grid-template-columns: 1fr;
		}

		> li {
			background: var(--bg-url),
				lighten($color: map-get($colors, "dark"), $amount: 50);
			background-position: center;
			background-size: cover;
			aspect-ratio: 1 / 1;

			> div {
				height: 100%;
				padding: 25px;

				color: var(--color-dark);
				background-color: rgba(
					$color: map-get($colors, "light"),
					$alpha: 0.5
				);

				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;

				opacity: 0;
				transition: opacity 0.5s;

				> .topside {
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					gap: 25px;

					> ul {
						list-style: none;

						> li {
							@include Tag(true);
						}
					}

					> p {
						font-size: 14px;
						font-style: italic;
					}
				}
			}

			&:hover > div {
				opacity: 1;
			}
		}
	}
</style>
