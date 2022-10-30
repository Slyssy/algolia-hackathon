import React from "react";


function BodyCard(props) {
console.log(props)
return (
    // Rewatch class based and functional building
    // give things classNames that you want to style. 
    <ul className="story-list">
        {/* here we loop over our data items coming from props 
        then render them to screen in an LI 
        !!!! Make sure to wrap the stuff inside the LI's in h2, h3 etc!!!*/}
        {props.data.map((story)=>{
            return (
                // Add styling here
                <li className="story-itm" key={story.objectID}>
                    {story.title}
                </li>
            )
        } )}
    </ul>

)
}






















export default BodyCard ;