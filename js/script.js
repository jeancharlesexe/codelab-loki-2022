const starIcons = document.querySelectorAll('.star-icon');

// document.addEventListener('click', (e) => {

//     var classStart = e.target.classList;

//     if(!classStart.contains('active')){
//         starIcons.forEach((star)=>{
//             star.classList.remove('active');
//         });

//         classStart.add('active')
//     }
// })

//my solution
for(let i=0; i<starIcons.length; i++){
    //each click given,
    starIcons[i].addEventListener('click', (e)=>{
        var listClass = e.target.classList; // capture list of class from that element clicked
        
        if(!listClass.contains('active')){ // if contains active

            // remove all classes which contain active, from each element (reset);
            for(let j=0; j<starIcons.length; j++){
                starIcons[j].classList.remove('active');
            }

            //then in all of 
            listClass.add('active');
        }
    })
}