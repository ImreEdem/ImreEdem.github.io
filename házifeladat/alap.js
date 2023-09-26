fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/master/db.json")
.then(x => x.json())
.then(y => myDisplay(y));

function myDisplay(y){
    console.log(y)
    var sz = ""
    y.characters.forEach(elem => {
        sz += `<div   id="kiskeret" class = "col-sm-2" style = "background-image: url(${elem.pic}); background-positin: center; background-size: cover;" ><button onclick="modalfuction(y)" ><p>${elem.name}</p><p>${elem.homeworld}</p></button>
        </div>`
        
    });
    document.getElementById("stargrid").innerHTML= sz
}
function modalfuction(y){
        var sz2 = ""
        y.characters.forEach(elem => {
            sz2 = `
            <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">${elem.name}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body">
            <img src="${elem.pic}" alt="">
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
            `
        });
        document.getElementById("myModal").innerHTML = sz2



}

