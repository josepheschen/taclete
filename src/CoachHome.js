import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class CoachHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Group: "A",
            setOpen: false,
            open: false,
            age: '',
            setAge: '',
            workout: "Blank Workout",
        }
    }

    getWorkout= () => {
        return(this.state.workout)
    };

    render() {
        return(
            <div>
                {this.state.Group}
                {this.DialogSelect()}
            </div>
        )
    }

    workoutChange=(e)=>{
        this.setState({
            workout: e.target.value,
        })
    };

    DialogSelect() {
        const handleClickOpen = () => {
            this.setState({
                open: true,
            })
        };

        const handleClose = () => {
            this.setState({
                open: false,
            })
        };

        return (
            <div>
                <p>{this.state.workout}</p>
                <Button onClick={handleClickOpen} color="#274f7a" variant="contained"
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px'}}>
                    New Workout
                </Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={handleClose}>
                    <DialogTitle>Make a new workout</DialogTitle>
                    <DialogContent>
                        <p><TextField
                            id="outlined-multiline-static"
                            label="Describe Workout"
                            multiline
                            rows="4"
                            defaultValue={this.state.workout}
                            variant="outlined"
                            onChange={this.workoutChange}
                        /></p>
                        {this.MaterialUIPickers()}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
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
                    label="Workout Date"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        );
    }
} export default CoachHome