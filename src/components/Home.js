import React from "react";
import axios from "axios";
import { useState } from "react";

import List from "./List";
function Home() {
    const[album, setAlbum] = useState([{
        userId:"",
        id:"",
        title:""
    }])
 
   function onFieldChange(e){
       setAlbum({
           ...album,
           [e.target.name] : e.target.value
       })
   }
   async function onFormSubmit(e){
        e.preventDefault()
        try {
             await axios.post("https://jsonplaceholder.typicode.com/albums",album);
        } catch (error) {
            console.log("something is wrong", error);
        }
    }
    console.log(album)
  return (
    <div>
      <h1>React Albums</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2>Add album</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">
                  userId:
                </label>
                <input
                  name="userId"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={e=> onFieldChange(e)}
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  id:
                </label>
                <input
                name="id"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={e=> onFieldChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  title:
                </label>
                <input
                name="title"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={e=> onFieldChange(e)}
                />
              </div>
              <button type="submit" onClick={e=> onFormSubmit(e)} className="btn btn-primary">
                Add Album
              </button>
            </form>
          </div>
          <div className="col-sm">
            <h2>Albums list</h2>
            <List/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
