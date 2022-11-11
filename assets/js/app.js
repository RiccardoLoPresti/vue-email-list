const {createApp} = Vue;

createApp({
  data(){
    return{
      emails:[],
      nEmails: 10,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods:{
    getApi(){
      for (let i = 0; i < this.nEmails; i++) {
        axios.get(this.apiUrl)
        .then(result => {
        this.emails.push(result.data.response);
        console.log(this.emails);
      })
      }
    }
  },
  mounted(){
    this.getApi();
  }
}).mount('#app')