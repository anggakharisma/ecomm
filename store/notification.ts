import { ref } from 'vue'

export const notificationStore = ref({
	text: "" as string,
	showNotification: false	as boolean
});