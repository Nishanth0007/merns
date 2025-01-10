const button = document.getElementById("button");
const funcont = document.getElementById("funcont");
const fun = document.getElementById("fun");

button.onclick=()=>
{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response)
    {
        button.textContent = "NEXT";
        funcont.textContent = response.data.setup;
        fun.textContent="";
        setTimeout(function()
    {
        fun.textContent = response.data.punchline;
    },1000);


    }
)
//error vantha
.catch(function(error)
{
    console.log(error);
});
    
}
