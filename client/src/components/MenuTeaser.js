import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const MenuTeaser = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Menu Teaser</CardTitle>
          <CardText>*** menu content here ***</CardText>

          <Button>See more</Button>
        </CardBody>
        <CardImg
          bottom
          width="100%"
          src="https://images.unsplash.com/photo-1566013656433-e818796d04f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="About image"
        />
      </Card>
    </div>
  );
};

export default MenuTeaser;
