<template>
	<v-app>
		<v-main>
			<v-app id="inspire">
				<v-navigation-drawer v-model="drawer">
					<!--  -->
					<v-list density="compact">
						<v-list-subheader>개발용 프로젝트</v-list-subheader>

						<v-list-item
							v-for="(item, i) in items"
							:key="i"
							:value="item"
							color="primary"
							:to="item.to"
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

				<v-app-bar>
					<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

					<v-app-bar-title>Application</v-app-bar-title>
				</v-app-bar>

				<v-main> <RouterView></RouterView></v-main>
			</v-app>
		</v-main>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref();

const items = ref([
	{ text: 'Home', icon: 'mdi-clock', to: '' },
	{ text: 'List', icon: 'mdi-account', to: 'list' },
	{ text: 'Conversions', icon: 'mdi-flag', to: 'test' },
]);
</script>

<style>
element {
	position: fixed;
}
</style>
