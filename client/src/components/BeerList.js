import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image, Popup, Button, Modal } from 'semantic-ui-react';
import { getBeers } from '../actions/beers';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = { open: false }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  
  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    const { beers } = this.props;
    const { open, dimmer } = this.state;
    
    return beers.map( beer => 
      <div key={beer.id}>
      <Button onClick={this.show('blurring')}>{beer.name}</Button>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>{beer.name}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{beer.style.name}</Header>
            {beer.description}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    )
  }

  render() {
    const { open, dimmer } = this.state
    return (
      <Container>
        <Header style={styles.header}>Beers</Header>
        <Image
          src={require('../images/beer.png')}
          alt='6 pints of Beer image'
          style = {styles.centered}
          size="medium"
        />
       
          { this.beers() }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const beers = state.beers; 
  return { beers }
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

export default connect(mapStateToProps)(BeerList);