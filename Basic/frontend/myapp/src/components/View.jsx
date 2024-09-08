import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function View(){
    const {id} = useParams();
    const [data, setData] = useState({});
    const getsingle = async ()=>{
        console.log(id);
        const response=await fetch(`http://localhost:8080/${id}`);  
        const result= await response.json()
        console.log(result);
        setData(result);
    } 

    useEffect(()=>{
        getsingle();
    },[])

    return(
        <>
        
        {data.firstname}
        {data.lastname}
        {data.email}
        {data.salary}
        </>
    )
}