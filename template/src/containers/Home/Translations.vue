<template>
	<DefaultLayout>
		<ContentHeader title="Translations">
		</ContentHeader>
		<b-container fluid class="p-3">
			<p>Using $t function:<b> {{ $t('greeting') }}</b></p>
			Using v-t directive:
			<b><span v-t="'greeting'"></span></b>
			<br>
			<br>
			<b-dropdown id="ddown1" text="Select language" class="m-md-2">
				<b-dropdown-item @click="pickLang('en')">English</b-dropdown-item>
				<b-dropdown-item @click="pickLang('es')">Spanish</b-dropdown-item>
				<b-dropdown-item @click="pickLang('fr')">French</b-dropdown-item>
				<b-dropdown-item @click="pickLang('ch')">Chinese</b-dropdown-item>
			</b-dropdown>
			<b-button @click="displayError">Show Error Message</b-button>
		</b-container>
	</DefaultLayout>
</template>


<script>
	import { mapActions } from 'vuex';
	import { ContentHeader } from '@oneflow/ofs-vue-layout';
	import DefaultLayout from '../../components/DefaultLayout';


	export default {
		methods: {
			...mapActions(['setLanguage']),
			pickLang(language) {
				this.$i18n.locale = language;
				this.setLanguage({ language });
			},
			displayError() {
				const errorMessage = this.$i18n.t('errorMessage');
				const errorTitle = this.$i18n.t('errorTitle');
				window.alert(`${errorTitle}: ${errorMessage}`);
			}
		},
		components: {
			ContentHeader,
			DefaultLayout
		}
	};

</script>
