import axios from '../config';
import uri from '../uri/user';

const getAllMyClasses = async (accessToken) => {
  let res;

  try {
    const response = await axios({
      //   method: uri.all.method,
      //   url: uri.all.path,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

export default getAllMyClasses;
