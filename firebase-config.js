// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyBzlJZVinkwW6t3tvxpjOI4MR3MrXxhP4M",
  authDomain: "buxorogis.firebaseapp.com",
  projectId: "buxorogis",
  storageBucket: "buxorogis.firebasestorage.app",
  messagingSenderId: "212326108461",
  appId: "1:212326108461:web:be2f02a4120d5d0c74d7a4",
  measurementId: "G-W63Z7Z2HLZ"
};

// Firebase'ni ishga tushirish (compat versiya - script tag orqali ishlaydi)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
