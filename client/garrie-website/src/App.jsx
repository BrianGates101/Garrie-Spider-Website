// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Hello World from Client</h1>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react';

  function App() {
    const [message, setMessage] = useState('');
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
      fetch(API_URL)
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error('Error fetching message:', error));
    }, []);
    useEffect(() => {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => console.log('Backend connected:', data))
        .catch(error => console.error('Backend error:', error));
    }, []);

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }

  export default App;