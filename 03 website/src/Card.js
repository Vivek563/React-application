import React from "react";

const Card = ({title = "basketball", cardtext="hey!there", buttonText = "My Button", link="www.google.com"}) =>{ 
    return(
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={link}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
         {cardtext}
        </p>
        <a href="#" className="btn btn-success">
          {buttonText}
        </a>
      </div>
    </div>
  );

}
export default Card;
