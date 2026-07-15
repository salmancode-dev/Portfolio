import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px'
  }
  return (
    <div className="navbar">
      <img className="img" src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenu("about")}
          >
            About
          </Link>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenu("services")}
          >
            Services
          </Link>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenu("work")}
          >
            Portfolio
          </Link>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
<Link to='contact'
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}><div  className="nav-connect">Connect With Me</div></Link>
      
    </div>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import underline from "../../assets/nav_underline.svg";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import menu_open from "../../assets/menu_open.svg";
// import menu_close from "../../assets/menu_close.svg";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const closeMenu = () => {
//     setMobileMenu(false);
//   };

//   return (
//     <div className="navbar">
//       <img className="img" src={logo} alt="logo" />

//       {/* Mobile Open Icon */}
//       <img
//         src={menu_open}
//         alt=""
//         className="nav-mob-open"
//         onClick={() => setMobileMenu(true)}
//       />

//       <ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>
//         {/* Mobile Close Icon */}
//         <img
//           src={menu_close}
//           alt=""
//           className="nav-mob-close"
//           onClick={() => setMobileMenu(false)}
//         />

//         <li>
//           <Link to="home" smooth duration={500} offset={-70}
//             onClick={() => { setMenu("home"); closeMenu(); }}>
//             Home
//           </Link>
//           {menu === "home" && <img src={underline} alt="" />}
//         </li>

//         <li>
//           <Link to="about" smooth duration={500} offset={-70}
//             onClick={() => { setMenu("about"); closeMenu(); }}>
//             About
//           </Link>
//           {menu === "about" && <img src={underline} alt="" />}
//         </li>

//         <li>
//           <Link to="services" smooth duration={500} offset={-70}
//             onClick={() => { setMenu("services"); closeMenu(); }}>
//             Services
//           </Link>
//           {menu === "services" && <img src={underline} alt="" />}
//         </li>

//         <li>
//           <Link to="work" smooth duration={500} offset={-70}
//             onClick={() => { setMenu("work"); closeMenu(); }}>
//             Portfolio
//           </Link>
//           {menu === "work" && <img src={underline} alt="" />}
//         </li>

//         <li>
//           <Link to="contact" smooth duration={500} offset={-70}
//             onClick={() => { setMenu("contact"); closeMenu(); }}>
//             Contact
//           </Link>
//           {menu === "contact" && <img src={underline} alt="" />}
//         </li>
//       </ul>

//       <Link to="contact" smooth duration={500} offset={-50}>
//         <div className="nav-connect">Connect With Me</div>
//       </Link>
//     </div>
//   );
// };

// export default Navbar;