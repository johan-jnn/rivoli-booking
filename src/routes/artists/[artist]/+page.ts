import artists from "$lib/constants/artists.json";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const artist = artists.find(
		({ name }) => name.toLowerCase() === params.artist.toLowerCase()
	);
	if (!artist) throw error(404, "Nous n'avons pas trouvé cet artiste...");

	return { artist };
};
