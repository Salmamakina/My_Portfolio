import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id = 'skills-section'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>
"Learning never exhausts the mind." – Leonardo da Vinci <br></br>
My journey in software engineering is driven by an unending thirst for knowledge and the relentless pursuit of excellence. Below are the skills I have cultivated through my studies and experiences </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter4} alt="Image" />
                                    <h5>Java, Python programming</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image" />
                                    <h5>Javascript, C/C++ programming</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Image" />
                                    <h5>Mobile Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left' alt='Image'/>
        </section>
      )

}
export default Skills;