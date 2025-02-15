import { getRelics } from "../../lib/data";

export const prerender = true

export async function load ({}) {
	let relics = await getRelics();
	relics = relics.filter((relic) => {
		return !relic.vaulted;
	});
	
	return {
		relics,
	}
} 