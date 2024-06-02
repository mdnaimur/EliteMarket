import "./Slider.scss";

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";

const Slider = () => {
  const [currentSlide,setCurrentSlide] = useState(0)

const data = [
  "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800",
  "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"



]
const prevSlide =() =>{
  setCurrentSlide(currentSlide === 0 ? 2 : (prev)=>prev - 1)
}

const nextSlide =() =>{
  setCurrentSlide(currentSlide === 2 ? 0 : (prev)=>prev + 1)
}

  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <ArrowForwardIosOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

export default Slider
