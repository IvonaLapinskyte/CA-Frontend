
import './MainPage.css'
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import SingUp from "../singUpPopUp/SingUp"
import LogIn from "../logInPopUp/LogIn"

export default function MainPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [open, setClose] = useState(false);
  return (
    <div>
    <div id='main'>
    <div id='singuppop'></div>
    <div id='loginpop'></div>
      <button id='log'
       onClick={() => {
        setClose(true);
        const box = document.getElementById("loginpop")
        const log = createRoot(box)
        log.render(<LogIn isOpen={open}/>,
        )
        
    }}>Login</button>
    
      <button id='sing'
      onClick={() => {
        setModalIsOpen(true);
        const container = document.getElementById("singuppop")
        const root = createRoot(container)
        root.render( <SingUp isOpen={modalIsOpen} />,
       )                 
    }}>SingUp</button>
        <h2>Expiration Tracker App</h2>
        <p>This app is for tracking product expiration dates.</p>
        <p>When finished, this should send reminders to your email</p>
        <p>when a product in your list is about to expire.</p>
      </div>
    </div>
  )
}
