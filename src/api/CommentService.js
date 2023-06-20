import { instance } from "./axios";
export const get_list_comment=async (id)=>{
    return  await instance.get("/api/auth/comments/getByPostId/"+id)
}
