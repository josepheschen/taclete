import React, {Component} from "react";
import ExerciseModule from "./ExerciseModule"

class ExerciseTable extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            numExercises: 0,
            exerciseList: []
        });
    }

    render=()=>{
        return (
            <div>
                {this.state.exerciseList.map((ex, index) => (
                    <p>
                        <ExerciseModule
                            handleWorkoutChange={this.handleWorkoutChange}
                            handleRepsChange={this.handleRepsChange}
                            handleWeightChange={this.handleWeightChange}
                            key={index}
                        />
                    </p>
                ))}
            </div>
        );
    };

    toString=()=>{
        let exTableString = "";
        this.state.exerciseList.map((ex, ) => (
            exTableString = exTableString + ex.toString() + "; "
    ));
        return (exTableString);
    };

    addExercise =()=> {
        let exerciseList = this.state.exerciseList;
        exerciseList.push(new ExerciseModule(this.props, this.state.numExercises));
        this.setState({
            exerciseList: exerciseList,
            numExercises: this.state.numExercises + 1
        })
    };

    handleWorkoutChange = (e, key) =>{
            console.log(this.state.exerciseList[key])
    };

    handleRepsChange = (value, key) =>{

    };

    handleWeightChange = (value, key) =>{

    };

} export default ExerciseTable
