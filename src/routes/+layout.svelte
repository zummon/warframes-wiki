<script>
	let { children } = $props();

	let navs = [
		{
			content: 'Home',
			href: '/',
		},
		{
			content: 'Warframe',
			href: '/warframes',
		},
		{
			content: 'Relic',
			href: '/relics',
		},
	]
</script>

<div class="text-center p-4">
	{#each navs as nav}
		<a class="underline" href={nav.href}>{nav.content}</a>&nbsp;
	{/each}
</div>

{@render children()}

<div class="text-center p-4">
	Data from <a class="underline" href="https://github.com/WFCD/warframe-items/" target="_blank">https://github.com/WFCD/warframe-items/</a><br>
	Made by Teerapat Anantarattanachai <a class="underline" href="https://github.com/zummon/" target="_blank">https://github.com/zummon/</a><br>
	Something breaks, needs upgrade. Let me know (<span class="">yoyotee235@gmail.com</span>)
</div>
