const {createApp} = Vue;

createApp({
  data(){
    return{
      isLoaded: null,
      emails:[],
      nEmails: 10,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods:{
    getEmails(){
      this.isLoaded = false;
      this.emails=[];
      for (let i = 0; i < this.nEmails; i++) {
        axios.get(this.apiUrl)
        .then(result => {
        this.emails.push(result.data.response);
      })
      }
      this.isLoaded= true;
    },
    deleteEmails(){
      this.emails=[];
      this.isLoaded = null;
    }
  },
}).mount('#app')