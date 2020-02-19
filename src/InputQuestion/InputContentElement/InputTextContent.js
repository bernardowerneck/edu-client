import React from 'react'
import Close from '@material-ui/icons/Close'
import './InputContentElement.css'

class InputTextContent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            content: 
            {
                type: 'text',
                index: this.props.index,
                text: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        let contentCopy = JSON.parse(JSON.stringify(this.state.content));
        contentCopy.text = event.target.value;

        this.setState({
            content: contentCopy
        });
    }

    render()
    {
        return (
            <div className='contentWrapper'>
                <textarea value={this.state.content.text} onChange={this.handleChange} className="inputContentText"/>
                <Close className="newContentButton" onClick={this.props.onClick} />
            </div>
        );
    }
    
}

export default InputTextContent;