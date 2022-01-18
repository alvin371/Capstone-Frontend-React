import React from "react";
import CardActions from "@mui/material/CardActions";
import Modal from "../../component/smallComponent/modal";
const cardClasses = ({ posts, loading, state }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  var but_style =
    "rounded-xl bg-red mx-auto font-semibold mb-1 text-white hover:text-gray hover:bg-red-dark";
  
  return (
    <div class="holder space-x-2 mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <div class="rounded-xl each mb-10 m-2 shadow-lg border-gray-dark bg-white relative focus:ring-blue hover:shadow-2xl hover:border-blue">
          <img
            class="rounded-t-xl w-full xl:h-52 lg:h-44 md:h-32 sm"
            src={post.download_url}
            alt=""
          />
          <div class="badge absolute top-0 right-0 bg-red m-2 text-white p-1 px-2 text-xs font-bold rounded">
            {post.duration} 0:30
          </div>
          <div class="info-box text-xs flex justify-between p-1 font-medium text-white bg-gradient-to-r from-red-dark to-red ">
            <span class="mr-1 p-1 px-2 font-bold">{post.participan} Participan</span>
            <span  class={state!="online"?"text-white border-l mr-1 p-1 px-2 font-medium":"text-green-jade border-l mr-1 p-1 px-2 font-medium"}>
                {state}
            </span>
          </div>
        
          <div class="desc p-4 text-gray-dark">
            <a
              href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
              target="_new"
              class="title text-center font-bold block cursor-pointer hover:underline"
            >
              {post.title}
              Class 
            </a>
            <a
              href="https://www.youtube.com/user/sam14319"
              target="_new"
              class="badge bg-red text-white rounded px-1 text-xs font-semibold cursor-pointer"
            >
              {post.author}
            </a>
            <div>
            <span class="description text-sm text-black font-semibold block py-2 ">
              Date
            </span>
            <span class="description text-sm text-gray-dark font-medium block">
              {post.day} ,{post.date} cek
            </span>
            <span class="description text-sm text-black font-semibold block py-2 ">
              Time
            </span>
            <span class="description text-sm text-gray-dark font-medium block">
              {post.time} cek
            </span>
            {
                state==="offline"?
                <>
                <span class="description text-sm text-black font-semibold block py-2 ">
                Location
              </span>
              <span class="description text-sm text-gray-dark font-medium block">
                {post.location} Location
              </span>
              </>:""
            }
            <CardActions>
            <div className="mx-auto">
              <Modal but_style={but_style} post={post}/>
            </div>
          </CardActions>
          </div>
          </div>
        </div>
      ))}

      {/* <div class="each mb-10 m-2 shadow-lg border-gray-dark bg-gray relative">
        <img
          class="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt=""
        />
        <div class="badge absolute top-0 right-0 bg-blue m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          10:53
        </div>
        <div class="info-box text-xs flex p-1 font-semibold text-gray-dark bg-gray-300">
          <span class="mr-1 p-1 px-2 font-bold">105 views</span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div>
        <div class="desc p-4 text-gray-800">
          <a
            href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
            target="_new"
            class="title font-bold block cursor-pointer hover:underline"
          >
            Pubg Mobile Custom Room (Unlimited)
          </a>
          <a
            href="https://www.youtube.com/user/sam14319"
            target="_new"
            class="badge bg-blue text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            @dynamo_gaming
          </a>
          <span class="description text-sm block py-2 border-gray-400 mb-2">
            lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
          </span>
        </div>
      </div>

      <div class="each mb-10 m-2 shadow-lg border-gray-dark bg-gray relative">
        <img
          class="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt=""
        />
        <div class="badge absolute top-0 right-0 bg-blue m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          10:53
        </div>
        <div class="info-box text-xs flex p-1 font-semibold text-gray-dark bg-gray-300">
          <span class="mr-1 p-1 px-2 font-bold">105 views</span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div>
        <div class="desc p-4 text-gray-800">
          <a
            href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
            target="_new"
            class="title font-bold block cursor-pointer hover:underline"
          >
            Pubg Mobile Custom Room (Unlimited)
          </a>
          <a
            href="https://www.youtube.com/user/sam14319"
            target="_new"
            class="badge bg-blue text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            @dynamo_gaming
          </a>
          <span class="description text-sm block py-2 border-gray-400 mb-2">
            lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
          </span>
        </div>
      </div>

      <div class="each mb-10 m-2 shadow-lg border-gray-dark bg-gray relative">
        <img
          class="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt=""
        />
        <div class="badge absolute top-0 right-0 bg-blue m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          10:53
        </div>
        <div class="info-box text-xs flex p-1 font-semibold text-gray-dark bg-gray-300">
          <span class="mr-1 p-1 px-2 font-bold">105 views</span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div>
        <div class="desc p-4 text-gray-800">
          <a
            href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
            target="_new"
            class="title font-bold block cursor-pointer hover:underline"
          >
            Pubg Mobile Custom Room (Unlimited)
          </a>
          <a
            href="https://www.youtube.com/user/sam14319"
            target="_new"
            class="badge bg-blue text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            @dynamo_gaming
          </a>
          <span class="description text-sm block py-2 border-gray-400 mb-2">
            lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default cardClasses;
