import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Menu from './components/admin/Menu'
export default function addarticle() {
    const [group, setGroup] = useState([])
    const [idGroup, setidGroup] = useState([])
    useEffect(() => {
        async function getGroup() {
            try {
                const result = await axios.get("http://localhost:3001/admin/group")
                setGroup(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getGroup()
    }, [group]);

    const onChangeGroupName = (e) => {
        setidGroup(e.target.value)
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
                    <div className="col-7" >
            <form action="http://localhost:3001/admin/article" encType="multipart/form-data" method="post">
                <div className="form-group">
                    <select className="form-control" name="group" onChange={onChangeGroupName}>
                        <option> Change Group</option>
                        {group.map(result => {
                            return <option key={result._id} value={result._id}>{result.group_name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Detail</label>
                    <textarea className="form-control" name="detail" cols="30" rows="10" >

                    </textarea>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" name="photoArticle" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-success mt-3">submit</button>
                </div>
                <input type="hidden" name="group_name" value={idGroup}/>
            </form>    
        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}