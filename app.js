var temp,i;
function myFunction()
{
    temp=document.getElementById("textBox").value;
    for(i=1;i<=temp;i++ )
    {
        repeatuh();
    } 
}
function repeatuh()
{
    var abc = document.createElement("img");
    abc.setAttribute('src','https://img.freepik.com/free-photo/christmas-background-with-text-space_53876-128580.jpg?w=2000');
    abc.setAttribute('width', "50px");
    abc.setAttribute('height', "50px");
    abc.style.padding= "2%";
    document.getElementById("grid1").appendChild(abc);

    document.getElementById("grid1").style.display="block";

}