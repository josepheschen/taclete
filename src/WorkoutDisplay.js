import React, {Component} from "react";
import ExerciseModule from "./ExerciseModule"
import TextField from "@material-ui/core/TextField";

class ExerciseTable extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            numExercises: 2,
            exerciseList: [new ExerciseModule()]
        })
    }

    repsChange=(e)=>{
        this.setState({
            e1var1: e.target.value,
        })
    };

    weightChange=(e)=>{
        this.setState({
            e1var2: e.target.value,
        })
    };

    render=()=>{
        return (
            <div>
                {this.state.exerciseList.map((ex, ) => (
                    <p>
                        <line> {"--" + ex.toString() + "--"}</line>
                        <p>
                        <TextField
                            name="var1"
                            variant="outlined"
                            label="Completed Reps/Time"
                            type="text"
                            value={this.state.e1var1}
                            onChange={this.repsChange}
                            />
                        <TextField
                            name="var1"
                            variant="outlined"
                            label="Completed Weight/Dist."
                            type="text"
                            value={this.state.e1var2}
                            onChange={this.weightChange}
                        />
                        </p>
                    </p>
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
