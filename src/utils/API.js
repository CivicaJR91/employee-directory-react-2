import axios from "axios";

//URL API

export const APIURL = "https://randomuser.me/api/?results=15&inc=picture,name,gender,email";


//API Calling Fucntion

export default {
    ramdomEmployees: function(url){
        return axios.get(APIURL); //this is the promise

    }
};