function copyCoupon() {
    var promoCode = document.querySelector(".promo-code");
    var tempInput = document.createElement("input");
    tempInput.value = promoCode.textContent.trim();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("تم نسخ الكوبون بنجاح! يمكنك الانتقال إلى صفحة التسوق.");
    window.location.href = "https://tasawoqplus.easy-orders.net/"; // تغيير الرابط إلى الرابط الفعلي الذي تريد توجيه المستخدمين إليه بعد الانتهاء من النسخ
}
