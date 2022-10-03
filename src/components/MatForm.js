import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function MatForm() {
    const [open, setOpen] = React.useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('firstName 👉️', firstName);
        console.log('lastName 👉️', lastName);

        // 👇️ clear all input values in the form
        setFirstName('');
        setLastName('');
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='form'>
            <Button variant="outlined" onClick={handleClickOpen}>
                Form
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        onChange={event => setFirstName(event.target.value)}
                        value={firstName}
                    />
                    <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />

                    <button type="submit">Submit form</button>
                </form>
            
            </Dialog>
        </div>
    );
}
