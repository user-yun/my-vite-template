<template>
  <div class="frame-layout-content">
    <el-container>
      <el-header>
        <div class="user-logo">
          <img
            src="https://img0.baidu.com/it/u=3558576555,2215029945&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
          />
        </div>
        <div class="top-menu">
          <el-menu
            v-if="topMenu"
            :default-active="topMenuActive"
            mode="horizontal"
            :router="true"
            :unique-opened="true"
            @select="topMenuSelect"
          >
            <el-menu-item
              v-for="subMenuItem in allMenuListData"
              :key="subMenuItem.path"
              :index="subMenuItem.path"
              :route="subMenuItem"
            >
              <el-icon v-if="subMenuItem.icon">
                <component :is="subMenuItem.icon"></component>
              </el-icon>
              <span>{{ subMenuItem.title }}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="user-setting">
          <el-switch
            :model-value="isDark"
            inline-prompt
            :active-icon="Sunny"
            :inactive-icon="Moon"
            @change="switchChange"
          />
          <el-divider direction="vertical" />
          <span>系统管理员</span>
          <el-divider direction="vertical" />
          <el-dropdown>
            <el-avatar>系</el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="dropdownItemClick(0)"
                  >退出</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="leftMenuActive"
            :router="true"
            :unique-opened="true"
          >
            <menuComponent :menuData="leftMenuListData"></menuComponent>
          </el-menu>
        </el-aside>
        <el-main class="el-card is-always-shadow">
          <el-breadcrumb>
            <template v-for="item in routerMatched" :key="item.path">
              <el-breadcrumb-item v-if="item.meta && item.meta.title">
                {{ item.meta.title }}
              </el-breadcrumb-item>
            </template>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";
import { defineAsyncComponent } from "@vue/runtime-dom";
import StoreIndex from "@/store/index";
const router = useRouter();
const routerMatched = computed(() => router.currentRoute.value.matched);
// 切换黑夜模式
const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
const switchChange = () => {
  toggleDark();
  // document.getElementsByTagName("html")[0].className = "light"
};
// 懒加载菜单组件
const menuComponent = defineAsyncComponent(
  () => import("@/views/frame/menuComponent.vue")
);
// 是否开启顶部菜单配置，在env文件中进行配置
const topMenu = import.meta.env.VITE_APP_TOP_MENU == "true";
// 处理左侧菜单默认选中样式
const leftMenuActive = computed(() => {
  const router = useRouter().currentRoute.value;
  return (
    router.meta && router.meta.leftMenu ? router.meta.leftMenu : router.path
  ) as string;
});
// 处理顶部菜单默认选中样式
const topMenuActive = computed(() => {
  const router = useRouter().currentRoute.value;
  return (
    router.meta && router.meta.topMenu ? router.meta.topMenu : router.path
  ) as string;
});
const allMenuListData = ref();
const leftMenuListData = ref();
// 模拟接口返回的菜单数据
import("./MenusData").then((res) => {
  if (topMenu) {
    allMenuListData.value = res.default;
    let findMenuListData = allMenuListData.value.find((item: any) => {
      return topMenuActive.value == item.path;
    });
    if (
      findMenuListData &&
      findMenuListData.children &&
      findMenuListData.children.length
    ) {
      leftMenuListData.value = findMenuListData.children;
    }
  } else {
    leftMenuListData.value = res.default;
  }
});
// 启用顶部菜单时，需要根据顶部菜单重新渲染左侧菜单
const topMenuSelect = (index: string, indexPath: string[], item: any) => {
  if (item && item.route && item.route.children) {
    leftMenuListData.value = item.route.children;
  }
};
// 下拉菜单点击事件
const dropdownItemClick = (type: number) => {
  if (type == 0) {
    const storeIndex = StoreIndex();
    storeIndex.$reset();
    router.push("/login");
  }
};
</script>
<style lang="scss" scoped>
$top-height: 60px;
$left-width: 200px;
$border-color: var(--el-border-color);
$root-background: var(--el-bg-color-overlay);
.frame-layout-content {
  width: 1920px;
  // .el-container {
  // }
  .el-header {
    // background-image: radial-gradient(transparent 1px, #fff 1px);
    // background-size: 4px 4px;
    height: $top-height;
    width: 100%;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom: solid 1px $border-color;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    z-index: 2;
    background-color: $root-background;
    .user-logo {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: $left-width;
      height: $top-height;
      box-sizing: border-box;
      border-right: solid 1px var(--el-border-color);
      img {
        width: $left-width;
        height: $top-height;
        object-fit: scale-down;
        user-select: none;
        -webkit-user-drag: none;
      }
    }
    .top-menu {
      display: inline-flex;
      flex: 1;
      flex-direction: column;
      .el-menu--horizontal {
        flex: 1;
        // height: $top-height / 2;
        border-bottom: none;
      }
    }
    .user-setting {
      display: inline-flex;
      justify-content: end;
      padding-right: 20px;
      align-items: center;
      width: $left-width;
      height: $top-height;
      // box-sizing: border-box;
      // border-bottom: solid 1px var(--el-border-color);
      border-bottom: none;
    }
  }
  .el-aside {
    width: $left-width;
    position: fixed;
    z-index: 2;
    left: 0;
    top: $top-height;
    height: calc(100% - $top-height);
    overflow-x: hidden;
    border-right: solid 1px $border-color;
    background-color: $root-background;
    .el-menu {
      border-right: none;
    }
    // background-color: #fff;
    &::-webkit-scrollbar {
      width: 8px;
      display: none;
    }
    &:hover {
      &::-webkit-scrollbar {
        display: block;
      }
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.06);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: $border-color;
    }
  }
  .el-main {
    margin: $top-height + 20px 20px 20px $left-width + 20px;
    min-height: calc(100vh - $top-height - 40px);
    // position: relative;
    // z-index: 1;
    .el-breadcrumb {
      margin-bottom: 20px;
      // border: 1px solid var(--el-border-color-light);
    }
  }
}
</style>
