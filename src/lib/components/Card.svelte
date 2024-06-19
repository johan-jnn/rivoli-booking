<script lang="ts">
	export let content: {
		title: string;
		tags: string[];
		description: string;
		link: {
			url: string;
			label: string;
		};
		image?: string;
	};
</script>

<div class="card">
	<div class="img-wrapper">
		{#if content.image}
			<img
				src={content.image}
				alt="Banner of the card named {content.title}"
			/>
		{/if}
	</div>

	<ul class="tags">
		{#each content.tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>

	<h4>{content.title}</h4>
	<p>{content.description}</p>
	<a href={content.link.url}>{content.link.label}</a>
</div>

<style lang="scss">
  @import "$lib/scss/colors";
  @import "$lib/scss/mixins/tag";

	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 15px;
		max-width: 350px;
		padding: 10px 0;

		> .img-wrapper {
			width: 100%;
			aspect-ratio: 1 / 1;
			background-color: rgba(
				$color: map-get($map: $colors, $key: "black"),
				$alpha: 0.15
			);
			border-radius: 5px;
			overflow: hidden;

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		> .tags {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			list-style: none;

			> li {
				@include Tag;
			}
		}

		> h4 {
			font-size: 24px;
			text-transform: uppercase;
		}

		> p {
			color: lighten($color: map-get($colors, "black"), $amount: 50);
			font-size: 18px;
		}
	}
</style>
