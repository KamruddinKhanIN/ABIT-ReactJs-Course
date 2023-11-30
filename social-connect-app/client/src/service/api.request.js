import axios from 'axios';

const BASE_URL = 'http://localhost:8003/apis';

const API_BASE_URL = `${BASE_URL}`;

// const checkError = async (error) => {
//   if (error?.response?.data) {
//     const data = error?.response?.data;
//     return { data };
//   }
//   return error;
// };

const getToken = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return userData?.token;
};

export const getApi = async (path) => {
  const token = getToken();
  try {
    const { data } = await axios.get(`${API_BASE_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const postApi = async (path, body) => {
  const token = getToken();
  try {
    const { data } = await axios.post(`${API_BASE_URL}${path}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getAuthSignIn = async (path, body) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}${path}`, body);
    return data;
  } catch (error) {
    return error;
  }
};
