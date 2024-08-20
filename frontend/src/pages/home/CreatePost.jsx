import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import { PostContext } from "../../context/postContext";

const CreatePost = () => {
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);
	const {authUser:user} = useContext(AuthContext)
	const {isloading,setIsLoading} = useContext(PostContext)
	const imgRef = useRef(null);
	const createPost = async (text,img)=>{
		try{
			
			const res = await fetch("api/v1/posts/create",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify({text,img})
			})
			const data = await res.json()
			if(!res.ok)throw new Error(data.error)
			setIsLoading(!isloading)
			toast.success("Post is Created Succefully")
		}catch(err){
	       toast.error(err.message)
		}finally{
			setImg(null)
			setText("")
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		createPost(text,img)
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='flex p-4 items-start gap-4 border-b border-gray-700'>
			<div className='avatar'>
				<div className='w-8 rounded-full'>
					<img src={user.profileImg || "/avatar-placeholder.png"} alt=""/>
				</div>
			</div>
			<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
				<textarea
					className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
					placeholder='What is happening?!'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				{img && (
					<div className='relative w-72 mx-auto'>
						<IoCloseSharp
							className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
							onClick={() => {
								setImg(null);
								imgRef.current.value = null;
							}}
						/>
						<img src={img} className='w-full mx-auto h-72 object-contain rounded'  alt=""/>
					</div>
				)}

				<div className='flex justify-between border-t py-2 border-t-gray-700'>
					<div className='flex gap-1 items-center'>
						<CiImageOn
							className='fill-primary w-6 h-6 cursor-pointer'
							onClick={() => imgRef.current.click()}
						/>
						<BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
					</div>
					<input type='file' hidden ref={imgRef} onChange={handleImgChange} />
					<button className='btn btn-primary rounded-full btn-sm text-white px-4'>
						Post
					</button>
				</div>
			
			</form>
		</div>
	);
};
export default CreatePost;