通过第一篇「基于 TuGraph Explore 挖掘网络黑灰产子图」的文章，我们可以知道 TuGraph 在网络灰黑产方面有着非常强大的图数据处理与分析能力。而在整个行业方向上，对于网络黑灰产的发掘，对于安全漏洞溯源分析，大多数产品都会建设基于 Graph 的分析能力。2021 年上半年国内就有 4525 家公司开展网络安全业务，相比上一年增长 27%，如何根据企业需求，个性化定制 TuGraph Explore 就成为企业关心的重点。这篇文章将介绍如何基于 TuGraph，借助其生态力量，满足企业个性化分析探索需求。

## 01. 上传 TuGraph Explore 前端资产包

> 注意 [https://graphinsight.antgroup.com](https://graphinsight.antgroup.com/#/workspace?type=project) 目前还没更新，预计 9.5 号 Ready

访问 TuGraph 的生态合作产品 GraphInsight，点击上传资产，将 TuGraph 的前端资产包上传到平台上。

- UMD 名：GI_ASSETS_TUGRAPH
- 版本号：1.1.0
- tnpm 包名：@alipay/gi-assets-tugraph
- CDN :[https://gw.alipayobjects.com/os/lib/alipay/gi-assets-tugraph/1.1.0/dist/index.min.js](https://gw.alipayobjects.com/os/lib/alipay/gi-assets-tugraph/1.1.0/dist/index.min.js)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023918721-14016c8f-f1f7-4d45-b27a-3a9bbc2bad3a.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=171&id=ud6fdbad8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=596&originWidth=2549&originalType=binary&ratio=1&rotation=0&showTitle=false&size=187585&status=error&style=none&taskId=uaf037167-fb96-45e6-a5aa-d807dd80b96&title=&width=733.0084838867188)
点击保存，我们变得到 TuGraph Explore 的资产服务包与资产组件包。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023918736-a1b1ecfa-8997-4545-8107-2f358c06725e.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=163&id=u63364597&margin=%5Bobject%20Object%5D&name=image.png&originHeight=648&originWidth=1271&originalType=binary&ratio=1&rotation=0&showTitle=true&size=209514&status=error&style=shadow&taskId=u3cb2923b-0524-4e6f-9534-0a9006ecce8&title=TuGraph%20Explore%20%E8%B5%84%E4%BA%A7%E6%9C%8D%E5%8A%A1%E5%8C%85&width=319.7116394042969 "TuGraph Explore 资产服务包")![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023918614-ecf47531-b1bb-4b91-ad17-7ff9097e02c9.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=151&id=u131b6dfb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=467&originWidth=1097&originalType=binary&ratio=1&rotation=0&showTitle=true&size=79785&status=error&style=shadow&taskId=ud99af23f-1353-4a92-b1cd-bb76f543bdf&title=TuGraph%20Explore%20%E8%B5%84%E4%BA%A7%E7%BB%84%E4%BB%B6%E5%8C%85&width=353.6051025390625 "TuGraph Explore 资产组件包")

## 02. 创建项目，启动 TuGraph 引擎

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023918354-3aaa0909-8459-4567-9c2d-448e995572be.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=261&id=u511c1767&margin=%5Bobject%20Object%5D&name=image.png&originHeight=733&originWidth=1870&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130992&status=error&style=shadow&taskId=uff2876e2-a9de-4cea-9379-d699fbe9215&title=&width=665.0084838867188)

- 点击「图数据源」选择「导入」，选择「图数据库」，输入 TuGraph 的账号和密码，点击连接

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023918126-e29796f6-4ed0-4411-a3fe-86312aa9af59.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=197&id=u64ce7954&margin=%5Bobject%20Object%5D&name=image.png&originHeight=433&originWidth=1458&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58635&status=error&style=shadow&taskId=ub1de38dd-7cd5-4a41-9c13-19ef33ca42a&title=&width=662.7272583630463)

