<script>
	let { data } = $props();

</script>


	<table>
		<tbody>
			{#each data.warframes as warframe}
			<tr class="">
				<td class="border">{warframe.name}</td>
				<td class="border">{warframe.passiveDescription}</td>
			</tr>
			{/each}
		</tbody>
	</table>
