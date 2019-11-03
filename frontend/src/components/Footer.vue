<template>
  <div class="footer-wrapper">
    <div class="powered">Powered by</div>
    <img id="footer-logo" src="../assets/engie_solid.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 20px;
}

.powered {
  font-size: 0.75em;
  font-weight: bold;
  margin-right: 5px;
}

#footer-logo {
  height: 2rem;
}
</style>
