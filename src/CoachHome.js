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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ExerciseTable from "./ExerciseTable";

class CoachHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: "HES",
            setOpen: false,
            open: false,
            age: '',
            setAge: '',
            selectedDate: null,
            comments: "",
            exTable: new ExerciseTable()
        };
    };

    getWorkout= () => {
        return(this.state.exTable)
    };

    render() {
        return(
            <div>
                <p><FormControl style={{minWidth: 120}}>
                    <InputLabel id="accountTypeSelectLabel">Group</InputLabel>
                    <Select
                        labelId="accountTypeSelectLabel"
                        id="accountTypeSelect"
                        value={this.state.group}
                        onChange={this.onGroupChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'HES'}>HES</MenuItem>
                        <MenuItem value={'CADRE'}>CADRE</MenuItem>
                        <MenuItem value={'ROTC'}>ROTC</MenuItem>
                    </Select>
                </FormControl></p>
                {this.DialogSelect()}
            </div>
        )
    }

    onGroupChange=(e)=>{
        this.setState({
            group: e.target.value,
        })
    };

    commentChange=(e)=>{
        this.setState({
            comments: e.target.value,
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
                <Button onClick={handleClickOpen}
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px'}}>
                    New Workout
                </Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={handleClose}>
                    <DialogTitle>Make a new workout</DialogTitle>
                    <DialogContent>
                        <p>{this.DatePicker()}</p>
                        {this.state.exTable.render()}
                        <Button onClick={()=>{
                        this.state.exTable.addExercise();
                        this.setState({});
                        }} color="primary">
                            Add Exercise
                        </Button>
                        <TextField
                            name = "comments"
                            variant = "outlined"
                            label = "Comments"
                            type = "text"
                            style={{minWidth: 525}}
                            value={this.state.comments}
                            onChange={this.commentChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{
                            handleClose();
                            this.setState({
                                exTable: new ExerciseTable()
                            })
                        }} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={()=>{
                            handleClose();
                            this.setState({
                                exTable: new ExerciseTable()
                            })
                        }} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    handleDateChange = date => {
        this.setState({selectedDate: date});
    };
    DatePicker() {
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