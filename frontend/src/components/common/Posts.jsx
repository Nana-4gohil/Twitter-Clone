import Post from "./Post";
const Posts = ({tweets}) => {
	return (
		<>
			{tweets?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{ tweets && (
				<div>
					{tweets.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			)}
		</>
	);
};
export default Posts;