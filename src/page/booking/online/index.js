import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../component/pageComponent/Navbar/Navbar";
import Header from "../../../component/asset/HeaderOnline.png";
import Footer1 from "../../../component/smallComponent/footer";
import Search from "../../../component/smallComponent/search";
import Pagination from "../../../component/smallComponent/pagination";
import Card from "../../../component/smallComponent/cardClass";
import TestimonyBest from "../../../component/smallComponent/testimonyBest";

const BookOnline = () => {
  const page = "Online";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
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
    <div className="bg-black bg-cover w-full space-y-10">
      <Navbar />
      <div className="space-y-10">
        <img
          src={Header}
          alt="mid header"
          className="w-full py-2 opacity-60 "
        />
        <div class=" text-gray text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
          WHAT CLASS
          <div>
            <Search page={page} />
          </div>
        </div>
        <h1 className="text-gray font-bold text-center text-4xl mt-12 mb-8">
          Online Classes List
        </h1>
        <Card posts={currentPosts} loading={loading} page={page} className="my-3" />
        <div className="flex justify-center mt-10 -mx-5 ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
        <h1 className="text-gray font-bold text-center text-4xl ">
          Testimony
        </h1>
        <TestimonyBest />
        <Footer1 />
      </div>
    </div>
  );
};

export default BookOnline;
