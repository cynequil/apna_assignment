import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isobject_id, post_response, resolve_children } from "../actions";
const Post = () => {
  const dispatch = useDispatch();
  const object_id = useSelector((state) => state.object_id);
  const post = useSelector((state) => state.post);
  const children = useSelector((state) => state.children);

  useEffect(() => {
    const getPost = async () => {
      const url = `http://hn.algolia.com/api/v1/items/${object_id}`;
      try {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        dispatch(post_response(response));
        dispatch(resolve_children(response.children));
      } catch (e) {
        if (e instanceof TypeError) {
          alert("Network Unavailable!! Check Connection.");
        }
      } finally {
        dispatch(isobject_id(false));
      }
    };
    if (isobject_id) getPost();
  }, [object_id, dispatch]);
  return (
    <div className="post">
      <h2 className="post__title">
        {post.title === "" ? "Title Unavailable" : post.title}
      </h2>
      <p className="post__points">Points - {post.points}</p>
      <p className="post__author">By - {post.author}</p>
      {children.map((child) => {
        return (
          <div className="comment" key={child.objectID}>
            <div
              className="comment__text"
              dangerouslySetInnerHTML={{ __html: child.text }}
            ></div>
            <div
              className="comment__author"
              dangerouslySetInnerHTML={{ __html: child.author }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
