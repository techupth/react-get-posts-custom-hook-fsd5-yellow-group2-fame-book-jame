import { useNavigate } from "react-router-dom";
import useGetPost from "../components/useGetPost";
import { useState } from "react";

function ViewPostPage() {
  const navigate = useNavigate();
  const [posts, isError, isLoading] = useGetPost();
  const [display, setDisplay] = useState({});
  return (
    <div>
      <h1>View Post Page</h1>

      <div className="view-post-container">
        <h2>{display.title}</h2>
        <p>{display.content}</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => {
                    setDisplay({ ...post });
                  }}
                >
                  View post
                </button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
