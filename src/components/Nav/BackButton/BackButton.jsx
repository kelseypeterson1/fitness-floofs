import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './BackButton.css'
import { purple } from '@mui/material/colors';

export default function ButtonBack({prevNav}) {

    const history = useHistory();

    // Back button moves user back a page
    const handleBack = (event) => {
        // routes to the prior page
        history.push(prevNav);
    };

    // styling button
    const BackButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        // position: 'fixed',
        // left: 20,
        // bottom: 20
      }));

    return (

            <BackButton
                className="backButton"
                variant="text"
                type="button"
                onClick={handleBack}
                startIcon={<ArrowBackIcon />}
            >
                
            </BackButton>
    )
}