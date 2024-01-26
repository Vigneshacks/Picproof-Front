import { Link } from 'react-router-dom';

const Navbar = () => {
   
    return (
        <header>
            <div className="container">
                <h1>PicProof</h1>
                <div className='nav-buttons'>
                    <div>
                        <Link to="/">HOME</Link>
                        <Link to="/similarity">WORKS</Link>
                        <Link to="/work">ADD WORK</Link>
                        <Link to="/keys">API KEYS</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;