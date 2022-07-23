import React, { useContext } from 'react';
import Confirm from './Confirm';
import PersonalDetails from './PersonalDetails';
import Success from './Success';
import UserDetails from './UserDetails';
import GlobalContext from '../context/context';

const Form = () => {
  const { step } = useContext(GlobalContext);

  switch (step) {
    case 0:
      return <UserDetails />
    case 1:
      return <PersonalDetails />
    case 2:
      return <Confirm />
    case 3:
      return <Success />
    default:
      break;
  }
}
 
export default Form;