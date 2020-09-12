import React, { useState, useEffect } from "react";

import "../components/Character/Character.css";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import API from "../utils/API";

function CharacterList() {
  const [state, setState] = useState({
    charArray: [],
  });

  const { charArray } = state;

  useEffect(() => {
    API.getCharacters().then(function (data) {
      console.log(data.data);
      setState({ ...state, charArray: data.data });
    });
  }, []);
  return (
    <div id="charListBody">

      <Container id="charListArea">
        <CardDeck>
          <Row>
            {charArray.map((data) => (
              <Col xs="12" md="4">
                <Card id="charListCardBody">
                  <CardImg
                    top
                    width="100%"
                    src={data.image}
                    alt="Card image cap"
                    id="charListImg"
                  />
                  <CardBody id="charCardBodyIn">
                    <CardTitle id="charCard">{data.name}</CardTitle>
                    <CardText id="charText">{data.characterDescription}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}


            <Button id="charListBtn">Book Now!</Button>
          </Row>
        </CardDeck>
      </Container>
    </div>
  );
}

export default CharacterList;
