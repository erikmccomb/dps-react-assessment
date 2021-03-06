import React from 'react';
import { Header, Icon, Segment, Divider, Image, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const BeerView = ({ beer = {} }) => (
  <Segment basic>
    <Segment basic textAlign='center'>
      <Header as='h1' style={styles.header}>{beer.name}</Header>
      <Icon name='beer' size='massive' color='yellow'/>
      <Image style={styles.centered} size='tiny' alt='DevPoint Studios Logo' />
    </Segment>
    <Grid>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <Segment inverted>
          <Header
            as='h2'
            textAlign='center'
            style={styles.header}>
            Description
          </Header>
          <Divider />
          <div style={styles.body}>
            {beer.description}
          </div>
          <Divider />
        </Segment>
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={16}>
        <Segment inverted>
          <Header
            as='h2'
            textAlign='center'
            style={styles.header}>
            Other
              </Header>
          <Divider />
          <div style={styles.body}>
          Alcohol By Volume: {beer.abv}%
          </div>
          <div style= {styles.body}>
          Organic: {beer.is_organic}
          </div>
          <Divider />
          <div style= {styles.body}>
          Style: {beer.style.short_name}
          <br/>
          {beer.style.description}
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>


)

const mapStateToProps = (state, props) => {
  return { beer: state.beers.find(b => b.id === props.match.params.id) }
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
  },
  body: {
    lineHeight: '4vh',
    fontSize: '2.5vh'
  }
}


export default connect(mapStateToProps)(BeerView);