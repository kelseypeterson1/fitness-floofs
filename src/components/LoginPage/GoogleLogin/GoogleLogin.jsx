import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Nav } from '../../../index.js'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export default function GoogleLogin() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    // Dialog box functions
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        dispatch({ type: 'CLEAR_NEW_FLOOF' });
        dispatch({ type: 'FETCH_STEPS', payload: user });
        dispatch({ type: 'FETCH_EGG', payload: user });
        history.push('/homepage')
    }; // END dialog box functions


    // get current date
    const date = new Date();
    const year = date.getFullYear() * 1e4; // 1e4 gives us the the other digits to be filled later, so 20210000.
    const month = (date.getMonth() + 1) * 100; // months are numbered 0-11 in JavaScript, * 100 to move two digits to the left. 20210011 => 20211100
    const day = date.getDate(); // 20211100 => 20211124
    const fullDateUnformatted = (year + month + day + '')
    const fullDate = fullDateUnformatted.slice(0, 4) + '-' + fullDateUnformatted.slice(4, 6) + '-' + fullDateUnformatted.slice(6)

    useEffect(() => {
        dispatch({ type: 'FETCH_GOOGLE_DATA' });
        dispatch({ type: 'CHECK_DATE', payload: { date: fullDate, user } })
    }, []);

    return (
        <div className="homepage">

            <Header />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ height: 300, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="welcome-alert">
                    <center>
                        <h2>
                            Welcome back {user.username}!
                        </h2>
                    </center>
                </DialogTitle>
            </Dialog>

            <div className='homepageSelected'>
                <Nav />
            </div>

        </div>
    )

}