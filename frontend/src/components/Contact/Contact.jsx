import "./Contact.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
   <div className="contact">
    <div className="wrapper">
      <span> Contact with Us </span>

      <div className="mail">
        <input type="text" placeholder=" Enter your e-mail" />
        <button> Join us </button>
      </div>

      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
    </div>
   </div>
  )
}

export default Contact
