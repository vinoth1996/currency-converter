import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { getBitCoinData } from '../actions/bitcoinData';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DropDown = () => {
    const currencies = useSelector((state) => state.currencies);
    const dispatch = useDispatch();
    const [code, setCode] = useState('');
    const [currency, setCurrency] = useState('');
    const [currencyValue, setCurrencyValue] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    
    const handleChange = (event) => {
        setCurrency(event.target.value);
        for(let x in currencies){
            if(currencies[x].description === event.target.value){
                setCode(currencies[x].code);
                setCurrencyValue(currencies[x].rate_float+" "+currencies[x].description);
            }
        }
        handleDataChange();
    }

    const handleFrom = (date) => {
        setFromDate(date);
        handleDataChange();
    }

    const handleTo = (date) => {
        setToDate(date);
        handleDataChange();
    }

    const handleDataChange = () => {
        dispatch(getBitCoinData(code, String(fromDate.toISOString().slice(0, 10)), String(toDate.toISOString().slice(0, 10))));
    }

    const options = [];

    for(let x in currencies) {
        options.push(<MenuItem key={currencies[x].code} value={currencies[x].description}>{currencies[x].description}</MenuItem>);
    }

    return(
        <div>
            <Typography variant="body1" gutterBottom>
                1 Bitcoin Equals
            </Typography>
            <FormControl variant="outlined" style={{minWidth: 230}}>
                <Select id="selected-currency" value={currency} onChange={handleChange}>
                    {options}
                </Select>
            </FormControl>
            <Typography variant="h6" gutterBottom>
                {currencyValue}
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    size="small"
                    margin="normal"
                    label="from"
                    format="yyyy/MM/dd"
                    value={fromDate}
                    onChange={handleFrom}
                />
                <KeyboardDatePicker
                    size="small"
                    margin="normal"
                    label="to"
                    format="yyyy/MM/dd"
                    value={toDate}
                    onChange={handleTo}
                />
            </MuiPickersUtilsProvider>                
        </div>
    )
}

export default DropDown;