    const image = document.querySelector("#image");
    const textLyrics = document.querySelector("#textLyrics");
    const repeat = document.querySelector("#repeat");
    const container = document.querySelector("#container");
    const text = document.querySelector("p");
    const generate = document.querySelector("#generate");
    const body = document.querySelector("body");
    const label = document.querySelector("#label");
    const backBTN = document.getElementById("backBTN"); //
    const Title = document.getElementById("MyTitle");
    const generatedimg = document.getElementById("#generate-pic");
    

    let newImage;
    document;

    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    image.addEventListener("change", () => {
      image.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        newImage = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {

      }
    });

    generate.addEventListener("click", () => {

      let url = URL.createObjectURL(image.files[0]);
      container.style.display = "none";
      backBTN.classList.remove('invisible'); 
      Title.remove();


      body.style.background = "black" ;
      body.style.overflowY = "scroll";
      body.style.fontFamily = "Times New Roman, Times, serif";
      text.style.lineHeight = "8px";
      text.style.background = `url(${url})`;
      text.style.webkitBackgroundClip = "text";
      text.style.webkitTextFillColor = "rgba(255,255,255,0)";
      text.style.fontSize = "11px";
      text.style.textAlign = "justify";
      text.style.backgroundAttachment = "contain";
      text.style.backgroundRepeat = "no-repeat";
      text.style.backgroundSize = "contain";
      text.style.backgroundPosition = "center";
     // text.style.filter = "grayscale(100%)";
      text.innerHTML = textLyrics.value.repeat(repeat.value);

    });



    


