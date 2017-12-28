import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel,HelpBlock} from 'react-bootstrap';
//import {formStyle, compStyle} from './FormStyle';

export default class SignupFormBS1 extends React.Component{

    constructor(props) {
    super(props);

    this.state = {
      value: ``
    };

    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  getValidationState () {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';


  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }


  render () {
    return (
      <Form>
        <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
      </Form>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <Grid>
//         <Row className="show-grid">
//           <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
//           <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//         </Row>
//       </Grid>
//     );
//   }
// }
