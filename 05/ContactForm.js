/* eslint-disable */
/* eslint-disable no-console */
import React, { useReducer } from 'react';
import account from './account';

const divStyle = {
    marginBottom: '12px',
};
// const isEmail = (email) => {
//     const regexp = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,} $/;
//     return regexp.test(email);
// };

function ContactForm() {
    const init = {
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const reducer = (state, { name, value }) => ({
        ...state,
        [name]: value,
    });

    const [state, dispatch] = useReducer(reducer, init);
    const {
        fullName, email, phone, subject, message } = state;
    console.log(account);
    return (
        <form>
            <div style={divStyle}>
                <label htmlFor="fullName">
                    Full name *:
                    <input
                        required
                        name="fullName"
                        value={fullName}
                        onChange={e => dispatch(e.target)}
                    />
                </label>
            </div>
            <div style={divStyle}>
                <label htmlFor="email">
                    Email *:
                    <input
                        required
                        name="email"
                        value={email}
                        onChange={e => dispatch(e.target)}
                    />
                </label>
            </div>
            <div style={divStyle}>
                <label htmlFor="phone">
                    Phone number:
                    <input
                        name="phone"
                        value={phone}
                        onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div style={divStyle}>
                <label htmlFor="subject">
                    Subject *:
                    <input
                        required
                        name="subject"
                        value={subject}
                        onChange={e => dispatch(e.target)}
                    />
                </label>
            </div>
            <div style={divStyle}>
                <label htmlFor="message">
                    Message *:
                    <textarea
                        type="textarea"
                        required
                        name="message"
                        value={message}
                        rows={5}
                        cols={30}
                        onChange={e => dispatch(e.target)}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ContactForm;
