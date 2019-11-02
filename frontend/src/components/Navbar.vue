<template>
  <div>
    <h1>The Ohio State University</h1>
    <ul id="nav-bar">
      <li
        v-for="link in links"
        v-bind:key="link.title"
        v-bind:class="{inactive: !link.isActive}"
      >{{ link.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      links: [
        {
          title: "Columbus",
          isActive: true
        },
        {
          title: "Lima",
          isActive: false
        },
        {
          title: "Mansfield",
          isActive: false
        },
        {
          title: "Marion",
          isActive: false
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.3em;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline;
  font-size: 0.8em;
}

li:not(:last-child)::after {
  content: "|";
  margin: 0 30px;
  font-weight: bold;
  color: black;
}

.inactive {
  color: #999;
}
</style>
