// import React, { useState } from 'react';
// import styles from '../Navbar/Navbar.module.css';
// import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [activeItem, setActiveItem] = useState('Home');

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   return (
//     <div className={styles.navbar}>
//        <Link to="/" className={styles.logo}>
//         <img src={logo} alt="" />
//       </Link>
//       <nav className={`${styles.navCenter} ${showMenu ? styles.showMenu : ''}`}>
//         <ul className={styles.navLinks}>
//           <li>
//             <Link to="/" className={activeItem === 'Home' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Home')}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/quote" className={activeItem === 'Quote' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Quote')}>
//               Quote
//             </Link>
//           </li>
//           <li>
//             <Link to="/restaurant" className={activeItem === 'Restaurant' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Restaurant')}>
//               Restaurant
//             </Link>
//           </li>
//           <li>
//             <Link to="/food" className={activeItem === 'Foods' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Foods')}>
//               Foods
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={activeItem === 'Contact' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Contact')}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <button className={styles.getStarted}>Get Started</button>
//       <div className={styles.menuIcon} onClick={toggleMenu}>
//         <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
//         <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
//         <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <nav className={`${styles.navCenter} ${showMenu ? styles.showMenu : ''}`}>
        <ul className={styles.navLinks}>
          <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
          <NavItem to="/quote" currentPath={location.pathname}>Quote</NavItem>
          <NavItem to="/restaurant" currentPath={location.pathname}>Restaurant</NavItem>
          <NavItem to="/food" currentPath={location.pathname}>Foods</NavItem>
          <NavItem to="/contactus" currentPath={location.pathname}>Contact</NavItem>
        </ul>
      </nav>
      <button className={styles.getStarted}>Get Started</button>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
      </div>
    </div>
  );
}

function NavItem({ to, currentPath, children }) {
  const isActive = to === currentPath;
  const activeClassName = isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <li>
      <Link to={to} className={activeClassName}>{children}</Link>
    </li>
  );
}

export default Navbar;

