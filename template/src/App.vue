<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import { mapActions, mapGetters } from 'vuex';

	export default {
		created() {
			const lang = this.getLanguage;
			this.setLanguage({ lang }).then(() => {
				this.$i18n.locale = lang;
				this.$i18n.setLocaleMessage(lang, this.getTokens);
				document.querySelector('html').setAttribute('lang', lang);
			});
		},
		methods: {
			...mapActions(['setLanguage'])
		},
		computed: {
			...mapGetters({
				activeTopItem: 'menu/activeTopItem',
				activeSubmenu: 'menu/activeSubmenu',
				getLanguage: 'getLanguage',
				getTokens: 'getTokens'
			})
		}
	};
</script>
