import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Roles } from '../constants/roles';

const PatientRoute = ({ children }) => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	if (userInfo && userInfo.role === Roles.PATIENT) {
		return children;
	}
	return (
		<Navigate
			to={{
				pathname: '/signin',
			}}
		/>
	);
};

export default PatientRoute;
