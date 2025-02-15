import { getWarframes } from '../../lib/data'

export const prerender = true

export async function load ({}) {
	let warframes = await getWarframes()
	warframes = warframes.filter((warframe) => {
		return warframe.isPrime;
	});
	
	return {
		warframes,
	}
} 