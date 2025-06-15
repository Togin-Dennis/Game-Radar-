// GlobelFunc/Axios.js
import axios from 'axios';

const Axiosfun = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert("Server Down 👁️");
    throw error;
  }
};

export default Axiosfun;
