<template>
	<DefaultLayout>
		<ContentHeader title="Translations">
		</ContentHeader>
		<b-container fluid class="p-3">
			<h2 class="h5">Example translations</h2>
			<b-dropdown id="ddown1" text="Select language" class="m-md-2">
				<b-dropdown-item @click="pickLang('en-GB')">English</b-dropdown-item>
				<b-dropdown-item @click="pickLang('es-ES')">Spanish</b-dropdown-item>
				<b-dropdown-item @click="pickLang('fr-FR')">French</b-dropdown-item>
				<b-dropdown-item @click="pickLang('it-IT')">Italian</b-dropdown-item>
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
	import { mapActions, mapGetters } from 'vuex';
	import { ContentHeader } from '@oneflow/ofs-vue-layout';
	import DefaultLayout from '../../components/DefaultLayout';


	export default {
		methods: {
			...mapActions('lang', ['setLanguage']),
			pickLang(lang) {
				return this.setLanguage({ lang });
			},
			displayError() {
				const errorMessage = this.$i18n.t('Error message');
				const errorTitle = this.$i18n.t('error');
				window.alert(`${errorTitle}: ${errorMessage}`);
			}
		},
		components: {
			ContentHeader,
			DefaultLayout
		},
		computed: {
			...mapGetters({
				getTokens: 'getTokens'
			})
		}
	};

</script>
