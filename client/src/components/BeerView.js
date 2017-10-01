import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BeerView = ({ beer = {} }) => (
  <Container>
    <Header as='h2' textAlign='center'>{beer.name}</Header>
  </Container>
)


const mapStateToProps = (state, props) => {
  return { beer: state.beers.find(b => b.id === props.match.params.id) }
}

export default connect(mapStateToProps)(BeerView);