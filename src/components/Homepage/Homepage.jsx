import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EggHatchAlert, Egg, StepCounter, Nav, Header } from '../../index.js'
import './Homepage.css'

function Homepage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // Dialog box functions
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const newFloof = useSelector(store => store.newFloof);

  useEffect(() => {
    handleClickOpen();
    dispatch({ type: 'FETCH_EGG', payload: user });
    dispatch({ type: 'FETCH_FLOCK', payload: user });
    dispatch({ type: 'FETCH_STEPS', payload: user });
    dispatch({ type: 'UPDATE_EGG', payload: user });
    dispatch({ type: 'FETCH_FLOOFS', payload: user });
    dispatch({ type: 'FETCH_COINS', payload: user });
  }, []);


  return (
    <div className="homepage">
      <Header />

      {/* If new egg is hatched, a popup will appear */}
      {newFloof && <EggHatchAlert newFloof={newFloof} />}

      <Egg />

      &nbsp;

      <StepCounter />

      &nbsp;

      <div className='homepageSelected'>
        <Nav />
      </div>

    </div >
  );
}

export default Homepage;


