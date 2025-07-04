
  (function(){
    emailjs.init("OOmUUbHLUleNsMDvI") // ใส่ public key ที่ได้จาก EmailJS
  })();
  
document.addEventListener('DOMContentLoaded', function () {
  var orderNowBtn = document.querySelector('.btn-getstarted');
  if(orderNowBtn) {
    orderNowBtn.addEventListener('click', function(e){
      e.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById('inquiryModal'));
      modal.show();
    });
  }
  var sendInquiryBtn = document.querySelector('.hero-btns .btn-primary');
  if(sendInquiryBtn) {
    sendInquiryBtn.addEventListener('click', function(e){
      e.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById('inquiryModal'));
      modal.show();
    });
  }
  

  // (Optional) Prevent form submit and show alert
 var inquiryForm = document.getElementById('inquiryForm');
  if(inquiryForm) {
    inquiryForm.addEventListener('submit', function(e){
      e.preventDefault();

      // ส่งข้อมูลไป EmailJS
      emailjs.sendForm('service_ra5gop8', 'template_si8sy0g', inquiryForm)
        .then(function() {
          alert('ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณค่ะ');
          var modal = bootstrap.Modal.getInstance(document.getElementById('inquiryModal'));
          modal.hide();
          inquiryForm.reset();
        }, function(error) {
          alert('เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่');
        });
    });
  }
  
});
document.addEventListener('DOMContentLoaded', function () {
  // ให้ปุ่ม Get Started เปิด inquiry modal
  var getStartedBtn = document.getElementById('getStartedBtn');
  if(getStartedBtn) {
    getStartedBtn.addEventListener('click', function(e){
      e.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById('inquiryModal'));
      modal.show();
    });
  }
  var pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
  pdfLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      console.log('PDF downloaded:', link.getAttribute('href'));
    });
  });
    var contactNavBtn = document.getElementById('contactNavBtn');
  if(contactNavBtn) {
    contactNavBtn.addEventListener('click', function(e){
      e.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById('contactUsModal'));
      modal.show();
    });
  }

});


