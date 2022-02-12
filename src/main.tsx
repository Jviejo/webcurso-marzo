import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Home from './componentes/Home';
import Dashboard from './componentes/Dashboard';
import Curso from './componentes/Curso';
import Sesion from './componentes/Sesion';
import Calendario from './componentes/Calendario';
import Evaluacion from './componentes/Evaluacion';
import { Quizz } from './componentes/Quizz';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyrDyD_4S0uaH9hjdKvjAyuYHwdFlTq3Y",
  authDomain: "curso2022.firebaseapp.com",
  projectId: "curso2022",
  storageBucket: "curso2022.appspot.com",
  messagingSenderId: "616189055591",
  appId: "1:616189055591:web:7c53d1a04faeb8811cbac2",
  measurementId: "G-E3PW8S4QM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="dashboard" element={<Dashboard />}>
        </Route>
        <Route path="curso" element={<Curso />} >
          
          <Route path="evaluacion" element={<Evaluacion />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="sesion" element={<Sesion />} />
          <Route path="quizz/:name" element={<Quizz />} />
          <Route index element={<Calendario />} />
        </Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
