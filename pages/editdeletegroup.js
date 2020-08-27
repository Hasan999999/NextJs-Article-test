import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Link from 'next/Link'
import Navbar from './components/Navbar'
import Menu from './components/admin/Menu'
export default function editdeletegroup({data}) {
    const router =useRouter()
    const [group, setGroup] = useState([])
    const [idGroup,setIdGroup]=useState({_id:""})
    const deleteClick=  (e)=>{
        setIdGroup({_id:e.target.name})
        async function deleteGroup(){
            try {
                router.push("/editdeletegroup")
                const result = await axios.delete("http://localhost:3001/admin/group/"+idGroup._id)
                return result
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(deleteGroup,5000)
    }
    return (
        <div>
            <Navbar/>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="container">
                        <Menu/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="container">
                    <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th >Group_Name</th>
                        <th >Edit/Delete</th>
                    </tr>
                </thead>
                {
                data.map(result=>{
                   return  <tbody key={result._id}>
                                <tr>
                                    <th>
                                        {result.group_name}
                                        </th>
                                    <td>
                                        <Link href={"/group/edit/"+result._id} >
                                            <button className="btn btn-sm btn-success mr-3">Edit</button>
                                        </Link>
                                        <button className="btn btn-sm btn-danger" name={result._id} onClick={deleteClick}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                })
                }
            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const result = await fetch("http://localhost:3001/admin/group")
    const data = await result.json()
    return {
      props: {data
      },
    }
  }
