// document.getElementById('btn').addEventListener('mouseover' , function(){
//     console.log('Clickend')
// })

// document.getElementById('btn').addEventListener('mousemove' , function(){
//     console.log('Clickend')
// })


// document.getElementById('input-text').addEventListener('focus' , function(){
//     console.log('user about to write name')
// })


// document.getElementById('input-email').addEventListener('focus' , function(){
//     console.log('user about to write email')
// })


// document.getElementById('input-email').addEventListener('keydown' , function(e){
//     console.log('Typing...',e.target.value)
// })

document.getElementById('input-email').addEventListener('keyup' , function(e){
    console.log('Typing...',e.target.value)
})