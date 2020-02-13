import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

class CoachHome extends Component {

    constructor(props, group) {
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

    useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));

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
                <h2>{this.Group} </h2>
                <p> {this.state.workout}</p>
                <Button onClick={handleClickOpen} color="#274f7a" variant="contained"
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px'}}>
                    New Workout
                </Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={handleClose}>
                    <DialogTitle>Make a new workout</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="outlined-multiline-static"
                            label="Describe Workout"
                            multiline
                            rows="4"
                            defaultValue={this.state.workout}
                            variant="outlined"
                            onChange={this.workoutChange}
                        />
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
} export default CoachHome