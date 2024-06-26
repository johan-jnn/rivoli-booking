<script lang="ts">
	import { reveal } from "svelte-reveal";

	export let hero_info: {
		title: string;
		description: string;
		background?: (
			| {
					video: string;
			  }
			| {
					image: string;
			  }
		) & {
			overlay?: {
				blur?: number;
				color?: number;
			};
			mode?: "cover" | "contain";
			scale?: number;
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
		<div
			class="background"
			style:--bg-blur="{background.overlay?.blur || 0}px"
			style:--bg-overlay-color={background.overlay?.color || null}
			style:--bg-mode={background.mode}
			style:--bg-scale={background.scale}
		>
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
			blur: 10,
			disable: hero_info.mode === "invert",
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
		height: calc(90vh - var(--header-height, 10vh));
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

			filter: blur(var(--bg-blur));

			overflow: hidden;

			> * {
				width: 100%;
				height: 100%;
				object-fit: var(--bg-mode, cover);
				scale: var(--bg-scale, 1);
			}
		}

		&[data-theme="light"] {
			h1,
			p,
			button {
				color: var(--color-light);
				border-color: var(--color-light);
			}
			button:hover {
				color: var(--color-dark);
			}
		}
		&[data-theme="invert"] {
			h1,
			p,
			button {
				color: var(--color-light);
				border-color: var(--color-light);
				mix-blend-mode: difference;
			}

			button {
				background-color: transparent;
			}
		}
	}
</style>
