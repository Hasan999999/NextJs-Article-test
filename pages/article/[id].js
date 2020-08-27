import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
export default function article({result}) {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-md-12">
                    <div className="container mt-4">
                        
                        <div className="card">
                        {result.map(results=>(
                            <div>
                                <div className="card-header">
                                        {results.title}
                                    </div>
                                    <div className="card-body">
                                        {results.img_article}
                                        {results.content}
                                    </div>
                                    <div className="card-footer">
                                        <p clsassName="">date : {results.date_time.substring(0,10)}</p>
                                    </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const getStaticPaths = async()=>{
    const res = await axios("http://localhost:3001/admin/article")
    const paths= res.data.map(result=>({params:{id:result._id}}))
    return {
        paths,
        fallback:false
    }
}


export const getStaticProps = async({params})=>{
    const res = await axios("http://localhost:3001/admin/article")
    const result = res.data.filter(results=>(results._id==params.id))
    return{
        props:{result}
    }
}