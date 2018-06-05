import React from 'react';

import PropTypes from 'prop-types';

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

class Preview extends React.Component {

    render () {
        return (
            <div className='preview'>
                <div class='preview__header'>
                    <h4 class='preview__title'>{this.props.type}</h4>
                </div>
                <div class='preview__body'>{this.props.children}</div>
            </div>
        );
    }
};

Preview.propTypes = {
    children: PropTypes.element.isRequired,
    type: PropTypes.string
};

export default Preview;
