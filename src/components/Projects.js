import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/rotaract.png";
import projImg2 from "../assets/img/home.png";
import projImg3 from "../assets/img/java.png";
import projImg4 from "../assets/img/default detection.png";


export const Projects = () => {
    const projectsIA = [
        {
          title: "CyberGuard",
          description: "CyberGUARD: Intelligent Attack Anticipation, is designed to enhance cybersecurity by predicting and neutralizing five different types of cyber attacks in real-time using advanced AI and machine learning techniques.",
          imgUrl: projImg2,
          githubUrl : "https://github.com/Salmamakina/IA-and-cybersecurityPCD"
        },
        {
          title: "Default detection app",
          description: "Development of an intelligent application for image processing aimed at detecting and locating defects within an image.",
          imgUrl: projImg4,
          githubUrl : "https://github.com/Salmamakina/Default_Detection"
        },
          
      ];
      const projectsProgramming = [
        {
          title: "ROTARACT website",
          description: "Rotaract Tunisia, a non-profit organization, unites Tunisian Rotaract Clubs dedicated to peacebuilding through diversity, inclusion, and local problem-solving projects. <br>This website guides and supports individuals looking to contribute to charitable causes but unsure of where to begin.",
          imgUrl: projImg1,
          githubUrl : "https://github.com/Salmamakina/Rotaract_website"
        },
        {
          title: "Java Programming",
          description: "Number guessing game <br> Library management system <br> Hangman game <br> Student course registration system <br> Email App <br> Scientific calculator <br> Brick breaker game",
          imgUrl: projImg3,
          githubUrl : "https://github.com/Salmamakina/CognoRise-InfoTech"
        },

      ]
    return (
        <section className="project" id="projects-section">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Throughout my academic journey and professional experiences,<br></br> I have had the opportunity to work on a variety of projects that have allowed me to apply my technical skills and creativity.</p>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Artificial Intelligence</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Development & Programming</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row id="proj-row">
                                    {
                                      projectsIA.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {... project}/>
                                        )
                                      })  
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                      projectsProgramming.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {... project}/>
                                        )
                                      })  
                                    }
                                </Row>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="third">
                                Loren Ipsum
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}
export default Projects;