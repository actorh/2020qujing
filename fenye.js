window.onload = function(){
    new Vue({
        el:'',
        data:{
            lists:[],
        },
    })
    methods:{
        getlist:function(){
            Axios({
                methods:'get',
                url:''
            })
            .then(function(res){
                console.log(res);
            })
            .catch(function(error){
                console.log(error)
            })
        }
        
    }
}
