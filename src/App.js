import './App.css';
import About from './Components/About';
import Training from './Components/Training';



function App() {
  return (
    <div className="App">
     {/* <About /> */}
     <Training />
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