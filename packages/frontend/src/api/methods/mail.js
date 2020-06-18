import axiosInstsance from '../config';
import uri from '../uri/mail';

const sendContactEmail = async (email, message, callback, errorCallback) => {
  try {
    await axiosInstsance({
      method: uri.contact.method,
      url: uri.contact.path,
      data: {
        email,
        message,
      },
    });
    callback();
  } catch (axiosErr) {
    console.error(axiosErr);
    errorCallback(axiosErr);
  }
};

export default sendContactEmail;
