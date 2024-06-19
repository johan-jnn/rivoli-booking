<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	import "$lib/scss/_app.scss";
	import "svelte-reveal/styles.css";
	import "@splidejs/svelte-splide/css";
</script>

<svelte:head>
	<meta property="og:image" content="/logo.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rivoli Booking" />
	<meta name="description" content="Rivoli Booking, la touche créative qui donne vie à vos projets." />
	<meta name="theme-color" content="#ff3131" />
</svelte:head>

<Header />

<slot />

<Footer />
