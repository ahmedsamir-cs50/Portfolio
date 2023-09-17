import React from 'react'
import image1 from '../Projects/Assets/Decor.PNG'
import image2 from '../Projects/Assets/movies.PNG'
import image3 from'../Projects/Assets/e-commerce.PNG'

export const ExampleCarouselImage1 = () => {
  return (
    <img src={image1} style={{minHeight:"90vh",width:"100%", filter: "brightness(0.4)",objectFit: "cover"}}></img>
  )
}
export const ExampleCarouselImage2 = () => {
  return (
    <img src={image2} style={{minHeight:"90vh" ,filter: "brightness(0.4)",width:"100%" ,objectFit: "cover"}}></img>
  )
}
export const ExampleCarouselImage3 = () => {
  return (
    <img style={{minHeight:"90vh",filter: "brightness(0.4)",width:"100%",objectFit: "cover"}} src={image3}></img>
  )
}