import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Sas from './Components/Cataloge/Sas';
import DataScience from './Components/Cataloge/DataScience'
import FullStack from './Components/Cataloge/FullStack'
import Internship from './Components/Cataloge/Internship'
import Training from './Components/Training';
import Scholarship from './Components/Cataloge/Scholarship';
import Recentnews from './Components/RecentNew';
import SasDetails from './Components/Details/SasDetails';


function App() {
  return (
    <div className="App">
     {/* <About /> */}
     {/* <Training /> */}
     {/* <Recentnews /> */}
     {/* <Sas /> */}

     <Router>
      <Routes>
      <Route path="/" element={<About />} />
         {/*<Route path="/" element={<Training />} />
        <Route path="/sas" element={<Sas />} />
        <Route path="/dataScience" element={<DataScience />} />
        <Route path="/fullStack" element={<FullStack />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/sasdetails" element={<SasDetails />}/> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

{/* <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router> 
  
  <div className="links">
                    <Link to="/"
                        className={currentPath === "/" ? "active" : ""}>
                        Home</Link>

                    <Link to="/login"
                        className={currentPath === "/login" ? "active" : ""}>
                        Login</Link>

                    <Link to="/signup"
                        className={currentPath === "/signup" ? "active" : ""}>
                        Create an Account </Link>

                </div>*/}