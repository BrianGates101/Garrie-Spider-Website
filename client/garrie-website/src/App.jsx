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

    useEffect(() => {
      fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error('Error fetching message:', error));
    }, []);

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }

  export default App;