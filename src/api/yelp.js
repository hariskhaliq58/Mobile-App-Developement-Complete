import axios from "axios";
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/search",
    headers:
    {
        Authorization: "Bearer uVBcZA-5ab56zObe4nh_vXX0FCjLx0KYhmOa84Idgv5Gpr_zaoDf4iGEgZ1GFEN46mE4LqCn6a5TIrs8G1VL8cU-J4402X_grUiVZn_Ev6ZUWD1aD9CpRT84cEYKZnYx"
    }
});