- 我们得到一个默认的画布

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023919354-f62b12c7-2af4-47f7-9952-2913daed0c0a.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=419&id=ueb180adc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=922&originWidth=1545&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134317&status=error&style=shadow&taskId=ua2e6e9d1-4075-4713-8f81-856baa117ea&title=&width=702.2727120513762)

## 03. 组装 TuGraph Explore 的分析资产

点击侧边栏「组件」，点击图标，打开「资产中心」，选择 TuGraph Explore 资产包中的「Cypher 编辑器」和「数据管理」。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023920995-65f13e4e-83bc-46d0-972c-c3d83cb05867.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=555&id=ue0137c14&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1222&originWidth=1777&originalType=binary&ratio=1&rotation=0&showTitle=false&size=273975&status=error&style=shadow&taskId=u503032bd-500b-426a-a0c8-9218d398b28&title=&width=807.727255220256)

- 点击保存后，我们将挑选的资产，分别组装在「工具栏」「侧边栏」「操作栏」中，于是文章一中的 Studio 就已经跃然纸上！

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023921099-cca5fc8e-f1ea-4dd8-959f-1ae31731ff84.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=526&id=uc715bd1e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1157&originWidth=1775&originalType=binary&ratio=1&rotation=0&showTitle=false&size=294823&status=error&style=shadow&taskId=ua94aa58e-c794-4ccd-9cb4-f4c3379f434&title=&width=806.8181643308691)

## 04. 导出 SDK，打包镜像部署。

点击导航栏的「导出 SDK」，选择「在 CodeSandbox」中打开，我们便得到一个
![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023921010-bf2a24e3-7110-45c4-bc56-1aa6654c3a6a.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=283&id=uf21fa6f6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=1178&originalType=binary&ratio=1&rotation=0&showTitle=false&size=201077&status=error&style=shadow&taskId=ucd6e4532-2ab9-40ac-b8d6-e454a8c4b66&title=&width=546.4545288085938)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023921234-b2fdcb83-3f30-44ee-9ea3-d9d313637742.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=560&id=u2a91657b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1233&originWidth=2545&originalType=binary&ratio=1&rotation=0&showTitle=false&size=327800&status=error&style=shadow&taskId=u0009abb2-5596-4bf4-9531-3abe8f5e30b&title=&width=1156.8181567448235)

- 通过二次开发，追加导航栏，品牌色等，Docker 打包镜像，即可得到一个官方制作的 TuGraph Explore

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023930123-56a6bc1b-7f00-4d51-bbb5-ed780d679431.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=1676&id=u93d28af6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=3688&originWidth=7136&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7679685&status=error&style=shadow&taskId=uc0dbb117-eaef-4ed0-9a3e-180db1d7455&title=&width=3243.6362933324403)

- 当然，企业也可以基于自己的业务规则和产品特性，调整页面布局和分析逻辑。如下图所示，某个分析场景下，用户高频使用「筛选面板」「表格分析」「路径分析」，于是通过「圣杯布局」全部集成在一个页面中。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023923877-60fcea10-d038-44ed-a2ad-bc2608f03616.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=483&id=u9685432a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1063&originWidth=2017&originalType=binary&ratio=1&rotation=0&showTitle=false&size=305786&status=error&style=shadow&taskId=uabdbb03e-b1c8-4637-92a7-c7a810485c6&title=&width=916.8181619466833)

- 再次「导出 SDK」，打包到镜像中，即可得到一个业务定制化的 TuGraph Explore

![image.png](https://cdn.nlark.com/yuque/0/2022/png/160133/1662023924308-9ff40b6f-c3bf-4e63-a686-6eb6c7e46243.png#clientId=u148d5c80-02c9-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=487&id=udf8c8f82&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1071&originWidth=2553&originalType=binary&ratio=1&rotation=0&showTitle=false&size=373352&status=error&style=shadow&taskId=u52fe24dd-cc83-428b-8ff0-76c9167f3c7&title=&width=1160.454520302371)
