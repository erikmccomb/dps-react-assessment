import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { getBeers } from '../actions/beers';

class BeerList extends Component {

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => 
        <Card>
          <Card.Content>
            <Card.Header style={styles.header}>
              {beer.name}
            </Card.Header>
          </Card.Content>
        </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>Beers</Header>

        <Image
          style={styles.backdrop}
          source={require('../images/beer.png')}>
          <View style={styles.backdropView}>
            <Text style={styles.headline}>Headline</Text>
          </View>
        </Image>

        <Grid columns={1}>
          <Grid.Column width={16}>
            <Card.Group itemsPerRow={2}>
              { this.beers() }
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return { beers: state.beers }
}

const styles = {
  centered: {
    margin: '0 auto',
    textalign: 'center',
  },
  header: {
    color: '#2ecc40',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default connect(mapStateToProps)(BeerList);