import axios from "axios";

const instance = axios.create({
    baseUrl: "http://localhost:5001/clone-228d2/us-central1/api"
});

export default instance;