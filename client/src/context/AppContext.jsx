import { createContext, useEffect, useState } from "react";
import { coursesData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCoursese] = useState([])
    // function for fetching all courses
    const fetchAllCourses = async () => {
        setAllCoursese(coursesData)
    }

    useEffect(() => {
        fetchAllCourses()
    },[])

    const value = {
        currency,
        allCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}