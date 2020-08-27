import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Menu from './components/admin/Menu'
export default function editdeletearticle() {
    const [data, setData] = useState([])
    const [deleteData, setDeleteData] = useState([])
    const handleDelete = (e) => {

        const deleteArticle = async () => {
            await setDeleteData(e.target.name)
            try {
                const result = await axios.delete("http://localhost:3001/admin/article/" + deleteData)
                return result
            } catch (error) {
                console.log(error)
            }
        }
        deleteArticle()
    }
    useEffect(() => {
        axios.get("http://localhost:3001/admin/article")
            .then(result => {
                setData(result.data)
            }).catch(err => console.log(err))
    })
    const dataTable = data.map(result => {
        return <tr key={result._id}>
            <th scope="row">{result.title}</th>
            <td>{result.date_time}</td>
            <td>
                <Link href={"/article/edit/" + result._id}> 
                    <a className="btn btn-sm btn-success mr-3">Edit</a>
                </Link> 
                <button className="btn btn-sm btn-danger" name={result._id} onClick={handleDelete}>Delete</button>
                
            </td>
        </tr>
    })
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
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
