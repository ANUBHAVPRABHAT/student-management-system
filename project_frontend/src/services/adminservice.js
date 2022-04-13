import httpClient from '../http-request/http-common -admin';


const updatepassword = (id,data) => {
  return httpClient.put(`/updatePassword/${id}`,data);
};


export default {updatepassword};
