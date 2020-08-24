import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    if (inputValue !== "") {

      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };
  
      const newPostsList = [newPost, ...postsList];
  
      setPostsList(newPostsList);
      setInputValue("")
      setErrMessage("")
    } else {
      setErrMessage("O post nao pode ser vazio")
      setTimeout(() => setErrMessage(""), 3000)
    }

  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {postsList.length === 0 ? <></> : <p>Quantidade de posts: {postsList.length}</p>}
      {errMessage === "" ? <></> : errMessage}
      {postsList.length === 0 ? <p>Nenhum post</p> :
        <div>
            {postsList.map(post => {
            return (
                <Post
                  key={post.id}
                  post={post}
                  toggleLike={toggleLike}
                  deletePost={deletePost}
                />
            );
          })
        }
      </div>}
    </div>
  );
};

export default App;
