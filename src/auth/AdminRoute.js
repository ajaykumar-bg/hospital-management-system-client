import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Roles } from '../constants/roles';

const AdminRoute = ({ children }) => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	if (userInfo && userInfo.role === Roles.ADMIN) {
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

export default AdminRoute;
