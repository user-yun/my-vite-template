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
      <el-container class="el-container-right" id="elContainerRight">
        <el-header>
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
        <el-main class="el-card is-always-shadow">
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
import { useFullscreen } from "@vueuse/core";
const { toggle: toggleFullscreen, isFullscreen } = useFullscreen();
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
const isCollapse = ref();
const elContainerRight = ref();
const isCollapseHandler = () => {
  isCollapse.value = !isCollapse.value;
  if (isCollapse.value) {
    document.documentElement.style.setProperty("--el-aside-width", "64px");
  } else {
    document.documentElement.style.setProperty("--el-aside-width", "200px");
  }
};
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
          font-size: 24px;
          display: inline-block;
          margin: 18px 0 0 20px;
          cursor: pointer;
          &:hover {
            color: var(--el-color-primary);
          }
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
    }
  }
}
</style>
