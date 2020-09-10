import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

import "./MenuTeaser.css"

const MenuTeaser = () => {
  return (
    <div id="menuInfo">
      <Card id="menuDest">
        <CardBody>
          <CardTitle>The Menu</CardTitle>
          <CardText>*** menu content here ***</CardText>

          <Button href="/menuList">See all party packages</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuTeaser;
