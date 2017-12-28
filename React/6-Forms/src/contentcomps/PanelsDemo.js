import React from 'react';
import {Panel, PanelGroup,ButtonToolbar,ButtonGroup,Button,Glyphicon} from 'react-bootstrap';


    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

export default class PanelDemo extends React.Component{
  render(){

    const panels =
          posts.map((post) =>
            <li key={post.id}>
              {post.title}
            </li>);

    const btnToolBar=
                          <ButtonGroup style={{float:'right'}}>
                            <Button><Glyphicon glyph="edit" /></Button>
                            <Button><Glyphicon glyph="trash" /></Button>
                          </ButtonGroup>;
    return(
      <div>
        <ul> {panels} </ul>
        <PanelGroup>
            <Panel collapsible header="Panel 1" eventKey="1">Panel 1 content {btnToolBar}</Panel>
            <Panel collapsible header="Panel 2" eventKey="2">Panel 2 content {btnToolBar} </Panel>
            <Panel collapsible header="Panel 3" eventKey="3">Panel 3 content {btnToolBar}</Panel>
        </PanelGroup>
      </div>
    )
  }
}



// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );
