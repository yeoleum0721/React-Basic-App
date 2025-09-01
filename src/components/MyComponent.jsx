import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        //destructuring assignment
        const {name} = this.props
        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>Hello! {name}</h3>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: '리액트JS'
};
MyComponent.propTypes = {
    name: PropTypes.string
};
export default MyComponent;