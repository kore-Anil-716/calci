x=document.getElementById("para");
// x.textContent=print()
function print(button)
{
    x.textContent+=button.textContent;
    // console.log(typeof(x.textContent));
}
function refresh()
{
    x.textContent="";
    // console.log(x.textContent);
}
function deleted()
{
    let l=x.textContent.length;
    x.textContent=x.textContent.slice(0,l-1);
    // console.log(x.textContent[x.textContent.length-1]);

}
function percent()
{
    x.textContent=Number(x.textContent)/100;
}
// function divide()
// {
//     ex1=x.textContent
// }

function equal()
{
    if (x.textContent.includes("/"))
    {
        let l=x.textContent.indexOf("/")
        let e1=Number(x.textContent.slice(0,l));
        let e2=Number(x.textContent.slice(l+1,));
        x.textContent=(e1/e2);


    }
    else if(x.textContent.includes("X"))
    {
        let l=x.textContent.indexOf("X");
        let e1=Number(x.textContent.slice(0,l));
        let e2=Number(x.textContent.slice(l+1,));
        x.textContent=e1*e2;
    }
    else if(x.textContent.includes("-"))
    {
        let l=x.textContent.indexOf("-");
        let e1=Number(x.textContent.slice(0,l));
        let e2=Number(x.textContent.slice(l+1,));
        x.textContent=e1-e2;
    }
    else if(x.textContent.includes("+"))
    {
        let l=x.textContent.indexOf("+");
        let e1=Number(x.textContent.slice(0,l));
        let e2=Number(x.textContent.slice(l+1,));
        x.textContent=e1+e2;
    }

}
