import userModel from '../../models/userModel.js'

async function updateUser(req,res) {
    try{
        const sessionUser = req.userId
        const {userId,email,name,role} = req.body
        const payload = {
            ...(email &&  {email: email}),
            ...(name &&  {name: name}),
            ...(role &&  {role: role}),
        }

        const user = await userModel.findById(sessionUser)

        console.log("User Role: ", user.role);

        const updateUser = await userModel.findByIdAndUpdate(userId,payload)

        res.json({
            message: "User details updated",
            data: updateUser,
            error: false,
            success: true
        })

    }catch(error){
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


export default updateUser;