import React from 'react';

import PropTypes from 'prop-types';

import './deprecated.scss';
/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

class Deprecated extends React.Component {

    render () {
        return (
            <div className='ins-c-deprecated'>
                <span>This component is deprecated and will not be supported</span>
                { this.props.link &&
                    <span>Please visit the <a href={this.props.link}>Patternfly equivalent</a></span>
                }
            </div>
        );
    }
};

Deprecated.propTypes = {
    link: PropTypes.string,
};

export default Deprecated;
