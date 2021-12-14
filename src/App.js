import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = ({filterItem, data}) =>
{
   return(
    <div className="stars">
      <div className="twinklin">
        <div className="clouds">
          
            <div className="App_main">
            <nav className="navbar container-fluid mt-2">

            <h1 className="maryam_company" className="text-center large"> Maryam's Food Company </h1>
                  { 
                      data.map((curElem) => {
                        return (
                              <button
                                onClick={() => 
                                filterItem(curElem)}>{curElem}</button>
                                
                                );
                      })
                  }
           </nav>
           </div>

        </div>
      </div>
    </div>
  
  )
}
export default App;
