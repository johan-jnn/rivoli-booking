<script lang="ts" context="module">
	import { writable, readonly } from "svelte/store";
	const loading = writable(true);

	export const loadingPage = readonly(loading);
</script>

<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Loader from "$lib/components/Loader.svelte";

	import "$lib/scss/_app.scss";
	import "svelte-reveal/styles.css";
	import "@splidejs/svelte-splide/css";

	import { onNavigate, beforeNavigate } from "$app/navigation";
	import { onMount } from "svelte";

	beforeNavigate((navigation) => {
		$loading = true;
		return new Promise<void>((resolve) => {
			resolve();
			navigation.complete;
		});
	});
	onNavigate((navigation) => {
		if ("startViewTransition" in document)
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
					$loading = false;
				});
			});
	});

	onMount(() => {
		loading.subscribe((value) => {
			document.body.classList.toggle("loading", value);
		});

		$loading = false;
	});
</script>

<svelte:head>
	<meta property="og:image" content="/logo.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rivoli Booking" />
	<meta
		name="description"
		content="Rivoli Booking, la touche créative qui donne vie à vos projets."
	/>
	<meta name="theme-color" content="#ff3131" />
</svelte:head>

{#if $loading}
	<Loader />
{/if}

<Header />

<slot />

<Footer />
