
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import LoginPage from './pages/auth/login/LoginPage';
import Sidebar from './components/common/Sidebar';
import ProfilePage from './pages/profile/ProfilePage';
import NotificationPage from './pages/notification/NotificationPage';
import { Toaster } from 'react-hot-toast';
import RightPanel from './components/common/RightPanel';
import {useEffect, useMemo} from 'react';

import { getAllTweets, getFollowingTweets } from './redux/actions/tweetActions';
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile, getNotifications } from './redux/actions/currentProfileActions';
import { decodedToken } from './utils/decodejwt';

function App() {
	const dispatch = useDispatch();
	const token = useMemo(()=>decodedToken(),[])
	const navigate = useNavigate()
	const {refresh:t}  = useSelector((state) => state?.tweet);
	const {authUser,refresh} = useSelector(state=>state?.currentProfile)
	useEffect(()=>{
		  if(token){
			dispatch(getAllTweets())	
			dispatch(getFollowingTweets())
			dispatch(getNotifications())
		  }
			
	},[t,token,dispatch,refresh])
	useEffect(()=>{
		if(token){
			dispatch(getNotifications())
		}
		  
  },[t,token,dispatch])
	useEffect(()=>{
		if(token){
            dispatch(getCurrentProfile())
		}
	},[refresh,token,dispatch])
	useEffect(()=>{
        if(!token){
			navigate("/login")
		}
	},[])
	return (
		<div className='flex max-w-6xl mx-auto'>
			{
				authUser && <Sidebar></Sidebar>
			
			}
			   <Routes>
				<Route path='/' element={authUser  ? <HomePage/> : <Navigate to="/login"></Navigate>} />
				<Route path='/signup' element={!authUser ? <SignUpPage />: <Navigate to="/"></Navigate>} />
				<Route path='/login' element={authUser ?<Navigate to="/"></Navigate> :<LoginPage />} />
				<Route path='/notifications' element={authUser ?<NotificationPage></NotificationPage>: <Navigate to="/login"></Navigate>}></Route>
				<Route path='/:username' element={ authUser  ? <ProfilePage></ProfilePage> : <Navigate to="/login"></Navigate>}></Route>
			   </Routes>
				{authUser &&  <RightPanel></RightPanel>}
			   <Toaster/>
		</div>

	);
}

export default App;
