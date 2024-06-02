import "./Card.scss";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({item}) => {

  console.log(item)
  return (
    <Link className="link">
      <div className="card">
        <div className="image">
        {item?.isNew && <span>New Season</span>}
          <img src= {item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2> {item.title} </h2>
        <div className="prices">
          <h3> 	&#2547; {item.oldPrice}  </h3>
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
