import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0b8b7f0968d54430984a1059a8e10de7'
    }
})