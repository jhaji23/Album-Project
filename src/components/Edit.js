import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
  const {id} = useParams();
  const navigate = useNavigate()
  const[album, setAlbum] = useState([])
 
  useEffect(()=>{
    async function getAlbum(){
      try {
        const album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
         setAlbum(album.data)
      } catch (error) {
        console.log("something is wrong", error);
      }
    }
    getAlbum();
  },[id])

  async function onFormSubmit(e){
    e.preventDefault()
    try {
         await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`,album);
         navigate("/")
    } catch (error) {
        console.log("something is wrong", error);
    }
}


  function handleClick(){
    navigate("/")
  }
  return(
      <>
          <h1>hello this is edit</h1>
           
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2>Add album</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                 userId:
                </label>
                <input
                name='userId'
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={album.userId}
                  onChange={e=> setAlbum(e.target.value)}
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                 id:
                </label>
                <input
                name='ids'
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={album.id}
                  onChange={e=> setAlbum(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                title:
                </label>
                <input
                name='title'
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={album.title}
                  onChange={e=> setAlbum(e.target.value)}
                />
              </div>
              <button type="submit" onClick={e=> onFormSubmit(e)} className="btn btn-primary mx-3">
                Update album
              </button>
              <button className="btn btn-primary mx-3" onClick={handleClick}>Back to Home</button>
            </form>
          </div>
      
        </div>
      </div>
     
      </>
  );
}

export default Edit;
