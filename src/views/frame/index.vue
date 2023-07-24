<template>
  <div class="frame-layout-content">
    <el-container>
      <el-aside>
        <div class="user-logo">
          <img
            src="https://img0.baidu.com/it/u=3558576555,2215029945&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
          />
        </div>
        <el-menu
          :default-active="leftMenuActive"
          :router="true"
          :unique-opened="true"
          :collapse="isCollapse"
        >
          <menuComponent :menuData="leftMenuListData"></menuComponent>
        </el-menu>
      </el-aside>
      <el-container class="el-container-right">
        <el-header ref="elHeaderRef">
          <div class="top-menu">
            <el-menu
              v-if="topMenu"
              :default-active="topMenuActive"
              mode="horizontal"
              :router="true"
              :unique-opened="true"
            >
              <el-menu-item
                v-for="subMenuItem in allMenuListData"
                :key="subMenuItem.path"
                :index="subMenuItem.path"
                :route="subMenuItem"
              >
                <el-icon v-if="subMenuItem.meta.icon">
                  <component :is="subMenuItem.meta.icon"></component>
                </el-icon>
                <span>{{ subMenuItem.meta.title }}</span>
              </el-menu-item>
            </el-menu>
            <div v-else class="fold-expand">
              <el-icon @click="isCollapseHandler">
                <Expand v-if="isCollapse" /><Fold v-else />
              </el-icon>
            </div>
          </div>
          <div class="user-setting">
            <el-icon
              @click="toggleFullscreen"
              :class="{ 'in-use': isFullscreen }"
            >
              <FullScreen />
            </el-icon>
            <el-divider direction="vertical" />
            <el-switch
              :model-value="isDark"
              inline-prompt
              :active-icon="Moon"
              :inactive-icon="Sunny"
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
          <el-breadcrumb v-if="breadcrumb">
            <template v-for="item in routerMatched" :key="item.path">
              <el-breadcrumb-item v-if="item.meta && item.meta.title">
                {{ item.meta.title }}
              </el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </el-header>
        <el-main class="el-card is-always-shadow" id="elMainId">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { Sunny, Moon } from "@element-plus/icons-vue";
// import {
//   useDark,
//   useToggle,
//   useFullscreen,
//   useElementVisibility,
// } from "@vueuse/core";
import { defineAsyncComponent } from "@vue/runtime-dom";
import StoreIndex from "@/store/index";
// 路由
const router = useRouter();
// 计算属性路由
const routerMatched = computed(() => router.currentRoute.value.matched);
// 懒加载菜单组件
const menuComponent = defineAsyncComponent(
  () => import("@/views/frame/menuComponent.vue")
);
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
// 是否开启顶部菜单配置，在env文件中进行配置
const topMenu = import.meta.env.VITE_APP_TOP_MENU == "true";
const breadcrumb = import.meta.env.VITE_APP_BREADCRUMB == "true";
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
// 所有菜单展示数据，顶部菜单时需要
const allMenuListData = ref();
// 左侧菜单展示数据，只有左侧菜单需要
const leftMenuListData = computed(() => {
  if (allMenuListData.value) {
    if (topMenu) {
      let findMenuListData = allMenuListData.value.find(
        (item: any) => topMenuActive.value == item.path
      );
      if (
        findMenuListData &&
        findMenuListData.children &&
        findMenuListData.children.length
      )
        return findMenuListData.children;
    } else return allMenuListData.value;
  } else return [];
});
// 模拟接口返回的菜单数据
import("../../routes/routersData").then(
  (res) => (allMenuListData.value = res.default)
);
// 下拉菜单点击事件
const dropdownItemClick = (type: number) => {
  if (type == 0) {
    const storeIndex = StoreIndex();
    storeIndex.$reset();
    router.push("/login");
  }
};
// 菜单是否折叠处理
const isCollapse = ref();
const isCollapseHandler = () => {
  isCollapse.value = !isCollapse.value;
  if (isCollapse.value)
    document.documentElement.style.setProperty("--el-aside-width", "64px");
  else document.documentElement.style.setProperty("--el-aside-width", "200px");
};
// 全屏事件处理
const { toggle: toggleFullscreen, isFullscreen } = useFullscreen();
// 顶部是否状态显示处理
const elHeaderRef = ref();
const elHeaderRefIsVisible = useElementVisibility(elHeaderRef);
</script>
<style lang="scss" scoped>
$el-header-height: var(--el-header-height);
$el-aside-width: var(--el-aside-width);
$border-color: var(--el-border-color);
$content-container-background: var(--el-bg-color-overlay);
$transition: all 0.2s;
.frame-layout-content {
  width: 100%;
  // height: 100%;
  :deep .el-menu {
    transition: $transition;
  }
  .el-aside {
    width: $el-aside-width;
    height: 100vh;
    overflow-x: hidden;
    border-right: solid 1px $border-color;
    background-color: $content-container-background;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: $transition;
    .user-logo {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: $el-aside-width;
      box-sizing: border-box;
      img {
        width: $el-aside-width;
        object-fit: scale-down;
        user-select: none;
        -webkit-user-drag: none;
      }
    }
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
  .el-container-right {
    padding: 0 0 0 calc($el-aside-width);
    transition: $transition;
    .el-header {
      // background-image: radial-gradient(transparent 1px, #fff 1px);
      // background-size: 4px 4px;
      padding: 0 20px 0 0;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      border-bottom: solid 1px $border-color;
      background-color: $content-container-background;

      .top-menu {
        display: inline-block;
        width: calc(100% - 300px);
        min-width: 300px;
        height: $el-header-height;
        vertical-align: top;
        .el-menu--horizontal {
          border-bottom: none;
        }
        .fold-expand {
          margin: 18px 0 0 20px;
          font-size: 24px;
          display: inline-block;
        }
      }
      .user-setting {
        width: 300px;
        height: $el-header-height;
        display: inline-flex;
        justify-content: end;
        align-items: center;
        // box-sizing: border-box;
        // border-bottom: solid 1px var(--el-border-color);
        .el-switch {
          // --el-switch-on-color: var(--el-text-color-regular);
          // --el-switch-off-color: var(--el-text-color-regular);
          :deep .is-icon {
            color: var(--el-text-color-primary);
          }
        }
      }
      .el-breadcrumb {
        margin-left: 20px;
        height: 36px;
        line-height: 36px;
        // border: 1px solid var(--el-border-color-light);
      }
    }

    .el-main {
      box-sizing: border-box;
      margin: 20px;
      min-height: 790px;
    }
  }
}
</style>
