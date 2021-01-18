new Vue({
    el: '#app9',
    data() {
        return {
            username: null,
            info: null,
            info2: null,
            stime: 233
        }
    },
    mounted() {
        /*axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            /*.then(function (response){
                info = response;
            })
            .then(response => (this.info = response.data.bpi))*/
        axios({
            method: 'get',
            url: 'http://121.4.79.92:8080/ks',
            responseType: 'json'
        })
            .then(response => (this.info2 = response.data))
    },
})