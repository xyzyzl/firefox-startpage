let coll = document.getElementsByClassName("collapsible");

Array.from(coll).forEach(
  collapsible => collapsible.addEventListener('click',
    () => collapsible.parentElement.classList.toggle('active')
  )
);
