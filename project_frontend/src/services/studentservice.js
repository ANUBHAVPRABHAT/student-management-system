import httpClient from '../http-request/http-common';

const getAll = () => {
  return httpClient.get('');
};
const getInactive = () => {
  return httpClient.get('/fetch');
};


const create = (data) => {
  return httpClient.post('', data);
};

const get = (sid) => {
  return httpClient.get(`${sid}`);
};

const getclassesbysid = (sid) => {
  return httpClient.get(`getclass/${sid}`);
};

const getdetail = (sid) => {
  return httpClient.get(`sid/${sid}`);
};



const getView = (sid) => {
  return httpClient.get(`/view/${sid}`);
};


const getclass=(classes)=>{
  return httpClient.get(`/classes/${classes}`);
}

const update = (data) => {
  return httpClient.put('', data);
};


const updatestatus = (id) => {
  return httpClient.put(`/status/${id}`);
};
const updatepassword = (id,data) => {
  return httpClient.put(`/updatePassword/${id}`,data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, create, get, update, remove,getInactive,getclass,getView,updatestatus,getdetail,getclassesbysid,updatepassword};
