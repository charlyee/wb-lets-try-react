import React from 'react';
import logo from './logo.svg';
import { Button, Icon, Label, Form, Grid, Segment, Divider, Image, Flag } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello CEO and welcome to your new world of REACT!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is my first experience using React and i'm super excited
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React looks like fun already :-)
        </a>
        <Button size="small" color="green">
          <Icon name="download" />
          Download
        </Button>

                                {/* importing Label and Icons Semantics */}

        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart' />
            Like
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            2,048
          </Label>
        </Button>
        <Button as='div' labelPosition='right'>
          <Button basic color='blue'>
            <Icon name='fork' />
            Fork
          </Button>
          <Label as='a' basic color='blue' pointing='left'>
            2,048
          </Label>
        </Button>

                                {/* importing Form, Grid and Segment, Divider Semantics */}

        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Username'
                  placeholder='Username'
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  type='password'
                />

                <Button content='Login' primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <Button content='Sign up' icon='signup' size='big' />
            </Grid.Column>
          </Grid>

            <Divider vertical>Or</Divider>
        </Segment>

        <Segment>
          <Flag name='ng' />
          <Flag name='ca' />
          <Flag name='gb' />
          <Flag name='kenya' />
          <Flag name='morocco' />
          <Flag name='us' />
          <Flag name='qa' />
          <Flag name='tr' />
          <Flag name='sa' />
          <Flag name='gb sct' />
          <Flag name='fr' />
          <Flag name='et' />
        </Segment>


                                                {/* Importing Image  */}
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src='/src/Image/1091101-download-free-3d-high-resolution-wallpapers-2560x1600.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
                                            {/* Trying to import image semantic */}

        <Image src='/src/Image/download.jpg' size='small' />

      </header>
    </div>
  );
}

export default App;