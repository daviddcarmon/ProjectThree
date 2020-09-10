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

const MenuList = () => {
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
          <CardTitle>Party Package #1</CardTitle>

          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>

      <Button>Book Now!</Button>
    </CardDeck>
  );
};

export default MenuList;
