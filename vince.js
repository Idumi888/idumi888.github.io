var apiKey = "?api_key=RGAPI-2d2da56e-d1af-472d-9a20-3d3cd9fc5ce1";

$(document).ready(function () {
  
    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ch%20Pain%20Perdu" +
        apiKey,
      function (result) {
        console.log(result);
        var id = result.id;
        console.log(id);
        $("#pseudo1").html("<b><a id='pseudo' href='profil.html'>" + result.name + "</a>");
        $("#niveau1").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/n-DtS1LlM1dyxaOln0PU1CMGzB6PbHk9bvYhg5CZ-63MxbM" +
            apiKey,
          function (resultRank) {
            console.log(resultRank[1]);
            console.log(resultRank[1].tier);

            var ranks = 0;
            resultRank.forEach((queueType) => {
              ranks++;
            });

            console.log(ranks);

            for (let i = 0; i < ranks; i++) {
              switch (resultRank[i].queueType) {
                case "RANKED_FLEX_SR":
                  //Flex
                  switch (resultRank[i].tier) {
                    case "BRONZE":
                      $("#flex1").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Bronze.png'>" +
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
                      $("#flex1").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Silver.png'>" +
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
                      $("#flex1").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Gold.png'>" +
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
                      $("#flex1").html(
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
                      break;
                    case "DIAMOND":
                      $("#flex1").html(
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
                      $("#flex1").html(
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
                      $("#flex1").html(
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
                      $("#flex1").html(
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
                    case "IRON":
                      $("#flex1").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" +
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
                case "RANKED_SOLO_5x5":
                  //Solo
                  switch (resultRank[i].tier) {
                    case "IRON":
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
                      $("#solo1").html(
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
      }
    );
  
});
