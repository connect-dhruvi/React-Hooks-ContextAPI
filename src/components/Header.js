import React from 'react';
import HeaderContext from '../contexts/HeaderContext'

const Header = () =>{
    return(
        <div>
            <HeaderContext.Consumer>
                {
                    (context) =>(
                      <div> 
                            <h1>
                                {context.title}
                            </h1>
                            <p>
                                Total Number of Tasks : {context.items}
                            </p>
                        </div>
                    )
                }
            </HeaderContext.Consumer>
        </div>
    );
};

 export default Header;