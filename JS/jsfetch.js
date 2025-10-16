// const username='aashnaachaudhary10';
// const url="https://api.github.com/users/aashnaachaudhary10";
// const resp =fetch(url);
// resp.then((res)=>{
//     res.json();

// })
// .then((data)=>{
//     console.log("Data:",data);
// })
const url = "https://dummyjson.com/users?limit=2";
const pr=fetch(url);
pr.then(function(res){
   return res.json();
})
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('Inside finally');
})

