import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCCPLKpAZwnq8AjQP460Shblug-1ecfII",
  authDomain: "entrega-final-react-effc9.firebaseapp.com",
  projectId: "entrega-final-react-effc9",
  storageBucket: "entrega-final-react-effc9.appspot.com",
  messagingSenderId: "886978289947",
  appId: "1:886978289947:web:62e85e98682531da22f3be",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
