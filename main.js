var images_Array = ["images/father.jpg",
"images/mother.jfif",
"images/sister.jpg",
"images/brother.jfif"];

    function Next() {
        min = 0;
        max = images_Array.length - 1;
        currentId =  Math.floor(min + Math.random()*(max + 1 - min));
        document.getElementById("current_image").src =images_Array[currentId] ;
    console.log (images_Array[currentId],currentId);
      }
