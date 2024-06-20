<script>
	import Hero from "$lib/components/Hero.svelte";
	import mentions from "$lib/constants/mentions.html?raw";
</script>

<svelte:head>
  <title>Mentions Légales</title>
</svelte:head>

<Hero
	hero_info={{
		title: "Mentions légales",
		description: "Veuillez prendre le temps de lire ces informations",
	}}
/>

<div id="mentions">
  {@html mentions}
</div>

<style lang="scss">
  #mentions {
    padding: 0 15px;
  }
</style>