import React, {useEffect, useState} from 'react'

const Gallery = () => {
  const imageinitials = [];
  const [getImage, setGetImage] = useState(imageinitials);
   //Add All notes
  const getImages = async () => {
    // api call
   const response = await fetch(`http://localhost:5000/api/gallery/fetchallimages`,{
    method:'GET',
    headers:{
      'auth-token': localStorage.getItem('token')
    }
  });
  const json = await response.json();
  setGetImage(json);
  // console.log(json);
}
useEffect(()=>{
getImages()
},[]);

  return (

    <div className='pt-3'>
     <div className="row my-3 d-flex">
      { !localStorage.getItem('token') ? "no records " : getImage.map((element, index)=> 
        <div key={element._id} className="image-card">
        <img src={`http://localhost:5000/${element.image}`} className="card-img-top " alt="..." />
        </div>
       )}
        </div> 
      
    </div>
  )
}

export default Gallery
