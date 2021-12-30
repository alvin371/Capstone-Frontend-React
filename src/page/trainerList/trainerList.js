import React, { useState, useEffect } from "react";
import Posts from "../../component/smallComponent/post";
import Pagination from "../../component/smallComponent/pagination";
import axios from "axios";

const Traininglist = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-5">
      <h1 className="text-gray-dark mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <div className="flex justify-center -mx-5">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Traininglist;
