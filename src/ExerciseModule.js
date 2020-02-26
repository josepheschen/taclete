import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

class ExerciseModule extends Component{
    constructor(props, name, var1, var2) {
        super(props);
        this.state = {
            name: name || props.name || '',
            e1var1: var1 || props.var1 || '',
            e1var2: var2 || props.var2 || '',
        };
        this.workoutChangeBound = this.workoutChange.bind(this);
        this.repsChangeBound = this.repsChange.bind(this);
        this.weightChangeBound = this.weightChange.bind(this);
    }

    workoutChange=(e)=>{
        this.setState({
            name: e.target.value,
        }, this.props.handleWorkoutChange(e.target.value, this.props.index));

    };

    repsChange=(e)=>{
        this.setState({
            e1var1: e.target.value,
        }, this.props.handleRepsChange(e.target.value, this.props.index));
    };

    weightChange=(e)=>{
        this.setState({
            e1var2: e.target.value,
        }, this.props.handleWeightChange(e.target.value, this.props.index));
    };

    toString = () => {
      return (
          this.state.name + ", Reps/Time: " +
          this.state.e1var1 + ", Weight/Distance: " +
          this.state.e1var2
      )
    };

    render(){
        return(
            <div>
            <FormControl style={{minWidth: 120}}>
                <InputLabel id="accountTypeSelectLabel">Exercise</InputLabel>
                <Select
                    labelId="accountTypeSelectLabel"
                    id="accountTypeSelect"
                    value={this.state.name}
                    onChange={this.workoutChangeBound}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'6 Inch Holds'}>6 Inch Holds</MenuItem>
                    <MenuItem value={'Agility Drill'}>Agility Drill</MenuItem>
                    <MenuItem value={'Alt. Dumbell Incline Bench'}>Alt. Dumbell Incline Bench</MenuItem>
                    <MenuItem value={'Alternating Lunge'}>Alternating Lunge</MenuItem>
                    <MenuItem value={'Alt. Overhead Farmers Carry'}>Alt. Overhead Farmers Carry</MenuItem>
                    <MenuItem value={'Back Extensions'}>Back Extensions</MenuItem>
                    <MenuItem value={'Back Squats'}>Back Squats</MenuItem>
                    <MenuItem value={'Backwards Run'}>Backwards Run</MenuItem>
                    <MenuItem value={'Ball Slams'}>Ball Slams</MenuItem>
                    <MenuItem value={'Bear Crawl'}>Bear Crawl</MenuItem>
                    <MenuItem value={'Bench Press'}>Bench Press</MenuItem>
                    <MenuItem value={'Bent-Over Row'}>Bent-Over Row</MenuItem>
                    <MenuItem value={'Bicep Curls'}>Bicep Curls</MenuItem>
                    <MenuItem value={'Bicycle Kicks'}>Bicycle Kicks</MenuItem>
                    <MenuItem value={'BOMB Throw'}>BOMB Throw</MenuItem>
                    <MenuItem value={'Box Drill'}>Box Drill</MenuItem>
                    <MenuItem value={'Box Jump'}>Box Jump</MenuItem>
                    <MenuItem value={'Broad Jump'}>Broad Jump</MenuItem>
                    <MenuItem value={'Buddy Carry'}>Buddy Carry</MenuItem>
                    <MenuItem value={'Burpee'}>Burpee</MenuItem>
                    <MenuItem value={'Burpee Pullups'}>Burpee Pullups</MenuItem>
                    <MenuItem value={'Burpees Over Kettle Bell'}>Burpees Over Kettle Bell</MenuItem>
                    <MenuItem value={'Cindy'}>Cindy</MenuItem>
                    <MenuItem value={'Clean High Pulls'}>Clean High Pulls</MenuItem>
                    <MenuItem value={'Commando Pull-Up'}>Commando Pull-Up</MenuItem>
                    <MenuItem value={'Crunches'}>Crunches</MenuItem>
                    <MenuItem value={'Decline Pushup'}>Decline Pushup</MenuItem>
                    <MenuItem value={'Devil Press'}>Devil Press</MenuItem>
                    <MenuItem value={'Dips'}>Dips</MenuItem>
                    <MenuItem value={'Dive Bombers'}>Dive Bombers</MenuItem>
                    <MenuItem value={'Dumbell Floor Press'}>Dumbell Floor Press</MenuItem>
                    <MenuItem value={'Dumbell Press'}>Dumbell Press</MenuItem>
                    <MenuItem value={'Dumbell Shoulder Press'}>Dumbell Shoulder Press</MenuItem>
                    <MenuItem value={'Dumbell Squat'}>Dumbell Squat</MenuItem>
                    <MenuItem value={'Dumbell Thruster'}>Dumbell Thruster</MenuItem>
                    <MenuItem value={'Explosive Lateral Steps'}>Explosive Lateral Steps</MenuItem>
                    <MenuItem value={'Farmers Carry'}>Farmers Carry</MenuItem>
                    <MenuItem value={'Flutter Kicks'}>Flutter Kicks</MenuItem>
                    <MenuItem value={'Front Leaning Rest'}>Front Leaning Rest</MenuItem>
                    <MenuItem value={'Front Squat'}>Front Squat</MenuItem>
                    <MenuItem value={'Goblet Squat'}>Goblet Squat</MenuItem>
                    <MenuItem value={'Hand Release Pushup'}>Hand Release Pushup</MenuItem>
                    <MenuItem value={'Handstand Pushup'}>Handstand Pushup</MenuItem>
                    <MenuItem value={'Hang Clean Pull'}>Hang Clean Pull</MenuItem>
                    <MenuItem value={'Hang Power Clean'}>Hang Power Clean</MenuItem>
                    <MenuItem value={'Hanging Leg Raise'}>Hanging Leg Raise</MenuItem>
                    <MenuItem value={'Hanging L-Sit'}>Hanging L-Sit</MenuItem>
                    <MenuItem value={'Hanging Toe-To-Bar'}>Hanging Toe-To-Bar</MenuItem>
                    <MenuItem value={'Hex Bar Deadlift'}>Hex Bar Deadlift</MenuItem>
                    <MenuItem value={'Hollow Rocks'}>Hollow Rocks</MenuItem>
                    <MenuItem value={'Intervals'}>Intervals</MenuItem>
                    <MenuItem value={'Jump Rope'}>Jump Rope</MenuItem>
                    <MenuItem value={'Jumping Jacks'}>Jumping Jacks</MenuItem>
                    <MenuItem value={'Jumping Pull-Up'}>Jumping Pull-Up</MenuItem>
                    <MenuItem value={'Kettle Bell Pull Through'}>Kettle Bell Pull Through</MenuItem>
                    <MenuItem value={'Kettle Bell Rear Deadlift'}>Kettle Bell Rear Deadlift</MenuItem>
                    <MenuItem value={'Kettle Bell Swing'}>Kettle Bell Swing</MenuItem>
                    <MenuItem value={'Knee-to-Elbow'}>Knee-to-Elbow</MenuItem>
                    <MenuItem value={'Lateral Burpee'}>Lateral Burpee</MenuItem>
                    <MenuItem value={'Lateral Rope Wave'}>Lateral Rope Wave</MenuItem>
                    <MenuItem value={'Lateral Run'}>Lateral Run</MenuItem>
                    <MenuItem value={'Lateral Stick Jump'}>Lateral Stick Jump</MenuItem>
                    <MenuItem value={'Leg Tucks'}>Leg Tucks</MenuItem>
                    <MenuItem value={'Little Bigs'}>Little Bigs</MenuItem>
                    <MenuItem value={'Med Ball Clean'}>Med Ball Clean</MenuItem>
                    <MenuItem value={'Med Ball Core'}>Med Ball Core</MenuItem>
                    <MenuItem value={'Med Ball Pushup'}>Med Ball Pushup</MenuItem>
                    <MenuItem value={'Med Ball Throw'}>Med Ball Throw</MenuItem>
                    <MenuItem value={'Mountain Climbers'}>Mountain Climbers</MenuItem>
                    <MenuItem value={'Negative Pull-Ups'}>Negative Pull-Ups</MenuItem>
                    <MenuItem value={'Overhead Arm Claps'}>Overhead Arm Claps</MenuItem>
                    <MenuItem value={'Overhead Kettle Bell Carry'}>Overhead Kettle Bell Carry</MenuItem>
                    <MenuItem value={'Overhead Plate Press'}>Overhead Plate Press</MenuItem>
                    <MenuItem value={'Overhead Plate Squat'}>Overhead Plate Squat</MenuItem>
                    <MenuItem value={'Overhead Rope Slam'}>Overhead Rope Slam</MenuItem>
                    <MenuItem value={'Pallof Press'}>Pallof Press</MenuItem>
                    <MenuItem value={'Plank'}>Plank</MenuItem>
                    <MenuItem value={'Plank-Up'}>Plank-Up</MenuItem>
                    <MenuItem value={'Plate Push'}>Plate Push</MenuItem>
                    <MenuItem value={'Prone T'}>Prone T</MenuItem>
                    <MenuItem value={'Prone Y'}>Prone Y</MenuItem>
                    <MenuItem value={'Pull-Up'}>Pull-Up</MenuItem>
                    <MenuItem value={'Push Press'}>Push Press</MenuItem>
                    <MenuItem value={'Pushup'}>Pushup</MenuItem>
                    <MenuItem value={'Renegade Row'}>Renegade Row</MenuItem>
                    <MenuItem value={'Rest'}>Rest</MenuItem>
                    <MenuItem value={'Ruck'}>Ruck</MenuItem>
                    <MenuItem value={'Run'}>Run</MenuItem>
                    <MenuItem value={'Russian Twist'}>Russian Twist</MenuItem>
                    <MenuItem value={'Scissor Kick'}>Scissor Kick</MenuItem>
                    <MenuItem value={'Seated Power Throw'}>Seated Power Throw</MenuItem>
                    <MenuItem value={'Shuttle Sprint'}>Shuttle Sprint</MenuItem>
                    <MenuItem value={'Side Kettle Bell Windmills'}>Side Kettle Bell Windmills</MenuItem>
                    <MenuItem value={'Side Single Leg Rear Deadlift'}>Side Single Leg Rear Deadlift</MenuItem>
                    <MenuItem value={'Side Slasher'}>Side Slasher</MenuItem>
                    <MenuItem value={'Single Arm Dumbell Rows'}>Single Arm Dumbell Rows</MenuItem>
                    <MenuItem value={'Single Leg Glute Bridge'}>Single Leg Glute Bridge</MenuItem>
                    <MenuItem value={'Sit Up'}>Sit Up</MenuItem>
                    <MenuItem value={'Skull Crusher'}>Skull Crusher</MenuItem>
                    <MenuItem value={'Sled Drag'}>Sled Drag</MenuItem>
                    <MenuItem value={'Sled Push'}>Sled Push</MenuItem>
                    <MenuItem value={'Sprint'}>Sprint</MenuItem>
                    <MenuItem value={'Sprint-Drag-Carry'}>Sprint-Drag-Carry</MenuItem>
                    <MenuItem value={'Squat'}>Squat</MenuItem>
                    <MenuItem value={'Standing Power Throw'}>Standing Power Throw</MenuItem>
                    <MenuItem value={'Straight Arm Side Plank'}>Straight Arm Side Plank</MenuItem>
                    <MenuItem value={'Straight Bar Deadlift'}>Straight Bar Deadlift</MenuItem>
                    <MenuItem value={'Suicides'}>Suicides</MenuItem>
                    <MenuItem value={'Suitcase Carry'}>Suitcase Carry</MenuItem>
                    <MenuItem value={'Superman'}>Superman</MenuItem>
                    <MenuItem value={'Tire Flips'}>Tire Flips</MenuItem>
                    <MenuItem value={'Vertical Rope Wave'}>Vertical Rope Wave</MenuItem>
                    <MenuItem value={'V-Up'}>V-Up</MenuItem>
                    <MenuItem value={'Waiter\'s Carry'}>Waiter's Carry</MenuItem>
                    <MenuItem value={'Walking Lunge'}>Walking Lunge</MenuItem>
                    <MenuItem value={'Wall Balls'}>Wall Balls</MenuItem>
                    <MenuItem value={'Weighted Lunge with Twist'}>Weighted Lunge with Twist</MenuItem>
                    <MenuItem value={'Weighted Pull-Up'}>Weighted Pull-Up</MenuItem>
                    <MenuItem value={'Weighted Pushup'}>Weighted Pushup</MenuItem>
                    <MenuItem value={'Weighted Step Up'}>Weighted Step Up</MenuItem>
                    <MenuItem value={'Weighted Wall Sit'}>Weighted Wall Sit</MenuItem>
                    <MenuItem value={'Start Circuit'}>Start Circuit</MenuItem>
                    <MenuItem value={'End Circuit'}>End Circuit</MenuItem>
                </Select>
            </FormControl>
                <TextField
                    name={"var1"}
                    variant={"outlined"}
                    label={"Reps or Time"}
                    type={"text"}
                    value={this.state.e1var1}
                    onChange={this.repsChangeBound}
                />
                <TextField
                    name="var1"
                    variant="outlined"
                    label="Weight or Distance"
                    type="text"
                    value={this.state.e1var2}
                    onChange={this.weightChangeBound}
                />
                <br/>
            </div>

        )
    }
}export default ExerciseModule;