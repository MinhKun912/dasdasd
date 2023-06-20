import { instance } from "./axios";
export const postUsers = async (newUser) => {
    await instance.post("/api/auth/signup",newUser);}
export const get_user = async (newUser) => {
    // await instance.post("/api/auth/signup",newUser);
}

// export const get_current_user = async (currentUser){
//     await instance.get("")
// }
export const login=async (userLogin)=>{
  return   await instance.post("/api/auth/signin",userLogin)
}
export const get_list_post=async ()=>{
   return  await instance.get("/api/auth/postUpload")
}
export const get_list_post_profile=async (id)=>{
    return  await instance.get("/api/auth/profile/"+id);
}
export const create_post=async (payload)=>{
    console.log("du lieu tai len",payload)

    return  await instance.post("/api/auth/create",payload)
}
export const get_img_url=async ()=>{
    return await instance.get("api/auth/{fileName}")
}
export const add_comment_post=async (payload)=>{
    console.log("cmt tai len",payload)
    return  await instance.post("/api/auth/comments/comment",payload)
}
export const add_like=async (payload)=>{
    return await instance.post('/api/auth/like/add',payload)
}