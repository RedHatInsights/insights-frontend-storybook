import React from 'react';

import PropTypes from 'prop-types';

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

class Example extends React.Component {

    render () {
        return (
            <div className='example'>
                <div class='example__header'>
                    <h3 class='example__title'>{this.props.name}</h3>
                </div>
                <div class='example__body'>{this.props.children}</div>
            </div>
        );
    }
};

Example.propTypes = {
    children: PropTypes.element.isRequired,
    name: PropTypes.string
};

export default Example;
