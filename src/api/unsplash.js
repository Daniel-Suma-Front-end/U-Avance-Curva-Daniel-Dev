import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 9cEmydaO0-5N8rkx9OHLkEcnkwUJeOk_VmDSgK6qG5M'
    }
})