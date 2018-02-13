var homepage = document.getElementById('homepage');
var writing = document.getElementById('writing');
var research = document.getElementById('research');
var design = document.getElementById('design');
var blog = document.getElementById('blog');

function display(pageString) {
  if (pageString === "homepage") {
    writing.style.display = "none";
    research.style.display = "none";
    design.style.display = "none";
    blog.style.display = "none";
    homepage.style.display = "flex";
  }
  else if (pageString === "writing") {
    writing.style.display = "flex";
    research.style.display = "none";
    design.style.display = "none";
    blog.style.display = "none";
    homepage.style.display = "none";
  }
  else if (pageString === "research") {
    writing.style.display = "none";
    research.style.display = "flex";
    design.style.display = "none";
    blog.style.display = "none";
    homepage.style.display = "none";
  }
  else if (pageString === "design") {
    writing.style.display = "none";
    research.style.display = "none";
    design.style.display = "flex";
    blog.style.display = "none";
    homepage.style.display = "none";
  }
  else if (pageString === "blog") {
    writing.style.display = "none";
    research.style.display = "none";
    design.style.display = "none";
    blog.style.display = "flex";
    homepage.style.display = "none";
  }
}
