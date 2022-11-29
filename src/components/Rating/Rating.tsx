import React from "react";

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("star");
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log("rating");

    return (
        <div>
            <Star selected={props.value > 0 }/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}
