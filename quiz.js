import React, { Component } from 'react'

let quizData = require('./quiz_data.json')
class quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
     <div className="QuizQuestion">{quizData.quiz_question[0].instruction_text}</div>
    }
    
}
export default quiz
           
