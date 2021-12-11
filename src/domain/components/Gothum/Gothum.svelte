<script lang="ts">
	import type { GumResult } from '@domain/models/GumResult';

	import { getLastTrickOrTreated } from '@services/gothums';
	import { onMount } from 'svelte';

	import ReadyOrNot from '../ReadyOrNot/ReadyOrNot.svelte';

	export let gothum: GumResult;
</script>

<div class="gothum-card">
	<span class="name">{gothum.name}</span>
	<span>{gothum.id}</span>

	<img class="image" src={gothum.image32} alt={gothum.name} />

	<ReadyOrNot {gothum} />
</div>

<style>
	.gothum-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 18px;
		color: white;
		width: 250px;
	}

	.image {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
		height: 128px;
	}

	.name {
		font-size: x-large;
		text-align: center;
	}
</style>
