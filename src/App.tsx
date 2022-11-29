import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";



function App() {

    return (
        <div className="App">
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Rating />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
