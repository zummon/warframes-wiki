export async function getRelics() {
	let relics = await fetch(
		"https://raw.githubusercontent.com/WFCD/warframe-items/master/data/json/Relics.json",
	);
	relics = await relics.json();
	return relics
}
export async function getWarframes() {
	let warframes = await fetch(
		"https://raw.githubusercontent.com/WFCD/warframe-items/master/data/json/Warframes.json",
	);
	warframes = await warframes.json();
	return warframes
}