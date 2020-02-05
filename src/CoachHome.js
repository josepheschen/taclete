import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class CoachHome extends Component {

    constructor(props, group) {
        super(props);
        this.state = {
            Group: 'A',
            setOpen: false,
            open: false,
            age: '',
            setAge: '',
        }
    }

    render() {
        return(
            <div>
                <p>Coach View</p>
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

    DialogSelect() {
        const handleChange = event => {
            this.setState({age: (Number(event.target.value) || '')});
            this.render();
        };

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
                {this.Group}
                <Button onClick={handleClickOpen}>New Workout</Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>

                        <form  style = {{minWidth: 240}}>
                            <FormControl style = {{minWidth: 120}}>
                                <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                                <Select
                                    native
                                    value={this.state.age}
                                    onChange={handleChange}
                                    input={<Input id="demo-dialog-native"/>}
                                >
                                    <option value=""/>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>

                            <FormControl  style = {{minWidth: 120}}>
                                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={this.state.age}
                                    onChange={handleChange}
                                    input={<Input/>}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </form>

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