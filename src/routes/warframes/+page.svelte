<script>
	let { data } = $props();

	let title = "Prime Warframes";
	let desc = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
</svelte:head>

<a href="/warframes/passive">Passive</a>

<div class="flex flex-wrap justify-center gap-4 p-4">
	{#each data.warframes as warframe}
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
