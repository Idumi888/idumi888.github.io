var script_arr = [
    'vince.js',
    'luc.js',
    'fab.js',
    'matteo.js',
    'lucas.js'
]

$.getMultiScript( script_arr, function() {
    $("button").click(function() {
      alert("ca marche la ?")
    });
  });