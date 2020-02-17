import React, {Component} from "react";
import {List} from "@material-ui/core";
import ExerciseModule from "./ExerciseModule"

class ExerciseTable extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            numExercises: 2,
            exerciseList: [new ExerciseModule()]
        })
    }

    render=()=>{
        return (
            <div>
                    {this.state.exerciseList.map((ex, ) => (
                            <p>{ex.render()}</p>
                    ))}
            </div>
        );
    };

    addExercise =()=> {
        let exerciseList = this.state.exerciseList;
        exerciseList.push(new ExerciseModule(this.props, this.state.numExercises));
        this.setState({
            exerciseList: exerciseList,
            numExercises: this.state.numExercises + 1
        })
    };
} export default ExerciseTable
