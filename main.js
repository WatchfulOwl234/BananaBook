var names= ["Family Book","Joe", "Ken", "Roshni", "Kiki",];

var images=["banana1", "banana2", "banana3", "banana4"];








var i=0
function update()
{
i++;
var numberofbananas_inarray = 4
if(i > numberofbananas_inarray)
{
    i = 0;
}
var updated_image = images[i];
var updated_names = names[i];

document.getElementById("nameofbanana_id").innerHTML = updated_names;
document.getElementById("imagesof_bananas").src = updated_image;
}