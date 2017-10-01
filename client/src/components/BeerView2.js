import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BeerView = ({ beer = {} }) => (
  <Container>
    <div style={styles.centered}>
      <Icon name='beer' size='massive' color='yellow'/>
      <Header as='h2' style={styles.header} >{beer.name}</Header>
    </div>
  </Container> 
)

const mapStateToProps = (state, props) => {
  return { beer: state.beers.find(b => b.id === props.match.params.id) }
}

export default connect(mapStateToProps)(BeerView);