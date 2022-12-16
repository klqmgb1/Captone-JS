function ProductService(){
    this.getListProductApi = function(){
        return axios({
            url: "https://637b699710a6f23f7fa80a5c.mockapi.io/api/CaptoneJS",
            method: "GET"
        })
    }

}