import { getWarframes } from '../../lib/data'

export const prerender = true

export async function load ({}) {
	let warframes = await getWarframes()
	let sexes = new Set()
	let arePrime = new Set()
	warframes.forEach((warframe) => {
		sexes.add(warframe.sex)
		arePrime.add(warframe.isPrime)
	});

	return {
		warframes,
		sexes: [...sexes].toSorted(),
		arePrime: [...arePrime],
	}
} 