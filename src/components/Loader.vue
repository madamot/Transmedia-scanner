<template>
  <div class="loader">
    <img src="../assets/transmedia_logo.png" alt="loading...">
  </div>
</template>

<style>
.loader{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
}

.loader img{
  width: 100%;
  height: 100%;
  animation: flash 1s infinite ease-in;
}

@keyframes flash{
  0%{
    opacity: 0.5;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0.5;
  }
}

</style>
