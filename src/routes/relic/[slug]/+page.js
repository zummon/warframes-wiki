import { getRelics } from "../../../lib/data";

export const prerender = true

export async function load ({params}) {
	let relics = await getRelics();
	let relic = relics.find((relic) => {
		// let word = relic.name.split(" "); 
  	// word = word.slice(0, 2).join(" "); 
		// word += 'Relic'

		// unique[word] = prepare
		return relic.name == params.slug
	}) || {};
	
	return {
		slug: params.slug, locations: relic.locations, drops: relic.drops, imageName: relic.imageName
	}
} 
