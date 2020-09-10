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
    <div>
      <CardDeck>
        {menuArray.map((data) => (
          <Card>
            <CardImg
              top
              width="100%"
              src="/assets/256x186.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{data.partyPackageName}</CardTitle>

              <CardText>{data.menuDescription}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
      <Button>Book Now!</Button>
    </div>
  );
}

export default MenuList;
