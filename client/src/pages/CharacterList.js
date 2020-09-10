import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const CharacterList = () => {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Character choice #1</CardTitle>
          <CardSubtitle>about this character</CardSubtitle>
          <CardText>Full character description</CardText>
        </CardBody>
      </Card>
      
  
      
      <Button>Book Now!</Button>
    </CardDeck>
  );
};

export default CharacterList;
