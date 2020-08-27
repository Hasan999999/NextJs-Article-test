import React,{useEffect,useState} from 'react';
import Link from 'next/link'
import axios from 'axios'
const Navbar = ({result}) => {
    const [data,setData]=useState({group:[]})
    useEffect(()=>{
        axios.get("http://localhost:3001/admin/group")
        .then(result=>{
            setData({group:result.data})
        }).catch(err=>console.log(err))
    },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link  href="/">
                    <a className="nav-link">Home</a>
                    </Link>
                    {
                        data.group.map((result,index)=>(
                            <Link href={"/group/"+result._id}  key={index}>
                             <a className="nav-link">{result.group_name}</a>
                            </Link>
                        ))
                    }
                </ul>
                <Link href="/admin">
                    <button className="btn btn-outline-danger" >Admin</button>
                </Link>
            </div>
        </nav>

    );
}
export default Navbar;


