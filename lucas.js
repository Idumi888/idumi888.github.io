var apiKey = "?api_key=RGAPI-cd31a2b3-2868-4096-ba9c-a3d4adef30df";

$(document).ready(function () {

    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Get%20clownedd" +
        apiKey,
      function (result) {
        console.log(result);
        console.log(result.id);
        var id = result.id;
        $("#pseudo3").html("<b>" + result.name);
        $("#niveau3").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            id +
            apiKey,
          function (resultRank) {
            console.log(resultRank[0].tier);
            console.log(resultRank[1].tier);
            console.log(resultRank[2].tier);

            for (let i = 0; i < 3; i++) {
              switch (resultRank[i].queueType) {
                case "RANKED_FLEX_SR":
                  //Flex
                  switch (resultRank[i].tier) {
                    case "BRONZE":
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#flex3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
                      $("#solo3").html(
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
