<template>
	<AppLayout v-bind="{ isHpMode, hpAppId, printosBase }">
		<TopBar slot="top-bar">
			<img slot="logo"
				 src="https://pro.oneflowcloud.com/images/oneflow-logo-full-white.svg">
		</TopBar>
		<div slot="content">
			<slot></slot>
		</div>
	</AppLayout>
</template>

<script type="text/javascript">
	import { AppLayout, TopBar } from '@oneflow/ofs-vue-layout';

	export default {
		props: [
			'isHpMode',
			'hpAppId',
			'printosBase'
		],
		components: {
			AppLayout,
			TopBar
		}
	};
</script>
