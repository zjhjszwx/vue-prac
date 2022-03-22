<template lang="">
  <div class="home">
    <Dashbox
      v-for="(dashbox, index) in dashboxs"
      :key="index"
      :dashbox="dashbox"
      @show-contextmenu="showContextMenu"
    >
    </Dashbox>
    <ContextMenu :show="contextMenuVisible">
      <div>复制</div>
      <div>粘贴</div>
      <div>剪切</div>
    </ContextMenu>
  </div>
</template>
<script>
import Dashbox from "./DashBox.vue";
import ContextMenu from "./ContextMenu.vue";
export default {
  name: "home",
  components: {
    ContextMenu,
    Dashbox,

  },
  data() {
    return {
      contextMenuVisible: false,
      dashboxs: [
        {
          id: 1,
          style: "left:200px;top:200px;width:100px;height:100px",
          content: "test1"
        },
        {
          id: 2,
          style: "left:400px;top:400px;width:100px;height:100px",
          content: "test2"
        }
      ]
    };
  },
  methods: {
    showContextMenu(e) {
      e.preventDefault();
      this.contextMenuVisible = true;
    }
  }
};
</script>
<style lang=""></style>
