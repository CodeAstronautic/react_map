import React from 'react';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
function Data(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
      <li key={post.id}>
        {post.title}
      </li>)}
    </ul>
  ) ;
  const content = props.posts.map((post) =>
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
);
  return (
    <div className="App">
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function DataS () {
  return(
    <div>
      <Data posts={posts} />
    </div>
  )
}
export default DataS ;

/*
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
*/