function buttonUniv()
    {
      var country = document.getElementById("countryInput").value;
      var variety = document.getElementById("varietyInput").value;

      fetch(`http://universities.hipolabs.com/search?name=${variety}&country=${country}`)
      .then((response) => response.json())
      .then((data) => {
        var temp = [];
        for (var x=0; x<data.length; x++){
          var temperory = Math.floor(Math.random()*data.length);
          if(temp.indexOf(temperory)== -1){
            temp.push(temperory);
          }
          else{
            x--;
          }
        }
        var uni1=data[temp[0]].name;
        var uni2=data[temp[1]].name;
        var uni3=data[temp[2]].name;
        var uni4=data[temp[3]].name;
        var uni5=data[temp[4]].name;

        var link1=data[temp[0]].web_pages[0];
        var link2=data[temp[1]].web_pages[0];
        var link3=data[temp[2]].web_pages[0];
        var link4=data[temp[3]].web_pages[0];
        var link5=data[temp[4]].web_pages[0];

        document.querySelector(".uni1").innerText=uni1;
        document.querySelector(".uni2").innerText=uni2;
        document.querySelector(".uni3").innerText=uni3;
        document.querySelector(".uni4").innerText=uni4;
        document.querySelector(".uni5").innerText=uni5;

        document.querySelector(".link1").innerText=link1;
        document.querySelector(".link2").innerText=link2;
        document.querySelector(".link3").innerText=link3;
        document.querySelector(".link4").innerText=link4;
        document.querySelector(".link5").innerText=link5;
      })
    }