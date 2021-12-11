<script lang="ts">
	import type { GumResult } from '@domain/models/GumResult';

	import { getLastTrickOrTreated } from '@services/gothums';
	import { onMount } from 'svelte';

	import ReadyOrNot from '../ReadyOrNot/ReadyOrNot.svelte';

	export let gothum: GumResult;
</script>

<div>
	<span>{gothum.name}</span><span>{gothum.id}</span>
	<img src={gothum.image} alt={gothum.name} />

	<ReadyOrNot {gothum} />
</div>
