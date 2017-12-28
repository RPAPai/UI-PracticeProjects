import React from 'react';
import ReactDOM from 'react-dom';

export class FormEnroll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFullstack: true,
            fname:'',
            lname:'',
            pastExperience: 2,
            course:'reactjs'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);

        this.formStyle={
            background:'linear-gradient(black,steelblue)',
            color:'white',
            width: '30%',
            padding:'10px',
            margin: 'auto',
            marginTop: '10px',
            boxSizing: 'border-box'};


        this.compStyle={
            width: "100%",
            padding: "10px",
            margin: "5px auto",
            display: "inline-block",
            boxSizing: "border-box"
            };

        this.btnStyle={
            width: "50%",
            padding: "10px",
            margin: "5px auto",
            float: "left",
            boxSizing: "border-box",
         };

        this.btnAfterStyle={
            clear : "both",
        };

        this.labelStyle={
            textAlign: 'center',
        };
    }

    submitForm(event) {
        let str=this.state;
   //   alert(event.target.value.toString());
        console.log(this.state);
     //   console.log(event.target.value);
    }

    resetForm(event) {
        this.setState ({
            isFullstack: true,
            fname:'',
            lname:'',
            pastExperience: 2,
            course:'reactjs',
        });
        console.log("from RESET::",this.state);

    }


    handleInputChange(event) {
        const target = event.target;
        console.log(target.checked);
        const value = (target.type === 'checkbox') ?  target.checked: target.value;
        const name = target.name;
        console.log("name="+name+" valeu="+value);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div id="form">
            <form style={this.formStyle} onSubmit={this.submitForm}>
                <h3  style={this.labelStyle}> Enrollment Form </h3>
                <label  style={this.compStyle}>
                    First Name:
                    <input name="fname"
                            style={this.compStyle}
                            onChange={this.handleInputChange}
                            value={this.state.fname}
                     />
                </label>

                <label  style={this.compStyle}>
                    Last Name:
                    <input name="lname"
                           style={this.compStyle}
                           onChange={this.handleInputChange}
                           value={this.state.lname}
                    />
                </label>


                <label style={this.compStyle}>
                    Number of years of past experience:
                    <input
                        style={this.compStyle}
                        name="pastExperience"
                        type="number"
                        value={this.state.pastExperience}
                        onChange={this.handleInputChange} />
                </label>

                <label style={this.compStyle}>
                    Pick your course:
                    <select style={this.compStyle} name="course" value={this.state.course} onChange={this.handleInputChange}>
                        <option value="ReactJS">React JS</option>
                        <option value="NodeJS">Node JS</option>
                        <option value="AngularJS">Angular JS</option>
                        <option value="BackboneJS">Backbone JS</option>
                    </select>
                </label>


                <label  style={this.compStyle}>
                    Is Fullstack:
                    <input
                        name="isFullstack"
                        type="checkbox"
                        checked={this.state.isFullstack}
                        onChange={this.handleInputChange} />
                </label>

                <div>
                    <button style={this.btnStyle} type="submit"> Enroll </button>
                    <button style={this.btnStyle} type="button" onClick={this.resetForm}> Reset </button>
                </div>
                <div  style={this.btnAfterStyle}> </div>
            </form>
        </div>
        );
    }
}
