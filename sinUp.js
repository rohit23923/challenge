let naam , pass;
function sinup()
{
    naam= document.getElementById("name").value;
    pass= document.getElementById("password").value;

    localStorage.setItem("userName",naam);
    localStorage.setItem("passcode",pass);

    window.alert("SinUp Sucessfully");
}

function login()
{
    let logName=document.getElementById("name").value;
    let logpass=document.getElementById("password").value;
    let n=localStorage.getItem("userName");
    let p=localStorage.getItem("passcode");

    if(logName==n&&logpass==p)
    {
       document.getElementById("main-1").style.display="none";
       document.getElementById("main-2").style.display="block";
    }

    else
    {
        window.alert("Please enter correct Name and Password");
    }
}

let a=[]
let ab=[]
function inputDone()
{
    let firstName= document.getElementById("firstName").value
    a.push(firstName);
    document.getElementById("firstName").value=""
}    

function result()
{
    if(a.length<3)
    {
        window.alert("Please enter atleast 3 names")
    }
    else
    {
        for(let i=0;i<3;i++)
        {
           let z=Math.floor(Math.random()*a.length);
           ab.push(z)
        }
        document.getElementById("fst").innerHTML=a[ab[0]]
        document.getElementById("sec").innerHTML=a[ab[1]]
        document.getElementById("third").innerHTML=a[ab[2]]
    }
}