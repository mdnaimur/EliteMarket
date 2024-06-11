import "./Card.scss";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({item}) => {

// console.log('I am card',item)

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
        {item?.IsNew && <span>New Season</span>}
          {/* <img src= {import.meta.env.VITE_API_BASE_URL + item?.img?.data?.url} alt= {item.title} className="mainImg" /> */}
          <img src= {item.image1} alt= {item.title} className="mainImg" />

          <img src={item.image2} alt="Second Image" className="secondImg" />
        </div>
        <h2> {item.title} </h2>
        <div className="prices">
          <h3> 	&#2547; {item.oldPrice || "1"+ item?.price }  </h3>
          <h3> 	&#2547; {item.price}  </h3>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
};

export default Card
