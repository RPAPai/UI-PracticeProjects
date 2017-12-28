import React from 'react';
import {Subtitle} from './content-subtitle';

export class Title extends React.Component {
     render(){

        const title="Few React JS Components";
        const subTitle=["Demonstartion"];
        const alignStyle={textAlign: 'center'};

        return(
            <div>
                <h1 style={alignStyle}> {title} </h1>
                 <Subtitle subStyle={alignStyle} subTitle={subTitle}/> 
            </div>
        )

    }
}
