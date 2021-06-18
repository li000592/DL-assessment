import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { FirebaseAppProvider } from "reactfire"

const firebaseConfig = {
  /* Add your config from the Firebase Console */
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGAINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
}
console.log(process.env)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,

  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
