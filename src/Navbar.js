import notefulIcon from './noteful-icon.png';
import notefulText from './noteful-text.png';
import kay from './kay_icon.png';

function Navbar() {
  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={notefulIcon} height="28" />
          <img src={notefulText} height="28" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            Mrs. Kay
          </div>
          <div className="navbar-item">
            <img src={kay} height="28" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;