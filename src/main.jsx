import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';  //envelopper votre application et lui donner accès au magasin Redux.
import magasin from './magasin/magasin.js';;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider magasin={magasin}>
    <App />
    </Provider>
  </React.StrictMode>,
);


// Provider magasin={magasin}>: Enveloppe l'application
//  avec le composant Provider de react-redux et lui fournit 
//  le magasin Redux en tant que propriété magasin. Cela permet
//   à tous les composants de l'application d'accéder au magasin 
//   Redux et de lire ou de mettre à jour l'état global.