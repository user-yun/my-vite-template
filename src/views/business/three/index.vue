<template>
  <div class="card">Three模板示例</div>
  <canvas
    id="threeCanvas"
    ref="threeCanvasRef"
    width="1200"
    height="600"
  ></canvas>
</template>
<script setup lang="ts">
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 获取承载容器 也可以通过id获取
const threeCanvasRef = ref();
// WebGL渲染器(WebGLRenderer)
let webGLRenderer: any = null;
// 透视摄像机(PerspectiveCamera)
let camera: any = null;
// 渲染场景
let scene: any = null;
// 添加物体之间的间隔
let interval = 3;
// 几何体的数组
let meshList: any = [];
// 间隔时间(刷新速率)
let diffTime = 50;
// 动画速度(旋转速度 越小越慢)
let speed = 0.001;
// 最后时间
let lastTime = 0;
const init = () => {
  // 创建WebGL渲染器(WebGLRenderer)
  webGLRenderer = new THREE.WebGLRenderer({
    canvas: threeCanvasRef.value,
  });
  // 设置渲染的长宽
  webGLRenderer.setSize(
    threeCanvasRef.value.clientWidth,
    threeCanvasRef.value.clientHeight
  );
  let fov = 100; // fov是视野范围(field of view)的缩写
  let aspect =
    threeCanvasRef.value.clientWidth / threeCanvasRef.value.clientHeight || 2; // 指画布的宽高比。相机默认值
  let near = 0.1; // near和far代表近平面和远平面
  let far = 1000; // near和far代表近平面和远平面
  // 创建透视摄像机(PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // 设置相机在z轴上的位置 默认任何物体都是原点
  // 创建一个场景(Scene) 场景(Scene)是three.js的基本的组成部分
  scene = new THREE.Scene();

  // 网格中添加几何物体 场景中添加网格
  addGeometry();
  // 场景中添加线
  addSegments();
  // 网格中添加几何物体 场景中添加网格
  addSphereGeometry();
  // 网格中添加字体 三维物体中添加网格 场景中添加三维物体
  addTextGeometry(); // 非同步,会加载在最后

  // 添加辅助工具
  addHelper();
  // 场景中添加平行光
  addDirectionalLight();
  // 渲染器来渲染出整个场景 传递场景和摄像机
  // webGLRenderer.render(scene, camera);
  requestAnimationFrame(animationRender);
};

// 获取使用受灯光影响的MeshPhongMaterial材质
const getMeshPhongMaterial = () => {
  // 使用受灯光影响的MeshPhongMaterial材质 颜色的值可以用css方式和十六进制来表示
  let meshPhongMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });
  let hue = Math.random();
  let saturation = 1;
  let luminance = 0.5;
  meshPhongMaterial.color.setHSL(hue, saturation, luminance);
  return meshPhongMaterial;
};

// 获取基础线条材质（LineBasicMaterial）
const getLineBasicMaterial = () => {
  // 基础线条材质（LineBasicMaterial）
  let lineBasicMaterial = new THREE.LineBasicMaterial();
  let hue = Math.random();
  let saturation = 1;
  let luminance = 0.5;
  lineBasicMaterial.color.setHSL(hue, saturation, luminance);
  return lineBasicMaterial;
};

// 获取点材质(PointsMaterial)
const getPointsMaterial = () => {
  // 点材质(PointsMaterial)
  let pointsMaterial = new THREE.PointsMaterial();
  let hue = Math.random();
  let saturation = 1;
  let luminance = 0.5;
  pointsMaterial.color.setHSL(hue, saturation, luminance);
  pointsMaterial.size = 0.01;
  return pointsMaterial;
};

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
    boxMesh.position.set(index * interval, 0, 0);
    // 将网格添加到场景中
    scene.add(boxMesh);
    meshList.push(boxMesh);
  }
};

