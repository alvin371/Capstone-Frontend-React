import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mt-6 mx-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {posts.map(post => (
        <div key={post.id} className='group relative'>
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={post.download_url}
                  alt={post.author}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                    <a href="/">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {post.author}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  <p className="mt-1 text-sm text-gray-500">red</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                <p className="text-sm font-medium text-gray-900">look</p>
              </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
