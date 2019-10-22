import axios from "axios"

const baseURL = "https://api.github.com/users/";

const getSingleGitHubUser = async (userName) => {
    try {
        const res = await axios.get(`${baseURL}${userName}`);
        const data = handleResponse(res);
        return data;

    } catch (err) {
        /* eslint-disable no-console */
        console.error(err);
        return null;
        /* eslint-enable no-console */
    }

}

const handleResponse = res => {
    if (res.status !== 200) throw Error(res.message);
    const data = res.data;
    return data;
}

export const data = {
    getSingleGitHubUser
}