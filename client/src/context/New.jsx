import { createContext, useEffect, useState, useCallback } from "react";
import { coursesData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]); // Fixed typo here
    const [isEducator, setIsEducator] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Memoized fetch function
    const fetchAllCourses = useCallback(async () => {
        setLoading(true);
        try {
            // If you were fetching from an API, it would look like:
            // const response = await fetch('your-api-endpoint');
            // const data = await response.json();
            // setAllCourses(data);
            
            // For now, using mock data
            setAllCourses(coursesData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllCourses();
    }, [fetchAllCourses]);

    const calculateRating = (course) => {
        if (!course.courseRatings || course.courseRatings.length === 0) {
            return 0;
        }
        const totalRating = course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0);
        return totalRating / course.courseRatings.length;
    };

    const value = {
        currency,
        allCourses,
        calculateRating,
        navigate,
        isEducator,
        setIsEducator,
        loading,
        error
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};