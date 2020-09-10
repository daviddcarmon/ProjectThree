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
import "../components/Menu/Menu.css";

const MenuList = () => {
  return (
    <div>
    <CardDeck id="menuListContainer">
      <Card>
        <CardImg
          top
          width="33%"
          src="https://lh3.googleusercontent.com/proxy/yYjSEEQu8iDXPLCLPgqs40sABQR1smix7LF6hfTpxeqpbjTK0fkhYfiriNTSVeyQhbHfBjlKlV4GP3adfSw-PBPpyS7FjCfcJjlqo7pOn2GiatgzirGFotjKDqXOgu8C9idquFiZwXLyknqusr-gwS7A"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #1</CardTitle>

          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          top
          width="33%"
          src="https://lh3.googleusercontent.com/proxy/yYjSEEQu8iDXPLCLPgqs40sABQR1smix7LF6hfTpxeqpbjTK0fkhYfiriNTSVeyQhbHfBjlKlV4GP3adfSw-PBPpyS7FjCfcJjlqo7pOn2GiatgzirGFotjKDqXOgu8C9idquFiZwXLyknqusr-gwS7A"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #1</CardTitle>

          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg
          top
          width="33%"
          src="https://lh3.googleusercontent.com/proxy/yYjSEEQu8iDXPLCLPgqs40sABQR1smix7LF6hfTpxeqpbjTK0fkhYfiriNTSVeyQhbHfBjlKlV4GP3adfSw-PBPpyS7FjCfcJjlqo7pOn2GiatgzirGFotjKDqXOgu8C9idquFiZwXLyknqusr-gwS7A"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Party Package #1</CardTitle>

          <CardText>Full contents of package</CardText>
        </CardBody>
      </Card>

     
    </CardDeck>
     <Button>Book Now!</Button>
     </div>
  );
};

export default MenuList;
