import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Modal from "../../component/smallComponent/modal";

const CardClass = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  var but_style =
    "rounded-xl bg-red mx-auto font-semibold mb-1 text-white hover:text-gray hover:bg-red-dark";

  return (
    <div className="mt-6 mx-6 justify-center grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {posts.map((post) => (
        <Card
          sx={{ maxWidth: 345 }}
          key={post.id}
          className="border-white border-2 bg-black rounded-xl"
        >
          <CardMedia
            key={post.id}
            component="img"
            alt="green iguana"
            height="140"
            image={post.download_url}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-white text-center"
            >
              {post.author}
            </Typography>
            <div className="space-x-1">
              <Typography variant="body2" className="inline text-gray font-semibold ">
                Name
              </Typography>
              <Typography variant="body2" className="inline text-gray font-semibold ">
                :
              </Typography>
              <Typography variant="body2" className=" inline text-gray">
                {post.author}
              </Typography>
            </div>
            <div className="space-x-1">
              <Typography variant="body2" className="inline text-gray font-semibold ">
                Date
              </Typography>
              <Typography variant="body2" className="inline text-gray font-semibold ">
                :
              </Typography>
              <Typography variant="body2" className=" inline text-gray">
                {post.url}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <div className="mx-auto">
              <Modal but_style={but_style} post={post}/>
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CardClass;
