import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

class WorkoutDisplay {

    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: 400,
            maxWidth: 300,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    renderRow(props) {
        const {index, style} = props;

        return (
            <ListItem button style={style} key={index}>
                <ListItemText primary={`Item ${index + 1}`}/>
            </ListItem>
        );
    }

    render() {
        return (
            <div>
                <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                    {this.renderRow}
                </FixedSizeList>
            </div>
        );
    }
} export default WorkoutDisplay;