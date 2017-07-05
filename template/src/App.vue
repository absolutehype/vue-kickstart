<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				activeTopItem: 'menu/activeTopItem',
				activeSubmenu: 'menu/activeSubmenu'
			})
		}
	};
</script>
