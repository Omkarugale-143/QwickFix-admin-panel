import {User} from '../model/UserModel.js'



export const loginUser = async (req, res) => {
    const {email,password} = req.body ;
    try {
        const user = await User.findOne({email})
        if (!user) {
            res.status(404).json({message:"User Not Found"})
        }
        console.log(user.password == password)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.json({userData: user,message:"LogIn Successful" });
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
export const newUser = async (req, res) => {
    try {
        const { fName,lName, email, password } = req.body
        if (!fName || !lName || !email || !password) {
            res.status(400).json({message:"Incomplete Credentials"})
            
        }
        const user = await User.findOne({email})
        if (user) {
            res.status(400).json({message:"User Already Exist"})
            
        }else{
            
            console.log(fName,lName,email,password)
            const newUser = await User.create({ fName,lName,email,password });
        
        res.status(200).json({userData: newUser,message:"Registration Succesful" })
        }
        
    } catch (error) {
        res.status(400).json({message:"Server Not Responding"})
    }
}