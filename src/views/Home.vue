<template>
  <div class="scanner-container">
    <div class="header">
      <h1>Student Scan</h1>
    </div>
    <v-quagga class="scanner-window" v-if="showScanner" :onDetected="logIt" :readerSize="readerSize" :readerTypes="['code_128_reader', 'code_39_reader']"></v-quagga>
    <transition name="fade-up">
      <button v-if="showScanner" type="button" class="cancel" @click="showScanner = false">CANCEL</button>
    </transition>
    <img class="logo" src="../assets/transmedia_logo.png" alt="logo">
    <transition name="fade-up">
      <i class="material-icons instruction-icon" v-if="!showScanner"> recent_actors </i>
    </transition>
    <transition name="fade-up">
      <p class="instructions" v-if="!showScanner">Click the scan button below to start, present a student code to see their portfolio.</p>
    </transition>
    <form class="scan-form">
         <div class="input-field">
             <input id="isbn_input" class="isbn" type="text" v-model="barcode" readonly />
             <transition name="fade-up">
               <button type="button" v-if="!showScanner" class="icon-barcode button scan" @click="showScanner = true">SCAN</button>
             </transition>
         </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      showScanner: false,
      loaded: false,
      barcode: '',
      readerSize: {
       width: 600,
       height: 400
     },
     detecteds: [],
    }
  },
  methods:{
    logIt (data) {
      const vm = this;
      vm.showScanner = false;
      vm.barcode = data.codeResult.code;
      vm.openViewer();
    },

    openViewer(){
      const vm = this;
      this.$router.push({ name: 'student', params: {id: vm.barcode }});
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  .header{
    height: 10vh;
    width: 96%;
    padding: 2%;
    font-weight: 2em;
  }

  .header h1{
    font-size: 3em;
    font-weight: 200;
    letter-spacing: 5px;
    text-shadow: 0px 0px 5px #FFF;
  }
  .scan-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 980;
  }
  .instructions{
    width: 40%;
    margin: 40px 30% 0% 30%;
    font-size: 2em;
  }

  .instruction-icon{
    color: #FFF;
    text-shadow: 0px 0px 10px  #59C6F2;
    font-size: 8em !important;
    text-align: center;
  }

  .isbn{
    font-size: 3em;
    background-color: rgba(0,0,0,0);
    color: #FFF;
    text-shadow: 0px 0px 5px #FFF;
    border: none;
    text-align: center;
  }

  .scan{
    margin-top: 300px;
    padding: 20px 70px;
    background-color: #59C6F2;
    box-shadow: 1px 1px 5px #FFF;
    border: none;
    outline: none;
    color: #FFF;
    font-size: 2em;
    border-radius: 10px;
    cursor: pointer;
    animation: button 1s;
    transition: 0.2s;
  }

  .scan:hover{
    background-color: #FFF;
    box-shadow: 1px 1px 5px  #59C6F2;
    color: #59C6F2;
    transition: 0.2s;
  }

  .cancel{
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 70px;
    background-color: #59C6F2;
    box-shadow: 1px 1px 5px #FFF;
    border: none;
    outline: none;
    color: #FFF;
    font-size: 2em;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
    z-index: 999;
  }

  .cancel:hover{
    background-color: #FFF;
    box-shadow: 1px 1px 5px  #59C6F2;
    color: #59C6F2;
    transition: 0.2s;
  }

  .logo{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.1;
    width: 30%;
  }

  .scanner-window{
    margin: -20px 30% 0px 30%;
    z-index: 999;
  }

  .scanner-window video{
    border: 5px solid #59C6F2;
    box-shadow: 1px 1px 10px #FFF;
    animation: glowing 2s infinite;
  }

  .fade-up-leave-active,
  .fade-up-enter-active {
    transition: 0.6s;
  }
  .fade-up-enter,
  .fade-up-leave-to {
    opacity: 0;
  }

  @keyframes glowing{
    0%{
      box-shadow: 1px 1px 5px #FFF;
      border: 5px solid #14546e;
    }
    50%{
      border: 5px solid #59C6F2;
      box-shadow: 1px 1px 10px #FFF;
    }
    100%{
      box-shadow: 1px 1px 5px #FFF;
      border: 5px solid #14546e;
    }
  }

  @keyframes button{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }



</style>
