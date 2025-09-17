// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// 1で取得したあなたのFirebaseプロジェクトの設定情報を貼り付け
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// 各種サービスへの参照を取得してエクスポート
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);