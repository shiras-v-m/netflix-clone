import axios from "axios";

// axios is used for api call like promise,async await,etc method
// instance is created because to avoid frequent call to baseurl
// create an axios instance for baseurl
const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance;