
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Tasks from "./Tasks";
import Pictures from "./Pictures";
const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [User, setUser] = useState();
    return ( 
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login setUser = {setUser} setLoggedIn={setLoggedIn}/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/dashboard" element={<Dashboard User={User} loggedIn={loggedIn}/>}></Route>
                    <Route path="/Tasks" element={<Tasks User={User}/>}></Route>
                    <Route path="/pictures" element={<Pictures User={User}/>}></Route>
                </Routes>
            </Router>
        </div>
     );
}
 
export default App;