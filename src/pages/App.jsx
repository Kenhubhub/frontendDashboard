
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    return ( 
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>}></Route>
                </Routes>
            </Router>
        </div>
     );
}
 
export default App;