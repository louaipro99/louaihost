const button = document.getElementById("change")
const file_location = document.getElementById("sp")
const result = document.getElementById("re")


button.addEventListener("click", function(e){
    console.log(e)
    const location = file_location.value
    result.innerText = location
})
