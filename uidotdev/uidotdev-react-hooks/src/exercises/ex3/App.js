import React from "react";


const posts = [
  {
    id: 0,
    img:
      "https://tylermcginnis.com/static/084b5fe6ce2589e754a188671ba13987/ec435/code-splitting-with-react-and-react-router.jpg",
    text:
      "Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router."
  },
  {
    id: 1,
    img:
      "https://tylermcginnis.com/static/e87fe9a59e14efa29d0fe8c1b3c47cae/ec435/javascript-inheritance-vs-composition.jpg",
    text:
      "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong."
  },
  {
    id: 2,
    img:
      "https://tylermcginnis.com/static/d84e034af76365f2f08d939cbb5fc646/ec435/javascript-modules-iifes-commonjs-es6-modules.jpg",
    text:
      "I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today."
  }
];

const Post = ({ post, isOpen, onOpen }) => {
  return (
    <div>
      <img src={post.img} alt="pics" />
      <br />
      {isOpen ? (
        <p>{post.text}</p>
      ) : (
        <button onClick={() => onOpen(post.id)}>Open</button>
      )}
    </div>
  );
};

function App() {
  const [openId, setOpenId] = React.useState(null);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} isOpen={post.id === openId} onOpen={setOpenId} />
      ))}
    </div>
  );
}

export default App;
