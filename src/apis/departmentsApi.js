import axios from 'axios';
import apiUrls from '../configs/apiUrls';

const apiClient = axios.create({
  baseURL: apiUrls.departmentServiceBaseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default {
  getDepartments(){
    return apiClient.get('/departments')
  },
  getDepartment(id) {
    return apiClient.get('departments/' + id)
  },
  postDepartment(department) {
    return apiClient.post('departments', department)
  }
}
