export const jsplumbSetting = {
  // 按10*10格子对齐
  grid: [10, 10],
  // 动态锚点、位置自适应
  Anchors: ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'],
  Container: 'flow',
  // 连线的样式 StateMachine、Flowchart,有四种默认类型：Bezier（贝塞尔曲线），Straight（直线），Flowchart（流程图），State machine（状态机）
  // cornerRadius 连线拐弯圆角
  Connector: ['Bezier', { cornerRadius: 5, alwaysRespectStubs: true, stub: 5 }],
  // 鼠标不能拖动删除线
  ConnectionsDetachable: false,
  // 删除线的时候节点不删除
  DeleteEndpointsOnDetach: false,
  // 连线的端点
  // Endpoint: ["Dot", {radius: 5}],
  // Endpoint: [
  //   "Rectangle",
  //   {
  //     height: 10,
  //     width: 10,
  //   },
  // ],
  Endpoint: ['Blank', { Overlays: '' }],
  // 线端点的样式
  EndpointStyle: {
    fill: 'rgba(255,255,255,0)',
    outlineWidth: 1,
  },
  LogEnabled: false, //是否打开jsPlumb的内部日志记录
  // 绘制线
  PaintStyle: {
    stroke: '#409eff',
    strokeWidth: 2,
    // 设置外边线的颜色，默认设置透明，这样别人就看不见了，点击线的时候可以不用精确点击，参考 https://blog.csdn.net/roymno2/article/details/72717101
    outlineStroke: 'transparent',
    // 线外边的宽，值越大，线的点击范围越大
    outlineWidth: 10,
  },
  // hover时线的样式
  HoverPaintStyle: { stroke: '#f00', strokeWidth: 2 },
  // 绘制箭头
  Overlays: [
    [
      'Arrow',
      {
        width: 8,
        length: 8,
        location: 1,
      },
    ],
    [
      'Label',
      {
        label: '',
        location: 0.1,
        cssClass: 'aLabel',
      },
    ],
  ],
  RenderMode: 'svg',
};

// jsplumb连接参数
export const jsplumbConnectOptions = {
  isSource: true,
  isTarget: true,
  // 动态锚点、提供了4个方向 Continuous、AutoDefault
  anchor: ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'],
  labelStyle: {
    cssClass: 'flowLabel',
  },
};

export const jsplumbSourceOptions = {
  filter: '.node-anchor', //触发连线的区域
  /*"span"表示标签，".className"表示类，"#id"表示元素id*/
  filterExclude: false,
  anchor: ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'],
  allowLoopback: false,
};

export const jsplumbTargetOptions = {
  filter: '.node-anchor',
  /*"span"表示标签，".className"表示类，"#id"表示元素id*/
  filterExclude: false,
  anchor: ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'],
  allowLoopback: false,
};
