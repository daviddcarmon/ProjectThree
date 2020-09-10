import React, { Component } from "react";

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

class CharacterList extends Component {
  state = {
    charArray: [],
  };

  componentDidMount() {
    // API.getCharacters().then(function (data) {
    //   this.setState({ charArray: data });
    // });
  }

  render() {
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
            <CardText>Full character description</CardText>
          </CardBody>
        </Card>

        <Button>Book Now!</Button>
      </CardDeck>
    );
  }
}

export default CharacterList;
