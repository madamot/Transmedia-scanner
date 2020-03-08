<template>
  <div id="app">
    <vue-particles class="particles"
        color="#59C6F2"
        :particleOpacity="0.3"
        linesColor="#FFF"
        :lineLinked="false"
        :hoverEffect="false"
        :clickEffect="true"
        clickMode="grab"
      >
      </vue-particles>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  background-color: #000;
  height: 100vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 3px;
  font-size: 16px;
}

.particles{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

}

.fade-leave-active,
.fade-enter-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
