<template lang="">
  <div class="home">
    <Dashbox
      v-for="(dashbox, index) in dashboxs"
      :key="index"
      :dashbox="dashbox"
      @show-contextmenu="showContextMenu"
    >
    </Dashbox>
    <ContextMenu :show="contextMenuVisible" :offset="contextMenuOffset" @update:show="e => contextMenuVisible = e">
      <div style="background: #aaa">
        <div>复制</div>
        <div>粘贴</div>
        <div>剪切</div>
      </div>
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
      ],
      contextMenuOffset: {
        left: 0,
        top: 0
      }
    };
  },
  methods: {
    showContextMenu(e) {
      console.log(e)
      e.preventDefault();
      this.contextMenuVisible = true;
      // clientY 距离浏览器的宽度, pageY 实际宽度
      this.contextMenuOffset = {
        left: e.clientX,
        top: e.clientY
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 1000px;
  overflow: auto;
}
</style>
