import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Premium from "../asset/premiumMembership.png"

export default function MediaCard({product}) {
  return (
   <div className="container">
    <Card sx={{ maxWidth: 345 }} className="container rounded-2xl bg-gray-light w-auto">
      <CardMedia
        component="img"
        image={Premium}
        height="140"
        alt={product.alt}
        className="w-max"
      />
      <CardContent className="space-y-4">
        <Typography gutterBottom variant="h5" component="div" className="font-semibold text-center">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="w-72 text-base mx-auto sm:w-auto">
          {product.abstract}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="bg-red text-base font-medium sm:text-sm px-3 py-2 mb-2 text-white rounded-full mx-auto hover:bg-red-dark">Get Started</Button>
      </CardActions>
    </Card>
    </div>
  );
}