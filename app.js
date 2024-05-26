let i = 1
 setInterval(()=>{
    let imggge=document.getElementById('image')

 let slide= Math.ceil(Math.random()*3)
    imggge.src= `./images/img${slide}.jpeg`

    imggge.src= `./images/img${i}.jpeg`
     i = i + 1
     if (i > 3) {
         i = 1
     }

     let red=Math.ceil(Math.random()*255)
     let white=Math.ceil(Math.random()*255)
     let blue=Math.ceil(Math.random()*255)
    
     let color=document.getElementById("black")
    
     color.style.background=`rgb(${red}, ${white}, ${blue})`

 },1000)