import { createContext, useEffect, useState } from "react";
import { coursesData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCoursese] = useState([])
    const [isEducator, setIsEducator] = useState(true) 
    // function for fetching all courses
    const fetchAllCourses = async () => {
        setAllCoursese(coursesData)
    }

    // calculation for average rating of courses
    const calculateRating = (course) => {
        if(course.courseRatings.length === 0 ) {
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    useEffect(() => {
        fetchAllCourses()
    },[])

    const value = {
        currency,
        allCourses,
        calculateRating,
        navigate,
        isEducator, setIsEducator,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}