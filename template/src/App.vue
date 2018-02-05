<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import { mapActions, mapGetters } from 'vuex';

	export default {
		created() {
			this.getLanguage();
			this.$i18n.locale = this.$store.state.lang.lang;
		},
		methods: {
			...mapActions(['getLanguage'])
		},
		computed: {
			...mapGetters({
				activeTopItem: 'menu/activeTopItem',
				activeSubmenu: 'menu/activeSubmenu'
			})
		}
	};
</script>
