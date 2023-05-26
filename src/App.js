import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import CheckOut from './components/CheckOut';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
        <Routes>
          <Route path="/login" element={<Login/>}/>
        
        <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Header />}></Route> */}
           <Route path="/checkout" element={<CheckOut />}></Route> 
      
          {/* <Route path="/" element={<Header />}></Route>
          <Route path="/home" element={<Home />}></Route> */} 
            

        </Routes>

      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
