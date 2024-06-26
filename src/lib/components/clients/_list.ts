import type { SvelteComponent } from "svelte";
import type { ClientMetadata } from "./_types";

import Cesar, { metadata as cesar } from "./Cesar.svelte";
import Siena, { metadata as siena } from "./Siena.svelte";
import Victoria, { metadata as victoria } from "./Victoria.svelte";
import Kalamata, { metadata as kalamata } from "./Kalamata.svelte";
import Mamamia, { metadata as mamamia } from "./Mamamia.svelte";
import Verde, { metadata as verde } from "./Verde.svelte";
import Mondaine, { metadata as mondaine } from "./Mondaine.svelte";
import Manko, { metadata as manko } from "./Manko.svelte";
import LImportant, { metadata as limportant } from "./LImportant.svelte";
import Yacatan, { metadata as yacatan } from "./Yacatan.svelte";

export const pages = [
	{
		metadata: cesar,
		component: Cesar,
	},
	{
		metadata: siena,
		component: Siena,
	},
	{
		metadata: victoria,
		component: Victoria,
	},
	{
		metadata: kalamata,
		component: Kalamata,
	},
	{
		metadata: mamamia,
		component: Mamamia,
	},
	{
		metadata: verde,
		component: Verde,
	},
	{
		metadata: mondaine,
		component: Mondaine,
	},
	{
		metadata: manko,
		component: Manko,
	},
	{
		metadata: limportant,
		component: LImportant,
	},
	{
		metadata: yacatan,
		component: Yacatan,
	},
] as {
	metadata: ClientMetadata;
	component: typeof SvelteComponent;
}[];
export default pages.map((p) => p.metadata);

export function getClientID(client: ClientMetadata): string {
	return client.name.toLowerCase().replaceAll(/\s+/g, "-");
}
export function getClientURL(client: ClientMetadata): string {
	return `/clients/${getClientID(client)}`;
}
export function getClientBannerURL(client: ClientMetadata): string | undefined {
	return client.banner_file
		? `/clients/banners/${client.banner_file}`
		: undefined;
}
