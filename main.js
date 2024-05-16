const panels = document.querySelectorAll(".panel")
// looping through the pannel divs
panels.forEach((panel)=>{
  // adding an event listerner of click on the panel div
  panel.addEventListener('click', ()=>{
    // activatiing the remove active classes from pannel first
    removeActiveclasses()
    // adding active class to the clicked pannel
    panel.classList.add('active')
  })
})

// function removing active classes
function removeActiveclasses(){
  // looping through all pannels first one by one
  panels.forEach(panel=>{
    panel.classList.remove('active')
  })
}