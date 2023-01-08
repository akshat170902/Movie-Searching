import React, { useState, useContext, useEffect } from 'react'

import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading ,setLoading]=useState(true);
  const [searchTerm,setSearchTerm]=useState('avengers');
  const [movies,setMovies]=useState([]);

const fetchDrinks=async()=>{
  setLoading(true)
  try{
const response=await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=a9118a3a`)

console.log(response.data)
const {Search}=response.data;
if(Search){
const newMovies=Search.map((item)=>{
  const{
    Title,
    Year,
    Poster,
    imdbID,
    Type
  }=item
  return{
    id:imdbID,
    name:Title,
    image:Poster,
    info:imdbID,
    year:Year,
    type:Type
  }
})
setMovies(newMovies)
} 
else{
  setMovies([]);
}
setLoading(false)
// console.log(data)
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  fetchDrinks()
},[searchTerm])
  return <AppContext.Provider value={{loading,movies,setSearchTerm,}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
