<template>
  <div class="card">Three模板示例</div>
  <canvas id="threeCanvas" ref="threeCanvasRef"></canvas>
</template>
<script setup lang="ts">
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import helvetiker_regular from "three/examples/fonts/helvetiker_regular.typeface.json";
// 获取承载容器 也可以通过id获取
const threeCanvasRef = ref();
// WebGL渲染器(WebGLRenderer)
let webGLRenderer: any = null;
// 透视摄像机(PerspectiveCamera)
let camera: any = null;
let scene: any = null;
const init = () => {
  // 创建WebGL渲染器(WebGLRenderer)
  webGLRenderer = new THREE.WebGLRenderer({
    canvas: threeCanvasRef.value,
  });

  let fov = 40; // fov是视野范围(field of view)的缩写
  let aspect = 2; // 指画布的宽高比。相机默认值
  let near = 0.1; // near和far代表近平面和远平面
  let far = 1000; // near和far代表近平面和远平面
  // 创建透视摄像机(PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // 设置相机在z轴上的位置 默认任何物体都是原点
  camera.position.z = 24;
  camera.position.x = 0;

  // 创建一个场景(Scene) 场景(Scene)是three.js的基本的组成部分
  scene = new THREE.Scene();

  // 网格中添加几何物体 场景中添加网格
  addGeometry();
  // 网格中添加字体 三维物体中添加网格 场景中添加三维物体
  addTextGeometry();
  // 场景中添加平行光
  addDirectionalLight();

  // 渲染器来渲染出整个场景 传递场景和摄像机
  webGLRenderer.render(scene, camera);
  requestAnimationFrame(animationRender);
};

const getMeshPhongMaterial = () => {
  // 使用受灯光影响的MeshPhongMaterial材质 颜色的值可以用css方式和十六进制来表示
  let meshPhongMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });
  // 使用随机数
  let hue = Math.random();
  let saturation = 1;
  let luminance = 0.5;
  meshPhongMaterial.color.setHSL(hue, saturation, luminance);
  return meshPhongMaterial;
};

// 几何体的数组
let boxMeshList: any = [];
// 网格中添加几何物体 场景中添加网格
const addGeometry = () => {
  // 创建一个包含盒子信息的立方几何体(BoxGeometry)
  let boxWidth = 1;
  let boxHeight = 1;
  let boxDepth = 1;
  // 四边形的原始几何类，它通常使用构造函数所提供的“width”、“height”、“depth”参数
  let boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  for (let index = 0; index < 6; index++) {
    // 创建一个基本的材质并设置它的颜色 颜色的值可以用css方式和十六进制来表示
    // let boxMeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    // 改变材质 改成会受灯光影响的MeshPhongMaterial材质
    // let boxMeshPhongMaterial = new THREE.MeshPhongMaterial({ color: item });
    // 创建一个网格(Mesh)对象 它包含了几何体(Geometry)(物体的形状) 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
    // let boxMesh = new THREE.Mesh(boxGeometry, boxMeshBasicMaterial);
    // let boxMesh = new THREE.Mesh(boxGeometry, boxMeshPhongMaterial);
    let boxMesh = new THREE.Mesh(boxGeometry, getMeshPhongMaterial());
    boxMesh.position.x = index * 2;
    // 将网格添加到场景中
    scene.add(boxMesh);
    boxMeshList.push(boxMesh);
  }
  camera.position.x = boxMeshList.length - 1;
};

// 网格中添加字体 三维物体中添加网格 场景中添加三维物体
const addTextGeometry = async () => {
  let loadFont = (url: string) => {
    // 加载JSON格式的字体的类
    let loader = new FontLoader();
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
  };
  let font = await loadFont(
    "https://unpkg.com/three@0.152.2/examples/fonts/helvetiker_regular.typeface.json"
  );
  // 文本缓冲几何体（TextGeometry）
  let textGeometry = new TextGeometry("three.js", {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.3,
    bevelSegments: 5,
  });
  // 创建一个网格(Mesh)对象 它包含了几何体(Geometry)(物体的形状) 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
  let textMesh = new THREE.Mesh(textGeometry, getMeshPhongMaterial());
  // 计算当前几何体的的边界矩形，该操作会更新已有 [param:.boundingBox]。边界矩形不会默认计算，需要调用该接口指定计算边界矩形，否则保持默认值 null。
  textGeometry.computeBoundingBox();
  // 当前 bufferGeometry 的外边界矩形。可以通过 .computeBoundingBox() 计算。默认值是 null。
  textGeometry.boundingBox.getCenter(textMesh.position).multiplyScalar(-1);
  // 创建一个三维物体
  let object3D = new THREE.Object3D();
  textMesh.position.x = boxMeshList.length * 2;
  // 将网格添加到三维物体中
  object3D.add(textMesh);
  // 将三维物体添加到场景中
  scene.add(object3D);
  boxMeshList.push(object3D);
};

// 场景中添加平行光
const addDirectionalLight = () => {
  let color = 0xffffff;
  let intensity = 1;
  // 创建一盏平行光 color 16进制表示光的颜色  缺省值为 0xffffff intensity光照的强度 缺省值为1
  let light = new THREE.DirectionalLight(color, intensity);
  // 平行光有一个位置和目标点 默认值都为(0, 0, 0)
  light.position.set(camera.position.x, camera.position.y, camera.position.z);
  // 将平行光添加到场景中
  scene.add(light);
};

// 间隔时间
let diffTime = 1000;
// 最后时间
let lastTime = 0;
const animationRender = (time: number) => {
  if (time - lastTime >= diffTime) {
    lastTime = time;
    boxMeshList.forEach((item: any, index: number) => {
      // 改变网格旋转xy轴
      item.rotation.x = time * 1 + index * 0.2;
      item.rotation.y = time * 2 + index * 0.3;
    });
    // 渲染器来渲染出整个场景 传递场景和摄像机
    webGLRenderer.render(scene, camera);
  }
  requestAnimationFrame(animationRender);
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped></style>
