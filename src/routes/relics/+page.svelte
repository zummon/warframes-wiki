<script>
	let { data } = $props();
</script>

<div class="flex flex-wrap gap-4 p-4">
	{#each data.relics as relic}
		<div class="">
			<span>{relic.name}</span>
			{#each relic.rewards || [] as reward}
				{#if reward.item && (reward.item.name.endsWith("Systems Blueprint") || reward.item.name.endsWith("Chassis Blueprint") || reward.item.name.endsWith("Neuroptics Blueprint"))}
					<!-- || reward.item.name.endsWith("Prime Blueprint") -->
					<div>
						{reward.rarity}
						{reward.item?.name}
					</div>
				{/if}
			{/each}
		</div>
	{/each}
</div>
