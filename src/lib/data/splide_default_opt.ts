import type { Splide } from "@splidejs/svelte-splide";
import type { ComponentProps } from "svelte";

export default {
	perPage: 3.5,
	perMove: 3,
	gap: 15,
	type: "loop",
	padding: {
		left: 15,
		right: 15,
	},
	autoplay: true,
	interval: 15000,
	pagination: false,
	breakpoints: {
		1150: {
			perPage: 2.5,
			perMove: 1
		},
		850: {
			perPage: 1.5
		},
		500: {
			perPage: 1,
			gap: 0,
			padding: 0
		}
	}
} satisfies NonNullable<ComponentProps<Splide>["options"]>;
