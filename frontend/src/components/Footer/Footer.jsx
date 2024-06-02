import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit repellendus labore, reiciendis officiis voluptates magni rerum sed quia assumenda doloribus blanditiis autem tenetur error, vero inventore nemo deserunt dolorum.
              Reiciendis voluptate nulla dolor incidunt saepe, ipsum sunt assumenda at nesciunt culpa, totam blanditiis debitis. Illum aliquid consequuntur sint quidem veritatis veniam quis sit nihil suscipit error, unde laboriosam ea.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo accusantium dolor, dolorem exercitationem asperiores voluptatem veritatis deleniti corrupti temporibus repudiandae sint odit necessitatibus ad ex minus praesentium quidem quaerat?
            </span>
          </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Elite-Market</span>
          <span className="copyright">
              ©️ CopyRight 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="img/pay.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer
