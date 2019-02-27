import axios from 'axios';
import apiUrls from '../configs/apiUrls';

const apiClient = axios.create({
  baseURL: apiUrls.employeeServiceBaseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default {
  getEmployees(){
    return apiClient.get('/employees')
  },
  getEmployee(id) {
    return apiClient.get('employees/' + id)
  },
  postEmployee(employee) {
    return apiClient.post('employees', employee)
  }
}
