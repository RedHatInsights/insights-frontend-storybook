import React from 'react';

import PropTypes from 'prop-types';

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

class Wrapper extends React.Component {

    render () {
        return (
            <div className='wrapper'> {this.props.children} </div>
        );
    }
};

// Wrapper.propTypes = {
//     children: PropTypes.element.isRequired,
// };

export default Wrapper;
