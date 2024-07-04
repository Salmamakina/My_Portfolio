import { Container,Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer" >
            <Container>
                <Row className = "align-item-center">
                    <Col sm={6} className="logoBrand">
                        <span className="my-logo">SM.</span>
                    </Col>
                    <Col className="copyright-text">
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/salma-makina/" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100055834089001" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon2} alt="" />
                        </a>
                        <a href="https://github.com/Salmamakina" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon3} alt="" />
                        </a>
                    </div>
                    
                    </Col>

                </Row>
            </Container>

        </footer>
    )
}
export default Footer;