import React from 'react';

const Breakfast = ({menuData}) =>
{
    return (
        <div className="mainClass ">
        <div className="row">
        {
            menuData.map((curElem) =>
            {
                const {image, heading, paragraph, price} = curElem;
                return (
                    
                    <div className="mainDiv">
                  
                            <div className="imgClass">
                                <img className="img" src={image}/>
                            </div>

                            <div className="headClass">
                                <h2>{heading}</h2>
                                <p>{paragraph}</p>
                                <h4>{price}</h4>
                            </div>
                    </div>
                   
                )
            })
        }
        </div>
        
     </div>
    )
}
export default  Breakfast;
