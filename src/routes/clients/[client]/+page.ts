import { getClientID, pages } from "$lib/components/clients/_list";
import { error } from "@sveltejs/kit";
export const load = ({ params: { client } }) => {
	const found = pages.find((p) => getClientID(p.metadata) === client);
	if (found) {
		const relativeClients = pages
			.filter((p) => getClientID(p.metadata) !== client)
			.map((p) => p.metadata)
			.sort(() => Math.random() - 0.5);
		return { client: found, relativeClients };
	} else throw error(404, "Project has not been found.");
};
