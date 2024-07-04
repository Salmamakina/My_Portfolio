import {Col, Button} from "react-bootstrap";



export const ProjectCard = ({title, description, imgUrl, githubUrl}) => {
    return (
        <Col sm={6} md={4} id="proj-bx">
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span dangerouslySetInnerHTML={{ __html: description }}></span>
                    {githubUrl && (
            <Button variant="primary" href={githubUrl} target="_blank" style={{ marginTop: '10px', display: 'block' }}>
              View on GitHub
            </Button>
          )}
                </div>
            </div>
        </Col>
    )
}