// 场景中添加线
const addSegments = () => {
  // 创建一个几何基类
  let geometry = new THREE.BufferGeometry();
  // 设置顶点
  geometry.setFromPoints([
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(-1, -1, -1),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(1, 1, 0),
  ]);
  /**
   * Line用于将一系列点绘制成一条连续的线，Three.js渲染Line使用的是gl.LINE_STRIP，
   * Line会将我们存储在Geometry的点依次连接起来形成线条，
   * 这种线条在实际项目中一般用于绘制迁徙轨迹或者绘制已知点的线条。
   *
   *
   * LineLoop用于将一系列点绘制成一条连续的线，它和Line几乎一样，
   * 唯一的区别就是所有点连接之后会将第一个点和最后一个点相连接，
   * 这种线条在实际项目中用于绘制某个区域，比如在地图上用线条勾选出某一区域。
   *
   *
   * LineSegments用于将两个点连接为一条线，它会将我们传递的一系列点自动分配成两个为一组，
   * 然后将分配好的两个点连接，这种先天实际项目中主要用于绘制具有相同开始点，
   * 结束点不同的线条，比如常用到的遗传图。
   */
  let lineSegments = new THREE.LineSegments(geometry, getLineBasicMaterial());
  // 可以直接将字体添加到场景中
  // lineSegments.position.set(meshList.length * 2, 0, 0);
  // 也可以添加到三维物体后再添加到场景中
  // 创建一个三维物体
  let object3D = new THREE.Object3D();
  object3D.position.set(meshList.length * interval, 0, 0);
  // 将网格添加到三维物体中
  object3D.add(lineSegments);
  // 将线添加到场景中
  scene.add(object3D);
  meshList.push(object3D);
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
  let textGeometry = new TextGeometry("ABCD", {
    font: font,
    size: 1, // Float。字体大小，默认值为100。
    height: 0.01, //  Float。挤出文本的厚度。默认值为50。
    curveSegments: 12, // Integer （表示文本的）曲线上点的数量。默认值为12。
    bevelEnabled: true, // Boolean 是否开启斜角，默认为false。
    bevelThickness: 0.01, // Float。文本上斜角的深度，默认值为20。
    bevelSize: 0, // Float。斜角与原始文本轮廓之间的延伸距离。默认值为8。
    bevelSegments: 3, // Integer 斜角的分段数。默认值为3。
  });
  // 创建一个网格(Mesh)对象 它包含了几何体(Geometry)(物体的形状) 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
  let textMesh = new THREE.Mesh(textGeometry, getMeshPhongMaterial());
  // 计算当前几何体的的边界矩形，该操作会更新已有 [param:.boundingBox]。边界矩形不会默认计算，需要调用该接口指定计算边界矩形，否则保持默认值 null。
  textGeometry.computeBoundingBox();
  // 当前 bufferGeometry 的外边界矩形。可以通过 .computeBoundingBox() 计算。默认值是 null。
  textGeometry.boundingBox.getCenter(textMesh.position).multiplyScalar(-1);
  // 创建一个三维物体
  let object3D = new THREE.Object3D();
  object3D.position.set(meshList.length * interval, 0, 0);
  // 将网格添加到三维物体中
  object3D.add(textMesh);
  // 将三维物体添加到场景中
  scene.add(object3D);
  meshList.push(object3D);
};

// 网格中添加几何物体 场景中添加网格
const addSphereGeometry = () => {
  let radius = 1;
  let widthSegments = 32;
  let heightSegments = 32;
  // 球缓冲几何体（SphereGeometry）
  /**
    adius — 球体半径，默认为1。
    widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
    heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
    phiStart — 指定水平（经线）起始角度，默认值为0。。
    phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
    thetaStart — 指定垂直（纬线）起始角度，默认值为0。
    thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。
   */
  let sphereGeometry = new THREE.SphereGeometry(
    radius,
    widthSegments,
    heightSegments
  );
  // 创建一个网格(Mesh)对象 它包含了几何体(Geometry)(物体的形状) 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
  let sphereMesh = new THREE.Mesh(sphereGeometry, getMeshPhongMaterial());
  sphereMesh.position.set(meshList.length * 3, 0, 0);
  // 将网格添加到场景中
  scene.add(sphereMesh);
  meshList.push(sphereMesh);

  // 创建一个用于显示点（Points）的类
  let points = new THREE.Points(sphereGeometry, getPointsMaterial());
  points.position.set(meshList.length * interval, 0, 0);
  // 将点承载体添加到场景中
  scene.add(points);
  meshList.push(points);
};

// 场景中添加平行光
const addDirectionalLight = () => {
  let color = 0xffffff;
  let intensity = 1;
  // 创建一盏平行光 color 16进制表示光的颜色  缺省值为 0xffffff intensity光照的强度 缺省值为1
  let light1 = new THREE.DirectionalLight(color, intensity);
  let light2 = new THREE.DirectionalLight(color, intensity);
  // 平行光有一个位置和目标点 默认值都为(0, 0, 0)
  light1.position.set(camera.position.x, camera.position.y, camera.position.z);
  light2.position.set(
    -camera.position.x,
    -camera.position.y,
    -camera.position.z
  );
  // 将平行光添加到场景中
  scene.add(light1, light2);
};

const addHelper = () => {
  // 为了方便观察3D图像，添加三维坐标系对象
  let axes = new THREE.AxesHelper(100); // 坐标系轴长设置为8
  // 把三维坐标系 添加到场景中
  scene.add(axes);
  // 添加控制器
  let control = new OrbitControls(camera, threeCanvasRef.value);
  camera.position.set(meshList.length + interval, 0, 16);
  // control.update();
};

const animationRender = (time: number) => {
  if (time - lastTime >= diffTime) {
    lastTime = time;
    meshList.forEach((item: any, index: number) => {
      // 改变网格旋转xy轴
      let rot = time * speed;
      item.rotation.x = rot;
      item.rotation.y = rot;
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
