function homepageAni() {
    gsap.set("#marq", { scale: 5 })


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin:true
        }
    })

    tl.to(".vdodiv", {
        '--clip': "1%",
        ease: Power2,
    }, "a")

    tl.to(".vdodiv", {
        opacity: 0,
        ease: Power2,
    }, "b")
    tl.to("#marq", {
        scale: 0.7,
        ease: Power2
    }, "a")
    tl.to("#rows1", {
        x: 150
    }, "b")
    tl.to("#rows2", {
        x: -300
    }, "b")
    tl.to("#rows3", {
        x: 450
    }, "b")
    tl.to("#rows4", {
        x: -150
    }, "b")

}
homepageAni();

gsap.to(".scrollcont",{
    scrollTrigger:{
        trigger:".scrollcont",
        start:"top top",
        end:"bottom bottom",
        scrub:0.1,
    },
    ease:Power2,
    xPercent:-200
})
document.querySelectorAll(".section").forEach(function(el){
    ScrollTrigger.create({
        trigger:el,
        start:"top top",
        end:"bottom bottom",
        onEnter:function(){
            document.body.setAttribute("theme",el.dataset.color)
        },
        onEnterBack : function(){
            document.body.setAttribute("theme",el.dataset.color)
        }
    })
})

// document.querySelectorAll(".cards").forEach(function(e){
// var uu = gsap.timeline({
//         scrollTrigger:{
//             trigger:"#card",
//             start:"50% 60%",
//             end:"95% 25%",
//             scrub:0.1,
//         }
    
// })
// uu.from(e,{
//     stagger:8,
//     ease:Power2,
//     y:600,
//     opacity:0
    
// },)
        
// })

function cardsanim(){
    var ll = gsap.timeline({
        scrollTrigger:{
        trigger:"#card",
        start:"40% 60%",
        end:"80% 25%",
        scrub:0.1,
      }
    
    })
    var qq = gsap.timeline({
        scrollTrigger:{
        trigger:"#card",
        start:"35% 60%",
        end:"85% 25%",
        scrub:0.1,
      }
    })
    
    ll.from(".cards",{
        y:150,
        stagger:0.2,
    })
    qq.to(".cards",{
        stagger:0.2,
        backgroundColor:"black",
        color:"#aedee0",
        width:"75%"
        
    },"b")
}


cardsanim();

