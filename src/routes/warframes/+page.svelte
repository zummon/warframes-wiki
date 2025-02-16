<script>
	import { onMount } from "svelte";

	let { data } = $props();

	let meta = { title: "Warframes", desc: "" };

	let grab = $state({ arePrime: data.arePrime, sexes: data.sexes });

	let warframes = $derived.by(() => {
		let warframes = [];
		data.warframes.forEach((warframe) => {
			if (
				grab.arePrime.includes(warframe.isPrime) &&
				grab.sexes.includes(warframe.sex)
			) {
				warframes.push(warframe);
			}
		});
		return warframes;
	});

	onMount(() => {});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.desc} />
</svelte:head>

<div class="flex flex-wrap justify-center gap-4 p-4">
	<a href="/warframes/passive">Passive</a>
	<details open>
		<summary>Prime:</summary>
		<select class="" multiple size="2" bind:value={grab.arePrime}>
			{#each data.arePrime as isPrime}
				<option value={isPrime}>{isPrime}</option>
			{/each}
		</select>
	</details>
	<details>
		<summary>Sex:</summary>
		<select class="w-fit" multiple bind:value={grab.sexes}>
			{#each data.sexes as sex}
				<option value={sex}>{sex}</option>
			{/each}
		</select>
	</details>
</div>

<div class="flex flex-wrap justify-center gap-4 p-4">
	{#each warframes as warframe}
		{#if Array.isArray(warframe.components) && warframe.components.length > 0}
			<div class="">
				<details class="group">
					<summary
						class="list-none cursor-pointer border rounded text-center group-open:border-0"
					>
						<span class="font-medium">{warframe.name}</span>
						<img
							class="size-32 mx-auto"
							src={`https://raw.githubusercontent.com/WFCD/warframe-items/master/data/img/${warframe.imageName}`}
							alt=""
						/>
					</summary>
					{#each warframe.components || [] as component}
						{#if Array.isArray(component.drops) && component.drops.length > 0}
							<div class="">
								<span class="">{component.name}</span>
								{#each component.drops || [] as drop}
									{@const cleaned = drop.location
										.replace("Relic ", "")
										.replace("(", "")
										.replace(")", "")}
									<a
										class={`inline-flex items-center rounded-md px-2 py-1 text-sm ring-inset ring-1 ${drop.location.startsWith("Axi") ? "bg-yellow-50 text-yellow-800 ring-yellow-600/20" : drop.location.startsWith("Meso") ? "bg-purple-50 text-purple-700 ring-purple-700/10" : drop.location.startsWith("Lith") ? "bg-orange-50 text-orange-700 ring-orange-600/10" : drop.location.startsWith("Neo") ? "bg-gray-50 text-gray-600 ring-gray-500/10" : ""}`}
										href={`/relic/${cleaned}`}
									>
										{drop.location}
									</a>
								{/each}
							</div>
						{/if}
					{/each}
				</details>
			</div>
		{/if}
	{/each}
</div>
