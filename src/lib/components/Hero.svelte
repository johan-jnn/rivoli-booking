<script lang="ts">
	import { reveal } from "svelte-reveal";

	export let hero_info: {
		title: string;
		description: string;
		background?:
			| {
					video: string;
			  }
			| {
					image: string;
			  };
		button?: {
			label: string;
			link?: string;
		};
		mode?: "light" | "dark" | "invert" | "auto";
	};
</script>

<div id="hero" data-theme={hero_info.mode || "auto"}>
	{#if hero_info.background}
		{@const { background } = hero_info}
		<div class="background">
			{#if "video" in background}
				<video
					src={background.video}
					controls={false}
					autoplay
					loop
					muted
				>
					<track kind="captions" />
				</video>
			{:else if "image" in background}
				<img src={background.image} alt="Background du hero-header" />
			{/if}
		</div>
	{/if}

	<h1
		use:reveal={{
			preset: "fly",
			duration: 1000,
			blur: 5,
		}}
	>
		{hero_info.title}
	</h1>
	<p>{hero_info.description}</p>

	{#if hero_info.button}
		{@const { button } = hero_info}
		<a href={button.link}>
			<button type="button">{button.label}</button>
		</a>
	{/if}
</div>

<style lang="scss">
	#hero {
		height: calc(100vh - var(--header-height, 10vh));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: relative;

		padding: 10px max(20%, 15px);
		gap: 15px;
		text-align: center;

		h1 {
			font-size: 10vw;

			@media screen and (max-width: 720px) {
				font-size: 15vw;
			}
		}

		> .background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;

			pointer-events: none;

			mask-image: linear-gradient(to bottom, #000 75%, transparent);

			> * {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&[data-theme="light"] {
			h1, p, button {
				color: var(--color-white);
				border-color: var(--color-white);
			}
		}
		&[data-theme="invert"] {
			h1, p, button {
				color: var(--color-white);
				border-color: var(--color-white);
				mix-blend-mode: difference;
			}
		}
	}
</style>