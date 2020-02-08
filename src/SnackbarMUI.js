import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

class SnackbarMUI extends Component{
    // const classes = useStyles();
     constructor(props) {
         super(props);
         this.state = {

         };

    render() {
        return (
            <div>
                <Snackbar open={open} autoHideDuration={6000} >
                    <Alert severity={this.props.alertType}>
                        {this.props.message}
                    </Alert>
                </Snackbar>
            </div>
        );
    };


} export default SnackbarMUI;