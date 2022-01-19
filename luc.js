var apiKey = "?api_key=RGAPI-2d2da56e-d1af-472d-9a20-3d3cd9fc5ce1";

$(document).ready(function () {

    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ryõmen%20Sukuna" +
        apiKey,
      function (result) {
        console.log(result);
        console.log(result.id);
        var id = result.id;
        $("#pseudo4").html("<b>" + result.name);
        $("#niveau4").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            id +
            apiKey,
          function (resultRank) {
            console.log(resultRank[0].tier);
            console.log(resultRank[2].tier);
            console.log(resultRank[2].tier);

            var ranks = 0;
            resultRank.forEach(queueType => {
              ranks++;
              
            });

            
            console.log(ranks)

            for (let i = 0; i < ranks; i++) {
              switch (resultRank[i].queueType) {


                case "RANKED_FLEX_SR":
                  //Flex
                  switch (resultRank[i].tier) {
                    case "BRONZE":
                      $("#flex4").html(
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
                      $("#flex4").html(
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
                      $("#flex4").html(
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
                      break;
                    case "DIAMOND":
                      $("#flex4").html(
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
                      $("#flex4").html(
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
                      $("#flex4").html(
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
                      $("#flex4").html(
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
                      $("#flex4").html(
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
      }
    );

});
