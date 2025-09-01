import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    //컴포넌트 내부에 상태변수를 포함하는 state 객체선언
    state = {
        value: 0,
        message: '',
        username: '',
        isValid: false,
        messageArr: ['Angular','React','Vue','Ember']
    };
    //event handler 함수선언
    // handleDecrement = function (){    
    handleDecrement = () => {
      this.setState({
        value: this.state.value - 1
      })
    }; //handleDecrement
    
    handleChange = (e) => {
        this.setState({
            /*
               message: e.target.value
               username: e.target.value
            */
            [e.target.name]: e.target.value
        })
    }; //handleChange

    handleEnter = (e) => {
        const { message, messageArr } = this.state;

        if(e.keyCode === 13){
            this.setState({
                isValid: true,
                messageArr: [...messageArr, message],
                //첫번째 Input 엘리먼트 필드 초기화
                message: ''
            });
            this.myUsername.focus();            
        }
    } //handleEnter

    render() {
        //destructuring assignment 
        const { name, age } = this.props;
        const { value, message, username, isValid, messageArr } = this.state;
        const { handleDecrement, handleChange, handleEnter } = this;
        const messageList = messageArr.map((msg,idx) => (<li key={idx}>{msg}</li>));

        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>Hello! {name} - {age}</h3>
                <p>상태변수 value = {value}</p>
                <button onClick={() => (
                    this.setState({ value: value + 1 })
                )}>증가</button>
                <button onClick={handleDecrement}>감소</button>
                <br/>
                <p>상태변수 message = {message}</p>
                <input name="message" value={message} onChange={handleChange} onKeyDown={handleEnter} />
                <br/>
                <ul>
                    {messageList}
                </ul>
                <p>상태변수 username = {username}</p>
                <input name="username" value={username} onChange={handleChange} 
                    className={isValid ? 'success':'failure'}
                    ref={(ref) => this.myUsername=ref}
                />

            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: '리액트JS'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponent;