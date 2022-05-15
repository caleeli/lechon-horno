import App from './App.svelte';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('es');
dayjs.extend(relativeTime)

const app = new App({
	target: document.getElementById('first-page'),
	props: {
	}
});

export default app;