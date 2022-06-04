module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Sertifikat' : "url('../public/assets/bgsertifikat.png')",
        'Voucher' : "url('../public/assets/siap-kerja.png')",
        'Subscribe' : "url('../public/assets/SUBSCRIBE-bg.png')",
      },

    },
    screens:{
      'xsm':'368px',
      
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      lato : ['Lato']
    }
  },
  plugins: [],

}
