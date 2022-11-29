import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
   return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3>-- {props.title} --</h3>

}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;

