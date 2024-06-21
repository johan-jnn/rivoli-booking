<script lang="ts">
	export let icons: {
		linkedin?: string;
		instagram?: string;
		youtube?: string;
		twitter?: string;
		facebook?: string;
		email?: string;
		phone?: string;
	} = {};
</script>

<ul class="socials">
	{#each Object.entries(icons) as [network, link]}
		{@const [target, href] = [
			link.startsWith("http") ? "_blank" : null,
			network === "email"
				? `mailto:${link}`
				: network === "phone"
					? `tel:${link}`
					: link,
		]}
		<li data-network={network}>
			<a {href} {target}>
				<img src="/networks/{network}.svg" alt="{network}'s icon" />
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 10px;
		margin: 15px 5px;

		> li {
			height: 25px;
			aspect-ratio: 1 / 1;
			filter: invert(1);

			* {
				display: inline-block;
				object-fit: contain;
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
