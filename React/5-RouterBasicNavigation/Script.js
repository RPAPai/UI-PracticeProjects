import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
const node=    document.getElementById('root');

// Version 1
/****
 import Home from './Home';
 import About from './About';

 export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <switch>
                        <Route exact path="/" component={Home} />
                        <Route  path="/about" component={About} />
                    </switch>
                </div>
            </BrowserRouter>
        )
    }
}
 ReactDOM.render(<App/>,node);
***/

// Version 2
/*****
 import Home from './Home';
 import About from './About';

 const App = () => (
     <BrowserRouter>
         <div>
             <switch>
                 <Route exact path="/" component={About} />
                 <Route  path="/about" component={About} />
             </switch>
         </div>
     </BrowserRouter>
 );

 ReactDOM.render(
 <App/>,
 document.getElementById('root')
 );
******/

// Version 3 -- Everythisg with Arrow function
/***
const Home = () => <h1> From home ! </h1>;
const About = () => <h1> From About ! </h1>;
const FOF = () => <h1> 404 Error ! </h1>;

const App = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" render={() => <div>Services</div>}/>
                <Route component={FOF} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
******/
// Version 4
/********************/
const App = () => (
    <BrowserRouter>
        <div>
            <ul style={{display:'block'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <Route render={() => <div>404 Error!!!</div>}/>
            </Switch>
        </div>
    </BrowserRouter>
)

const Home = () => ( <div> <h2>Home</h2> </div>);
const About = () => ( <div><h2>About</h2> </div>);
const Topics = () => ( <div><h2>Topic</h2> </div>);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
/************/
// version 5
/****

 // BrowserRouter is the router implementation for HTML5 browsers (vs Native).
 // Link is your replacement for anchor tags.
 // Route is the conditionally shown component based on matching a path to a URL.
 // Switch returns only the first matching route rather than all matching routes.

 const Home = () => <h1>Home</h1>;
 const About = () => <h1>Aboutasdsas</h1>;

 // We give each route either a target `component`, or we can send functions in `render` or `children`
 // that return valid nodes. `children` always returns the given node whether there is a match or not.
 const App = () => (
 <BrowserRouter>
 <div>
 <Link to="/">Home</Link>{' '}
 <Link to={{pathname: '/about'}}>About</Link>{' '}
 <Link to="/contact">Contact</Link>

 <Switch>
 <Route exact path="/" component={Home} />
 <Route path="/about" component={About} />
 <Route
 path="/contact"
 render={() => <h1>Contact Us</h1>} />
 <Route path="/blog" children={({match}) => (
                    <li className={match ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>)} />
 <Route render={() => <h1>Page not found</h1>} />
 </Switch>
 </div>
 </BrowserRouter>
 );

 ReactDOM.render(
 <App/>,
 document.getElementById('root')
 );
 ****/
// Version 6
/******
 const Home = () => <h1>Home</h1>;
 const About = () => <h1>About</h1>;

 // We give each route either a target `component`, or we can send functions in `render` or `children`
 // that return valid nodes. `children` always returns the given node whether there is a match or not.
 const App = () => (
 <BrowserRouter>
 <div>
 <Link to="/">Home</Link>{' '}
 <Link to={{pathname: '/about'}}>About</Link>{' '}
 <Link to="/contact">Contact</Link>

 <Switch>
 <Route path="/" component={Home} />
 <Route path="/about" component={About} />
 <Route
 path="/contact"
 render={() => <h1>Contact Us</h1>} />
 <Route path="/blog" children={({match}) => (
                    <li className={match ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>)} />
 <Route render={() => <h1>Page not found</h1>} />
 </Switch>
 </div>
 </BrowserRouter>
 );

 ReactDOM.render(
 <App/>,
 document.getElementById('root')
 );
 *****/

/************
const App  =
 <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={Home} />
    </div>
</BrowserRouter>; */

// Version Initial
/*
const Home = ()=>  <h4> I am Home !! </h4>;
const Contact = ()=>  <h4> I am Contact !!! </h4>;
const Services = ()=>  <h4> I am Services !!!! </h4>;
const FourOhFour = ()=>  <h4> 404 Error !! </h4>;
const Options = () => <h1><Link to="/services">Click Me</Link></h1>


const MyRoutes = () => (
    <div>
        <Route exact path='/' component={App} />
        <Route  path='/contact' component={App} />
        <Route  path="/services" component={App} />
        <Route component={FourOhFour} />
    </div>
);

const App = () => (
    <BrowserRouter>
        <div>
            <switch>
                <Route exact path="/" component={Home} />
                <Route  path="/about" component={Home} />
            </switch>
        </div>
    </BrowserRouter>
    );

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

*******/
