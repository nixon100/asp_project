import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailValidator,passwordValidator } from './component/regexValidator';
import './css/login.css'


const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [successMessage, setsuccessMessage] = useState('');
    const [error2,setError2] = useState("")
    const [errorMessage, seterrorMessage] = useState('');
    const navigate = useNavigate()
console.log(input)
useEffect(()=>{
    if(localStorage.getItem('auth')){
		navigate('/')

	}
},[])
useEffect(()=>{
    if(localStorage.getItem('client')){
		navigate('/')

	}
},[])
useEffect(()=>{
    if(localStorage.getItem('user')){
		navigate('/')

	}
},[])
console.log(input)
const formSubmitter = e => {
	e.preventDefault();
	setsuccessMessage('');
	if (!emailValidator(input.email)) {
		seterrorMessage('Please enter valid email id');
		return;
	}

	if (!passwordValidator(input.password)) {
		seterrorMessage('Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and special characters');
		return;
	}

	// if(input.email !== 'admin@a.com' || input.password !== 'Password@1')  {
	// 	seterrorMessage('Invalid email or password');
	// 	return;
	// }
	if(input.email === "admin@a.com" && input.password === "Password@1"){
		navigate('/')
		localStorage.setItem('auth', true)
	}else {
		seterrorMessage('Invalid email or password');
	}
	// if(input.email !== 'client@a.com' || input.password !== 'Password@2')  {
	// 	seterrorMessage('Invalid email or password');
	// 	return;
	// }
	if(input.email === "client@a.com" && input.password === "Password@2"){
		navigate('/')
		localStorage.setItem('client', true)
	}else {
		seterrorMessage('Invalid email or password');
	}
	// if(input.email !== 'user@a.com' || input.password !== 'Password@3')  {
	// 	seterrorMessage('Invalid email or password');
	// 	return;
	// }
	if(input.email === "user@a.com" && input.password === "Password@3"){
		navigate('/')
		localStorage.setItem('user', true)
	}else{
		seterrorMessage('Invalid email or password');
	
	}
	
	setsuccessMessage('Successfully Validated');
};
    const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	// const bodyStyle = {
	// 	color: 'white',
	// 	backgroundColor: 'dodgerblue',
	//   };
  return (
    // <div>
	// 		<div className="limiter">
	// 			<div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
	// 				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
	// 					<form className="login100-form validate-form" onSubmit={formSubmitter}>
	// 						<span className="login100-form-title p-b-49">Login</span>
	// 						{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
    //                         {error2.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{error2}</div>}

	// 						{/* {successMessage.length > 0 && (
	// 							<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
	// 						)}  */}
	// 						<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
	// 							<span className="label-input100">Email</span>
	// 							<input
	// 								className="input100"
	// 								type="text"
	// 								name="email"
	// 								placeholder="Type your username"
	// 								onChange={handleChange}
	// 							/>
	// 							<span className="focus-input100" data-symbol="" />
	// 						</div>
	// 						<div className="wrap-input100 validate-input" data-validate="Password is required">
	// 							<span className="label-input100">Password</span>
	// 							<input
	// 								className="input100"
	// 								type="password"
	// 								name="password"
	// 								placeholder="Type your password"
	// 								onChange={handleChange}
	// 							/>
	// 							<span className="focus-input100" data-symbol="" />
	// 						</div>
	// 						<div className="text-right p-t-8 p-b-31">
	// 							<a href="#">Forgot password?</a>
	// 						</div>
	// 						<div className="container-login100-form-btn">
	// 							<div className="wrap-login100-form-btn">
	// 								<div className="login100-form-bgbtn" />
	// 								<button className="login100-form-btn">Login</button>
	// 							</div>
	// 						</div>
	// 						<div className="txt1 text-center p-t-54 p-b-20">
	// 							<span>Or Sign Up Using</span>
	// 						</div>
	// 						<div className="flex-c-m">
	// 							<a href="#" className="login100-social-item bg1">
	// 								<i className="fa fa-facebook" />
	// 							</a>
	// 							<a href="#" className="login100-social-item bg2">
	// 								<i className="fa fa-twitter" />
	// 							</a>
	// 							<a href="#" className="login100-social-item bg3">
	// 								<i className="fa fa-google" />
	// 							</a>
	// 						</div>
	// 						{/* <div className="flex-col-c p-t-155">
    //             <span className="txt1 p-b-17">Or Sign Up Using</span>
    //             <a href="#" className="txt2">
    //               Sign Up
    //             </a>
    //           </div> */}
	// 					</form>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div id="dropDownSelect1" />
	// 	</div>


	// <div className="limiter">
	// <div className="container-login100">
	// <div className="wrap-login100 p-b-160 p-t-50">
	// <form className="login100-form validate-form" >
	// <span className="login100-form-title p-b-43">
	// Account Login
	// </span>
	// <div className="wrap-input100 rs1 validate-input" data-validate="Username is required">
	// <input className="input100" type="text" name="email"  placeholder="Type your username" onChange={handleChange}/>
	// <span className="label-input100"></span>
	// </div>
	// <div className="wrap-input100 rs2 validate-input" data-validate="Password is required">
	// <input className="input100" type="password" name="password" placeholder="Type your password" onChange={handleChange}/>
	// <span className="label-input100"></span>
	// </div>
	// <div className="container-login100-form-btn">
	// <button className="login100-form-btn" onClick={formSubmitter}>
	// Sign in
	// </button>
	// {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: '#bfbfbf' }}>{errorMessage}</div>}
    // {error2.length > 0 && <div style={{ marginBottom: '10px', color: '#bfbfbf' }}>{error2}</div>}
	// </div>
	// {/* <div className="text-center w-full p-t-23">
	// <a href="#" className="txt1">
	// Forgot password?
	// </a>
	// </div> */}
	// </form>
	// </div>
	// </div>
	// </div>

	<div >
	<div class="background" id='7896'>
	<div class="shape"></div>
	<div class="shape"></div>
</div>
<form id='159'>
	<h3 id='45'>Login Here</h3>

	<label id="001"for="username">Username</label>
	<input type="text" name="email" id="username0000"  placeholder="Type your username" onChange={handleChange}/>

	<label id="001" for="password">Password</label>
	<input type="password" name="password" id="password0000" placeholder="Type your password" onChange={handleChange}/>

	<button id="005"onClick={formSubmitter}>Log In</button>
	{errorMessage.length > 0 && <div id="alert">{errorMessage}</div>}
{error2.length > 0 && <div id="alert" >{error2}</div>}

</form>
</div>

  )
}

export default Login