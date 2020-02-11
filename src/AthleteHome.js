import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import CoachHome from "./CoachHome";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
                        <p>
                        <Button variant="outlined" color="primary" onClick={this.openWorkout}>
                            Open Active Workout
                        </Button>
                        <Dialog
                            open={this.state.workoutOpen}
                            onClose={this.closeWorkout}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Current Workout"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {this.CoachWorkout.getWorkout()}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.closeWorkout} color="primary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>

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
} export default AthleteHome