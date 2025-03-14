import React from "react";

const Card = (props) => {
    return (
        <div className={props.glow == true ? "card mx-2 glow" : "card mx-2"} style={{ width: "18rem" }}>
            <img src={props.img} height="300px" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
};

export default Card;