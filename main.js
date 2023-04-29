let input = document.querySelector("input");
let button = document.querySelector("button");
let boxes = document.querySelectorAll(".task");
let employees = document.querySelectorAll(".branch-tasks .box");
let drag = null;

button.onclick = function() {
    if(input.value != '') {
        boxes[0].innerHTML += `<p draggable="true">${input.value}</p>`;
        input.value = '';
    };
    dragItem();
};
function dragItem(){
    let items = document.querySelectorAll("p");
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = "0.5"
        })
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = "1"
        })
        employees.forEach(employee => {
            employee.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.background = '#c38eb4';
            })
            employee.addEventListener('dragleave', function() {
                this.style.background = '#d2cbcb';
            })
            employee.addEventListener('drop', function() {
                this.append(drag);
                this.style.background = '#d2cbcb';
            })
        })
    })
}