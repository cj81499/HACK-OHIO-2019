<template>
  <div class="header">
    <div class="image-wrapper">
      <img src="../assets/logo.svg" alt="ENGIE logo" />
    </div>
    <div class="dropdown-indicator"></div>
    <span class="school-name">The Ohio State University</span>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #00aaff;
  padding: 10px 6.5em;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}

.school-name {
  padding-left: 8px;
  color: white;
  font-size: 1.25em;
  float: right;
}

.image-wrapper {
  flex-grow: 1;
  text-align: left;
}

.dropdown-indicator {
  width: 0; 
  height: 0; 
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.5em solid white;
}

img {
  height: 2.5rem;
}
</style>


