import axios from '../config';
import uri from '../uri/class';

const getClassStudent = async (accessToken, classId) => {
  let res;
  try {
    const response = await axios({
      method: uri.class.method,
      url: uri.class.path,
      withCredentials: true,
      crossdomain: true,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      data: {
        classId,
      },
    });
    res = response.data;
  } catch (axiosErr) {
    res = axiosErr.response && axiosErr.response.data;
  }
  return res;
};

export default getClassStudent;
