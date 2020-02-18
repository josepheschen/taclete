import React, { Component } from 'react';
// import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import CoachHome from "./CoachHome";
import WorkoutDisplay from "./WorkoutDisplay.js"
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { makeStyles } from '@material-ui/core/styles';
// import CardContent from '@material-ui/core/CardContent';

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
                selectedDate: null,
                workoutOpen: false,
                workoutDisplay: new WorkoutDisplay()
            }
        }

        openWorkout = () => {
            this.setState({
                workoutOpen: true
            })
        };

        closeWorkout = () => {
            this.setState({
                workoutOpen: false
            })
        };

        render() {
            if(this.state.Group === 'A') {
                return (
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        {this.state.workoutDisplay.render()}
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
} export default AthleteHome