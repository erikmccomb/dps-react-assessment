import React from 'react';
import { Header, Segment, Divider, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const BreweryView = ({ brewery = {} }) => (
  <Segment basic>
    <Segment basic textAlign='center'>
      <Header as='h1' style={styles.header}>{brewery.name}</Header>
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
          </div>
          <div style= {styles.body}>
          </div>
          <Divider />
          <div style= {styles.body}>
          <br/>
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>


)

const mapStateToProps = (state, props) => {
  return { brewery: state.breweries.find(b => b.id === props.match.params.id) }
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


export default connect(mapStateToProps)(BreweryView);