
$(document).ready(function () {
    $("#startPage").css('display', 'block');
    $(".container").css('display', 'none');
    $("#result").css('display', 'none');
    $("#score").css('display', 'none');
})
function hideStartPage() {
    $("#startPage").css('display', 'none');
    $(".container").css('display', 'block');
}
$("#startButton").click(function () {
    hideStartPage();
    $("#restart").css('display', 'none');
    game();
})

let scoreP = 0;
let scoreC = 0;



$(".choice").click(function () {
    let imageSrc = $(this).attr("src");//this ile tıklanan öğenin src bilgisini aldık
    $("#pc").attr("src", imageSrc);//pc(player choice)'ye click event ile aldıgımız imagesrc bilgisini yazdırdık
    //$(".choice").not(this).hide();//choice sınıfına dahil resimlerden birisine tıklanınca diğerlerini gizledik

    $("#restart").css('display', 'block');
    $("#secim").text("Play Again!");

    let choice = ["rock", "paper", "scissors"];//dizi oluşturduk
    let rndChoice = choice[Math.floor(Math.random() * choice.length)];//dizinin içerisinde dizinin uzunlugu ile çarparak rastgele bir dizi numarası aldık random indisteki elemenı rndChoice ye atadık

    $(".choice").hide();//ekranda gözüken imgları sakladık
    $("#cc").attr("src", "images/" + rndChoice + ".png");//cc(computer choice'un image src'sinde gerekli yere diziden çekilen rastgele seçimi yazdırdık)

    let ccR = (rndChoice == "rock")
    let ccP = (rndChoice == "paper")
    let ccS = (rndChoice == "scissors")

    let pcR = imageSrc == "images/rock.png"
    let pcP = imageSrc == "images/paper.png"
    let pcS = imageSrc == "images/scissors.png"

    localStorage.getItem("scoreP");
    localStorage.getItem("scoreC");

    $("#result").css('display', 'block');
    $("#score").css('display', 'block');


    if (pcR && ccR || pcP && ccP || pcS && ccS) {
        $("#result").text("DRAW!");
    }
    else if (pcP && ccR || pcS && ccP || pcR && ccS) {
        $("#result").text("You Win!");
        scoreP++;
    }
    else if (pcS && ccR || pcR && ccP || pcP && ccS) {
        $("#result").text("You Lost!");
        scoreC++;
    }

    $("#score").text(scoreP + ":" + scoreC);
});

$("#restart").click(function () {
    $(".choice").css('display', 'block');
    $("#pc").attr("src", "");
    $("#cc").attr("src", "");
    $("#result").css('display', 'none');
    $("#score").css('display', 'none');
    $("#restart").css('display', 'none');
    localStorage.setItem("scoreP", scoreP);
    localStorage.setItem("scoreC", scoreC);
})

function TryAgain() {
    localStorage.clear();
    location.reload();
}



