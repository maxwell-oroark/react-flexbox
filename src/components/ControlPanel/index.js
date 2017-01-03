import React from 'react'
import './index.css'
import { RaisedButton,
         Paper,
         Slider,
         SelectField,
         MenuItem
       } from 'material-ui';


const ControlPanel = ({ addSquare, removeSquare, addMargin, changeMonoColor, mono }) => {
    const add = (event) => {
        addSquare(event)
    }
    const remove = (event) => {
        removeSquare(event)
    }
    const margin = ({e}, newValue) => {
        addMargin(newValue)
    }
    const changeMono = ({e}, newValue) => {
        changeMonoColor(newValue)
    }

    return (
        <Paper className="control-panel">
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <RaisedButton onClick={add} label="Add"/>
                <RaisedButton onClick={remove} label="Delete"/>
            </div>
            <Slider defaultValue={0}
                    max={50}
                    min={0}
                    onChange={margin} />
            <SelectField
                value={mono}
                onChange={changeMono}>
                <MenuItem value={1} primaryText={"red"} label={"red"} />
                <MenuItem value={2} primaryText={"green"} label={"green"} />
                <MenuItem value={3} primaryText={"yellow"} label={"yellow"}/>
            </SelectField>
        </Paper>
    )
}

export default ControlPanel;
