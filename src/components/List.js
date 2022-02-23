import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function List() {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        getAlbums();
    })

    async function getAlbums(){
        try {
            const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");
           // console.log(albums);
           setAlbums(albums.data);
        } catch (error) {
            console.log("something is wrong", error);
        }
    }
    const handleDelete = async id =>{
         axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
         let newAlbum = albums.filter((item)=>{
             return item.id !== id;
         })
         setAlbums(newAlbum);
    }
  return (
    <>
      <table cellPadding="10px" border="2px" cellSpacing="10px" width="560px">
      <thead>
        <tr id="head">
          <th>No.</th>
          <th>Title</th>
          <th>userId</th>
          <th>id</th>
          <th>action</th>
        </tr>
        </thead>
        <tbody>
        {
            albums.map((album, index)=>{
             return(
                <tr key={index}>
          <td>{index+1}</td>
          <td>{album.title}</td>
          <td>{album.userId}</td>
          <td>{album.id}</td>
          <td>
            <button><Link to={`/edit/${album.id}`}>Edit</Link></button>
            <button className="btn btn-primary" onClick={()=> handleDelete(album.id)}>Delete</button>
          </td>
        </tr>
             )
            })
        }
       
        </tbody>
      </table>
    </>
  );
}
