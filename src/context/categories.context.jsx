import { createContext, useEffect, useState} from "react";

import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext=createContext({
    categoriesMap:[],
})

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({})

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    // add data on the database

    useEffect(()=>{
        const getCategoriesMap=async()=>{
        const categoryMap= await getCategoriesAndDocuments()
        console.log(categoryMap)
        setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
        //fetching the categories from the firebase
    },[])

    const value={categoriesMap}
return(
    <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
)
}