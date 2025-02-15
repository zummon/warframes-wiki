<script>
	let { data } = $props();
	let { slug, locations, drops, imageName } = data
</script>

<div class="p-4">
	<h1 class="text-lg text-center">{slug}</h1>
	<img
		class="size-32 mx-auto"
		src={`https://raw.githubusercontent.com/WFCD/warframe-items/master/data/img/${imageName}`}
		alt=""
	/>
	{#each locations || [] as location}
		<div class="">
			<span>{location.location}</span>
		</div>
	{/each}

	{#each drops || [] as drop}
		<div class="">
			<span>{drop.location}</span>
		</div>
	{/each}
</div>
