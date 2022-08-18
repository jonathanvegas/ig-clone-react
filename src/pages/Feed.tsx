import React, { useEffect, useState } from "react";
import { Photo } from "../models/photo";
import "./Feed.css";
import PhotoView from "../components/PhotoView"

function Feed() {
  const [photos,setPhotos] = useState<Photo []>([])
  useEffect(  
    //pull the ig-clone-backend photos from localhost:5001
      () => {
        fetch("http://localhost:5001/photos")
        //fetch("https://live.floridajs.com/photos")
        .then(res => res.json())
        .then((data: Photo[]) => {
          console.log(data)
          setPhotos(data)
        })
      }
      ,[]
    )
  

  return (
    <>
      <h1>The Feed</h1>
      <div>
        {photos.map((photo: Photo) => {
          return <PhotoView key={photo._id} photo={photo} />
          //return <div><img src={photo.photoUrl}/></div>
        })}
      </div>
    </>
  )
}

export default Feed;