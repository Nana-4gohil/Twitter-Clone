import { Link } from "react-router-dom";
// import LoadingSpinner from "../../components/common/LoadingSpinner";

import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NotificationPage = () => {
	const [isLoading , setIsLoading] = useState(false)
	const [notifications,setNotifications] = useState(null)
	const getNotifications = async () => {
		try {
			const res = await fetch("/api/v1/notifications");
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Something went wrong");
			setNotifications(data)
		} catch (error) {
			throw new Error(error);
		}
	}
	const deleteNotification = async ()=>{
		try {
			const res = await fetch("/api/v1/notifications", {
				method: "DELETE",
			});
			const data = await res.json();

			if (!res.ok) throw new Error(data.error || "Something went wrong");
			toast.success("Notifications deleted successfully");
			setIsLoading(!isLoading)
		} catch (error) {
			throw new Error(error);
		}
	}
	useEffect(()=>{
		getNotifications()
	},[isLoading])

	const deleteNotifications = () => {
		deleteNotification()
	};

	return (
		<>
			<div className='flex-[4_4_0] border-l border-r border-gray-700 min-h-screen'>
				<div className='flex justify-between items-center p-4 border-b border-gray-700'>
					<p className='font-bold'>Notifications</p>
					<div className='dropdown '>
						<div tabIndex={0} role='button' className='m-1'>
							<IoSettingsOutline className='w-4' />
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a   onClick={deleteNotifications}>Delete all notifications</a>
							</li>
						</ul>
					</div>
				</div>
				{/* {!isLoading && (
					<div className='flex justify-center h-full items-center'>
						<LoadingSpinner size='lg' />
					</div>
				)} */}
				{notifications?.length === 0 && <div className='text-center p-4 font-bold'>No notifications 🤔</div>}
				{notifications?.map((notification) => (
					<div className='border-b border-gray-700' key={notification._id}>
						<div className='flex gap-2 p-4'>
							{notification.type === "follow" && <FaUser className='w-7 h-7 text-primary' />}
							{notification.type === "like" && <FaHeart className='w-7 h-7 text-red-500' />}
							<Link to={`/${notification.from.username}`}>
								<div className='avatar'>
									<div className='w-8 rounded-full'>
										<img src={notification.from.profileImg || "/avatar-placeholder.png"} alt="" />
									</div>
								</div>
								<div className='flex gap-1'>
									<span className='font-bold'>@{notification.from.username}</span>{" "}
									{notification.type === "follow" ? "followed you" : "liked your post"}
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default NotificationPage;