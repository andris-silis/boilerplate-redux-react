import * as React from "react";

import Container from "../container/Container"


require("./layout.css");

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>Header</header>
        <article>Boil</article>
        <Container />
        <footer>Footer</footer>
      </div>
    );
  }
}
