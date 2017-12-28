import React from 'react';

export class ListsandKeys extends React.Component {
    render(){
        const names = ["Bob","John","Paul", "Smith"];
        const listItems = names.map((name) =>
            <li>{name}</li>
        );

        const studyPlan = {
            NodeJs:3,
            ReactJs:3,
            Html5:2,
            DOM:1,
        };

        const listItems3 = Object.keys(studyPlan).map((n,i) =>
            <li key={i}>{n}</li>
        );

        return(
            <div>
                <div style={{float:'left'}}>
                    <h3>List Created (no Keys associated) !!!  &nbsp;&nbsp; </h3>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <div style={{float:'left'}}>

                    <h3>List Created with Keys !!! </h3>
                    <ul>
                        {listItems3}
                    </ul>
                </div>
                <div style={{clear: 'both'}}>&nbsp; </div>
            </div>

    )
    }
}
