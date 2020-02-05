import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";

class AthleteHome extends Component{
        constructor(props) {
            super(props);
            this.state = {
                Group: 'A',
                WorkoutA: "Mom Workout",
                WorkoutB: "Workout B",
                WorkoutC: "Workout C",
                Exercise1A: "Bredan's Mom",
                Exercise2A: "Carson's Mom",
                Exercise3A: "Joe's Mom",
                reps1A: '',
                time1A: '',
                weight1A: '',
                reps2A: '',
                time2A: '',
                weight2A: '',
            }
        }

        handleRepsChange1A = (e) =>{
            this.setState({
                reps1A: e.target.value,
            });
            this.render()
        };

        handleWeightChange1A = (e) =>{
            this.setState({
                weight1A: e.target.value,
            });
            this.render()
        };

        handleTimeChange1A = (e) =>{
            this.setState({
                time1A: e.target.value,
            });
            this.render()
        };
        handleRepsChange2A = (e) =>{
            this.setState({
                reps2A: e.target.value,
            });
            this.render()
        };

        handleWeightChange2A = (e) =>{
            this.setState({
                weight2A: e.target.value,
            });
            this.render()
        };

        handleTimeChange2A = (e) =>{
            this.setState({
                time2A: e.target.value,
            });
            this.render()
        };

        space = '           ';
        render() {
            if(this.state.Group === 'A') {
                return (
                    <div>
                        <h3>{this.state.WorkoutA}</h3>
                        <p>
                            {this.state.Exercise1A}:  {this.space}
                            <TextField
                                name="reps"
                                variant="outlined"
                                label="Reps"
                                type="text"
                                value={this.state.reps1A}
                                onChange={this.handleRepsChange1A}
                            />

                            <TextField
                                name="weight"
                                variant="outlined"
                                label="Weight"
                                type="text"
                                value={this.state.weight1A}
                                onChange={this.handleWeightChange1A}
                            />

                            <TextField
                                name="time"
                                variant="outlined"
                                label="Time"
                                type="text"
                                value={this.state.time1A}
                                onChange={this.handleTimeChange1A}
                            />
                        </p>

                        <p>
                            {this.state.Exercise2A}:  {this.space}
                            <TextField
                                name="reps"
                                variant="outlined"
                                label="Reps"
                                type="text"
                                value={this.state.reps2A}
                                onChange={this.handleRepsChange2A}
                            />

                            <TextField
                                name="weight"
                                variant="outlined"
                                label="Weight"
                                type="text"
                                value={this.state.weight2A}
                                onChange={this.handleWeightChange2A}
                            />

                            <TextField
                                name="time"
                                variant="outlined"
                                label="Time"
                                type="text"
                                value={this.state.time2A}
                                onChange={this.handleTimeChange2A}
                            />
                        </p>

                        Put Leaderboard Here
                    </div>
                )
            }
            else if(this.state.Group === 'B'){
                return(
                    <div>
                        <h3>{this.state.WorkoutB}</h3>
                        Put Leaderboard Here
                    </div>
                )
            }
            else if(this.state.Group === 'C'){
                return(
                   <div>
                        <h3>{this.state.WorkoutC}</h3>
                       Put Leaderboard Here
                   </div>
                )
            }
            else{
               return(
                   <div>
                        <p>Unexpected Group</p>
                   </div>
               )
            }
        }
} export default AthleteHome