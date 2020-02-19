import React from "react"
import "./ContentElement.css"

class ContentElement extends React.Component
{
    render()
    {
        switch(this.props.content.type)
        {
        case "text":
            return <div class="contentElement" > {this.props.content.text} </div>;
        case "mechoices": 
            const elements = [];
            for( const [index, value] of this.props.content.choices.entries() )
            {
                elements.push(<div class = "choice"> { index } - { value } </div>)
            }
            return <div class="contentElement"> { elements } </div>;
        }
    }
}

export default ContentElement;