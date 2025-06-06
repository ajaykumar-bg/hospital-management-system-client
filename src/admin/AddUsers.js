import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../core/Layout';
import { usersRegister } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_REGISTER_RESET } from '../constants/userConstants';
import { ROLE_TYPES, Roles } from '../constants/roles';

const AddUsers = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState();
	const [confirmPassword, setConfirmPassword] = useState('');
	//const [message, setMessage] = useState(null)

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const usersCreate = useSelector((state) => state.usersCreate);
	const { success, error, loading } = usersCreate;

	useEffect(() => {
		if (userInfo && userInfo.role === Roles.ADMIN) {
			if (success) {
				dispatch({ type: USERS_REGISTER_RESET });
				navigate('/list/users');
			}
		}
	}, [dispatch, navigate, success, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(usersRegister({ name, email, password, confirmPassword, role }));
	};

	// {message && <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
	//     {message}
	// </div>}

	const usersForm = () => (
		<form onSubmit={submitHandler}>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label
							className='small mb-1 font-weight-bold'
							htmlFor='inputFirstName'
						>
							Enter Name
						</label>
						<input
							className='form-control py-4'
							id='inputFirstName'
							type='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='small mb-1 font-weight-bold' htmlFor='role'>
							Enter role
						</label>
						<select
							id='role'
							value={role}
							onChange={(e) => setRole(e.target.value)}
							className='form-control'
						>
							<option value=''>Please select a role</option>
							{ROLE_TYPES &&
								ROLE_TYPES.map((c, i) => (
									<option key={i} value={c.id}>
										{c.text}
									</option>
								))}
						</select>
					</div>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label
							className='small mb-1 font-weight-bold'
							htmlFor='inputEmailAddress'
						>
							Email
						</label>
						<input
							className='form-control py-4'
							type='email'
							aria-describedby='emailHelp'
							placeholder='Enter email address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label
							className='small mb-1 font-weight-bold'
							htmlFor='inputPassword'
						>
							Password
						</label>
						<input
							className='form-control py-4'
							type='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className='col-md-8'>
					<div className='form-group'>
						<label
							className='small mb-1 font-weight-bold'
							htmlFor='inputConfirmPassword'
						>
							Confirm Password
						</label>
						<input
							className='form-control py-4'
							type='password'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className='col-md-8'>
				<div className='form-group mt-4 mb-0'>
					<button className='btn btn-primary btn-block'>Add User</button>
				</div>
			</div>
		</form>
	);

	const showError = () => (
		<div
			className='alert alert-danger'
			style={{ display: error ? '' : 'none' }}
		>
			{error}
		</div>
	);

	const showLoading = () =>
		loading && (
			<div className='d-flex justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);

	return (
		<Layout className='container-fluid'>
			<h2 className='mb-4'>Add User</h2>

			{showError()}
			{showLoading()}
			{usersForm()}
		</Layout>
	);
};

export default AddUsers;
