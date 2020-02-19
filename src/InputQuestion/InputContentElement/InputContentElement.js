import React from 'react'
import './InputContentElement.css'
import cross from '../../resources/close.svg'
import Close from '@material-ui/icons/Close'

class InputContentElement extends React.Component
{
    constructor(props)
    {
        super(props);

        switch(props.type)
        {
        case "text":
            this.state = {
                content: {
                    type: "text",
                    index: this.props.index,
                    text: ""
                }
            }

            this.handleChange = this.handleChangeText.bind(this);

            break;
        case "choices":
            this.state = {
                content: {
                    type: "choices",
                    index: this.props.index,
                    choices: [""]
                }
            }

            this.handleChange = this.handleChangeChoices.bind(this);
        }

    }

    handleChangeText(event)
    {
        let contentCopy = JSON.parse(JSON.stringify(this.state.content));
        contentCopy.text = event.target.value;


        this.setState({
            content: contentCopy
        });
    }

    handleChangeChoices(event)
    {
        
    }


    render()
    {
        return(
            <div className="contentWrapper" >
                <textarea value={this.state.content.text} onChange={this.handleChange} className="inputContentText"/>
                <Close className="newContentButton" src={cross} onClick={this.props.onClick} />
            </div>
        );
    }
}

export default InputContentElement;