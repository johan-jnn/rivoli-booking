<script>
	import Hero from "$lib/components/Hero.svelte";
	import mentions from "$lib/constants/rgpd.html?raw";
</script>

<svelte:head>
  <title>Politique de confidentialité</title>
</svelte:head>

<Hero
	hero_info={{
		title: "RGPD",
		description:
			"Veuillez prendre le temps de lire ces informations sur les données que nous récaultons",
	}}
/>

<div id="rgpd">
	{@html mentions}
</div>

<style lang="scss">
	#rgpd {
		padding: 0 15px;
	}
</style>
