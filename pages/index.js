import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
 function index({data}) {
  const cardArticle= data.map(result=>(
    <div className="col-md-3" key={result._id}>
        <div className="card mb-4 shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={""+result.img_article} alt="" width="100%" height={225} />
          <div className="card-body">
            <h4>{result.title}</h4>
              <p className="card-text">{result.content} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{result.date_time}</small>
              <Link href={"/article/"+result._id} className="btn btn-sm btn-outline-dark"><a>View</a></Link>
            </div>
          </div>
        </div>
      </div>
  ))
  return (
    <div >
      <Navbar />
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {cardArticle}
          </div>
        </div>
      </div>
      
  </div>
  )
  
}
export async function getStaticProps() {
  const result = await fetch("http://localhost:3001/admin/article")
  const data = await result.json()
  return {
    props: {data
    },
  }
}
export default index