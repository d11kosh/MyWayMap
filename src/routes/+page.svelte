<script>
    import { page } from '$app/stores';
    import Hero from '$components/static/Hero.svelte';
    import About from '$components/static/About.svelte';
    import Advantages from '$components/static/Advantages.svelte';
</script>

<Hero/>
<br>
<br>
<About/>
<div class="max-w-screen-lg mx-auto my-40">
    <h1 class=" text-center mb-16 font-bold text-4xl">Why choose us?</h1>
    <Advantages/>
</div>