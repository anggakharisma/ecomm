import { ref } from 'vue'

export const notificationStore = ref({
	text: "" as string,
	isNotificationVisible: false as boolean,
	showNotification: (text: string) => {
		notificationStore.value.isNotificationVisible = true;
		notificationStore.value.text = text;
		setTimeout(() => {
			notificationStore.value.isNotificationVisible = false;
		}, 1500);
	}
});