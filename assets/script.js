function showMessage(index) {
    let modal = document.getElementById("messageModal");
    let messageText = document.getElementById("messageText");
  
    let messages = [
        " اینم BMW M5 مشکی عشقم🥰 ",
        " اینم BMW M5 مشکی عشقم🥰 ",
        " اینم BMW M5 مشکی عشقم🥰  "
        
    ];

    messageText.innerText = messages[index];

    modal.classList.add("show");
    modal.querySelector(".modal-content").classList.add("show");

    // بسته شدن خودکار بعد از ۵ ثانیه
    setTimeout(() => {
        modal.classList.add("hide");
        modal.querySelector(".modal-content").classList.add("hide");

        setTimeout(() => {
            modal.classList.remove("show", "hide");
            modal.querySelector(".modal-content").classList.remove("show", "hide");
        }, 500);
    }, 5000);
}

/*

function changeImage() {
    let image = document.getElementById("transformImage");

    // تغییر تصویر به لافراری
    image.src = "images/the horse.jpg";
    image.classList.add("changed");
}
<section class="transform-section">
        <h2>تولد بدون مزرعه هم مگه میشه؟🥰</h2>
        <img id="transformImage" src="images/horse2.jpg" class="transform-box" onclick="changeImage()">
    </section>
*/

document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم


    
    // هدایت کاربر به وبسایت
    window.location.href = "index.html1"; // این لینک رو به مقصد موردنظر تغییر بده
});


function playMusic(audioId) {
    let audio = document.getElementById(audioId);

    // توقف موزیک‌های قبلی
    document.querySelectorAll("audio").forEach(track => {
        track.pause();
        track.currentTime = 0;
    });

    // پخش موزیک جدید
    audio.play();
}

function transformImage(elementId, newImage, originalImage) {
    let image = document.getElementById(elementId);

    // اضافه کردن افکت تغییر
    image.style.transition = "opacity 0.5s ease-in-out";
    image.style.opacity = "0";

    setTimeout(() => {
        // تغییر تصویر به ماشین
        image.src = newImage;
        image.style.opacity = "1";

        // بعد از ۵ ثانیه، بازگشت به تصویر اصلی
        setTimeout(() => {
            image.style.opacity = "0";
            setTimeout(() => {
                image.src = originalImage;
                image.style.opacity = "1";
            }, 500);
        }, 5000);
    }, 500);
}