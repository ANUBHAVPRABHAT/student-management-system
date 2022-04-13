import httpClient from '../http-request/http-common -result'

const getAll = () => {
  return httpClient.get('');
};

const session=(id)=>{
  return httpClient.get(`/session/${id}`)
}
const create = (data) => {
  return httpClient.post('', data);
};

const getByID = (sid) => {
  return httpClient.get(`/id/${sid}`);
};
const get = (sid) => {
  return httpClient.get(`${sid}`);
};
const examget = (sid) => {
  return httpClient.get(`exam/${sid}`);
};

const getSession=(sid,session)=>{
  return httpClient.get(`/${sid}/${session}`);
}

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};

const removesid = (id) => {
  return httpClient.delete(`sid/${id}`);
};
export default { getAll, create, get, update, remove, getByID,removesid,getSession,examget,session};
