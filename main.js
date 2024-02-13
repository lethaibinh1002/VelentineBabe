
// Thay đổi nội dung búc thư ở đây
var letterContent = "Chào em bé của anh !!! Năm đầu tiên anh được đón Valentine với em, năm mà chúng ta không được gần bên nhau để trao nhau những lời yêu thương. Qua đây thì anh muốn chúc em bé của anh có mùa Valentine thật là vui vẻ, mãi mãi cute đáng yêu nha ❤️. Mong sao cho chúng ta sẽ bớt cãi nhau hơn, anh sẽ nhường nhịn em nhiều hơn, luôn đứng ra nhận sai những lỗi lầm dù nhỏ hay to, trước đây anh khiến em phải khóc nhiều, phải bỏ em một mình mỗi lúc mình cãi nhau thì do anh quá vô tâm không nghĩ ngợi tới em. Qua năm mới cũng là Valentine đầu tiên của chúng mình thì anh sẽ thay đổi bản thân để phù hợp với em hơn, yêu thương em nhiều hơn, luôn mang đến cho em nhiều tiếng cười và lúc nào cũng bên cạnh của em ❤️ Cùng cố gắng để có chúng ta sau này... Yêu em bé của anh ❤️ "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})