import jwt from 'jsonwebtoken'
export const generateToken  = (userId,user)=>{
   const token = jwt.sign({userId,
     user
   },process.env.JWT_SECRET,{
    expiresIn:"15d",
   })
 
   return token;
}
// res.cookie("jwtoken",jwtoken,{expires:new Date(Date.now() + (15*24 * 60 * 60 * 1000)),httpOnly:true})