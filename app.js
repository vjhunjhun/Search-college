let btn = document.querySelector("button");
let inp = document.querySelector("input");
// let p = document.querySelector("#result");
btn.addEventListener('click', ()=>{
    call();
});
 async function call(){
    let country = inp.value;
    inp.value="";
    let ul = document.querySelector("ul");
    ul.innerHTML='';
    let data= await getColleges(country);
    console.log(data.length);
   show(data);
 }
inp.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        call();
    }else{

    }
})
function show(colarr){
    if(colarr.length==0){
        let p = document.createElement("p");
        p.innerHTML="<h2>NO DATA FOUND</h2>";
        p.style.color="red";
        document.querySelector("body").append(p);
}else{
    for(col of colarr){
        let list = document.createElement("li");
        let ul = document.querySelector("ul");
        ul.append(list);
        list.innerText=col.name;
        }
}
}
let url3= "http://universities.hipolabs.com/search?country=";
async function  getColleges(country){
    try{
        let res = await axios.get(url3+country);
        return res.data;
    }catch(err){
        return "no data";
    }
}