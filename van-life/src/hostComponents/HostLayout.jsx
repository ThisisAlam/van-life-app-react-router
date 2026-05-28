import React from "react"
import {Link, NavLink, Outlet} from "react-router-dom"

export default function HostLayout(){
    const styleLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return(
        <>
            <nav>
                <NavLink 
                    to="/host"
                    end
                    style={({isActive})=> isActive
                        ? styleLink
                        : null
                    }
                >Dashboard</NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive})=> isActive
                        ? styleLink
                        : null
                    }
                >Income</NavLink>
                <NavLink 
                    to="/host/vans"
                    style={({isActive})=> isActive
                        ? styleLink
                        : null
                    }
                >Vans</NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive})=> isActive
                        ? styleLink
                        : null
                    }
                >Reviews</NavLink>   
            </nav>
            <Outlet />  
        </>
    )
}