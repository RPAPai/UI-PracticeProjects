import React from 'react';

export class Learn extends React.Component{
    render(){
        return(
                <div className="container">
                    <div className="panel-group">
                        <div className="panel-info">
                            <div className="panel-heading">1. What is ReactJS?</div>
                            <div className="panel-body">
                                React.js is a JavaScript library developed by engineers at Facebook for building user interfaces. 
                                ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries 
                                and it has strong foundation and large community behind it.
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">2. What are the advantages/benefits and limitations of React?</div>
                            <div className="panel-body">
                                <div>
                                    <div>
                                        <b>Following are the advantages/benefits and limitations of React</b><br />
                                            <b>Advantages/benefits:</b><br />
                                        <ul>
                                            <li>ReactJS can be used on client and server side too.</li>
                                            <li>ReactJS components are highly re-usable.&nbsp;</li>
                                            <li>React comes with a small API. Beginners will find it easy to learn and start using it.</li>
                                            <li>ReactJS uses virtual DOM which is JavaScript object. This will improve apps performance since JavaScript virtual DOM is faster than the regular DOM.</li>
                                            <li>Component and Data patterns improve readability which helps to maintain larger apps.</li>
                                            <li>ReactJS can be used with other frameworks(Backbone.js, Angular.js) as it is only a view layer..</li>
                                        </ul>
                                            <b>React Limitations:</b><br />
                                        <ul>
                                            <li>React only covers view layer of the app so you still need to choose other technologies to get a complete tooling set for development.</li>
                                            <li>React is using inline templating and JSX. This can seem awkward to some developers.</li>
                                            <li>React library is too large.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">2. What is a React Component?</div>
                            <div className="panel-body">
                                Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
                                Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") 
                                and return React elements describing what should appear on the screen.
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">3. What is a React Props?</div>
                            <div className="panel-body">
                                As Per React's Thinking in React documentation, props are best explained as "a way of passing data from parent to child." 
                                That's it. In essence, props are just a communication channel between components, always moving from top (parent) to 
                                bottom (child). 
                                When you use any React component you can pass it some input data that you want it to work with. 
                                These properties are called "props" and are read-only values that define the basic starting point for a component.
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">4. What is a State?</div>
                            <div className="panel-body">
                                State is another concept introduced by React and behaves a little bit differently from props. 
                                State is best described as how a component's data looks at a given point in time.
                                State is private and fully controlled by the component.
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">5. React Component Lifecycle / Lifecycle Methods</div>
                            <div className="panel-body">
                                <ul>
                                    <li><strong> componentWillMount </strong> is executed before rendering, on both server and client side. <br /><br /></li>
                                    <li><strong> componentDidMount </strong> is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.<br /><br /></li>
                                    <li><strong> componentWillReceiveProps </strong> is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.<br /><br /></li>
                                    <li><strong> shouldComponentUpdate </strong> should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.<br /><br /></li>
                                    <li><strong> componentWillUpdate </strong> is called just before rendering.<br /><br /></li>
                                    <li><strong> componentDidUpdate </strong> is called just before rendering.<br /><br /></li>
                                    <li><strong> componentWillUnmount </strong> is called after the component is unmounted from the dom.<br /></li>
                                </ul>                                
                            </div>
                        </div>
                        <div className="panel-info">
                            <div className="panel-heading">6. What is the use of super call in the constructor?</div>
                            <div className="panel-body">
                                Actually, a super call in the constructor calls the constructor of the parent class. 
                                You can have access to this independently of using it or not, but in the context of react, 
                                the properties associated with this, like this.props and this.state are set and configured properly in the 
                                React.Component class constructor. So that's why you must call super first, so that this is properly setup.        
                            </div>
                        </div>
                        
                    </div>

            </div>
        );
    }
}