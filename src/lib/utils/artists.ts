import type artists from "$lib/constants/artists.json";
type Artist = (typeof artists)[number];

export function getArtistBookingURL(artist: Artist) {
	return `/contact?artist=${artist.name}#booking`;
}
export function getArtistPDPURL(artist: Artist) {
	return `/artists_pdp/${artist.pdp_file}`;
}
