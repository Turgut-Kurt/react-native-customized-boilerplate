import axios from "axios";

export const getUser = async (uri) => {
  const response = await axios.get('https://randomuser.me/api/?results=5');
  return response;
};
