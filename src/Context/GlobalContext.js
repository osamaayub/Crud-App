/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useReducer,createContext } from "react";
import BlogReducer from "./BlogReducer";


const intialState={
    blogs:[],
}

export const GlobalContext=createContext(intialState);

  const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(BlogReducer,intialState);
    
    const Addblog=(blog)=>{
        dispatch({
            type:"ADD_BLOG",
            payload:blog,
        })
    }
    const Updateblog=(blog)=>{
        dispatch({
                type:"UPDATE_BLOG",
                payload:blog,
        })
    }
    const DeleteBlog=(id)=>{
        dispatch({
             type:"DELETE_BLOG",
             payload:id,
        })
    }
    return (
        <>
           <GlobalContext.Provider value={{blogs:state.blogs ,Addblog,DeleteBlog,Updateblog}}>
              {children}
           </GlobalContext.Provider>
        </>
    )

}

export default GlobalProvider;

