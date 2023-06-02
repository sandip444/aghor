const object = document.getElementById("myObject");

document.addEventListener("mouseover", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  
  const objectX = object.getBoundingClientRect().left;
  const objectY = object.getBoundingClientRect().top;
  
  const deltaX = mouseX - objectX;
  const deltaY = mouseY - objectY;
  
  object.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});