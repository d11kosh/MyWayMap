<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
</script>

<Table>
	<TableHead>
		<TableHeadCell>Market</TableHeadCell>
		<TableHeadCell>Target functions</TableHeadCell>
		<TableHeadCell>Needs download?</TableHeadCell>
		<TableHeadCell>Paid?</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<TableBodyRow>
			<TableBodyCell>MyWayMap</TableBodyCell>
			<TableBodyCell>Community places, commercial outlets, local onsight events</TableBodyCell>
			<TableBodyCell>❌</TableBodyCell>
			<TableBodyCell>❌</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Google maps</TableBodyCell>
			<TableBodyCell>City navigation</TableBodyCell>
			<TableBodyCell>✅</TableBodyCell>
			<TableBodyCell>❌</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Trip advisor</TableBodyCell>
			<TableBodyCell>Hotels, attractions, overall everything</TableBodyCell>
			<TableBodyCell>❌</TableBodyCell>
			<TableBodyCell>✅</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>2gis</TableBodyCell>
			<TableBodyCell>City navigations</TableBodyCell>
			<TableBodyCell>✅</TableBodyCell>
			<TableBodyCell>❌</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>
