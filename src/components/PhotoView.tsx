import React from "react";
import {Photo} from "../models/photo";
import { updateLike } from "../services/photoServices";

interface PhotoViewProp{
  photo: Photo
}

function PhotoView({photo}:PhotoViewProp) {

  async function handleLike(photoId: string) {
      const newLike = await updateLike(photoId)
      console.log(newLike)
  }
  return(
    <>
     <div>
        <h2>{photo.description || ""}</h2>
        <img src={photo.photoUrl} />
        <div onClick={() => {handleLike(photo._id || "0")}}> 👍🏼 {photo.likes || 0}</div>
      </div>
    </>
  )
}

export default PhotoView;