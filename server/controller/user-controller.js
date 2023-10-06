import User from '../model/User.js'

export const addUser = async (request, response) => {

    try {
        let exist = await User.findOne({ sub: request.body.sub })

        if(exist){
            response.status(200).json({msg:'user already exists'})
            return;
        }
        const newuser = new User(request.body);
        await newuser.save();
        return response.status(200).json(newuser);
    } catch (error) {
        return response.status(500).json(err.message);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message);
    }


}