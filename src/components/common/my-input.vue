<template>
  <el-input
    v-model="vModel"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :clearable="clearable"
    :disabled="disabled"
    :prefixIcon="prefixIcon"
    :suffixIcon="suffixIcon"
    :readonly="readonly"
    :formatter="formatter"
  >
    <template #prefix v-if="!!uSlots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template #suffix v-if="!!uSlots.suffix">
      <slot name="suffix"></slot>
    </template>
    <template #prepend v-if="!!uSlots.prepend">
      <slot name="prepend"></slot>
    </template>
    <template #append v-if="!!uSlots.append">
      <slot name="append"></slot>
    </template>
  </el-input>
</template>
<script setup lang="ts">
import format from "@/utils/format";
interface PROPSINT {
  type?:
    | "Digits"
    | "Phone"
    | "Decimal"
    | "Amount"
    | "AmountNeg"
    | "ZhcnAndEn"
    | "EnAndNumber"
    | "Chinese"
    | "Letter"
    | "text"; // text
  modelValue?: string | number;
  maxlength?: string | number;
  placeholder?: string;
  clearable?: boolean;
  //   formatter?: void;
  //   parser?: void;
  disabled?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  readonly?: boolean;
}
const vModel = ref();
const uSlots = useSlots();
watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      vModel.value = props.modelValue;
    } else {
      vModel.value = "";
    }
  },
  { deep: true, immediate: true }
);
const emits = defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
watch(
  () => vModel.value,
  () => {
    emits("update:modelValue", vModel.value);
  },
  { deep: true, immediate: true }
);
const props = withDefaults(defineProps<PROPSINT>(), {});
const formatter = (value: string | number) => {
  if (props.type == "Digits") {
    return format.getDigits(value);
  } else if (props.type == "Phone") {
    return format.getPhone(value);
  } else if (props.type == "Decimal") {
    return format.getDecimal(value);
  } else if (props.type == "Amount") {
    return format.getAmount(value);
  } else if (props.type == "AmountNeg") {
    return format.getAmountNeg(value);
  } else if (props.type == "ZhcnAndEn") {
    return format.getZhcnAndEn(value);
  } else if (props.type == "EnAndNumber") {
    return format.getEnAndNumber(value);
  } else if (props.type == "Chinese") {
    return format.getChinese(value);
  } else if (props.type == "Letter") {
    return format.getLetter(value);
  } else return value;
};
</script>

<style lang="scss" scoped></style>
