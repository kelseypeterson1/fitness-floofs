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
import Box from '@mui/material/Box';


export default function EggHatchConflictAlert({ newFloof, floofs, oldFloof }) {

    const dispatch = useDispatch();
    const imageUrl = `images/floofs/floof${newFloof.floof_id}.png`
    const floofId = newFloof.floof_id - 1;
    const user = useSelector((store) => store.user);
    const flock = useSelector((store) => store.flock);
    const [hatchlingSelected, setHatchlingSelected] = useState(true);

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

    // toggle between hatchling and original floof
    const handleHatchlingSelected = () => {
        setHatchlingSelected(!hatchlingSelected);
    }

    return (
        < Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ m: 0, p: 0 }}
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
                {hatchlingSelected ?
                    <div onClick={handleHatchlingSelected}>
                        <div className="displayFloofs">
                            <div className='conflictDivSmall'>
                                <Typography style={{ fontSize: 18, fontWeight: "bold", lineHeight: "20px" }}>
                                    Original
                                </Typography>
                                <div className='smallFloof'>
                                    <center>
                                        <img className="smallFloofImage" src={imageUrl} />
                                    </center>
                                </div>
                            </div>
                            <Typography style={{ lineHeight: "20px" }}>
                                <div className="eggHatchName">Hatchling</div>
                            </Typography>
                            <div className="bufferSpace"></div>
                        </div>
                        <div className='conflictDivLarge'>
                            <div className='largeFloof'>
                                <center>
                                    <img className="floofProfilePic" src={imageUrl} />
                                    <Typography style={{ fontSize: 20, fontWeight: "bold", lineHeight: "40px" }}>
                                        Name: {newFloof.name} &nbsp;
                                        Personality: {newFloof.personality} &nbsp;
                                        Income: <img className="coinImage" src="images/coin.png" />{newFloof.income}
                                    </Typography>
                                </center>
                            </div>
                        </div>
                    </div>
                    :
                    <div onClick={handleHatchlingSelected}>
                        <div className="displayFloofs">
                            <div className='conflictDivSmall'>
                                <Typography style={{ fontSize: 18, fontWeight: "bold", lineHeight: "20px" }}>
                                    Hatchling
                                </Typography>
                                <div className='smallFloof'>
                                    <center>
                                        <img className="smallFloofImage" src={imageUrl} />
                                    </center>
                                </div>
                            </div>
                            <Typography style={{ lineHeight: "20px" }}>
                                <div className="eggHatchName">Original</div>
                            </Typography>
                            <div className="bufferSpace"></div>
                        </div>
                        <div className='conflictDivLarge'>
                            <div className='largeFloof'>
                                <center>
                                    <img className="floofProfilePic" src={imageUrl} />
                                    <Typography style={{ fontSize: 20, fontWeight: "bold", lineHeight: "40px" }}>
                                        Name: {oldFloof.name} &nbsp;
                                        Personality: {oldFloof.personality} &nbsp;
                                        Income: <img className="coinImage" src="images/coin.png" />{oldFloof.income}
                                    </Typography>
                                </center>
                            </div>
                        </div>
                    </div>
                }
            </DialogContent>

            <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', }} >
                <div className="hatchConflictButtons">
                    {/* render button depending on which floof is currently selected */}
                    {hatchlingSelected ?
                        <Button sx={{ backgroundColor: 'skyblue', color: 'black' }} variant='contained' onClick={keepHatchling} autoFocus>
                            Keep
                        </Button>
                        :
                        <Button sx={{ backgroundColor: 'skyblue', color: 'black' }} variant='contained' onClick={keepOriginal} autoFocus>
                            Keep
                        </Button>
                    }
                </div>
            </DialogActions>

        </Dialog>
    )
}