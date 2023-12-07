// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(props) {
  const currDate = new Date();

  return (
    <div>
        <h1>Hello, Sanjay!</h1>
        <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
        <h3>Today's date is {currDate.toLocaleDateString()}</h3>
      </div>
  );
}

export default App;
