import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../services/service";

const eachpost = {
    margin:'2px',
    padding:'2px',
    backgroundColor:'#F5F5F5',
    border: '1px solid rgba(100,110,200,0.3)',
    borderRadius:"10px"
}

const Posts = () => {
  const state = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idel") {
      dispatch(userDetails());
    }
  }, [dispatch, status]);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        state.map((post) => (
          <div key={post.id} style={eachpost}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      {status === "failed" && <p>{error}</p>}
    </>
  );
};

export default Posts;
