import PropTypes from 'prop-types';
import { Container, Option, Value } from './Statistics.styled';

const Statistics =({good,neutral,bad,total, positivePercentage})=>{

   return  ( <Container>
    <li>
        <Option >Good:</Option>
        <Value name ='good' >{good}</Value>
    </li>
    <li>
        <Option >Neutral:</Option>
        <Value name ='neutral'>{neutral}</Value>
    </li>
    <li>
        <Option >Bad:</Option>
        <Value name ='bad'>{bad}</Value>
    </li>
    <li>
        <Option >Total:</Option>
        <Value name ='total' >{total}</Value>
    </li>
    <li>
        <Option >Positive feedback:</Option>
        <Value name ='positivePercentage'>{positivePercentage}</Value>
    </li>
</Container>);
   
};

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired

}

export default Statistics;