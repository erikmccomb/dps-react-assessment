import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBeers } from '../actions/beers';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';


class Beers extends Component {
  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    return this.props.beers.map( beer =>
      <Grid.Column computer={4}>
        <Card>
          <Card.Content>
            <Card.Header>
              {beer.name}
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>Beers</Header>
        <Grid columns={16}>
          <Grid.Row>
            {this.beers()}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return { beers: state.beers }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40',
    margin: '0 auto',

  }
}

export default connect(mapStateToProps)(Beers);