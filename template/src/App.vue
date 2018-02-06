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
			const lang = this.$store.state.lang.lang;
			this.setLanguage({ lang }).then(() => {
				this.$i18n.locale = lang;
				this.$i18n.setLocaleMessage(lang, this.$store.state.lang.tokens);
				document.querySelector('html').setAttribute('lang', lang);
			});
		},
		methods: {
			...mapActions(['setLanguage', 'getLanguage'])
		},
		computed: {
			...mapGetters({
				activeTopItem: 'menu/activeTopItem',
				activeSubmenu: 'menu/activeSubmenu'
			})
		}
	};
</script>
