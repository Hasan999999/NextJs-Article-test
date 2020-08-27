import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Menu from '../../components/admin/Menu'
export default function editid() {
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
                    editgroup
                </div>
            </div>
        </div>
    </div>
    )
}

