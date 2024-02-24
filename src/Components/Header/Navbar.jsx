import '../Header/Header.css'
import logo from './Images/logo.png'

function Navbar() {
    return (
        <>

            <nav className="navbar-expand-lg sticky-top bg-light ">
                <div className="navbar-logo container d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <a className="" href="">
                            <img src={logo} width="70" alt="" />
                        </a>
                    </div>
                    <div className="navbar "> 
                        <a className="nav-link " href="">Home</a>
                        <a className="nav-link " href="">About Us</a>
                        <a className="nav-link " href="">Taining</a>
                        <a className="nav-link " href="">Consulting</a>
                        <a className="nav-link " href="">Analytics</a>
                        <a className="nav-link " href="">It Soulation</a>
                        <a className="nav-link " href="">Careers</a>
                        <a className="nav-link " href="">Blog</a>
                        <a className="nav-link " href="">Contact Us</a>
                        <a className="nav-link " href="">Support</a>
                    </div>

                    
                </div>
            </nav>

        </>
    );
}

export default Navbar;





