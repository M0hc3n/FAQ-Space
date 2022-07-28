import React from "react";

export default function Item(props){
    return(
        <div className="item-container">
            <div className="item-up">
                <h3 className="item-title">{props.question}</h3>
                <i className={props.selected ? "fa-solid fa-minus" : "fa-solid fa-plus"} onClick={() => props.handleSelect(props.id)}></i>
            </div>
            { props.selected && <div className="item-down">
                <p className="item-info">{props.answer}</p>
            </div>}
        </div>
    )
}