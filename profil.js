//Recuperation Pseudo recherche
function passValues() {
  var recherche = document.getElementById("searchResult").value;
  localStorage.setItem("rechercheValeur", recherche);
  return false;
}
var pseudo = (document.getElementById("pseudo").innerHTML =
  localStorage.getItem("rechercheValeur"));

//Transformation pseudo pour api
var pseudoAPI = pseudo.replace(/ /g, "%20");
var apiKey = "?api_key=RGAPI-2d2da56e-d1af-472d-9a20-3d3cd9fc5ce1";

$(document).ready(function () {
  $.getJSON(
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      pseudoAPI +
      apiKey,
    function (result) {
      console.log(result);
      var id = result.id;
      console.log(id);
      $("#pseudo").html(
        "<b><a id='pseudo' href='profil.html'>" + result.name + "</a>"
      );
      $("#niveau").html(result.summonerLevel);
      var iconInvo = "/images/profileicon/" + result.profileIconId + ".png";
      $("#iconInvo").html("<img width='150' src='" + iconInvo + "'>");

      //CHAMPIONS
      $.getJSON(
        "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
          id +
          apiKey,
        function (resultChampion) {
          console.log(resultChampion[0]);

          var champ1;
          var champ2;
          var champ3;

          //DataDragonChampions
          $.getJSON("champ.json", function (resultChampionDD) {
            console.log(resultChampionDD[0].key);

            resultChampionDD.forEach((key) => {
                if (resultChampion[0].championId == resultChampionDD[key].key){
                    champ1 = resultChampionDD[key].id
                }
              });

            for (let i = 0; i < 1; i++) {
              if (resultChampion[0].championId == resultChampionDD[i].key) {
                var champ = resultChampionDD[i].id;
                
              }
              
            }
            console.log(resultChampionDD[0].id)
            console.log(champ);
            $("#champ1").html(
                "<b>" +
                   champ +
                  "<br> Cimier " +
                  resultChampion[0].championLevel +
                  "<br> Points de maitrise: " +
                  resultChampion[0].championPoints
              );
          });

          

          $("#champ2").html("TEST ");

          $("#champ3").html("TEST ");
        }
      );

      //RANK
      $.getJSON(
        "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/n-DtS1LlM1dyxaOln0PU1CMGzB6PbHk9bvYhg5CZ-63MxbM" +
          apiKey,
        function (resultRank) {
          var ranks = 0;
          resultRank.forEach((queueType) => {
            ranks++;
          });

          for (let i = 0; i < ranks; i++) {
            switch (resultRank[i].queueType) {
              case "RANKED_SOLO_5x5":
                //Solo
                switch (resultRank[i].tier) {
                  case "IRON":
                    $("#solo").html(
                      "<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "BRONZE":
                    $("#solo").html(
                      "<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "SILVER":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Silver.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "GOLD":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Gold.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "PLATINUM":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Platinum.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "DIAMOND":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Diamond.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "MASTER":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Master.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "GRANDMASTER":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Grandmaster.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "CHALLENGER":
                    $("#solo").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Challenger.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                }
              case "RANKED_FLEX_SR":
                //Flex
                switch (resultRank[i].tier) {
                  case "BRONZE":
                    $("#flex").html(
                      "<img class='' data-caption='' width='75' src='images/Emblem_Bronze.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "SILVER":
                    $("#flex").html(
                      "<img class='' data-caption='' width='75' src='images/Emblem_Silver.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "GOLD":
                    $("#flex").html(
                      "<img class='' data-caption='' width='75' src='images/Emblem_Gold.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "PLATINUM":
                    $("#flex").html(
                      "<img class='' data-caption='' width='75' src='images/Emblem_Platinum.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "DIAMOND":
                    $("#flex").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Diamond.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "MASTER":
                    $("#flex").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Master.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "GRANDMASTER":
                    $("#flex").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Grandmaster.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "CHALLENGER":
                    $("#flex").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Challenger.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                  case "IRON":
                    $("#flex").html(
                      "<img class='' data-caption='Bon va falloir bosser quoi' width='75' src='images/Emblem_Iron.png'>" +
                        "<br> " +
                        resultRank[i].rank +
                        " - " +
                        resultRank[i].leaguePoints +
                        "LP" +
                        "<br>" +
                        "W" +
                        resultRank[i].wins +
                        " / L" +
                        resultRank[i].losses +
                        "<br> Winrate: " +
                        Math.round(
                          (resultRank[i].wins * 100) /
                            (resultRank[i].wins + resultRank[i].losses)
                        ) +
                        "%"
                    );
                    break;
                }
            }
          }
        }
      );
    }
  );
});
