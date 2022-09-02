const items = document.querySelectorAll('.item')
const columns = document.querySelectorAll('.column')

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

let dragItem = null;

function dragStart() {
    
    this.classList.add('hold')
    console.log('drag started');
    dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.classList.remove('hold')
    console.log('drag ended');
  	this.className = 'item'
  	dragItem = null;
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
    
    console.log('drag entered');
}

function dragLeave() {
    console.log('drag left');
}

function dragDrop() {
    console.log('drag dropped');
    this.append(dragItem);
}

