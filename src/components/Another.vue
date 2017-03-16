<template>
	<div>
		<h1>You're in another view</h1>
		<p>You can hit the back button to actually go back even though this is a single page app.</p>
	</div>
</template>

<script lang="ts">
	import { Vue, Component } from 'av-ts'

	@Component
	export default class Another extends Vue {

	}
</script>
