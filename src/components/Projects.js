import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tindog.png";
import projImg2 from "../assets/img/alti.png";
import projImg3 from "../assets/img/tictactoe.png";
import projImg4 from "../assets/img/mortalstore.png";
import projImg5 from "../assets/img/movieapp.png";
import projImg6 from "../assets/img/spoti.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id: "tindog",
      url: "https://dog4.netlify.app",
      title: "TinDog",
      description: "A landing page for dogs",
      imgUrl: projImg1,
    },
    {
      id: "alti",
      url: "https://alticorp.netlify.app",
      title: "Alti Dynamics",
      description: "Corporal website of Dynamics Industries",
      imgUrl: projImg2,
    },
    {
      id: "tictac",
      url: "https://tc-tc-toe.netlify.app",
      title: "Tic Tac Toe Game",
      description: "Let's Have Fun",
      imgUrl: projImg3,
    },
    {
      id: "mortal",
      url: "https://mortal-store.netlify.app",
      title: "Mortal Kombat Fan Page",
      description: "Kombat tales and store",
      imgUrl: projImg4,
    },
    {
      id: "movie",
      url: "https://mvie-app.netlify.app",
      title: "Movie App",
      description: "A smooth movie website",
      imgUrl: projImg5,
    },
    {
      id: "spotify",
      url: "https://burkisspotify-clone.netlify.app",
      title: "Spotify Clone",
      description: "Clone frontend of spotify",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section, you'll simply see that my completed projects and currently continuing projects.You can also check my github page which you can find source code of these projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Upcoming</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
