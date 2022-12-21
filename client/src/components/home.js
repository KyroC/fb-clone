import React, { useEffect } from "react";
import axios from "axios";

export default function Home(){

    const userCheck = () => {
    axios.get("/", {withCredentials: true})
        .then((res) => {
            console.log(res.data.user);
        }
    )
    };
    
    useEffect(() => {
        userCheck();    
    },[]);
}