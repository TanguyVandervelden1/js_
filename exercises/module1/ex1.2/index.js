
function addDateTime(message) {
    const dateTimeNow = new Date();
    let date = dateTimeNow.toLocaleDateString();
    let heure = dateTimeNow.toLocaleTimeString();
    return `${date} ${heure} : ${message}`;
}
let mess = "sfsdqfqs";
alert(addDateTime(mess));
