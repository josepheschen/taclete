import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import CoachHome from "./CoachHome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class AthleteHome extends Component{
        constructor(props) {
            super(props);
            this.CoachWorkout = new CoachHome();
            this.state = {
                Group: 'A',
                WorkoutA: "Workout A",
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
                selectedDate: null
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
                        <h3>Workout: </h3>
                        <p>
                            <small>{this.CoachWorkout.getWorkout()}</small>
                            {this.space}
                            <TextField
                                id="outlined-multiline-static"
                                label="Describe Results"
                                multiline
                                rows="4"
                                defaultValue=""
                                variant="outlined"
                                onChange={this.workoutChange}
                            />
                        </p>
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


    handleDateChange = date => {
       this.setState({selectedDate: date});
    };
        MaterialUIPickers() {
        // The first commit of Material-UI
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
            </MuiPickersUtilsProvider>
        );
    }
} export default AthleteHome