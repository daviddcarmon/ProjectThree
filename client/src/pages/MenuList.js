import React, { useState, useEffect } from "react";

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
import "../components/Menu/Menu.css";

import API from "../utils/API";

function MenuList() {
  const [state, setState] = useState({
    menuArray: [],
  });

  const { menuArray } = state;

  useEffect(() => {
    API.getMenus().then(function (data) {
      console.log(data);
      setState({ ...state, menuArray: data.data });
    });
  }, []);
  return (

<div id="menuListBody">
     <Container id="menuListArea">
       <Row>
        <CardDeck>
        {menuArray.map((data) => (
          <Card id="menuListCardBody">
            <CardImg
              top
              width="100%"
              src={`${process.env.PUBLIC_URL}/MenuItems/${data.img}.png`}
              alt="Card image cap"
            />
            <CardBody id="menuCardBodyIn">
              <CardTitle id="menuCard">{data.partyPackageName}</CardTitle>

              <CardText id="menuText">{data.menuDescription}</CardText>
            </CardBody>
          </Card>
        ))}
       </CardDeck>
    </Row>
     <Button id="menuListBtn">Book Now!</Button>
     </Container>
     </div>
  );
}

export default MenuList;
