import React, { useState } from 'react'

const Galleryimage = () => {
  const [image, setImage] = useState('');

  const fileUploadHandler = async() =>{

    const data = new FormData();
    console.log(image.file);
    data.append('image', image.file)
    // console.log(data);
    
   let response = await fetch('http://localhost:5000/api/gallery/addimage',{
      method: "POST",
      headers:{
        'auth-token': localStorage.getItem('token')
      },
      body: data
    }
    )
    const file = await response.json();
    console.log(file);
  }



  const fileSelectHandler = (e) =>{
  setImage({
    file: e.target.files[0]
  })
  console.log(e.target.files[0]);
 }


  return (
    <>
   
  <div className="mb-3 my-5">
  <label htmlFor="formFile" className="form-label">Add image to Gallery</label>
  <input className="form-control" type="file" name="file" id="formFile" onChange={fileSelectHandler}/>
  <button type="submit" className="btn btn-primary my-3" onClick={fileUploadHandler}>Submit</button>
</div>

    </>
  )
}

export default Galleryimage
