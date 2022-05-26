import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { addUserSlice } from "../redux/slice/user"
import { CREATE_USER } from "../redux/types"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


const App = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const handleChange = (prop) => (event) => {
        if (event.target.id === 'name') {
            const reg = new RegExp("^[A-Za-z ]+$");
            setNameError(!reg.test(event.target.value));
        }

        if (event.target.id === 'email') {
            const reg = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
            setEmailError(!reg.test(event.target.value));
        }

        if (event.target.id === 'mobile') {
            const reg = new RegExp("[0-9]{9,12}");
            setMobileError(!reg.test(event.target.value));
        }

        dispatch(addUserSlice({ ...user, [prop]: event.target.value }))
    }
    const handleSubmit = async (event) => {

        dispatch({ type: CREATE_USER, user: { ...user } })

        dispatch(addUserSlice({
            name: '',
            email: '',
            mobile: ''
        }))

        const data = {
            ...user
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const result = await response.json()
        alert(`Success: ${result.data}`)
    }


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="name"
                    label="Full Name"
                    placeholder="Please fill in your full name"
                    onChange={handleChange('name')} value={user.name}
                    error={user.isNameError}
                    helperText={!user.name ? 'This field is mandatory.' : (user.isNameError ? 'Please use correct format e.g. John Doe' : '')}
                />
                <TextField
                    required
                    id="email"
                    label="Email Address"
                    error={emailError}
                    helperText={!user.email ? 'This field is mandatory.' : (emailError ? 'Please use correct format e.g. johndoe@test.com' : '')}
                    placeholder="Please fill in your email address"
                    onChange={handleChange('email')} value={user.email}
                />
                <TextField
                    required
                    id="mobile"
                    label="Mobile Number"
                    error={mobileError}
                    helperText={!user.mobile ? 'This field is mandatory.' : (mobileError ? 'Please use correct format e.g. 0123456789' : '')}
                    placeholder="Please fill in your mobile number"
                    onChange={handleChange('mobile')} value={user.mobile}
                />
                <Button
                    onClick={() => handleSubmit()}
                    disabled={!user.name || !user.email || !user.mobile || nameError || emailError || mobileError}
                    variant="contained">Submit</Button>
            </div>
        </Box>
    );
}

export default App