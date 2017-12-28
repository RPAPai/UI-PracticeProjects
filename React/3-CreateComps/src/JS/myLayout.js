import React from 'react'
import {Header} from './components/MyHeader'
import {Footer} from './components/MyFooter'
import {Content} from './components/myContent'




export class Layout extends React.Component {

    // Header demonstrates - props and state - check content-title.js and content-subtitle.js
    // Content demostrates - use of state vs class member
    //Footer demostrates - use of state

    render(){
        return(
            <div>
                {/* <Header/> */}
                <Content/>
                {/* <Footer/> */}
            </div>

        )
    }
}
