import { React, useState} from 'react';
import { Session } from '../requests';

function SigninPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onSignIn } = props;

    function handleSubmit(e) {
        e.preventDefault();
        const params = {
            email: email,
            password: password,
        };
        Session.create(params).then((data) => {
            if (data.id) {
                onSignIn();
                props.history.push('/')
            }
        });
    }

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email"></input>
                </div>
                <br>
                </br>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"></input>
                </div>

                <input type="submit" value="Sign In" />
            </form>
        </div>
    )
}

export default SigninPage;
