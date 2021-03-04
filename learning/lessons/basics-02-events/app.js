const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add() {
      this.counter = this.counter +1;
    },
    reduce() {
      this.counter = this.counter -1;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    confirmInput(t) {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
