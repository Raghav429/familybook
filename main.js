var images_Array = ["father.jpg",
"mother.jfif",
"sister.jpg",
"brother.jfif"];

    function Next() {
        min = 0;
        max = images_Array.length - 1;
        currentId =  Math.floor(min + Math.random()*(max + 1 - min));
        document.getElementById("current_image").src =images_Array[currentId] ;
    console.log (images_Array[currentId],currentId);
      }
