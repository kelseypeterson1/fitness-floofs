import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function ButtonBack({prevNav}) {

    const history = useHistory();

    // Back button moves user back a page
    const handleBack = (event) => {
        event.preventDefault();

        // routes to the prior page
        history.push(prevNav);
    };

    return (
        <form className="back-button" onClick={handleBack}>
            <Button
                variant='text'
                type='button'
                startIcon={<ArrowBackIcon />}
            >
                Back
            </Button>
        </form>
    )
}