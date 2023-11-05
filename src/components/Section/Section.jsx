
import PropTypes from 'prop-types';
import { BoxTitle, Title } from './Section.styled';


 const Section =({title, children}) =>{
    return (
        <BoxTitle>
            {title && <Title>{title}</Title>}
            {children}
        </BoxTitle>
        
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;
