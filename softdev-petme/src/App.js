import logo from './logo.svg';
import './App.css';
import About from "./components/about.js"
import Contract from "./components/contract.js"
import React from "react"


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const App = () => {
  
  return (  
    <BrowserRouter>
      
      <div>
        <div>
          <Route exact path="/" component={About} />
          <Route path="/contract" component={Contract}/>
         
        </div>
      </div>
  
    </BrowserRouter>
  )
}

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

export default App;
