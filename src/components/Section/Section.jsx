import React from 'react';
import s from './Sections.module.css';
import PropTypes from 'prop-types';

export default class Section extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <section className={s.section}>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
