import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:5001/api",
    headers: {
        "Content-type": "application/json"
    }
});

// "Content-Type": "multipart/form-data",