var apiKey = "?api_key=RGAPI-95712264-cff2-467a-9e09-ffed6dfa177c";

$(document).ready(function () {
  $("button").click(function () {
    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ch%20Pain%20Perdu" +
        apiKey,
      function (result) {
        console.log(result);
        var id = result.id;
        console.log(id);
        $("#pseudo1").html("<b>" + result.name);
        $("#niveau1").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/n-DtS1LlM1dyxaOln0PU1CMGzB6PbHk9bvYhg5CZ-63MxbM" +
            apiKey,
          function (resultRank) {
            console.log(resultRank[1]);
            console.log(resultRank[1].tier);
            switch (resultRank[1].tier) {
              case "IRON":
                $("#solo1").html(
                  "<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "BRONZE":
                $("#solo1").html(
                  "<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "SILVER":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "GOLD":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "PLATINUM":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "DIAMOND":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "MASTER":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "GRANDMASTER":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "CHALLENGER":
                $("#solo1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
            }

            switch (resultRank[2].tier) {
              case "BRONZE":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Bronze.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "SILVER":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "GOLD":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "PLATINUM":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "DIAMOND":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "MASTER":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "GRANDMASTER":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "CHALLENGER":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
              case "IRON":
                $("#flex1").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" +
                    "<br> " +
                    resultRank[2].rank +
                    " - " +
                    resultRank[2].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[2].wins +
                    " / L" +
                    resultRank[2].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[2].wins * 100) /
                        (resultRank[2].wins + resultRank[2].losses)
                    ) +
                    "%"
                );
                break;
            }
          }
        );
      }
    );
  });
});
