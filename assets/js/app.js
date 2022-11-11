const {createApp} = Vue;

createApp({
  data(){
    return{
      isLoaded: false,
      emails:[],
      nEmails: 10,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods:{
    getApi(){
      this.isLoaded = false;
      for (let i = 0; i < this.nEmails; i++) {
        axios.get(this.apiUrl)
        .then(result => {
        this.emails.push(result.data.response);
      })
      }
      this.isLoaded= true;
    }
  },
  mounted(){
    this.getApi();
  }
}).mount('#app')