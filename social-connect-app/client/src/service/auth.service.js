const { getAuthSignIn, getApi, postApi } = require('./api.request');

const LOGIN_PATH = '/auth/login';
const SIGN_UP_PATH = '/auth/register';
const POST_PATH = '/post';

export const authSignIn = async (body) => getAuthSignIn(`${LOGIN_PATH}`, body);

export const authSignUp = async (body) =>
  getAuthSignIn(`${SIGN_UP_PATH}`, body);

export const getPosts = async () => getApi(`${POST_PATH}`);

export const postContents = async (body) => postApi(`${POST_PATH}`, body);
