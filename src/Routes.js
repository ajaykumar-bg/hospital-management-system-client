import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import AdminDashboard from './user/AdminDashboard';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import PatientRoute from './auth/PatientRoute';
import DoctorRoute from './auth/DoctorRoute';
import Profile from './user/Profile';
import ListUsers from './admin/ListUsers';
import ListCatTest from './admin/ListCatTest';
import CreateTestCat from './admin/CreateTestCat';
import CatTestUpdate from './admin/CatTestUpdate';
import ListTestResult from './admin/ListTestResult';
import CreateTest from './admin/CreateTest';
import TestUpdate from './admin/TestUpdate';
import ListTreatment from './admin/ListTreatment';
import CreateTreatment from './admin/CreateTreatment';
import TreatmentUpdate from './admin/TreatmentUpdate';
import AddPrescription from './admin/AddPrescription';
import ListPrescriptions from './admin/ListPrescriptions';
import UpdatePrescriptions from './admin/UpdatePrescriptions';
import AddPatientDetails from './admin/AddPatientDetails';
import ListPatients from './admin/ListPatients';
import UpdatePatientProfile from './admin/UpdatePatientProfile';
import ListBuildings from './admin/ListBuildings';
import AddBuilding from './admin/AddBuilding';
import UpdateBuilding from './admin/UpdateBuilding';
import ListFloors from './admin/ListFloors';
import AddFloor from './admin/AddFloor';
import UpdateFloor from './admin/UpdateFloor';
import UpdateUsers from './admin/UpdateUsers';
import AddUsers from './admin/AddUsers';
import ListDeparts from './admin/ListDeparts';
import AddDepartment from './admin/AddDepartment';
import UpdateDepartment from './admin/UpdateDepartment';
import ListDesignate from './admin/ListDesignate';
import AddDesignation from './admin/AddDesignation';
import UpdateDesignation from './admin/UpdateDesignation';
import ListSpecialize from './admin/ListSpecialize';
import AddSpecialization from './admin/AddSpecialization';
import UpdateSpecialize from './admin/UpdateSpecialize';
import FileUpload from './admin/FileUpload';
import ListVendors from './admin/ListVendors';
import ListDoctors from './admin/ListDoctors';
import AddDoctorDetails from './admin/AddDoctorDetails';
import UpdateDoctorProfile from './admin/UpdateDoctorProfile';
import ListExpenses from './admin/ListExpenses';
import AddExpense from './admin/AddExpense';
import UpdateExpenses from './admin/UpdateExpenses';
import PatDetails from './admin/PatDetails';
import ListMedicine from './admin/ListMedicine';
import AddMedicine from './admin/AddMedicine';
import UpdateMedicine from './admin/UpdateMedicine';
import ListVaccineCat from './admin/ListVaccineCat';
import AddVaccineCat from './admin/AddVaccineCat';
import UpdateVaccineCat from './admin/UpdateVaccineCat';
import ListAppVaccine from './admin/ListAppVaccine';
import AddAppVaccine from './admin/AddAppVaccine';
import UpdateVaccApp from './admin/UpdateVaccApp';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/signup' exact element={<Signup />} />
				<Route path='/signin' exact element={<Signin />} />
				<Route
					path='/'
					exact
					element={
						<AdminRoute>
							<AdminDashboard />
						</AdminRoute>
					}
				/>
				<Route
					path='/profile/:userId'
					exact
					element={
						<AdminRoute>
							<Profile />
						</AdminRoute>
					}
				/>
				<Route
					path='/update/users/:id'
					exact
					element={
						<AdminRoute>
							<UpdateUsers />
						</AdminRoute>
					}
				/>
				<Route
					path='/test-result'
					exact
					element={
						<AdminRoute>
							<ListTestResult />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-prescriptions'
					exact
					element={
						<AdminRoute>
							<ListPrescriptions />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-cat-test/:catTestId'
					exact
					element={
						<AdminRoute>
							<CatTestUpdate />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-test/:testId'
					exact
					element={
						<AdminRoute>
							<TestUpdate />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-prescription/:id'
					exact
					element={
						<AdminRoute>
							<UpdatePrescriptions />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-building/:id'
					exact
					element={
						<AdminRoute>
							<UpdateBuilding />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-designation/:id'
					exact
					element={
						<AdminRoute>
							<UpdateDesignation />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-floor/:id'
					exact
					element={
						<AdminRoute>
							<UpdateFloor />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-expenses/:id'
					exact
					element={
						<AdminRoute>
							<UpdateExpenses />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-doctor/:id'
					exact
					element={
						<AdminRoute>
							<UpdateDoctorProfile />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-depart/:id'
					exact
					element={
						<AdminRoute>
							<UpdateDepartment />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-patient/:id'
					exact
					element={
						<AdminRoute>
							<UpdatePatientProfile />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-specialize/:id'
					exact
					element={
						<AdminRoute>
							<UpdateSpecialize />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-medicine/:id'
					exact
					element={
						<AdminRoute>
							<UpdateMedicine />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-vaccine-cat/:id'
					exact
					element={
						<AdminRoute>
							<UpdateVaccineCat />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-vacc-app/:id'
					exact
					element={
						<AdminRoute>
							<UpdateVaccApp />
						</AdminRoute>
					}
				/>
				<Route
					path='/update-treatment/:treatmentId'
					exact
					element={
						<AdminRoute>
							<TreatmentUpdate />
						</AdminRoute>
					}
				/>
				<Route
					path='/list/users'
					exact
					element={
						<AdminRoute>
							<ListUsers />
						</AdminRoute>
					}
				/>
				<Route
					path='/list/medicine'
					exact
					element={
						<AdminRoute>
							<ListMedicine />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-cat-test'
					exact
					element={
						<AdminRoute>
							<ListCatTest />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-patients'
					exact
					element={
						<AdminRoute>
							<ListPatients />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-treat-cat'
					exact
					element={
						<AdminRoute>
							<ListTreatment />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-buildings'
					exact
					element={
						<AdminRoute>
							<ListBuildings />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-floors'
					exact
					element={
						<AdminRoute>
							<ListFloors />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-departs'
					exact
					element={
						<AdminRoute>
							<ListDeparts />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-vendors'
					exact
					element={
						<AdminRoute>
							<ListVendors />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-doctors'
					exact
					element={
						<AdminRoute>
							<ListDoctors />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-app-vaccine'
					exact
					element={
						<AdminRoute>
							<ListAppVaccine />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-designate'
					exact
					element={
						<AdminRoute>
							<ListDesignate />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-expenses'
					exact
					element={
						<AdminRoute>
							<ListExpenses />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-specialize'
					exact
					element={
						<AdminRoute>
							<ListSpecialize />
						</AdminRoute>
					}
				/>
				<Route
					path='/list-vaccine-cat'
					exact
					element={
						<AdminRoute>
							<ListVaccineCat />
						</AdminRoute>
					}
				/>
				<Route
					path='/create/cat-test'
					exact
					element={
						<AdminRoute>
							<CreateTestCat />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-prescription'
					exact
					element={
						<AdminRoute>
							<AddPrescription />
						</AdminRoute>
					}
				/>
				<Route
					path='/create/cat-treatment'
					exact
					element={
						<AdminRoute>
							<CreateTreatment />
						</AdminRoute>
					}
				/>
				<Route
					path='/create-test'
					exact
					element={
						<AdminRoute>
							<CreateTest />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-patient-details'
					exact
					element={
						<AdminRoute>
							<AddPatientDetails />
						</AdminRoute>
					}
				/>
				<Route
					path='/pat-details/:id'
					exact
					element={
						<AdminRoute>
							<PatDetails />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-building'
					exact
					element={
						<AdminRoute>
							<AddBuilding />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-floor'
					exact
					element={
						<AdminRoute>
							<AddFloor />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-users'
					exact
					element={
						<AdminRoute>
							<AddUsers />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-vacc-app'
					exact
					element={
						<AdminRoute>
							<AddAppVaccine />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-medicine'
					exact
					element={
						<AdminRoute>
							<AddMedicine />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-expenses'
					exact
					element={
						<AdminRoute>
							<AddExpense />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-vac-cat'
					exact
					element={
						<AdminRoute>
							<AddVaccineCat />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-depart'
					exact
					element={
						<AdminRoute>
							<AddDepartment />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-designate'
					exact
					element={
						<AdminRoute>
							<AddDesignation />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-doctor'
					exact
					element={
						<AdminRoute>
							<AddDoctorDetails />
						</AdminRoute>
					}
				/>
				<Route
					path='/add-specialize'
					exact
					element={
						<AdminRoute>
							<AddSpecialization />
						</AdminRoute>
					}
				/>
				<Route
					path='/file-upload'
					exact
					element={
						<AdminRoute>
							<FileUpload />
						</AdminRoute>
					}
				/>
				<Route
					path='/profile/:userId'
					exact
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
