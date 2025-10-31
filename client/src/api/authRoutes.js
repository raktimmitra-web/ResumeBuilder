import axiosInstance from "./axiosInstance"

export const signUp = async(data)=>{
    try {
        const response =await axiosInstance.post("/auth/signup",data)
        return response
    } catch (error) {
        console.log(error)
    }
}


export const login = async(data)=>{
    try {
        const response =await axiosInstance.post("/auth/login",data)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const logout = async ()=>{
    try {
        const response = await axiosInstance.get("/auth/logout")
        return response
    } catch (error) {
        console.log(error)
    }
}