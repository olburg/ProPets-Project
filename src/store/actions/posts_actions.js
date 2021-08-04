import postsInitial, { setPostsToStorage } from "../../data/posts";
import { FETCH_POSTS, ADD_POST} from "../typesList";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const obj = getObject();
      await dispatch(fetchPosts(obj));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://propets.telran-edu.de:8080/api/v1/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })

      const newPost = response.json(post);
      await dispatch(addPostInState(newPost));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const getObject = () => {
  return {
    list: [...postsInitial],
  };
};

const fetchPosts = (obj) => {
  return {
    type: FETCH_POSTS,
    payload: obj,
  };
};

const addPostInState = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const addPostInServer = (post) => {
  const newPost = {
    ...post,
    id: Date.now(),
  };
  postsInitial.push(newPost);
  setPostsToStorage(postsInitial);
  return newPost;
};