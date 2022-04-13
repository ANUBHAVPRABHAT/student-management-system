import httpClient from '../http-request/http-common -attandance';

const getAll = (date) => {
  return httpClient.get(`date/${date}`);
};
const getInactive = () => {
  return httpClient.get('/fetch');
};


const create = (data) => {
  return httpClient.post('', data);
};

const get = (sid,startdate,enddate) => {
  return httpClient.get(`${sid}/${startdate}/${enddate}`);
};
const getcount=(sid)=>{
  return httpClient.get(`count/${sid}`)
}
const getView = (sid) => {
  return httpClient.get(`/view/${sid}`);
};


const getclass=(classes)=>{
  return httpClient.get(`/classes/${classes}`);
}

const update = (id) => {
  return httpClient.put('', id);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
const removesid = (id) => {
  return httpClient.delete(`sid/${id}`);
};
export default { getAll, create, get, update, remove,getInactive,getclass,getView,getcount,removesid};
