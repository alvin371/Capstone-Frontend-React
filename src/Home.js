import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  
    return (
        <div className="homeMain">
        <img className="home_img" src="https://i.pinimg.com/originals/53/b5/d7/53b5d70023efa05ec6797b25df413b73.jpg"/>
        <h1 className="home_h1 text-center">Maryam's Restaurant</h1>
        <Link style={{ color: 'white', textDecoration: 'inherit' , textAlign:'center'}} to="/Restaurant" className="home_button">View Menu</Link>
       <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni cupiditate corrupti unde veniam, fugiat et nam facilis temporibus quis optio tempore magnam inventore quia porro, neque nulla aliquam illum aliquid quas! Minima, accusantium natus. Dicta, sapiente vero sunt molestiae, esse maxime dolor voluptates quaerat vitae rerum, minus aliquam cumque natus animi hic sit voluptatum culpa libero perferendis tempora atque perspiciatis ipsum fugiat maiores? A earum nam voluptatibus doloribus ducimus, architecto praesentium mollitia? Itaque obcaecati quibusdam culpa adipisci fugit laborum, modi voluptatem labore corporis temporibus repellendus fugiat sint quasi repudiandae atque laudantium quisquam harum corrupti earum praesentium consectetur deleniti. Asperiores, quibusdam.</h1>
        </div>
    )
}
export default Home;
