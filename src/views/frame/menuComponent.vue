<template v-if="menuData && menuData.length">
  <template v-for="subMenuItem in menuData" :key="subMenuItem.path">
    <el-sub-menu
      v-if="subMenuItem.children && subMenuItem.children.length > 0"
      :index="subMenuItem.path"
    >
      <template #title>
        <el-icon v-if="subMenuItem.meta.icon">
          <component :is="subMenuItem.meta.icon"></component>
        </el-icon>
        <span>{{ subMenuItem.meta.title }}</span>
      </template>
      <menuComponent :menuData="subMenuItem.children"></menuComponent>
    </el-sub-menu>
    <el-menu-item v-else :index="subMenuItem.path" :route="subMenuItem">
      <el-icon v-if="subMenuItem.meta.icon">
        <component :is="subMenuItem.meta.icon"></component>
      </el-icon>
      <span>{{ subMenuItem.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
interface MENUDATAINT {
  path: string;
  name?: string;
  component?: string;
  meta: {
    title?: string;
    icon?: string;
  };
  children?: MENUDATAINT[];
}
interface PROPSINT {
  menuData: MENUDATAINT[];
}
const props = withDefaults(defineProps<PROPSINT>(), {});
</script>

<style lang="scss" scoped></style>
