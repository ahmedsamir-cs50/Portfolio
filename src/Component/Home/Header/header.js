import React from "react";
import "../Header/header.css";
import ved from "./pexels-pavel-danilyuk-5495781 (720p).mp4";
import { Navbarlogin } from "../NavBar/navbar";
import { Col, Row } from "react-bootstrap";
export const Header = () => {
  return (
    <>
      <header>
        <video className="vedio-bg" src={ved} autoPlay muted loop />

        <Navbarlogin />

        <div className="container">
          <Row>
            <Col sm={12}>
              <h2>
                {""}
                <span id="span"> Hey, </span> I am Ahmed Samir{""}
              </h2>
              <p>Front End Developer</p>
              <p className="mb-5"> Turning Ideas Into real-life projects is my calling. </p>

              <form className="mb-5">
                <input type="email" placeholder="Email"></input>
                <button type="Submit">Subscribe</button>
              </form>
              </Col>
              </Row>
        </div>
      </header>
    </>
  );
};
