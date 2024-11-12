<script lang="ts">
    import { Search, Button } from "flowbite-svelte";
    import EventCard from "$components/dynamic/EventCard.svelte";
    import Pagination from "$components/dynamic/Pagination.svelte";

    let search_input: string = "";
    export let data;

    $: filtered = data.events_list.filter(town_event => town_event.title.includes(search_input) || search_input.includes(town_event.city));
</script>

<section class="m-auto mt-16 max-w-5xl">
	<div class="text-center">
		<h1 class=" text-4xl font-bold">Upcoming events</h1>
		<p class="mt-3">Feed of major events around the whole Kazakhstan</p>
	</div>

	<div class="mt-6">
		<Search placeholder="Event name, city, organizers, etc" bind:value={search_input}>
			<Button>Search</Button>
		</Search>
	</div>

	<div class="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-1">
		{#each filtered as event}
			<EventCard event_info={event} />
		{/each}
	</div>

	<div class="mt-8 flex flex-col items-center">
		<Pagination />
	</div>
</section>
