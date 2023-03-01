<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="max-height: 400px">
    <div class="carousel-item active" data-bs-interval="5000">
        <img src="https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png" class="d-block w-100 p-5 "  alt="...">
  
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png" class="d-block w-100 p-5  " alt="...">
    
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png" class="d-block w-100 p-5 " alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://cdn.discordapp.com/attachments/959359393776959553/1080179282082537513/9786161850883L.png" class="d-block w-100 p-5 " alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>

export default {
name: 'EventBar',
}
</script>
<style>

.carousel-inner > .item {
   height: 400px;
}
</style>
