import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { getBreweries } from '../actions/breweries';
import { Link } from 'react-router-dom';

class BreweriesList extends Component {
  componentDidMount() {
    this.props.dispatch(getBreweries());
  }
  breweries = () => {
    const { breweries } = this.props;
    return breweries.map(brewery =>
      <Card
        key={brewery.id}
        header={<Link style={styles.header} to={`/brewery/${brewery.id}`}>{brewery.name}</Link>}
      />
    )
  }

  render() {
    return (
    <Segment basic>
      <Segment basic textAlign='center'>
        <Image
          src={require('../images/brewery.png')}
          alt='Breweries'
          style={styles.centered}
          size="large"
        />
      </Segment>
        <Card.Group itemsPerRow={2}>
          {this.breweries()}
        </Card.Group>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  return { breweries }
}

const styles = {
  centered: {
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    color: '#BC6733',
    margin: '0 auto',
    textAlign: 'center'
  }
}

export default connect(mapStateToProps)(BreweriesList);