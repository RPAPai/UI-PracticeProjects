import React from 'react';
import { Grid, Row, Col, code} from 'react-bootstrap';


export default class GridDemo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      buttonPressed:'Press any button...'
    }
    this.updateMessage=this.updateMessage.bind(this);
  }

  updateMessage(e){
      this.setState({buttonPressed:'You clicked: '+e.target.name});
  }

render(){
    return(
      <Grid>
         <Row className="show-grid">
           <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
           <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
           <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
           <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
           <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
           <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
         </Row>

         <Row className="show-grid">
           <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
           <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
         </Row>
       </Grid>
      )
  }
}
