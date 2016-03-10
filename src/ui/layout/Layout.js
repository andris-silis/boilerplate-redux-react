import * as React from "react";

require("./layout.css");


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <header>Header</header>
                <article>Boil</article>
                <footer>Footer</footer>
            </div>
        );
    }
}
