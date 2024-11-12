<script lang="ts">
    import { Search, Button } from "flowbite-svelte";
    import OutletCard from "$components/dynamic/OutletCard.svelte";
    import Pagination from "$components/dynamic/Pagination.svelte";

    let search_input: string = "";
    export let data;

    $: filtered = data.outlets_list.filter(outlet => outlet.title.includes(search_input) || search_input.includes(outlet.city));
</script>

<section class="m-auto mt-16 max-w-5xl">
	<div class="text-center">
		<h1 class=" text-4xl font-bold">Explore commercial outlets</h1>
		<p class="mt-3">Feed of outlets around the whole Kazakhstan</p>
	</div>

	<div class="mt-6">
		<Search placeholder="Place name, city, etc" bind:value={search_input}>
			<Button>Search</Button>
		</Search>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
		{#each filtered as outlet}
			<OutletCard outlet_info={outlet}/>
		{/each}
	</div>

	<div class="mt-8 flex flex-col items-center">
		<Pagination />
	</div>
</section>
