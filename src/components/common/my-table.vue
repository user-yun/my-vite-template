<template>
  <div class="my-table-contnet">
    <el-table :data="tableData" :max-height="height" stripe :row-key="rowKey">
      <slot></slot>
      <template #empty>
        <el-empty description="暂无数据" />
      </template>
    </el-table>
    <el-pagination
      v-model:current-page="refCurrentPage"
      v-model:page-size="refPageSize"
      :page-sizes="pageSizes"
      layout="prev, pager, next, jumper, sizes, total,"
      :total="total"
    />
  </div>
</template>
<script setup lang="ts">
interface PROPSINT {
  tableData?: any;
  rowKey?: any;
  height?: number | string;
  pageSize?: number;
  pageSizes?: number[];
  total?: number;
}
const props = withDefaults(defineProps<PROPSINT>(), {
  pageSize: 10,
  pageSizes: () => [10, 20, 50, 100],
  total: 500,
});
const refCurrentPage = ref(1);
const refPageSize = ref(10);
const emits = defineEmits<{
  (e: "pageChange", val: any): void;
}>();
watch(
  () => refCurrentPage.value,
  () => {
    emits("pageChange", {
      currentPage: refCurrentPage.value,
      pageSize: refPageSize.value,
    });
  },
  { deep: true }
);
watch(
  () => refPageSize.value,
  () => {
    refCurrentPage.value = 1;
  },
  { deep: true }
);
watch(
  () => props.pageSize,
  () => {
    if (props.pageSize && props.pageSize != refPageSize.value) {
      refPageSize.value = props.pageSize;
    }
  },
  { deep: true, immediate: true }
);
</script>
<style lang="scss" scoped>
.my-table-contnet {
  height: 100%;
  .el-pagination {
    justify-content: end;
  }
}
</style>
