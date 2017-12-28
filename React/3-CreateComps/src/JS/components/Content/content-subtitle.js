import React from 'react';
import PropTypes from 'prop-types';


export class Subtitle extends React.Component {
    render(){
        return(
            <h5 style={this.props.subStyle}> {this.props.subTitle} </h5>
        )
    }
}

// Specifies the default values for props:
Subtitle.defaultProps = {
  subTitle: 'Demo'
};

// Validate prop type
Subtitle.propTypes = {
  subTitle: PropTypes.string
};
