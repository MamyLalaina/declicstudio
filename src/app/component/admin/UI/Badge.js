import React from "react";


const Badge = ({children}) =>{
    return(
        <div className="badge">
            <span> 5 </span>
            {children}
            
        </div>
    )
}

export default Badge;