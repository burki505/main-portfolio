import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  let word = "I'm Burak Web Developer";
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    let newArray = word.split("");
    let timer;

    console.log(newArray.length);

    timer = setTimeout(() => {
      setName((prev) => {
        if (index === newArray.length) {
          return prev;
        } else {
          return prev + newArray[index];
        }
      });
      setIndex((prev) => {
        if (index === newArray.length - 1) {
          return index;
        } else {
          return prev + 1;
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [word, index]);

  useEffect(() => {
    console.log(index);
  }, [name, index]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>
                <span className="text txt-rotate wrap">
                  Hi! <span className="effect">{name}</span>
                </span>
              </h1>

              <p>
                As a fancy web developer which tries to improve his skills day
                by day I create modern websites which has smooth and better
                UI/UX experience. If you want to join my world then lets move
                out.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={profileImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
