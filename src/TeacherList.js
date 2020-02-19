import React from 'react'
import Teacher from './Teacher.js'
import DataTable from 'react-data-table-component'
import Question from './Question/Question.js'

const columns = [
    {
        name: 'Nome',
        selector: 'name',
        sortable: true
    },
    {
        name: 'Matéria',
        selector: 'subject',
        sortable: true
    }
];


const dataOld = [
    {
        name: "Velosao",
        subject: "Logica"
    },
    {
        name: "Felipe",
        subject: "Matematica"
    }
];

const question = {
    subject : "MATEMATICA",
    topics : ["logaritmo", "progressao aritmetica"],
    keywords : ["vestibular"],
    author : "felipeferreira",
    contents : [
        {
            type : "text",
            text : "Uaba lubba dub dub?"
        },
        {
            type : "mechoices",
            choices : [
                "uala",
                "oioioi",
                "AAAAAAAAAAAA",
                "testeteste"
            ]
        }
    ]
};


class TeacherList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            questionData: [],
            done: false
        };

    }
    
    componentDidMount() {
        // fetch("http://localhost:8080/teacher-list")
        //     .then(response => response.json())
        //     .then(json => {
        //     this.setState({data: json});
        // });
        fetch("http://localhost:8080/question-list")
            .then(response => response.json())
            .then(json => {
            this.setState({done: true, questionData: json})
        });
    }
    
    // render()
    // {
    //     const { data } = this.state;
    //     console.log(data);
    //     console.log(dataOld);
    //     return (
    //         <div>
    //             <DataTable
    //                 title = "Lista de professores"
    //                 columns = { columns }
    //                 data = { data }
    //             />
    //         </div>
    //     )
    // }

    render()
    {
        const questions = [];
        
        this.state.questionData.forEach(
            question => {
                questions.push(<Question question = {question} />);
            }
        );

        return <div> {questions} </div>
    }
}

export default TeacherList;