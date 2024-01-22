import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCkIwilBt1O9K2pVgKx3uKaUC2tA-u9kCg',
	authDomain: 'calendar-api-d737f.firebaseapp.com',
	projectId: 'calendar-api-d737f',
	storageBucket: 'calendar-api-d737f.appspot.com',
	messagingSenderId: '544491540168',
	appId: '1:544491540168:web:051cdffc2b4d4ed5b9dffd',
	measurementId: 'G-G33PL4VHZE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
