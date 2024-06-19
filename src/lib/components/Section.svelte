<script lang="ts">
	export let heading: {
		title?: string;
		description?: string;
		link?: {
			label: string;
			url: string;
			new_tab?: boolean;
		};
		button?: {
			label: string;
			disabled?: boolean;
		} & (
			| {
					onClick: () => any;
			  }
			| {
					url: string;
					new_tab?: boolean;
			  }
		);
		customID?: string;
	};

	export let section_style:
		| {
				padding?: string;
				margin?: string;
		  }
		| undefined = undefined;
</script>

<section
	id={heading.customID ||
		heading.title?.toLowerCase().replaceAll(/\s+/g, "-") ||
		null}
	style:padding={section_style?.padding}
	style:margin={section_style?.margin}
>
	<div class="heading">
		<div class="topline">
			{#if heading.title}
				<h2>{heading.title}</h2>
			{/if}
			{#if heading.link || heading.button}
				<div class="cta">
					{#if heading.link}
						{@const { label, url, new_tab } = heading.link}
						<a href={url} target={new_tab ? "_blank" : null}
							>{label}</a
						>
					{/if}
					{#if heading.button}
						{@const { button } = heading}
						{#if "url" in button}
							<a
								href={button.url}
								target={button.new_tab ? "_blank" : null}
							>
								<button type="button" disabled={button.disabled}
									>{button.label}</button
								>
							</a>
						{:else}
							<button
								type="button"
								disabled={button.disabled}
								on:click={button.onClick}>{button.label}</button
							>
						{/if}
					{/if}
				</div>
			{/if}
		</div>
		{#if heading.description}
			<p>{heading.description}</p>
		{/if}
	</div>

	<slot />
</section>

<style lang="scss">
	section {
		margin: 120px 0;

		&:not(:has(>.heading h2)) {
			margin-top: 25px;
		}
		> .heading {
			padding: 5px 15px;

			> .topline {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;

				> h2 {
					font-size: 5vw;
					color: var(--color-primary);
				}

				> .cta {
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					gap: 15px;
					flex-grow: 1;

					> a {
						margin: 0;
					}
				}

				@media screen and (max-width: 820px) {
					flex-direction: column;
					gap: 15px;

					> .cta {
						align-items: stretch;
						flex-direction: column;

						button {
							width: 100%;
						}
					}
				}
			}
			> p {
				max-width: 750px;
				font-style: italic;
			}
		}
	}
</style>
