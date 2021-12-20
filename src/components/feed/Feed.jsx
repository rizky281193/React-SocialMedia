import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {
  const [post, setPost] = useState([])
  const baseURL = 'https://jsonplaceholder.typicode.com'

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${baseURL}/posts`)
      setPost(res.data)
    }
    fetchPost()
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        {post.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
