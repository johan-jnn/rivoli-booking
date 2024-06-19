<script lang="ts">
	import faq from "$lib/constants/faq.json";
	import Section from "../Section.svelte";
	import Item, { type FAQItem } from "./Item.svelte";

	export let custom_list: FAQItem[] = faq;
	export let include_contact_link = true;
</script>

<Section
	heading={{
		title: "FAQ",
		description: "Les questions les plus fréquentes qui nous sont posées",
		link:
			(include_contact_link && {
				label: "Nous contacter",
				url: "/contact#any",
			}) ||
			undefined,
	}}
>
	<ol>
		{#each custom_list as item, index}
			<li>
				<Item {item} />

				{#if index < custom_list.length - 1}
					<hr />
				{/if}
			</li>
		{/each}
	</ol>
</Section>

<style lang="scss">
	ol {
		list-style: none;
		max-width: 850px;
		margin: 0 auto;
		margin-top: 50px;

		padding: 10px 25px;
	}
</style>
