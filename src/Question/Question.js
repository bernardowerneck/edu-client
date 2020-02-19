import React, { Component } from 'react'
import ContentElement from './ContentElement'
import './Question.css'

class Question extends React.Component
{
    constructor(props)
    {
        super();
        this.subject = props.question.subject;
        this.topics = props.question.topics;
        this.author = props.question.authors;
        this.keywords = props.question.keywords;
        this.contents = props.question.contents;
    }

    render()
    {
        const elements = [];
        this.contents.forEach(element => {
            elements.push(<ContentElement content = {element} />);
        });

        return (
            <div class = "question"> 
                {elements} 
            </div>
        );
        
    }
}

export default Question;