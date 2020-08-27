import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios'
const id = ({result}) => {
    return (
        <div>
            <Navbar/>
            <div onClick={()=>{console.log(result)}}>
                asfa
            </div>
        </div>
    );
}

export const getStaticPaths = async()=>{
    const res = await axios("http://localhost:3001/admin/article")
    const paths= res.data.map(result=>({params:{id:result._id}}))
    return {
        paths,
        fallback:true
    }
}


export const getStaticProps = async({params})=>{
    const res = await axios("http://localhost:3001/admin/article")
    const result =   res.data.filter(results=>(
        results.group_id==params.id
    ))
    console.log(result)
    return{
        props:{result}
    }
}
export default id;
