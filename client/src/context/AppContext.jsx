import { createContext, useEffect, useState } from "react";
import { coursesData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true) 
    const [enrolledCourses, setEnrolledCourse] = useState([])
    
    // function for fetching all courses
    const fetchAllCourses = async () => {
        setAllCourses(coursesData)
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

    // function for calculating total time needed for the chapter
    const calculateTiming = (chapter) => {
        let time = 0
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 *1000, {units: ["h", "m"]})
    }

    // function for calculating total time needed for the course
    const calculateTime = (course) => {
        let time = 0
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))

        return humanizeDuration(time * 60 *1000, {units: ["h", "m"]})
    }

     // function for calculating total number of lectures in the course
    const calculateLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    // function for fetching the courses enrolled by the students
    const fetchEnrolledCourses = async () => {
        setEnrolledCourse(coursesData)
    }


    useEffect(() => {
        fetchAllCourses()
        fetchEnrolledCourses()
    },[])

    const value = {
        currency,
        allCourses,
        calculateRating,
        navigate,
        isEducator, setIsEducator,
        calculateTiming,
        calculateTime,
        calculateLectures,
        enrolledCourses,
        fetchEnrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}