import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/chat/App';
import MessageList from './components/message-list/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
const AppContainer = () => {
  const [currentContact, setCurrentContact] = useState(false); 

  const weHaveAMessage = (data)=>{

    setCurrentContact(data);

  }
  return <>
  <MessageList giveData={weHaveAMessage} />
  <App currentContact={currentContact}   />
 
  </>
}
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

