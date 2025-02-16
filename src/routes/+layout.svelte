<script>
	let { children } = $props();
</script>

<div class="text-center p-4 underline">
	<a href="/">Home</a>
	<a href="/warframes">Warframe</a>
	<a href="/relics">Relic</a>
</div>

{@render children()}

<div class="text-center p-4">
	Data from <a class="underline" href="https://github.com/WFCD/warframe-items/" target="_blank">https://github.com/WFCD/warframe-items/</a><br>
	Made by Teerapat Anantarattanachai <a class="underline" href="https://github.com/zummon/" target="_blank">https://github.com/zummon/</a><br>
	Something breaks, needs upgrade. Let me know (<span class="">yoyotee235@gmail.com</span>)
</div>
