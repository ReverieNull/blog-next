// src/config/menuItems.ts
import React from 'react';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'list1',
    label: 'HTML',
    className: 'menu-html',
    children: [
      { key: 'list11', 
        label: <Link to="/app/frontend/html/base">HTML基础</Link> },
      { key: 'list12', 
        label: <Link to="/app/frontend/html/advanced">HTML进阶</Link> },
      { key: 'list13', label: <Link to="/app/frontend/html/interview">HTML面试</Link> },
    ],
  },
  {
    key: 'list2',
    label: 'CSS',
    className: 'menu-css',
    children: [
      { key: 'list21', label: <Link to="/app/frontend/css/base">CSS基础</Link> },
      { key: 'list22', label: <Link to="/app/frontend/css/advanced">CSS进阶</Link> },
      { key: 'list23', label: <Link to="/app/frontend/css/interview">CSS面试</Link> },
      { key: 'list24', label: <Link to="/app/frontend/css/preprocessor">CSS预编译器</Link> },
      { key: 'list25', label: <Link to="/app/frontend/css/framework">CSS框架</Link> },
      { key: 'list26', label: <Link to="/app/frontend/css/select">CSS选型</Link> },
    ],
  },
  {
    key: 'list3',
    label: 'JavaScript',
    className: 'menu-javascript',
    children: [
      { key: 'list31', label: <Link to="/app/frontend/javascript/base">JavaScript基础</Link> },
      { key: 'list32', label: <Link to="/app/frontend/javascript/advanced">JavaScript进阶</Link> },
      { key: 'list33', label: <Link to="/app/frontend/javascript/interview">JavaScript面试</Link> },
      { key: 'list34', label: <Link to="/app/frontend/javascript/ts">TypeScript</Link> },
    ],
  },
  { type: 'divider' },
  {
    key: 'list4',
    label: 'React',
    className: 'menu-react',
    children: [
      { key: 'list41', label: <Link to="/app/frontend/react/base">React基础</Link> },
      { key: 'list42', label: <Link to="/app/frontend/react/advanced">React进阶</Link> },
      { key: 'list43', label: <Link to="/app/frontend/react/state">React状态管理</Link> },
      { key: 'list44', label: <Link to="/app/frontend/react/interview">React面试</Link> },
    ],
  },
  {
    key: 'list5',
    label: 'Vue',
    className: 'menu-vue',
    children: [
      { key: 'list51', label: <Link to="/app/frontend/vue/base">Vue基础</Link> },
      { key: 'list52', label: <Link to="/app/frontend/vue/advanced">Vue进阶</Link> },
      { key: 'list53', label: <Link to="/app/frontend/vue/state">Vue状态管理</Link> },
      { key: 'list54', label: <Link to="/app/frontend/vue/interview">Vue面试</Link> },
    ],
  },
  {
    key: 'list6',
    label: '构建工具',
    className: 'menu-build',
    children: [
      {
        key: 'list61',
        label: 'Webpack',
        children: [
          { key: 'list611', label: <Link to="/app/frontend/build/webpack/base">Webpack基础</Link> },
          { key: 'list612', label: <Link to="/app/frontend/build/webpack/advanced">Webpack进阶</Link> },
          { key: 'list613', label: <Link to="/app/frontend/build/webpack/interview">Webpack面试</Link> },
        ],
      },
      {
        key: 'list62',
        label: 'Vite',
        children: [
          { key: 'list621', label: <Link to="/app/frontend/build/vite/base">Vite基础</Link> },
          { key: 'list622', label: <Link to="/app/frontend/build/vite/advanced">Vite进阶</Link> },
          { key: 'list623', label: <Link to="/app/frontend/build/vite/interview">Vite面试</Link> },
        ],
      },
    ],
  },
  {
    key: 'list7',
    label: '编译器',
    children: [
      { key: 'list71', label: <Link to="/app/frontend/compiler/babel">Babel</Link> },
      { key: 'list72', label: <Link to="/app/frontend/compiler/swc">SWC</Link> },
    ],
  },
  {
    key: 'list8',
    label: 'Git',
    children: [
      { key: 'list81', label: <Link to="/app/frontend/git/base">Git 基础</Link> },
      { key: 'list82', label: <Link to="/app/frontend/git/platform">托管平台</Link> },
    ],
  },
  {
    key: 'list9',
    label: 'CI/CD',
    children: [
      { key: 'list91', label: <Link to="/app/frontend/cicd/source">源码管理</Link> },
      { key: 'list92', label: <Link to="/app/frontend/cicd/lint">静态检查</Link> },
      { key: 'list93', label: <Link to="/app/frontend/cicd/unit">单元测试</Link> },
      { key: 'list94', label: <Link to="/app/frontend/cicd/build">构建打包</Link> },
      { key: 'list95', label: <Link to="/app/frontend/cicd/deploy">部署策略</Link> },
      { key: 'list96', label: <Link to="/app/frontend/cicd/monitor">监控回滚</Link> },
    ],
  },
  {
    key: 'list10',
    label: '网络',
    children: [
      {
        key: 'list101',
        label: '网络基础',
        children: [
          { key: 'list1011', label: <Link to="/app/frontend/network/basic/browserModel">浏览器网络模型</Link> },
          { key: 'list1012', label: <Link to="/app/frontend/network/basic/http">HTTP报文与状态码</Link> },
          { key: 'list1013', label: <Link to="/app/frontend/network/basic/cors">同源策略与CORS</Link> },
          { key: 'list1014', label: <Link to="/app/frontend/network/basic/cache">缓存与CDN</Link> },
          { key: 'list1015', label: <Link to="/app/frontend/network/basic/https">HTTPS完整链路</Link> },
          { key: 'list1016', label: <Link to="/app/frontend/network/basic/security">Web安全攻防</Link> },
          { key: 'list1017', label: <Link to="/app/frontend/network/basic/debug">调试与监控实战</Link> },
        ],
      },
      {
        key: 'list102',
        label: '网络进阶',
        children: [
          { key: 'list1021', label: <Link to="/app/frontend/network/advanced/transport">传输层优化</Link> },
          { key: 'list1022', label: <Link to="/app/frontend/network/advanced/gateway">高并发网关</Link> },
          { key: 'list1023', label: <Link to="/app/frontend/network/advanced/global">全球加速</Link> },
          { key: 'list1024', label: <Link to="/app/frontend/network/advanced/loadBalance">负载均衡</Link> },
          { key: 'list1025', label: <Link to="/app/frontend/network/advanced/attack">攻击防御</Link> },
          { key: 'list1026', label: <Link to="/app/frontend/network/advanced/observability">可观测性</Link> },
          { key: 'list1027', label: <Link to="/app/frontend/network/advanced/zeroTrust">零信任安全</Link> },
        ],
      },
    ],
  },
  {
    key: 'lists11',
    label: '前端工程化',
    className: 'menu-engineering',
    children: [
      { key: 'list111', label: <Link to="/app/frontend/engineering/nodeBase">Node.js 基础</Link> },
      { key: 'list112', label: <Link to="/app/frontend/engineering/nodeAdvance">Node.js 进阶</Link> },
      { key: 'list113', label: <Link to="/app/frontend/engineering/cross">跨端开发</Link> },
      { key: 'list114', label: <Link to="/app/frontend/engineering/debug">环境调试</Link> },
      {
        key: 'list115',
        label: '代码规范',
        children: [
          { key: 'list1151', label: <Link to="/app/frontend/engineering/lint/eslint">ESLint</Link> },
          { key: 'list1152', label: <Link to="/app/frontend/engineering/lint/prettier">Prettier</Link> },
          { key: 'list1153', label: <Link to="/app/frontend/engineering/lint/husky">Husky</Link> },
          { key: 'list1154', label: <Link to="/app/frontend/engineering/lint/lintStaged">Lint-Staged</Link> },
          { key: 'list1155', label: <Link to="/app/frontend/engineering/lint/commitlint">Commitlint</Link> },
          { key: 'list1156', label: <Link to="/app/frontend/engineering/lint/editorConfig">EditorConfig</Link> },
        ],
      },
      {
        key: 'list116',
        label: 'Monorepo',
        children: [
          { key: 'list1161', label: <Link to="/app/frontend/engineering/monorepo/lerna">Lerna</Link> },
          { key: 'list1162', label: <Link to="/app/frontend/engineering/monorepo/turbo">Turbo</Link> },
          { key: 'list1163', label: <Link to="/app/frontend/engineering/monorepo/yarn">Yarn</Link> },
          { key: 'list1164', label: <Link to="/app/frontend/engineering/monorepo/pnpm">Pnpm</Link> },
          { key: 'list1165', label: <Link to="/app/frontend/engineering/monorepo/rush">Rush</Link> },
          { key: 'list1166', label: <Link to="/app/frontend/engineering/monorepo/bazel">Bazel</Link> },
        ],
      },
      {
        key: 'list117',
        label: 'Docker',
        children: [
          { key: 'list1171', label: <Link to="/app/frontend/engineering/docker/base">Docker基础</Link> },
          { key: 'list1172', label: <Link to="/app/frontend/engineering/docker/advanced">Docker进阶</Link> },
          { key: 'list1173', label: <Link to="/app/frontend/engineering/docker/image">Docker镜像</Link> },
          { key: 'list1174', label: <Link to="/app/frontend/engineering/docker/container">Docker容器</Link> },
          { key: 'list1175', label: <Link to="/app/frontend/engineering/docker/network">Docker网络</Link> },
          { key: 'list1176', label: <Link to="/app/frontend/engineering/docker/volume">Docker存储</Link> },
        ],
      },
      {
        key: 'list118',
        label: 'Nginx',
        children: [
          { key: 'list1181', label: <Link to="/app/frontend/engineering/nginx/base">Nginx基础</Link> },
          { key: 'list1182', label: <Link to="/app/frontend/engineering/nginx/advanced">Nginx进阶</Link> },
          { key: 'list1183', label: <Link to="/app/frontend/engineering/nginx/config">Nginx配置</Link> },
          { key: 'list1184', label: <Link to="/app/frontend/engineering/nginx/optimize">Nginx优化</Link> },
          { key: 'list1185', label: <Link to="/app/frontend/engineering/nginx/cache">Nginx缓存</Link> },
        ],
      },
    ],
  },
    {
    key: 'lists12',
    label: '算法',
    children: [
      { key: 'list121', label: '数组与字符串',
        children: [
          { key: 'list1210', label: <Link to="/app/frontend/A&S/ArrayBase">数组字符串基础</Link> },
          { key: 'list1211', label: <Link to="/app/frontend/A&S/TwoSum">两数之和</Link> },
          { key: 'list1212', label: <Link to="/app/frontend/A&S/3Sum">三数之和</Link> },
          { key: 'list1213', label: <Link to="/app/frontend/A&S/LSWRC">最长无重复子串</Link> },
          { key: 'list1214', label: <Link to="/app/frontend/A&S/CWMW">盛水最多的容器</Link>},
          { key: 'list1215', label: <Link to="/app/frontend/A&S/MZ">移动零</Link> },
          { key: 'list1216', label: <Link to="/app/frontend/A&S/MSA">合并有序数组</Link> },
          { key: 'list1217', label: <Link to="/app/frontend/A&S/PIS">字符串排列匹配</Link> }
        ]
      },
      { key: 'list122', label: '链表',
        children: [
          { key: 'list1220', label: <Link to="/app/frontend/LinkedList/LinkedListBase">链表基础</Link> },
          { key: 'list1221', label: <Link to="/app/frontend/LinkedList/RLL">反转链表</Link> },
          { key: 'list1222', label: <Link to="/app/frontend/Linkedlist/LLCD">环形链表检测</Link> },
          { key: 'list1223', label: <Link to="/app/frontend/Linkedlist/MTSL">合并两个有序链表</Link> },
          { key: 'list1224', label: <Link to="/app/frontend/Linkedlist/RNNFEOL">删除链表的倒数第K个节点</Link>},
          { key: 'list1225', label: <Link to="/app/frontend/Linkedlist/IOTLL">相交链表</Link> },
        ]
       },
      { key: 'list123', label: '栈与队列',
         children: [
          { key: 'list1230', label: <Link to="/app/frontend/Stack&Queue/S&Qbase">栈与队列基础</Link> },
          { key: 'list1231', label: <Link to="/app/frontend/Stack&Queue/VP">有效的括号</Link> },
          { key: 'list1232', label: <Link to="/app/frontend/Stack&Queue/IQUS">用栈实现队列</Link> },
          { key: 'list1233', label: <Link to="/app/frontend/Stack&Queue/MS">最小栈</Link> },
          { key: 'list1234', label: <Link to="/app/frontend/Stack&Queue/NGE">下一个更大元素</Link>},
        ]
       },
      { key: 'list124', label: '树结构',
                children: [
          { key: 'list1240', label: <Link to="/app/frontend/Tree/TreeBase">树结构基础</Link> },
          { key: 'list1241', label: <Link to="/app/frontend/Tree/BTLOT">二叉树层序遍历</Link> },
          { key: 'list1242', label: <Link to="/app/frontend/Tree/VBST">验证二叉搜索树</Link> },
          { key: 'list1243', label: <Link to="/app/frontend/Tree/MDOBT">二叉树的最大深度</Link> },
          { key: 'list1244', label: <Link to="/app/frontend/Tree/LCAOBT">二叉树的最优公共祖先</Link>},
          { key: 'list1245', label: <Link to="/app/frontend/Tree/BTZLOT">二叉树的锯齿型层序遍历</Link> },
          { key: 'list1246', label: <Link to="/app/frontend/Tree/ATT">数组转树</Link> },
        ]
       },
      { key: 'list125', label:'哈希表',         
        children: [
          { key: 'list1250', label: <Link to="/app/frontend/HashTable/Base">哈希表基础</Link> },
          { key: 'list1251', label: <Link to="/app/frontend/HashTable/IHT">实现哈希表</Link> },
          { key: 'list1252', label: <Link to="/app/frontend/HashTable/LC">LRU缓存机制</Link> },
          { key: 'list1253', label: <Link to="/app/frontend/HashTable/GA">字母异位词分组</Link> },
        ]
      },
      { key: 'list126', label: '堆',
        children: [
          { key: 'list1260', label: <Link to="/app/frontend/Heap/Base">堆基础</Link> },
          { key: 'list1261', label: <Link to="/app/frontend/Heap/KLEIAA">数组中的第K个最大元素</Link> },
          { key: 'list1262', label: <Link to="/app/frontend/Heap/MKSL">合并K个升序链表</Link> },
          { key: 'list1263', label: <Link to="/app/frontend/Heap/TKFE">前K个高频元素</Link> },
        ]
       },
      { key: 'list127', label: '图结构',
        children: [
          { key: 'list1270', label: <Link to="/app/frontend/Graph/Base">图结构基础</Link> },
          { key: 'list1271', label: <Link to="/app/frontend/Graph/DFS">图的DFS</Link> },
          { key: 'list1272', label: <Link to="/app/frontend/Graph/BFS">图的BFS</Link> },
          { key: 'list1273', label: <Link to="/app/frontend/Graph/DR">依赖解析与拓扑排序</Link>},
          { key: 'list1274', label: <Link to="/app/frontend/Graph/SPP">最短路径问题</Link>},
          { key: 'list1275', label: <Link to="/app/frontend/Graph/CP">连通性问题</Link>},
          { key: 'list1276', label: <Link to="/app/frontend/Graph/SGA">特殊图算法</Link>},
        ]
       },
      { key: 'list128', label:'动态规划',
        children: [
          { key: 'list1280', label: <Link to="/app/frontend/DynamicProgramming/Base">动态规划基础</Link> },
          { key: 'list1281', label: <Link to="/app/frontend/DynamicProgramming/FBP">斐波那契数列</Link> },
          { key: 'list1282', label: <Link to="/app/frontend/DynamicProgramming/MC">零钱兑换</Link> },
          { key: 'list1283', label: <Link to="/app/frontend/DynamicProgramming/LCS">最长公共子序列</Link>},
          { key: 'list1284', label: <Link to="/app/frontend/DynamicProgramming/KNAPSACK">0-1背包问题</Link>},
          { key: 'list1285', label: <Link to="/app/frontend/DynamicProgramming/CS">爬楼梯</Link>},
          { key: 'list1286', label: <Link to="/app/frontend/DynamicProgramming/MS">最大子序列和</Link>},
          { key: 'list1287', label: <Link to="/app/frontend/DynamicProgramming/LIS">最长递增子序列</Link>}, 
        ]
       },
      { key: 'list129', label: '排序',
        children: [
          { key: 'list1290', label: <Link to="/app/frontend/Sort/SortBase">排序基础</Link>},
          { key: 'list1291', label: <Link to="/app/frontend/Sort/Quick">快速排序</Link>},
          { key: 'list1292', label: <Link to="/app/frontend/Sort/Merge">归并排序</Link>},
          { key: 'list1293', label: <Link to="/app/frontend/Sort/Insertion">插入排序</Link>},
          { key: 'list1294', label: <Link to="/app/frontend/Sort/Bubble/">冒泡排序</Link> },
          { key: 'list1295', label: <Link to="/app/frontend/Sort/Selection">选择排序</Link>},
          { key: 'list1296', label: <Link to="/app/frontend/Sort/Bucket">桶排序</Link>},
          { key: 'list1297', label: <Link to="/app/frontend/Sort/Counting">计数排序</Link>},
          { key: 'list1298', label: <Link to="/app/frontend/Sort/Radix">基数排序</Link>},
        ]
       },
      { key: 'list130', label:'  其他',
        children: [ 
          { key: 'list1301', label: <Link to="/app/frontend/Other/Diff">Diff算法</Link>},
          { key: 'list1302', label: <Link to="/app/frontend/Other/Flatten">数组扁平化</Link>},
          { key: 'list1303', label: <Link to="/app/frontend/Other/SR">字符串反转</Link>},
          { key: 'list1304', label: <Link to="/app/frontend/Other/AR">嵌套数组反转</Link>},
          { key: 'list1305', label: <Link to="/app/frontend/Other/PC">回文串判断</Link>},
          { key: 'list1306', label: <Link to="/app/frontend/Other/OBC">对象深拷贝</Link>},
        ]
       },
    ],
  },
];
