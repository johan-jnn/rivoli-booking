import type { SvelteComponent } from "svelte";
import type { ClientMetadata } from "./_types";

import Cesar, { metadata as cesar } from "./Cesar.svelte";

export const pages = [
	{
		metadata: cesar,
		component: Cesar,
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
