const menuJson = [
    {
        title: "基础",
        order: "0",
        list: [{
            title: "地图场景",
            order: 0,
        },
        {
            title: "融合场景",
            order: 2,
        }, {
            title: "相机",
            order: 3,
        }, {
            title: "图层加载",
            order: 4,
        }]
    },
    {
        title: "控件",
        order: "0",
        list: [{
            title: "基础控件",
            order: 0,
        }, {
            title: "绘制与量算",
            order: 1,
        }, {
            title: "地形分析",
            order: 2,
        }, {
            title: "其他分析",
            order: 3,
        }]
    },
    {
        title: "图形元素",
        order: "1",
        list: [{
            title: "基础几何",
            order: 0,
        }, {
            title: "静态曲面基础",
            order: 1,
        }, {
            title: "动态曲面示例",
            order: 1,
        }, {
            title: "高性能静态曲面",
            order: 1,
        }, {
            title: "高性能动态曲面",
            order: 1,
        }, {
            title: "自定义几何",
            order: 2,
        }, {
            title: "标注",
            order: 3,
        }, {
            title: "元素管理",
            order: 4,
        }, {
            title: "选中效果",
            order: 5,
        }
        ]
    },
    {
        title: "场景渲染",
        order: "2",
        list: [{
            title: "3dtiles设置",
            order: 0,
        },
        {
            title: "光源（融合）",
            order: 0,
        },
        {
            title: "PBR材质（融合）",
            order: 0,
        },
        {
            title: "渲染技术（融合）",
            order: 0,
        }
        ]
    },
    {
        title: "后期处理",
        order: "5",
        list: [{
            title: "地图风格",
            order: 0,
        }, {
            title: "分屏处理",
            order: 1,
        }, {
            title: "选中特效",
            order: 3,
        }]
    },
    {
        title: "离屏渲染",
        order: "5",
        list: [{
            title: "离屏基础",
            order: 0,
        }, {
            title: "离屏应用",
            order: 1,
        }]
    },
    {
        title: "体渲染",
        order: "3",
        list: [{
            title: "体渲染基础",
            order: 0,
        }, {
            title: "气象应用",
            order: 1,
        }, {
            title: "特效应用",
            order: 2,
        }]
    },
    {
        title: "区域地图",
        order: "7",
        list: [{
            title: "基础区域地图",
            order: 0,
        }, {
            title: "区域地图风格",
            order: 1,
        },
        ]
    },
    {
        title: "漫游/飞行",
        order: "4",
        list: [{
            title: "漫游",
            order: 0,
        }, {
            title: "飞行",
            order: 1,
        }]
    },
    {
        title: "视效升级探索版",
        order: "6",
        list: [{
            title: "广告牌云",
            order: 0,
        }, {
            title: "水面材质",
            order: 1,
        }, {
            title: "近地天空盒",
            order: 2,
        }, {
            title: "太空天空盒",
            order: 3,
        }]
    },
    {
        title: "视效升级",
        order: "6",
        list: [{
            title: "视效升级1.0",
            order: 0,
        }]
    },
    {
        title: "星球/宇宙",
        order: "7",
        list: [{
            title: "地球大气云层",
            order: 0,
        }, {
            title: "月球",
            order: 1,
        },
        {
            title: "太阳系",
            order: 2,
        },
        ]
    },
    {
        title: "人工智能",
        order: "8",
        list: [{
            title: "卫星影像识别",
            order: 0,
        },
        ]
    },
];
const exampleJson = [{
    "parent": "静态曲面基础",
    "title": "立体热力图（小范围）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "立体热力图（大范围）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金曲面（矩形区域）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金上曲面体（矩形区域）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金双曲面体（矩形区域）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金曲面（任意区域）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金上曲面体（任意区域）",
    "url": "",
}, {
    "parent": "静态曲面基础",
    "title": "克里金双曲面体（任意区域）",
    "url": "",
}, {
    "parent": "动态曲面示例",
    "title": "动态曲面（随机数据）",
    "url": "",
}, {
    "parent": "动态曲面示例",
    "title": "动态上曲面体（随机数据）",
    "url": "",
}, {
    "parent": "动态曲面示例",
    "title": "动态双曲面体（随机数据）",
    "url": "",
}, {
    "parent": "动态曲面示例",
    "title": "动态上下曲面体（随机数据）",
    "url": "",
}, {
    "parent": "动态曲面示例",
    "title": "动态曲面体三角网（随机数据）",
    "url": "",
},
{
    "parent": "高性能静态曲面",
    "title": "静态曲面（插值模式①）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态上曲面体（插值模式①）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态双曲面体（插值模式①）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态上下曲面体（插值模式①）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态曲面体三角网（插值模式①）",
    "url": "",
},
{
    "parent": "高性能静态曲面",
    "title": "静态曲面（插值模式②）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态上曲面体（插值模式②）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态双曲面体（插值模式②）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态上下曲面体（插值模式②）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "静态曲面体三角网（插值模式②）",
    "url": "",
}, {
    "parent": "高性能静态曲面",
    "title": "区域静态曲面（插值模式②）",
    "url": "",
},
{
    "parent": "高性能动态曲面",
    "title": "动态曲面（传入数据①）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态上曲面体（传入数据①）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态双曲面体（传入数据①）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态上下曲面体（传入数据①）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态曲面体三角网（传入数据①）",
    "url": "",
},
{
    "parent": "高性能动态曲面",
    "title": "动态曲面（传入数据②）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态上曲面体（传入数据②）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态双曲面体（传入数据②）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态上下曲面体（传入数据②）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "动态曲面体三角网（传入数据②）",
    "url": "",
}, {
    "parent": "高性能动态曲面",
    "title": "区域动态曲面（传入数据②）",
    "url": "",
},
{
    "parent": "自定义几何",
    "title": "大量几何体",
    "url": "",
}, {
    "parent": "地质模型1.0",
    "title": "单面地质几何模式（矩形区域）",
    "url": "",
}, {
    "parent": "地质模型1.0",
    "title": "双面地质几何模式（矩形区域）",
    "url": "",
}, {
    "parent": "地质模型2.0",
    "title": "单面地质几何面（任意区域）",
    "url": "",
}, {
    "parent": "地质模型2.0",
    "title": "单面地质几何体（任意区域）",
    "url": "",
}, {
    "parent": "地质模型2.0",
    "title": "双面地质几何体（任意区域）",
    "url": "",
}, {
    "parent": "体渲染基础",
    "title": "复刻threejs",
    "url": "",
}, {
    "parent": "气象应用",
    "title": "原生体素单瓦片",
    "url": "",
}, {
    "parent": "气象应用",
    "title": "原生体素多瓦片",
    "url": "",
}, {
    "parent": "特效应用",
    "title": "海岸水面（shadertoy）",
    "url": "",
}, {
    "parent": "基坑支护【BIM】",
    "title": "桩锚结构",
    "url": "",
}, {
    "parent": "基坑支护【BIM】",
    "title": "土钉墙结构",
    "url": "",
}, {
    "parent": "基坑支护【BIM】",
    "title": "上土钉墙下桩锚",
    "url": "",
}, {
    "parent": "基坑支护【BIM】",
    "title": "复合土钉墙",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "混沌",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "亮度",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "夜视",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "热力（1）",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "热力（2）",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "黑白",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "暗黑",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "毛玻璃",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "雨幕",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "素描",
    "url": "",
}, {
    "parent": "地图风格",
    "title": "网格",
    "url": "",
}, {
    "parent": "分屏处理",
    "title": "横纵分屏",
    "url": "",
}, {
    "parent": "分屏处理",
    "title": "万花筒",
    "url": "",
}, {
    "parent": "广告牌云",
    "title": "全球广告牌云",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "太阳光晕",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "大气散射",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "体积雾（高度深度雾）山谷雾",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "体积雾（高度深度雾）城市雾",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "体积光（丁达尔光）建筑体积光",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "体积云（光线步进云）（鸟瞰视角）",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "体积云（光线步进云）（天空视角）",
    "url": "",
}, {
    "parent": "视效升级1.0",
    "title": "全球体积云（可实时）（太空视角）",
    "url": "",
}, {
    "parent": "离屏基础",
    "title": "渲染至canvas",
    "url": "",
}, {
    "parent": "离屏基础",
    "title": "渲染至纹理",
    "url": "",
}, {
    "parent": "3dtiles设置",
    "title": "3dtiles基础设置",
    "url": "",
}, {
    "parent": "点光源",
    "title": "单个点光源",
    "url": "",
}, {
    "parent": "地球大气云层",
    "title": "大气云层（1）",
    "url": "",
}, {
    "parent": "太阳系",
    "title": "地月太阳位置",
    "url": "",
}, {
    "parent": "飞行",
    "title": "自定义航线",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（1）",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（2）",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（3）",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（4）",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（5）",
    "url": "",
}, {
    "parent": "太空天空盒",
    "title": "天空盒（6）",
    "url": "",
}, {
    "parent": "近地天空盒",
    "title": "晴天",
    "url": "",
}, {
    "parent": "近地天空盒",
    "title": "晚霞",
    "url": "",
}, {
    "parent": "近地天空盒",
    "title": "蓝天",
    "url": "",
},
{
    "parent": "融合场景",
    "title": "深度检测+阴影（cesium->three）",
    "url": "",
}, {
    "parent": "融合场景",
    "title": "盒子相机（cesium->three）",
    "url": "",
}, {
    "parent": "融合场景",
    "title": "实例化（cesium->three）",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "矩形光源",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "点光源",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "聚光灯",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "多个聚光灯",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "半球光",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "物理光源",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "平行光",
    "url": "",
},
{
    "parent": "光源（融合）",
    "title": "环境光",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "油漆材质",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "玻璃材质",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "玻璃材质（透明）",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "地面",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "岩石",
    "url": "",
},
{
    "parent": "PBR材质（融合）",
    "title": "织物",
    "url": "",
},
{
    "parent": "渲染技术（融合）",
    "title": "反射探针",
    "url": "",
},
{
    "parent": "地图场景",
    "title": "地图场景",
    "url": "example/BaseMap.html",
}, {
    "parent": "地图场景",
    "title": "真实地形",
    "url": "example/BaseMap2.html",
}, {
    "parent": "地图场景",
    "title": "海洋",
    "url": "",
}, {
    "parent": "地图场景",
    "title": "地形拉伸",
    "url": "",
}, {
    "parent": "地图场景",
    "title": "虚拟地形（噪声）",
    "url": "",
}, {
    "parent": "地图场景",
    "title": "虚拟地形（正弦波单轴）",
    "url": "",
}, {
    "parent": "地图场景",
    "title": "虚拟地形（正弦波双轴）",
    "url": "",
}, {
    "parent": "相机",
    "title": "默认相机定位（普通场景）",
    "url": "",
}, {
    "parent": "相机",
    "title": "默认相机定位（地图场景）",
    "url": "",
}, {
    "parent": "相机",
    "title": "自定义相机定位（镜头畸变）",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "正方体几何",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "多个相同的正方体几何",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "多个不同的正方体几何",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "球体几何",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "圆柱几何",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "立方体几何（1）",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "立方体几何（2）",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "圆锥体",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "平面",
    "url": "",
}, {
    "parent": "基础几何",
    "title": "折线",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "绘制线",
    "url": "", "show": "false",
}, {
    "parent": "绘制与量算",
    "title": "绘制线（贴地）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "测距",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "测距（贴地）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "测距（合计）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "绘制面",
    "url": "", "show": "false",
}, {
    "parent": "绘制与量算",
    "title": "绘制面（贴地）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "测面积",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "测面积（贴地）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "多个测面积（贴地）",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "仿arcgis测量",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "取笛卡尔坐标",
    "url": "",
}, {
    "parent": "绘制与量算",
    "title": "取经纬度坐标",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（矢量底图）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（矢量底图+注记）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（影像底图）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（影像底图+注记）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（地形底图）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（地形底图+注记）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "天地图（全球边界）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "高德（矢量）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "高德（卫星）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "高德（路网）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "arcgis（矢量）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "arcgis（卫星）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "OSM（地形）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "加载图片图层",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "谷歌（地形注记）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "谷歌（矢量）",
    "url": "",
}, {
    "parent": "图层加载",
    "title": "谷歌（卫星）",
    "url": "",
}, {
    "parent": "基础控件",
    "title": "工具栏（默认）",
    "url": "",
}, {
    "parent": "基础控件",
    "title": "工具栏（自定义配置）",
    "url": "",
}, {
    "parent": "基础控件",
    "title": "工具栏（自定义控件）",
    "url": "",
}, {
    "parent": "选中特效",
    "title": "边缘检测",
    "url": "",
}, {
    "parent": "选中特效",
    "title": "覆盖",
    "url": "",
}, {
    "parent": "选中特效",
    "title": "边缘检测+覆盖",
    "url": "",
}, {
    "parent": "元素管理",
    "title": "移除全部元素",
    "url": "",
}, {
    "parent": "元素管理",
    "title": "移除单类元素",
    "url": "",
}, {
    "parent": "元素管理",
    "title": "移除单类元素中的指定实例",
    "url": "",
}, {
    "parent": "标注",
    "title": "带指示线文本",
    "url": "",
}, {
    "parent": "标注",
    "title": "纯文本",
    "url": "",
}, {
    "parent": "标注",
    "title": "文本+图标",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "河南省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "陕西省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "北京市",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "湖北省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "广东省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "江苏省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "四川省",
    "url": "",
}, {
    "parent": "基础区域地图",
    "title": "山东省",
    "url": "",
}, {
    "parent": "区域地图风格",
    "title": "不同背景主题",
    "url": "",
}, {
    "parent": "区域地图风格",
    "title": "动态墙样式",
    "url": "",
}, {
    "parent": "区域地图风格",
    "title": "不同图层",
    "url": "",
}, {
    "parent": "卫星影像识别",
    "title": "智能识别自动白模",
    "url": "",
}, {
    "parent": "选中效果",
    "title": "填充颜色",
    "url": "",
}, {
    "parent": "选中效果",
    "title": "外接球",
    "url": "",
}, {
    "parent": "选中效果",
    "title": "动态墙（垂直）",
    "url": "",
}, {
    "parent": "选中效果",
    "title": "动态墙（水平）",
    "url": "",
}, {
    "parent": "选中效果",
    "title": "动态墙（垂直斜向）",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "等高线",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "高度分析",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "坡度分析",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "坡向分析",
    "url": "",
},
{
    "parent": "地形分析",
    "title": "挖填方（矩形区域）",
    "url": "",
},
{
    "parent": "地形分析",
    "title": "等高线（矩形区域）",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "高度分析（矩形区域）",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "坡度分析（矩形区域）",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "坡向分析（矩形区域）",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "通视分析",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "限高分析",
    "url": "",
}, {
    "parent": "地形分析",
    "title": "挖填方（任意区域）",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "可视域分析",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "日照分析",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "通视分析",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "限高分析",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "淹没分析1.0",
    "url": "",
}, {
    "parent": "其他分析",
    "title": "缓冲区分析",
    "url": "",
}];