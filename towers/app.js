function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

println("Loaded it up!");
var input = prompt("Type in your input:");
println(input);
