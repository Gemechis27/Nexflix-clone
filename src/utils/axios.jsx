import axios from 'axios'


const intance= axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
    api_key: 'VITE_API_KEY',}
});



export default intance;