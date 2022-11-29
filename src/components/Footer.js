import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center d-flex justify-content-center">
       
     
          <Col size={12} sm={6} className=" d-flex justify-content-center text-sm-end">
            <div className="social-icon">
            <a href="#"><LinkedInIcon className={`icons__footer ${scrolled ? "scrolled" : ""}`} /></a>
                <a href="#"><GitHubIcon className={`icons__footer ${scrolled ? "scrolled" : ""}`}  /></a>
                <a href="#"><InstagramIcon className={`icons__footer ${scrolled ? "scrolled" : ""}`} /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
