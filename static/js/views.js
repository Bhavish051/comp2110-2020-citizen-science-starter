export {listAllUsers};
function listAllUsers(data)
{
    let target = document.getElementById("UsersView");

    let template = Handlebars.compile(
        document.getElementById("listUsers").textContent
    )
    target.innerHTML = template(data);
    
}
