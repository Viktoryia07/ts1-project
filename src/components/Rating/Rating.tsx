import React, {useState} from "react";

type PropsType ={
    selected: boolean

}

const Star = (props: PropsType) => {
    return <span> {props.selected ? <b>Star </b> : "Star"} </span>
}

export function Rating() {

    let [value, setValue] = useState(0)

        return (
            <div>
                <Star selected={value >= 1}/>
                <button onClick={() => {
                    setValue(1)
                }}>1
                </button>
                <Star selected={value >= 2}/>
                <button onClick={() => {
                    setValue(2)
                }}>2
                </button>
                <Star selected={value >= 3}/>
                <button onClick={() => {
                    setValue(3)
                }}>3
                </button>
                <Star selected={value >= 4}/>
                <button onClick={() => {
                    setValue(4)
                }}>4
                </button>
                <Star selected={value >= 5}/>
                <button onClick={() => {
                    setValue(5)
                }}>5
                </button>
            </div>
        );
    }

