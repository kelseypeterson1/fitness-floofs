import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EggHatchConflictAlert.css'



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function EggHatchConflictAlert({ newFloof, floofs, oldFloof }) {

    const dispatch = useDispatch();
    const imageUrl = `images/floofs/floof${newFloof.floof_id}.png`
    const floofId = newFloof.floof_id - 1;
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const [hatchlingSelected, hatchlingSetSelected] = useState(true);

    // Dialog box functions
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        dispatch({ type: 'CLEAR_NEW_FLOOF' });
    }; // END dialog box functions


    useEffect(() => {
        handleClickOpen();
    }, []);

    const keepOriginal = () => {
        dispatch({
            type: 'DELETE_FLOOF', payload: {
                id: newFloof.id,
                user: user
            }
        })
        dispatch({ type: 'CLEAR_NEW_FLOOF' })
        setOpen(false);
    }

    const keepHatchling = () => {
        dispatch({
            type: 'DELETE_FLOOF', payload: {
                id: oldFloof.id,
                user: user
            }
        })
        dispatch({ type: 'CLEAR_NEW_FLOOF' })
        setOpen(false);
    }

    // stars render based on floof rarity
    const stars = () => {
        if (floofs[floofId].rarity == 1) {
            return <img src="images/star.png" />
        } else if (floofs[floofId].rarity == 2) {
            return <div>
                <img className="starImage" src="images/star.png" />
                <img className="starImage" src="images/star.png" />
            </div>
        } else {
            return <div>
                <img className="starImage" src="images/star.png" />
                <img className="starImage" src="images/star.png" />
                <img className="starImage" src="images/star.png" />
            </div>
        }
    }

    return (
        < Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogTitle
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
                id="egg-hatch-alert"
            >
                <center>
                    <Typography style={{ lineHeight: "50px" }}>
                        <div className="eggHatchHeader">Your egg hatched!</div>
                    </Typography>
                    <Typography style={{ lineHeight: "25px" }}>
                    <h3>You already own a {floofs[floofId].type} floof</h3>
                    {stars()}
                    </Typography>
                </center>
            </DialogTitle>

            <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                <div className='conflictDiv'>
                    <h5>Original</h5>
                    <div className='oldFloof'>
                        <center>
                            <img className="floofProfilePic" src={imageUrl} />
                            <h3>{oldFloof.name}</h3>
                            <h5>is</h5><h3>{oldFloof.personality}</h3>
                        </center>
                    </div>
                </div>
                <div className='conflictDiv'>
                    <h5>Hatchling</h5>
                    <div className='newFloof'>
                        <center>
                            <img className="floofProfilePic" src={imageUrl} />
                            <h3>{newFloof.name}</h3>
                            <h5>is</h5><h3>{newFloof.personality}</h3>
                        </center>
                    </div>
                </div>
            </DialogContent>

            <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', }} >
                <Button sx={{ backgroundColor: 'skyblue', color: 'black' }} variant='contained' onClick={keepOriginal} autoFocus>
                    Keep
                </Button>
                &nbsp;
                <Button sx={{ backgroundColor: 'skyblue', color: 'black' }} variant='contained' onClick={keepHatchling} autoFocus>
                    Keep
                </Button>
            </DialogActions>

        </Dialog>
    )
}