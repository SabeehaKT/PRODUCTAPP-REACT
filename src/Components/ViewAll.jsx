import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,setData]=useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:8083/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">PRODUCT ID</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.proid}</th>
                                            <td>{value.proname}</td>
                                            <td>{value.category}</td>
                                            <td>{value.price}</td>
                                        </tr>
                                        }
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll