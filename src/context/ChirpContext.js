import React from "react";

import createDataContext from "./createDataContext";

import { navigate } from "../navigationRef";
import { AsyncStorage } from "react-native";
import chirpAPI from "../api/chirp"
import { NavigationContainer } from "@react-navigation/native";
const chirpReducer=(state,action)=>{
    switch(action.type){
        case "delete_chirp":
            return state.filter(chirp=>chirp._id !== action.payload)


        case 'fetch_chirps':
            return action.payload
       
        default:
            return state
    }
}


const deleteChirp=(dispatch)=>{
    return async ({idParam})=>{
        dispatch({type:"delete_chirp", payload: idParam})

        console.log("inside");
        console.log(idParam);
        const response=await chirpAPI.delete(`/chirps/${idParam}`)
    }
}

const fetchChirp=(dispatch)=>{
    return async ()=>{
const response=await chirpAPI.get('/chirps')
dispatch({type:'fetch_chirps',payload:response.data})
    }
}

const createChirp=(dispatch)=>{
    return async ({chirp,navigation})=>{
        console.log("Details");
       console.log(chirp);
       console.log(navigation);
        await chirpAPI.post('/chirps',{chirp})
        navigation.goBack()



    }
}



export const {Context, Provider}= createDataContext(
    chirpReducer,{fetchChirp,createChirp, deleteChirp},[].reverse()
)