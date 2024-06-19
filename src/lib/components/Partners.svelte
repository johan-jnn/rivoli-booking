<script lang="ts">
	import ParisSociety from "$lib/assets/partners/paris_society.png";
	import Monoprix from "$lib/assets/partners/monoprix.png";
	import Evolve from "$lib/assets/partners/evolve.png";
	import Flow from "$lib/assets/partners/flow.png";
	import Cesar from "$lib/assets/partners/cesar.png";
	import DHB from "$lib/assets/partners/deep_house_bible.png";

	const partners: string[] = [
		ParisSociety,
		Monoprix,
		Evolve,
		Flow,
		Cesar,
		DHB,
	];
</script>

<div class="content-wrapper">
	<h2>Ils nous font confiance</h2>

	<ul>
		{#each partners as src}
			<li>
				<img {src} alt="Logo de notre partenaire" />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.content-wrapper {
		text-align: center;
		max-width: 650px;
		margin: 120px auto;
		padding: 0 25px;
		display: grid;
		place-items: center;
		gap: 30px;

		> h2 {
			font-size: 5vw;
		}
		> ul {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 25px 15px;
			filter: invert(1);

			img {
				height: 50px;
			}
		}
	}
</style>
