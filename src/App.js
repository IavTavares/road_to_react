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
  const stories = [
    {
      title: 'React_story',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux_story',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm,setSearchTerm]= React.useState("");

  function handleSearch (event){
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter(function(story){
    return story.title.includes(searchTerm)
  });
  return (
    <div>
      <h1> My Hacker Stories </h1>
      <Search searchTerm = {searchTerm} onSearch = {handleSearch}/>
      <hr />
      <List list={searchedStories}/>
      <hr />
      <List list={list}/>
    </div>
  )
};
function Search(props){ 
  return(
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type = 'text' onChange={props.onSearch}/>
      <p>Searching for <strong>{props.searchTerm}</strong></p>
    </div>
  )
};
function List(props){
  return (
    <ul>
      {
        props.list.map(
          function (item){
            return(
              <Item key = {item.objectID} item = {item}/>
            )
          }
        )
      }
    </ul> 
  );
}
function Item(props){
  const keys = Object.keys(props);
  console.log("properties of Item Element:" + keys);
  console.log("props:" + props);
  return(
    <li>
    <span>
      <a href={props.item.url}>{props.item.title}:</a>
    </span>
    <span style={authorStyle}>  {props.item.author},</span>
    <span> {props.item.num_comments},</span>
    <span> {props.item.points}.</span>
    </li>
  )
   
};




export default App;
