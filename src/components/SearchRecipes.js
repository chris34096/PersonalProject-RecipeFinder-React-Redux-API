import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

class SearchRecipes extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{" "}
          <FormControl type="text" placeholder="Garlic, Chicken" />
        </FormGroup>{" "}
        <FormGroup>
          <FormLabel>Recipe name</FormLabel>{" "}
          <FormControl type="text" placeholder="Chicken Curry" />
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
