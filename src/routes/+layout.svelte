<script lang="ts">
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>MyWayMap</title>
	<meta name="description" content="MyWayMap designed to help you discover and review commercial places across Kazakhstan"/>
</svelte:head>

<main class="min-h-screen">
	<Navbar/>

	<div class="min-h-screen">
		<slot>
			<h1>Nothing to show here...</h1>
		</slot>	
	</div>

	<div class="max-w-7xl m-auto mt-20">
		<Footer/>
	</div>
</main>