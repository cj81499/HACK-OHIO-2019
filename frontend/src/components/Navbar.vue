<template>
  <div>
    <ul id="nav-bar">
      <li v-for="link in links" v-bind:key="link.title">
        <a href="#" v-bind:class="{active: link.isActive}">{{ link.title }}</a>
      </li>
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

<style scoped lang="scss">

a {
  font-size: 1.25em;
  transition: all 0.2s ease-in;
  color: #999;
  cursor: default;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 2em 0 1em 0;
}

li {
  display: inline;

  &:not(:last-child)::after {
    content: "|";
    margin: 0 30px;
    font-weight: bold;
    color: #404040;
  }
}

.active {
  color: inherit;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: #ccc;
  }
}
</style>
