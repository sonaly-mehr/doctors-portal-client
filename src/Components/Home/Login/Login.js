import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from 'firebase';
import 'firebase/auth';
import loginimg from '../../../images/Group 140.png';
import firebaseConfig from '../../../Components/Home/Login/firebase.config';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);



const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [users, setUsers] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        photo: ""
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUsers(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // const {displayName, photoURL, email} =res.user;
                // console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // const handleSignOut = () => {
    //     firebase.auth().signOut().then(() => {
    //         const signedOutUser = {
    //             isSignedIn: false,
    //             name: '',
    //             email: '',
    //             photo: ''
    //         }
    //         setUsers(signedOutUser)
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNum = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNum;
        }
        if (isFormValid) {
            let newUser = { ...users };
            newUser[e.target.name] = e.target.value;
            setUsers(newUser);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && users.email && users.password) {
            firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
                .then(res => {
                    const newUserInfo = { ...users };
                    // successMessage.error = '';
                    newUserInfo.success = true;
                    setUsers(newUserInfo);
                    // updateUserInfo(users.name);

                })

                .catch(error => {
                    const newUserInfo = { ...users };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUsers(newUserInfo);
                    updateUserInfo(users.name);
                });
        }
        else if (!newUser && users.email && users.password) {
            firebase.auth().signInWithEmailAndPassword(users.email, users.password)
                .then(res => {
                    const newUserInfo = { ...users };
                    // successMessage.error = '';
                    newUserInfo.success = true;
                    setUsers(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch(error => {
                    const newUserInfo = { ...users };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUsers(newUserInfo);
                })
        }
        e.preventDefault()
    }
    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
            .then(() => {
                console.log('updated user info successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="login-section">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-info">
                        <div className="login-details">

                            {
                                users.isSignedIn && <p>Welcome {users.name}</p>
                            }
                            <form action="">
                                {!newUser ? <h5>Login</h5> : <h5>Create Account</h5>}
                                {
                                    newUser && <input className="nameField" type="name" name="name" onBlur={handleChange} placeholder="Enter Your Name" required />
                                }
                                <input type="email" name="email" onBlur={handleChange} placeholder="Enter Your Email" required /><br />
                                <input type="password" name="password" onBlur={handleChange} placeholder="Enter Your Password" required /><br />
                                {/* {
              newUser && <input className="nameField" type="password" name="ConfirmPassword" onBlur={handleBlur} placeholder="Confirm Password" required />
            } */}

                                {!newUser && <div><input type="checkbox" /><label htmlFor="">Remember Me</label> <a className="pass-retrieve" href="#">Forgot Password?</a></div>}
                                <input onClick={handleSubmit} type="submit" value={newUser ? 'Create a New Account' : 'Log In'} />
                                {!newUser ?
                                    <p>Don't Have an account? <a onClick={() => setNewUser(!newUser)} href="#">Create an account</a></p>
                                    : <p>Already Have an account? <a onClick={() => setNewUser(!newUser)} href="#">Login</a></p>
                                }

                            </form>
                        </div>
                        <div className="or-sec">
                            <p>Or</p>
                        </div>
                        <button className="login-btn" onClick={handleSignIn}><FontAwesomeIcon className="icon" icon={faGoogle}></FontAwesomeIcon>Continue with google</button>
                        {
                            users.success && <p style={{ color: 'green', textAlign: 'center' }}>User {newUser ? 'Created' : 'Logged In'} Successfully!</p>
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="login-img">
                        <img src={loginimg} alt="" />
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Login;