import React from "react";
import "../containers/App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ bots: users }));
  }

  searchHandler = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.bots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.bots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="pa3 f2 "> ROBO FRIENDS</h1>
          <SearchBox searchChange={this.searchHandler} />
          <ErrorBoundary>
            <Scroll>
              <CardList bots={filteredRobots} />
            </Scroll>
          </ErrorBoundary>
        </div>
      );
    }
  }
}
export default App;
