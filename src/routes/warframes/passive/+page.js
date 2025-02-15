import { getWarframes } from "../../../lib/data.js";

export const prerender = true

export async function load ({}) {
	let warframes = await getWarframes();
	warframes = warframes.filter((warframe) => {
		return warframe.sex == 'Female';
	});
	
	return {
		warframes,
	}
} 