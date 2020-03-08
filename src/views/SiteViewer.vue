<template>
  <div class="site-viewer-page">
    <transition name="slide-down">
      <div class="site-viewer-header" v-if="loaded">
        <i class="material-icons back-icon" @click="home"> backspace </i>
        <h1 class="info">{{student.firstname}} {{student.lastname}} | {{student.year}} Year {{student.discipline}}</h1>
      </div>
    </transition>
    <transition name="fade">
      <Loader v-if="!loaded && errors.length < 1"></Loader>
    </transition>
    <transition name="fade">
      <iframe v-if="loaded" class="website" :src="student.portfolio"></iframe>
    </transition>
    <transition name="fade">
      <div class="errors" v-if="errors.length > 0">
        Failed to load student
        <p v-for="(error, index) in errors" v-bind:key="index">{{error}}</p><br><br><br><br>
        <div class="retry" @click="getStudent">RETRY</div><br>
        <div class="retry" @click="home">BACK</div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default{
  props: ['id'],
  data(){
    return{
      loaded: false,
      student: {},
      errors: [],
    }
  },
  components:{
    Loader,
  },
  created(){
    const vm = this;
    if (vm.id == undefined) {
      vm.$router.push("/");
    }
    else {
      vm.getStudent();
    }
  },
  methods:{
    home(){
      this.$router.push('/');
    },
    getStudent(){
      const vm = this;
      vm.loaded = false;
      vm.errors = [];
      axios.get(`http://www.transmedia2020.co.uk/api/${vm.id}/?format=json`)
      .then(function (response) {
          if (response.data == null) {
            vm.errors.push('Student not found');
            vm.loaded = false;
          }
          else{
            vm.student = response.data;
            vm.loaded = true;
          }
          }).catch(function (error) {
          vm.student = {
            firstname: '',
            lastname: '',
            porfolio: '',
            year: '',
            discipline: '',
          };
          vm.errors.push(error);
          vm.loaded = false;
        })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.site-viewer-page{
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.site-viewer-header{
  width: 100%;
  height: 10vh;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #59C6F2;
  box-shadow: 0px 2px 10px #FFF;
}

.website{
  width: 100%;
  height: 90vh;
  position: absolute;
  left: 0;
  bottom: 10vh;
  outline: none;
  border: none;
}

.info{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-weight: 200;
}

.back-icon{
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  cursor: pointer;
}

.back-icon::after{
  content: 'BACK';
  position: absolute;
  left: 40px;
  font-family: 'Roboto', sans-serif;
}

.errors{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  text-shadow: 0px 2px 10px #FF0000;
}

.retry{
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
  text-shadow: none;
}

.retry:hover{
  background-color: #FFF;
  box-shadow: 1px 1px 5px  #59C6F2;
  color: #59C6F2;
  transition: 0.2s;
}

.slide-down-leave-active,
.slide-down-enter-active {
  transition: 0.6s;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translate(0%, 100%);
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
