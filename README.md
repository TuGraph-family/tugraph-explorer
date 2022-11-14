## TuGraph Explore

TuGraph Explore 是基于 GraphInsight 构建的图可视分析平台，提供了完整的图探索分析能力，能够帮助用户从海量的图数据中洞察出有价值的信息。

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

启动 TuGraph Explore 后，如下图所示。

<img src='https://mdn.alipayobjects.com/mdn/huamei_2dxjn8/afts/img/A*WyQySqm_WeIAAAAAAAAAAAAADrR-AQ' />

连接到 TuGraph 数据库后，就可以开始探索分析了。
连接 TuGraph 数据，需要提供以下信息：

- 图数据库的账号
- 图数据库的密码
- 图数据库的地址：格式为 ip:port

<img src='https://mdn.alipayobjects.com/mdn/huamei_2dxjn8/afts/img/A*O7HCQbdJhVgAAAAAAAAAAAAADrR-AQ' />

### Requirement

- Node.js 8.x
- Typescript 2.8+

#### 定制 Explore

TuGraph Explore 的个性化定制是通过扩展 GI 资产的方式来扩展，我们默认提供了 [TuGraph Explore](https://github.com/antvis/GraphInsight/tree/master/packages/gi-assets-tugraph) 前端资产。如果要通过自定义资产来扩展 Explore，请参考[扩展文档](https://www.yuque.com/antv/gi/qqnfgm)。
