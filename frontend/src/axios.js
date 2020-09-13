const { default: Axios } = require("axios");

const instance =Axios.create({
    baseURL:"http://localhost:5001/clone-2f81f/us-central1/api"
})
export default  instance