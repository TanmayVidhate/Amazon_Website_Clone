// gsap.from(".nav-one",{
//     opacity:0,
//     duration:2,
//     y:20
// })

// gsap.from(".nav-two",{
//     opacity:0,
//     duration:2,
//     y:20
// })

// gsap.from(".content",{
//     opacity:0,
//     duration:2,
//     y:30
// })

var tl = gsap.timeline();

tl
    .from('.nav-one', {
        delay:1,
        opacity: 0,
        // y: 10,
        scale:1.1,
        duration: 1
    })
    
    .from(".nav-two",{
        opacity: 0,
        scale:1.1,
        // y: 10,
        duration: 1,
    })
    
    .from(".content",{
        opacity:0,
        y:3,
        duration:1
    })