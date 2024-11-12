<script>
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let event_info
</script>

<div class="space-y-4">
	<Card img="/img/{event_info.cover}">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{event_info.title}
		</h5>
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400 line-clamp-3">
			{event_info.description}
		</p>
        <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
			<b>Date:</b>&nbsp;{event_info.date}
		</p>
        <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
            <b>Location</b>&nbsp;{event_info.city}
        </p>
		<Button>
			Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
		</Button>
	</Card>
</div>
