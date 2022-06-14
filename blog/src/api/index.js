import { get,post } from "@/api/http";
export const getEssayBlog = (params) => get("/getEssayBlog",params);
export const getTalkData = (params) => get("/getTalkData",params);
export const tologin = (params) => get("/login",params);
export const toRegist = (params) => get("/regist",params);
export const getCanvas = (params) => get("/getCanvas",params);
export const postTalkData = (data) => post("/postTalkData",data);