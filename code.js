/* Place your JavaScript in this file */
var level = 1
function myFunction(){
    // Create a Map
    const d = new Map();

    // Set Map Values
    d.set("1", 'https://monkeytype.com/');
    d.set("2", 'https://youtu.be/VGdEdUH4v2k?si=rDwl5O41cUbMseDf')
    d.set("3", 'https://youtu.be/FQZ_y_GSi9g?si=64n-8W1BRfiZ8ZpD')


    let test = parseInt(code);
    function linkopen(x){
    const link = document.getElementById('link');
    let clikc = d.get(code);
    link.setAttribute('href', clikc);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.innerHTML = x;
    }
    if (test < 500 && test > 300){
        linkopen("YOU GOTTA TYPE! -Putter")
    }else{
        document.getElementById("demo").innerHTML = level
    }
}