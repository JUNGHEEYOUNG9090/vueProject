<template>
	<div>
		<v-container>
			<v-row>
				<v-col v-for="n in 24" :key="n" cols="4">
					<v-card height="200"></v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
