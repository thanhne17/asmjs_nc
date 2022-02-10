/* eslint-disable import/prefer-default-export */
import instance from "./instance";

export const SignIn = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};

export const register = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};