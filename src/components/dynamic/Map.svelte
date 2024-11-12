<script>
	import { onMount, onDestroy } from 'svelte';
	import { Map } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let map;
	let mapContainer;

	const apiKey = 'qrL027tye7peSMEvQ8jt';

	onMount(() => {
		const initialState = { lng: 71.4305, lat: 51.1283, zoom: 17 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
	});

	onDestroy(() => {
		map.remove();
	});
</script>

<div class="map-wrap">
	<div class="map" bind:this={mapContainer}></div>
</div>

<style>
	.map-wrap {
		width: 100%;
		height: 400px; /* calculate height of the screen minus the heading */
	}

	.map {
		width: 100%;
		height: 100%;
	}
</style>
