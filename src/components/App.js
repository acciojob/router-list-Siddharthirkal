import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" component={ItemDetails} />
      </Switch>
    </Router>
  );
}

export default App;