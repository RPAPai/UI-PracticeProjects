import React from 'react';
import {Title} from './Content/content-title';
import {Greetings} from './Content/content-Greetings';
import {Timer} from './Content/content-timer';
import {InputDemo} from './Content/content-InputDemo';
import {ListsandKeys} from './Content/content-ListsnKeys';
import {Button} from './Content/content-Button';
import {Dropdown} from './Content/content-dropdown';
import {Image} from './Content/content-image';
import {FormEnroll} from './Content/content-formenroll';
import {ChildToParent} from './Content/content-ChildToParent';
import {Child2Parent} from './Content/content-Child2Parent';

// Content demostrates - use of state vs class member
export class Content extends React.Component {
    render(){

            return(
                <div>

                    <Title/> <br/>

                    <Greetings/> <br/> <br/>

                    <Timer/> <br/> <br/>

                    <Button/> <br/> <br/>

                    <ListsandKeys/> <br/> <br/>

                    {/* <ChildToParent/> <br/> <br/>
               */}
     <Child2Parent/> <br/> <br/>
                    <InputDemo/> <br/> <br/>

                    <Dropdown/> <br/> <br/>

                    <Image/> <br/> <br/>

                    <FormEnroll/> <br/> <br/>

                </div>
            )
        }
}
