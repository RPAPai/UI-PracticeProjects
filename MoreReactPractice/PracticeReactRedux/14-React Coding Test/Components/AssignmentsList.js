import React from 'react';
import { Assignment } from './Assignment';
import Moment from 'react-moment';

export class AssignmentsList extends React.Component{

    constructor(){
        super();
        this.state = {
            assignmentListData: ""
        }
    }

    componentDidMount(){
        fetch("https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    assignmentListData: data
                });
                //console.log(this.state.assignmentListData);
            });
    }

    render(){
        let assignmentsList = this.state.assignmentListData;
        return(
            <div>
                <h3>Assignments</h3>
                {   assignmentsList &&
                    assignmentsList.map((assignment) => { 
                        return <Assignment 
                            key={assignment.id} 
                            title={assignment.title} 
                            dueDate={<Moment format="MMM DD, YYYY" date={assignment.due_at} />}
                        /> 
                    }) 
                }
            </div>
        );
    }

}

/* https://www.npmjs.com/package/react-moment */