import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { followUnfollowUser, suggestedProfile } from "../../redux/actions/currentProfileActions";

const RightPanel = () => {
	const { suggestedUsers,refresh} = useSelector(state => state?.currentProfile)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(suggestedProfile())
	}, [refresh])
	const handlefollow = (userid) => {
		dispatch(followUnfollowUser(userid))
	}
	if (suggestedUsers?.length === 0) return <div className='md:w-64 w-0'></div>;
	return (
		<div className='hidden lg:block my-4 mx-2'>
			<div className='bg-[#16181C] p-4 rounded-md sticky top-2'>
				<p className='font-bold'>Who to follow</p>
				<div className='flex flex-col gap-4'>
					{/* item */}
					{
						suggestedUsers?.map((user) => (
							<Link
								to={`/${user.username}`}
								className='flex items-center justify-between gap-4'
								key={user._id}
							>
								<div className='flex gap-2 items-center'>
									<div className='avatar'>
										<div className='w-8 rounded-full'>
											<img src={user.profileImg || "/avatar-placeholder.png"} alt="" />
										</div>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28'>
											{user.fullName}
										</span>
										<span className='text-sm text-slate-500'>@{user.username}</span>
									</div>
								</div>
								<div>
									<button
										className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
										onClick={(e) => {
											e.preventDefault()
											handlefollow(user?._id)
										}}
									>
										Follow
									</button>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
export default RightPanel;