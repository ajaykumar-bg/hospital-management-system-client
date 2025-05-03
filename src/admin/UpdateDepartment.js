import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../core/Layout';
import { updateDeparts, departDetails } from '../actions/departmentActions';
import { listFloors } from '../actions/floorActions';
import { DEPARTMENT_UPDATE_RESET } from '../constants/departmentConstants';

const UpdateDepartment = () => {
	const navigate = useNavigate();
	const params = useParams();

	const id = params.id;

	const [name, setName] = useState('');
	const [head, setHead] = useState('');
	const [description, setDescription] = useState('');
	const [floor, setFloor] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useDispatch();

	const departsDetails = useSelector((state) => state.departsDetails);
	const { loading, error, depart } = departsDetails;

	const floorList = useSelector((state) => state.floorList);
	const { floors } = floorList;

	const departsUpdate = useSelector((state) => state.departsUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = departsUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: DEPARTMENT_UPDATE_RESET });
			navigate('/list-departs');
		} else {
			if (depart._id !== id) {
				dispatch(listFloors());
				dispatch(departDetails(id));
			} else {
				setName(depart.name);
				setHead(depart.head);
				setDescription(depart.description);
				setFloor(depart.floor);
			}
		}
	}, [dispatch, navigate, id, depart, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateDeparts({ _id: id, name, floor, head, description, phone }));
	};

	const showError = () => (
		<div
			className='alert alert-danger'
			style={{ display: error ? '' : 'none' }}
		>
			{error}
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

	const showLoading = () =>
		loadingUpdate && (
			<div className='d-flex justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);

	const UpdateDepartForm = () => (
		<form onSubmit={submitHandler}>
			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='small mb-1' htmlFor='description'>
							Name
						</label>
						<input
							className='form-control py-4'
							type='name'
							aria-describedby='emailHelp'
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
						<label className='small mb-1' htmlFor='description'>
							Head
						</label>
						<input
							className='form-control py-4'
							type='name'
							aria-describedby='emailHelp'
							placeholder='Enter Head'
							value={head}
							onChange={(e) => setHead(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='small mb-1' htmlFor='description'>
							Description
						</label>
						<input
							className='form-control py-4'
							type='text'
							aria-describedby='desc'
							placeholder='Enter description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='small mb-1' htmlFor='description'>
							Phone
						</label>
						<input
							className='form-control py-4'
							type='name'
							aria-describedby='emailHelp'
							placeholder='Enter phone No'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className='form-row'>
				<div className='col-md-8'>
					<div className='form-group'>
						<label className='text-muted'>Select Floor</label>
						<select
							onChange={(e) => setFloor(e.target.value)}
							className='form-control'
						>
							<option>Please select a Floor</option>
							{floors &&
								floors.map((c, i) => (
									<option key={i} value={c._id}>
										{c.name}
									</option>
								))}
						</select>
					</div>
				</div>
			</div>

			<div className='col-md-8'>
				<div className='form-group mt-4 mb-0'>
					<button className='btn btn-primary btn-block'>Update Depart </button>
				</div>
			</div>
		</form>
	);

	return (
		<Layout title='Category test Form'>
			<h2 className='mb-4'>Update Department</h2>

			{errorUpdate && (
				<div className='alert alert-danger' role='alert'>
					{errorUpdate}
				</div>
			)}

			{showLoadingData()}
			{showLoading()}
			{showError()}
			{UpdateDepartForm()}
		</Layout>
	);
};

export default UpdateDepartment;
