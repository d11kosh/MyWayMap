<script lang="ts">
    import { Button, ButtonGroup, Rating } from 'flowbite-svelte';
    import Comment from '$components/dynamic/Comment.svelte';

    export let data;
    let comments = [1];
</script>

<section class="max-w-3xl m-auto mt-16">
    <div class="flex flex-wrap justify-between">
        <img src="/img/preview.jpg" alt="bookcover" class="w-80">
        <div class="w-96" id="info">
            <h1 class="text-4xl mb-3">Baiterek</h1>
            <p class="mb-3">Baiterek is a monument and observation tower in Astana, the capital city of Kazakhstan. A tourist attraction popular with foreign visitors and Kazakhs, it is emblematic of the city, which became capital of the country in 1997</p>
            <div class="mb-3 flex items-center">
                <b>City:&nbsp;</b>
                <p>Astana</p>
            </div>
            <div class="mb-3 flex items-center">
                <b>Address:&nbsp;</b>
                <p>Konaeva 12/2</p>
            </div>
            <div class="mb-3">
                <Rating size={32} rating = {5}/>
            </div>
            <ButtonGroup>
                <Button>Rate place</Button>
                <Button href="/testbook.pdf" download="somebook">Go to website</Button>
            </ButtonGroup>
        </div>
    </div>
    <div class="mt-20">
        <h2 class="text-2xl font-semibold">1 Review(s)</h2>
        <hr>
        <div class="mt-8">
            {#each comments as comment}
                <Comment rating = {5}/>
            {/each}
        </div>
    </div>
</section>