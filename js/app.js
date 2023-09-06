  new Vue({
    el: '#app',
    data: {
      selectedLanguage: 'es',
      isEnglish: false,
      cvUrl: 'pdf/alfredo-leonel-portillo-CV.pdf',
      imageUrl:'images/Leonel.jpg',
      whatsappUrl: 'https://wa.me/541124596312',
      linkedinUrl: 'https://www.linkedin.com/in/alfredo-leonel-portillo-406110261/',
      instagramUrl: 'https://www.instagram.com/leoriera_/',
      githubUrl: 'https://github.com/LeoRie99',
      mailUrl: 'mailto:leonel.riera999@gmail.com?subject=IMPORTANTE',
      proyecto1ImgUrl: 'images/DW-HCB.jpg',
      proyecto1Link: 'https://leorie99.github.io/TVoice/',
      proyecto2ImgUrl: 'images/Mockup-App.png',
      proyecto3ImgUrl: 'images/ecommerce.jpg',
      proyecto3Link: 'https://leorie99.github.io/FinalProgramacion-Ecommerce/',
      proyecto4ImgUrl: 'images/Logo-E-commerce.png',
    },
    
      methods: {
        toggleLanguage: function() {
          this.selectedLanguage = this.isEnglish ? 'en' : 'es';
        }
      }

    });
 