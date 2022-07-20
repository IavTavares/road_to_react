import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const authorStyle = {
  color: 'darkolivegreen',
  fontweight: 'bold',
  // backgroundImage: 'url(' + imgUrl + ')',
};


function App() {

  return (
    <div>
      <h1> My Hacker Stories </h1>
      <Search />
      <hr />
      <List />
      <hr />
      <List />
    </div>
  )
};
function Search(){
  const handleChange = (event) => {
    console.log(event.target.value);
    // open developer tab on the browser to see the log.
  };
  return(
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type = 'text' onChange={handleChange}/>
    </div>
  )
};
function List(){
  return (
    <ul>
      {list.map(function (item){
        return(
          <li key = {item.objectID}>
          <span>
            <a href={item.url}>{item.title}:</a>
          </span>
          <span style={authorStyle}>  {item.author},</span>
          <span> {item.num_comments},</span>
          <span> {item.points}.</span>
          </li>
        )
      })} 
    </ul>  
  );
}




export default App;
