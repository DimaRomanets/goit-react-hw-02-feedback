import PropTypes from 'prop-types';
import { BoxBtn, Button } from './FeedbackOptions.styled';

  export const FeedbackOptions = ({nameBtn, handlClickButton}) => {
    
   return (
    <BoxBtn>
        
        {nameBtn.map(nameBtn=> (
            
            <li key={nameBtn}>
            <Button name={nameBtn}
            onClick={handlClickButton}>{nameBtn[0].toUpperCase()+nameBtn.slice(1)}</Button>
            </li>))
        }
       
    </BoxBtn>
   );
};

FeedbackOptions.propTypes ={
    handlClickButton: PropTypes.func.isRequired,
    nameBtn: PropTypes.arrayOf(PropTypes.string).isRequired,
               
};


export default FeedbackOptions;
