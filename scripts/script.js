






function toggleNavAffiche(event)
{
    el = document.querySelector("header");
    if(el.classList.contains("nav-affiche"))
    {
        el.classList.remove("nav-affiche");
        return;
    }
    el.classList.add("nav-affiche");
}



















