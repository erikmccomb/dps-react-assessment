import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { getBreweries } from '../actions/breweries';

class BreweriesList extends Component {

  componentDidMount() {
    this.props.dispatch(getBreweries());
  }

  breweries = () => {
    const { breweries } = this.props;

    return breweries.map(brewery =>
      <Card
        header={brewery.name}
        meta={brewery.name}
        description={brewery.name}
        extra={brewery.name}
      />
    )
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>Breweries</Header>
        <Image
          src={require('../images/beer.png')}
          alt='6 pints of Beer image'
          style={styles.centered}
          size="medium"
        />
        <Grid columns={1}>
          <Grid.Column width={16}>
            <Card.Group itemsPerRow={2}>
              {this.breweries()}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    color: '#2ecc40',
    margin: '0 auto',
    textAlign: 'center'
  }
}

export default connect(mapStateToProps)(BreweriesList);