let li = document.getElementsByTagName('li');

function OpenNav()
{
    for(let i of li)
    {
        i.classList.toggle("display");
    }
}