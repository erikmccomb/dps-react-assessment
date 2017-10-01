import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import BeerList from './BeerList';
import BreweriesList from './BreweriesList';
import BeerView from './BeerView';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/all_beers' component={BeerList} />
          <Route exact path='/beer/:id' component={BeerView} />
          <Route exact path='/all_breweries' component={BreweriesList} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
