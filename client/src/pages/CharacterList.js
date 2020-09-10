import React, { useState, useEffect } from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
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
    <CardDeck>
      {charArray.map((data) => (
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{data.name}</CardTitle>
            <CardText>{data.characterDescription}</CardText>
          </CardBody>
        </Card>
      ))}

      <Button>Book Now!</Button>
    </CardDeck>
  );
}

export default CharacterList;
