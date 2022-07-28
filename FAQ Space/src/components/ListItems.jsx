import React from "react";
import Item from "./Item";
import Data from "../Data/data"

export default function ListItems(){

    const [data , setData] = React.useState(Data.map( dataItem => { 
            return {...dataItem, selected: false}
        }
        )
        )

        console.log(data)

    const handleSelect = (id) =>{
        let newData = []

        for(let i=0 ; i < data.length ; i++){
            if(data[i].id === id){
                newData.push({...data[i], selected : !data[i].selected})
            } else{
                newData.push(data[i])
            }
        }

        setData(newData)
    }

    
    const items = data.map( item =>{
        return(
            <Item
                key={item.id}
                id={item.id}
                question={item.title}
                answer={item.info}
                selected={item.selected}
                handleSelect={handleSelect}
            />
        )
    })

    return(
        <div className="container">
            <h1 className="container-title">Questions and Answers About Login</h1>
            <div className="items-container">
                {items}
            </div>
        </div>
    )
}