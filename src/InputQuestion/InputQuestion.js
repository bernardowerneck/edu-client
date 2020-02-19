import React from 'react'
import InputContentElement from './InputContentElement/InputContentElement';
import './InputQuestion.css'
import InputTextContent from './InputContentElement/InputTextContent';


class InputQuestion extends React.Component
{
    constructor(props)
    {
        super(props);

        let index = 0;
        let ref = React.createRef();
        
        this.state = {
            elements: [
                {
                    index: index, 
                    type: "text",
                    ref: ref,
                    tag: <InputTextContent key = {index} index = {index} ref = {ref} 
                                           onClick = {this.delete.bind(this, index)} />
                }
            ],
            lastValue: 0
        };

        this.add = this.add.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    add()
    {
        this.setState(state => {  
            let ref = React.createRef();
            
            const newElements = state.elements.concat({
                index: state.lastValue + 1, 
                type: "text",
                ref: ref,
                tag: <InputTextContent key = {state.lastValue + 1} index = {state.lastValue + 1} ref = {ref} 
                                           onClick = {this.delete.bind(this, state.lastValue + 1)} />
            });
            return {
                elements: newElements,
                lastValue: state.lastValue + 1
            };
        });
    }

    delete(index)
    {
        this.setState(state => ({
            elements: state.elements.filter((element) => {
                return element.index !== index;
            })
        }))
    }

    render ()
    {
        return (
            <form  >
                <div className="inputWrapper" style={{width: "50%", float: "left"}} >
                    {this.state.elements.map((element) => element.tag )}
                </div>
                <div style={{width: "50%", float: "right"}}>
                    <input type="button" onClick={this.add} />
                    <input type="button" onClick={this.onSubmit} />
                </div>
            </form>
        );
    }

    onSubmit()
    {
        let contents = this.state.elements.map(element => element.ref.current.state.content);
        console.log(contents);


        let question = {
            subject: "MATEMATICA",
            contents: contents
        }
        console.log(question);

        fetch("http://localhost:8080/problem", 
            {
                method: 'POST',
                body: JSON.stringify(question),
                headers: {
                    'Content-Type': 'application/json',
                    'access-control-allow-origin':'*'
                  }
            });
    }
}

export default InputQuestion;