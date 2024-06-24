import{ Navbar, Nav, Container} from "react-bootstrap";
import{ useEffect, useState} from "react";

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const NavBar = ({ contactRef }) => {
    // activate the link of home
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScolled(true);
            }
            else{
                setScolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.addEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const handleConnectClick = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" >
                <img src ={logo} alt= "Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home'? 'active-navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills'? 'active-navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects'? 'active-navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text"> 
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/salma-makina/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100055834089001" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                        <a href="https://github.com/Salmamakina" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                    </div>
                    <buttom className="vvd" onClick={handleConnectClick} ><span>Let's Connect</span></buttom>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}