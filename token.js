import jwt from "jsonwebtoken"
const genToken= async (userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECERTE,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("generate toke error",error)
    }
}
export default genToken