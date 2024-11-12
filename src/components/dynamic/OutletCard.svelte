<script lang="ts">
    import { Card } from 'flowbite-svelte';

    export let outlet_info;
</script>
  
<div class="space-y-4">
    <Card img="/img/{outlet_info.cover}" href="/outlets/{outlet_info._id}" horizontal size="md">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{outlet_info.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight line-clamp-3">{outlet_info.desc}</p>
        <div class="mb-3 flex items-center">
            <b>Avg rating:&nbsp;</b>
            <p>{outlet_info.avg_rating}</p>
        </div>
        <div class="mb-3 flex items-center">
            <b>City:&nbsp;</b>
            <p>{outlet_info.city}</p>
        </div>
    </Card>
</div>