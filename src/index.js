import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase,FieldValue} from "../src/services/firebase"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
