<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import { mapActions, mapGetters } from 'vuex';
	
	export default {
		created() {
			this.setLanguage({ lang: this.lang });
		},
		methods: {
			...mapActions('lang', ['setLanguage'])
		},
		computed: {
			...mapGetters({
				activeTopItem: 'menu/activeTopItem',
				activeSubmenu: 'menu/activeSubmenu',
				lang: 'lang/lang'
			})
		}
	};
</script>
