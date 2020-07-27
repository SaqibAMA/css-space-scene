$(()=>{

    // Gets called when the document
    // is all loaded up



    // Generates all the stars in the scene
    for (var i = 0; i < 300; i++) {

        var starSize = Math.random() * 5;
        var starPosX = Math.random() * 500;
        var starPosY = Math.random() * 500;

        var star = "<div class=\"star\" style=\"width:"+ starSize +"px; height:" + starSize + "px; margin: " + starPosX +"px 0px 0px "+ starPosY + "px; filter: brightness(" + 90 * (starSize / 5) + "%) \"></div>";

        $('#scene').append(star);

    }

    for (var i = 0; i < 3; i++) {



        var craterSize = Math.random() * 5 + 10;
        var craterPosX = Math.random() * 100 + Math.random() * 50 + 100;
        var craterPosY = Math.random() * 100 + Math.random() * 50 + 100;


        var craterCode = '<div class="craterShadow" style="width: ' + craterSize + 'px; height:' + craterSize + 'px; transform: translate(' + craterPosX + "px, " + craterPosY + 'px)"><div class="crater"></div></div>';


        $('#planet').append(craterCode);


    }



});