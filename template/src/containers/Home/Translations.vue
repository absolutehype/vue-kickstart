<template>
	<DefaultLayout>
		<ContentHeader title="Translations">
		</ContentHeader>
		<b-container fluid class="p-3">
			<h2 class="h5">Example translations</h2>
			<b-dropdown id="ddown1" text="Select language" class="m-md-2">
				<b-dropdown-item @click="pickLang('en')">English</b-dropdown-item>
				<b-dropdown-item @click="pickLang('es')">Spanish</b-dropdown-item>
				<b-dropdown-item @click="pickLang('fr')">French</b-dropdown-item>
				<b-dropdown-item @click="pickLang('it')">Italian</b-dropdown-item>
			</b-dropdown>
			<br>
			<br>
			<p>Name:<b> {{ $t('Name') }}</b></p>
			<p>Weight Unit:<b> {{ $t('Weight Unit') }}</b></p>
			<p>Timezone:<b> {{ $t('Timezone') }}</b></p>
			<p>Print Shop:<b> {{ $t('Print Shop') }}</b></p>
			Currency:
			<b><span v-t="'Currency'"></span></b>
			<br>
			<br>
			<b-button @click="displayError">Show Error Message</b-button>
		</b-container>
	</DefaultLayout>
</template>


<script>
	import { mapActions } from 'vuex';
	import axios from 'axios';
	import { ContentHeader } from '@oneflow/ofs-vue-layout';
	import DefaultLayout from '../../components/DefaultLayout';


	export default {
		methods: {
			...mapActions(['setLanguage']),
			pickLang(language) {
				// this.$i18n.locale = language;
				this.setLanguage({ language });
				this.loadLanguageAsync(this.mapLanguage(language));
			},
			displayError() {
				const errorMessage = this.$i18n.t('Error message');
				const errorTitle = this.$i18n.t('error');
				window.alert(`${errorTitle}: ${errorMessage}`);
			},
			mapLanguage(lang) {
				switch (lang) {
					case 'fr':
						return 'fr-FR';
						break;
					case 'es':
						return 'es-ES';
						break;
					case 'en':
						return 'en-GB';
						break;
					case 'it':
						return 'it-IT';
					default:
						return 'en-GB';

				}
			},
			setI18nLanguage(lang) {
				this.$i18n.locale = lang;
				axios.defaults.headers.common['Accept-Language'] = lang;
				document.querySelector('html').setAttribute('lang', lang);
				return lang;
			},

			loadLanguageAsync(lang) {
				return axios.get(`https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/${lang}.json`, {
					params: {
						headers: {
							'Content-Type':
								'application/x-www-form-urlencoded'
						}
					}
				}).then(msgs => {
					console.log('msgs.data is ', msgs.data);
					this.$i18n.setLocaleMessage(lang, msgs.data);
					return this.setI18nLanguage(lang);
				});
				return Promise.resolve(this.setI18nLanguage(lang));

				return Promise.resolve(lang);
			}
		},
		components: {
			ContentHeader,
			DefaultLayout
		}
	};

</script>
