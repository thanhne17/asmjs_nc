import instance from "./instance";

export const getAll = () => {
    const url = "/post";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/post/${id}`;
    return instance.get(url);
};

export const add = (post) => {
    const url = "/post";
    return instance.post(url, post);
};

export const remove = (id) => {
    const url = `/post/${id}`;
    return instance.delete(url);
};

export const update = (post) => {
    const url = `/post/${post.id}`;
    return instance.put(url, post);
};