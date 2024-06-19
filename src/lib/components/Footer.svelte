<script lang="ts">
	import footer from "$lib/constants/footer.json";
	import Social from "./Social.svelte";
</script>

<footer>
	<div class="top">
		<section class="main">
			<h1>Rivoli Booking</h1>
			<p>
				Rivoli est une agence de Direction Artistique basée à Paris,
				France
			</p>

			<Social icons={{
				email: "rivolibooking@gmail.com"
			}} />
		</section>
		{#each Object.entries(footer) as [title, content]}
			<section>
				<h2>{title}</h2>
				<nav>
					<ul>
						{#each Object.entries(content) as [label, link]}
							<li>
								<a href={link}>{label}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</section>
		{/each}
	</div>
	<div class="bottom">
		<a href="/mentions">Mentions légales</a>
		<a href="/rgpd">Politiques de confidientialité</a>
	</div>
</footer>

<style lang="scss">
	footer {
		margin-top: 25px;
		> * {
			&.top {
				padding: 50px 15px;
				display: flex;
				align-items: center;
				justify-content: space-evenly;

				> .main {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 100%;

					> p {
						max-width: 250px;
					}
				}

				> :not(.main) {
					> h2 {
						font-size: 14px;
						margin-bottom: 8px;
					}

					> nav > ul {
						list-style: none;
						font-size: 14px;
						> li {
							margin: 6px 0;
							> a {
								--subbar-height: 1px;
							}
						}
					}
				}

				@media screen and (max-width: 850px) {
					flex-wrap: wrap;
					gap: 25px;
					text-align: center;

					> .main {
						width: 100%;
						align-items: center;

						> p {
							max-width: unset;
						}
					}
				}
			}

			&.bottom {
				padding: 15px 25px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				gap: 15px;

				background-color: var(--color-black);
				color: var(--color-white);
			}
		}
	}
</style>
