import React, { Component } from 'react';

import {
  fade,
  withStyles
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import axios from "axios";

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    marginBottom: '10px',
    fontSize: 16,
    width: 400,
    // width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default class App extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  clickSubmit = event => {
    // now send email
    console.log("yoho molo");
    axios.post("https://hiuzny8i0l.execute-api.us-west-2.amazonaws.com/prod/sendemail",
    {
      subject: "kk test 1",
      body: "email body content..."
    }).then(res =>
      console.log(res)
    ).catch(err => console.log(err));
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh' }} >

          <Box my={4} p={2} >
            <Typography variant="h5" component="h1" gutterBottom>Contact Me
          </Typography>
            <form>
              <FormControl>
                {/* <br />Name */}
                <InputLabel shrink htmlFor="name">
                  Name
              </InputLabel>
                <BootstrapInput value={this.state.name} id="name" onChange={this.handleInputChange} />
              </FormControl>
              <FormControl>
                {/* <br />Email */}
                <InputLabel shrink htmlFor="email">
                  Email
              </InputLabel>
                <BootstrapInput value={this.state.email} id="email" onChange={this.handleInputChange} />
              </FormControl>
              <FormControl>
                <InputLabel shrink htmlFor="message">
                  Message
              </InputLabel>
                <BootstrapInput
                  id="message"
                  multiline
                  rows="6"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </FormControl>
            </form>
            <Button variant="contained" color="primary" onClick={this.clickSubmit}>
              Submit
          </Button>
          </Box>
        </Typography>
      </Container>
    );
  };
}
