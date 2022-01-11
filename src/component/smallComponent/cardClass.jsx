import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardClass = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

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
              Lizard
            </Typography>
            <Typography variant="body2" className="text-gray">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              
              className="rounded-xl bg-red mx-auto font-semibold mb-1 hover:text-gray hover:bg-red-dark"
            >
              Detail
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CardClass;
