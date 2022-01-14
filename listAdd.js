
let pseudos = ['Ch Pain Perdu', 'RakanLaBanane', 'Get clownedd', 'B2 Byss']



$.each(pseudos, function(i , pseudo){
    $.getJSON("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ pseudo + apiKey,function(result){
      console.log(result)
      var table = document.getElementById("table");
      var row = table.insertRow(1);
      var cellPseudo = row.insertCell(0);
      cellPseudo.id = "pseudo" + pseudo;
      var cellNiveau = row.insertCell(1);
      cellNiveau.id = "niveau" + pseudo;
      console.log(result.name)
      $("#pseudoGet clownedd" ).html("<b>" + result.name);
      $("#niveau" + pseudo).html(result.summonerLevel);

    })
  });