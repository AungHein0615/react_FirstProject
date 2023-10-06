import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import './style.css'

const url = ('https://jsonplaceholder.typicode.com/posts')

function Card(){

  const[users,setUsers] = useState([])

  async function getData(){
    const response =  await fetch(url)
    const users = await response.json(url)
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1>Card Lists</h1>
          {
          users.map((user) => {
            return (
              <>
                <div key={user.id} className="col-2 card">
                <div className="header">
                  <p className="title">Card_No : {user.id}</p>
                  <i className="fa-solid fa-book-open icon" data-bs-toggle="modal" data-bs-target={`#modal${user.id}`}></i>
                </div>
                <p className="bodyText">{user.body}......</p>
              </div>
              
              {/* -----modal box----- */}

              <div className="modal fade" id={`modal${user.id}`} data-bs-backdrop="static">
              <div className="modal-dialog" >
              <div className="modal-content">

              <div className="modal-header">

                <button className="btn btn-close" data-bs-dismiss="modal"></button>
              
              </div>

              <div className="modal-body">
                <p>{user.body}{user.body}{user.body}{user.body}</p>
              </div>

              <div className="modal-footer">
                
                <p className="modalFooter">#cardListID{user.id}</p>
                        
              </div>
            </div>
          </div>
        </div>
            
              </>
            )
          })
        }
        
        </div>
        
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Card/>)