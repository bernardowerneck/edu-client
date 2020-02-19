import React from 'react'
import './Teacher.css'

class Teacher extends React.Component
{
    constructor(name, subject)
    {
        super()
        this.name = name;
        this.subject = subject;
    }

    render()
    {return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.subject}</td>
        </tr>
    )}
}

export default Teacher;