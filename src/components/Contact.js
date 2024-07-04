import { useState, forwardRef} from "react"
import emailjs from "emailjs-com";
import { Container,Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-us-concept-landing-page.png";
emailjs.init('la3g5tpy-bvZHSH4V');
export const Contact = forwardRef((props, ref) => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttomText, setButtomText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtomText("Sending...");

        const templateParams = {
            firstName: formDetails.firstName,
            lastName: formDetails.lastName,
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
        };

        emailjs
            .send(
                "service_x2mfo8a",
                "template_ubhws6g",
                templateParams,

            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setButtomText("Send");
                    setFormDetails(formInitialDetails);
                    setStatus({
                        success: true,
                        message: "Message sent successfully",
                    });
                },
                (err) => {
                    console.log("FAILED...", err);
                    setButtomText("Send");
                    setStatus({
                        success: false,
                        message:
                            "Something went wrong, please try again later.",
                    });
                }
            );
    };
    return (
        <section className="contact" id="contact" ref={ref}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Image"/>
                    </Col>
                    <Col>
                        <h2>
                            Get In Touch
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm ={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm ={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm ={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Adress" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm ={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col >
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit" > <span>{buttomText}</span> </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false? "danger":"success"} >{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    );
});
export default Contact;