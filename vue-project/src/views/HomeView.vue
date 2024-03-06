<template>
	<v-app id="inspire">
		<v-app-bar extended>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title>Application</v-app-bar-title>
			<v-spacer></v-spacer>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" temporary>
			<!---->
			<v-list density="compact">
				<v-list-subheader>REPORTS</v-list-subheader>

				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:value="item"
					color="primary"
				>
					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>

					<v-list-item-title>
						{{ item.text }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<RouterView></RouterView>
		</v-main>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref();

const items = ref([
	{ text: 'Real-Time', icon: 'mdi-clock', to: '/about' },
	{ text: 'Audience', icon: 'mdi-account' },
	{ text: 'Conversions', icon: 'mdi-flag' },
]);
</script>

<style lang="scss" scoped></style>
