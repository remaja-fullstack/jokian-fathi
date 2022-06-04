module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'montserrat' : ['Montserrat'],
      },
      colors : {
        'customPurple' : '#5E48E8'
      },
      backgroundImage :{
        'landing' : "url('../src/components/img/coverlanding.png')",
      }
    },
  },
  plugins: [],
}
