import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../core/Layout';
import { getUsersDetails, updateUsersProfile } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import { ROLE_TYPES } from '../constants/roles';

const UpdateUsers = ({ match, history }) => {
	const navigate = useNavigate();
	const params = useParams();

	const id = params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState(0);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const usersDetails = useSelector((state) => state.usersDetails);
	const { loading, error, users } = usersDetails;

	//console.log(users)
	//console.log(email)

	const usersUpdate = useSelector((state) => state.usersUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = usersUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USERS_UPDATE_PROFILE_RESET });
			navigate('/list/users');
		} else {
			if (users._id !== id) {
				dispatch(getUsersDetails(id));
			} else {
				setName(users.name);
				setEmail(users.email);
				setRole(users.role);
			}
		}
	}, [dispatch, navigate, users, successUpdate, id]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			console.log(email);
			dispatch(updateUsersProfile({ _id: id, name, email, role, password }));
		}
	};

	const usersForm = () => (
		<form onSubmit={submitHandler}>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='small mb-1 font-weight-bold' htmlFor='inputName'>
							Enter Name
						</label>
						<input
							className='form-control py-4'
							id='inputName'
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
						<label className='small mb-1 font-weight-bold' htmlFor='inputRole'>
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
						<label className='small mb-1 font-weight-bold' htmlFor='inputEmail'>
							Email
						</label>
						<input
							className='form-control py-4'
							id='inputEmail'
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
							id='inputPassword'
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
							id='inputConfirmPassword'
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
					<button className='btn btn-primary btn-block'>Update Account</button>
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
		loadingUpdate && (
			<div className='d-flex justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);

	const showLoadingData = () =>
		loading && (
			<div className='d-flex justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);

	return (
		<Layout className='container-fluid'>
			<h2 className='mb-4'>Users Profile update</h2>
			{email}
			{errorUpdate && (
				<div className='alert alert-danger' role='alert'>
					{errorUpdate}
				</div>
			)}
			{message && (
				<div
					className='alert alert-danger'
					style={{ display: error ? '' : 'none' }}
				>
					{message}
				</div>
			)}
			{showError()}
			{showLoadingData()}
			{showLoading()}
			{usersForm()}
		</Layout>
	);
};

export default UpdateUsers;
