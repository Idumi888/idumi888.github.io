var apiKey = "?api_key=RGAPI-c685d105-fb9c-4a50-9c67-72c35854b5eb";

$(document).ready(function () {
  $.getJSON(
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ryõmen%20Sukuna" +
      apiKey,
    function (result) {
      var id = result.id;
      $("#pseudo4").html("<b>" + result.name);
      $("#niveau4").html(result.summonerLevel);

      $.getJSON(
        "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
          id +
          apiKey,
        function (resultRank) {
          var ranks = 0;
          resultRank.forEach((queueType) => {
            ranks++;
          });

          for (let i = 0; i < ranks; i++) {
            console.log(resultRank[i].queueType);
            if (resultRank[i].queueType == "RANKED_FLEX_SR") {
              if (resultRank[i].tier == "PLATINIUM") {
                $("#flex4").html(
                  "<img class='' data-caption='' width='100' src='images/Emblem_Platinum.png'>" +
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
              }
            } else if (resultRank[i].queueType == "RANKED_SOLO_5x5") {
              if (resultRank[i].tier == "PLATINIUM") {
                $("#solo4").html(
                  "<img class='' data-caption='' width='100' src='images/Emblem_Platinum.png'>" +
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
              }

              if (resultRank[i].tier == "GOLD") {
                $("#solo4").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
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
            } else {
              if (resultRank[i].queueType == "RANKED_SOLO_5x5") {
                $("#solo4").html("Non Classé");
              }
              if (resultRank[i].queueType == "RANKED_FLEX_SR") {
                $("#flex4").html("Non Classé");
              }
            }
          }
        }
      );

      $.getJSON(
        "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
          id +
          apiKey,
        function (resultRankSolo) {
          var ranks = 0;
          resultRank.forEach((queueType) => {
            ranks++;
          });

          for (let i = 0; i < ranks; i++) {
            if (resultRankSolo[i] == "RANKED_SOLO_5x5") {
              switch (resultRank[i].tier) {
                case "IRON":
                  $("#solo4").html(
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
                  $("#solo4").html(
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
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
                  $("#solo4").html(
                    "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
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

      $.getJSON(
        "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
          id +
          apiKey,
        function (resultRankFlex) {
          var ranks = 0;
          resultRank.forEach((queueType) => {
            ranks++;
          });

          for (let i = 0; i < ranks; i++) {
            if (resultRankFlex[i] == 'RANKED_FLEX_SR'){

                
            }

          }
        }
      );
    }
  );
});
