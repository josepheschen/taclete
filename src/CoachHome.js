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
import ExerciseModule from "./ExerciseModule";

class CoachHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: "HES",
            setOpen: false,
            open: false,
            comments: "No Comments",
            numExercises: 0,
            exerciseList: [],
            key: 0,
        };
        this.handleWorkoutChangeBound = this.handleWorkoutChange.bind(this);
        this.handleRepsChangeBound = this.handleRepsChange.bind(this);
        this.handleWeightChangeBound = this.handleWeightChange.bind(this);
    };

    getWorkout= () => {
        return(this.state.exTable)
    };

    render() {
        return(
            <div>
                <FormControl style={{minWidth: 120}}>
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
                </FormControl>
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


    //Pop-Up Window
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
                        {this.DatePicker()}
                        <br/> <br/>
                        {this.state.exerciseList.map((ex, index) => (
                            <ExerciseModule
                                    handleWorkoutChange={this.handleWorkoutChangeBound}
                                    handleRepsChange={this.handleRepsChangeBound}
                                    handleWeightChange={this.handleWeightChangeBound}
                                    key={index}
                                    index={index}
                                    name={ex.state.name}
                                    var1={ex.state.e1var1}
                                    var2={ex.state.e1var2}
                            />
                        ))}

                        <Button onClick={()=>{
                            this.addExercise();
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
                            console.log(this.tableToString() + this.state.comments);
                            // {this.setState({
                            //     exerciseList: [],
                            //     numExercises: 0,
                            //     comments: "No Comments"
                            // });}
                        }} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    tableToString=()=>{
        let exTableString = "";
        this.state.exerciseList.map((ex) => (
            exTableString = exTableString + ex.toString() + "; "
        ));
        return (exTableString);
    };

    addExercise =()=> {
        let exerciseList = this.state.exerciseList;
        exerciseList.push(new ExerciseModule(this.props, 'Rest', '0', '0'));
        this.setState({
            exerciseList: exerciseList,
            numExercises: this.state.numExercises + 1
        });
        this.render()
    };

    handleWorkoutChange = (name, index) =>{
        console.log(name, index);
        let exerciseList = this.state.exerciseList;
        let newEx = exerciseList[index];
        newEx.setState({
           name: name,
        });
        exerciseList[index] = newEx;
        this.setState({
            exerciseList: exerciseList
        })
    };

    handleRepsChange = (name, index) =>{
        this.state.exerciseList[index].setState({
            e1var1: name
        })
    };


    //Date Handling
    handleWeightChange = (name, index) =>{
        this.state.exerciseList[index].setState({
            e1var2: name
        })
    };

    handleDateChange = (date) => {
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