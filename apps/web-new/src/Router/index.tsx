// src/Router/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Welcome from '../pages/welcome';
import FrontendWelcome from '../pages/frontend/frontendWelcome';
import Home from '../page/Home';
import Menu from '../components/Menu';
import HMMenu from '../components/HMMenu'; // 假设鸿蒙菜单组件
import LLMMenu from '../components/LLMMenu'; // 假设大模型菜单组件
import HTMLBase from '../pages/frontend/html/base'
import HTMLAdvance from '../pages/frontend/html/advanced'
import HTMLInterview from '../pages/frontend/html/interview'
import CSSBase from '../pages/frontend/css/base'
import CSSAdvanced from '../pages/frontend/css/advanced'
import CSSInterview from '../pages/frontend/css/interview'
import CSSPreprocessor from '../pages/frontend/css/preprocessor'
import CSSFramework from '../pages/frontend/css/framework'
import CSSSelect from '../pages/frontend/css/select'
import JSBase from '../pages/frontend/javascript/base'
import JSAdvanced from '../pages/frontend/javascript/advanced'
import JSInterview from '../pages/frontend/javascript/interview'
import JSTS from '../pages/frontend/javascript/TS'
import ReactBase from '../pages/frontend/react/base'
import ReactAdvanced from '../pages/frontend/react/advanced'
import ReactInterview from '../pages/frontend/react/interview'
import ReactState from '../pages/frontend/react/state'
import VueBase from '../pages/frontend/vue/base'
import VueAdvanced from '../pages/frontend/vue/advanced'
import VueInterview from '../pages/frontend/vue/interview'
import VueState from '../pages/frontend/vue/state'
import WebpackBase from '../pages/frontend/build/webpack/base'
import WebpackAdvanced from '../pages/frontend/build/webpack/advanced'
import WebpackInterview from '../pages/frontend/build/webpack/interview'
import ViteBase from '../pages/frontend/build/vite/base'
import ViteAdvanced from '../pages/frontend/build/vite/advanced'
import ViteInterview from '../pages/frontend/build/vite/interview'
import Babel from '../pages/frontend/compiler/babel'
import SWC from '../pages/frontend/compiler/swc'
import Git from '../pages/frontend/git/base'
import GitPlatform from '../pages/frontend/git/platform'
import CICDBuild from '../pages/frontend/cicd/build'
import CICDDeploy from '../pages/frontend/cicd/deploy'
import CICDLint from '../pages/frontend/cicd/lint'
import CICDMonitor from '../pages/frontend/cicd/monitor'
import CICDSource from '../pages/frontend/cicd/source'
import CICDUnit from '../pages/frontend/cicd/unit'
import NetworkAttack from '../pages/frontend/network/advanced/attack'
import NetworkGateway from '../pages/frontend/network/advanced/gateway'
import NetworkGlobal from '../pages/frontend/network/advanced/global'
import NetworkLoadBalance from '../pages/frontend/network/advanced/loadBalance'
import NetworkObservability from '../pages/frontend/network/advanced/observability'
import NetworkTransport from '../pages/frontend/network/advanced/transport'
import NetworkZeroTrust from '../pages/frontend/network/advanced/zeroTrust'
import NetworkBrowserModel from '../pages/frontend/network/basic/browserModel'
import NetworkCache from '../pages/frontend/network/basic/cache'
import NetworkCors from '../pages/frontend/network/basic/cors'
import NetworkDebug from '../pages/frontend/network/basic/debug'
import NetworkHTTP from '../pages/frontend/network/basic/http'
import NetworkHTTPS from '../pages/frontend/network/basic/https'
import NetworkSecurity from '../pages/frontend/network/basic/security'
import EngineeringCross from '../pages/frontend/engineering/cross'
import EngineeringDebug from '../pages/frontend/engineering/debug'
import EngineeringNodeAdvance from '../pages/frontend/engineering/nodeAdvance'
import EngineeringNodeBase from '../pages/frontend/engineering/nodeBase'
import LintCommitlint from '../pages/frontend/engineering/lint/commitlint'
import LintLintStaged from '../pages/frontend/engineering/lint/lintStaged'
import LintESLint from '../pages/frontend/engineering/lint/eslint'
import LintPrettier from '../pages/frontend/engineering/lint/prettier'
import LintEditorConfig from '../pages/frontend/engineering/lint/editorConfig'
import LintHusky from '../pages/frontend/engineering/lint/husky'
import MonorepoLerna  from '../pages/frontend/engineering/monorepo/lerna'
import MonorepoTurbo  from '../pages/frontend/engineering/monorepo/turbo'
import MonorepoYarn  from '../pages/frontend/engineering/monorepo/yarn'
import MonorepoPnpm  from '../pages/frontend/engineering/monorepo/pnpm'
import MonorepoRush  from '../pages/frontend/engineering/monorepo/rush'
import MonorepoBazel  from '../pages/frontend/engineering/monorepo/bazel'
import DockerBase from '../pages/frontend/engineering/docker/base'
import DockerAdvanced from '../pages/frontend/engineering/docker/advanced'
import DockerImage from '../pages/frontend/engineering/docker/image'
import DockerContainer from '../pages/frontend/engineering/docker/container'
import DockerNetwork from '../pages/frontend/engineering/docker/network'
import DockerVolume from '../pages/frontend/engineering/docker/volume'
import NginxBase from '../pages/frontend/network/basic/http'
import NginxAdvanced from '../pages/frontend/engineering/nginx/advanced'
import NginxCache from '../pages/frontend/engineering/nginx/cache'
import NginxOptimize from '../pages/frontend/engineering/nginx/optimize'
import NginxConfig from '../pages/frontend/engineering/nginx/config'
import ArrayBase from '../pages/frontend/A&S/ArrayBase'
import TwoSum from '../pages/frontend/A&S/TwoSum'
import ThreeSum from '../pages/frontend/A&S/3Sum'
import LSWRC from '../pages/frontend/A&S/LSWRC'
import MSA from '../pages/frontend/A&S/MSA'
import CWMW from '../pages/frontend/A&S/CWMW'
import MZ	from '../pages/frontend/A&S/MZ'
import PIS from '../pages/frontend/A&S/PIS'
import LinkedListBase from '../pages/frontend/LinkedList/LinkedListBase'
import LinkedListRLL from '../pages/frontend/LinkedList/RLL'
import LinkedListLLCD	from '../pages/frontend/LinkedList/LLCD'
import LinkedListMTSL from '../pages/frontend/LinkedList/MTSL'
import LinkedListRNNFEOL	from '../pages/frontend/LinkedList/RNNFEOL'
import LinkedListIOTLL from '../pages/frontend/LinkedList/IOTLL'
import SQBase from '../pages/frontend/Stack&Queue/S&Qbase'
import SQVP from '../pages/frontend/Stack&Queue/VP'
import SQIQUS  from '../pages/frontend/Stack&Queue/IQUS'
import SQMS  from '../pages/frontend/Stack&Queue/MS'
import TreeBase from '../pages/frontend/Tree/TreeBase'
import TreeBTLOT from '../pages/frontend/Tree/BTLOT'
import TreeVBST from '../pages/frontend/Tree/VBST'
import TreeMDOBT from '../pages/frontend/Tree/MDOBT'
import TreeLCAOBT from '../pages/frontend/Tree/LCAOBT'
import TreeBTZLOT from '../pages/frontend/Tree/BTZLOT'
import TreeATT from '../pages/frontend/Tree/ATT'
import HashTableBase from '../pages/frontend/HashTable/Base'
import HashTableIHT from '../pages/frontend/HashTable/IHT'
import HashTableLC from '../pages/frontend/HashTable/LC'
import HashTableGA from '../pages/frontend/HashTable/GA'
import HeapBase from '../pages/frontend/Heap/Base'
import HeapKLEIAA from '../pages/frontend/Heap/KLEIAA'
import HeapMKSL from '../pages/frontend/Heap/MKSL'
import HeapTKFE from '../pages/frontend/Heap/TKFE'
import GraphBase from '../pages/frontend/Graph/Base'
import GraphDFS from '../pages/frontend/Graph/DFS'
import GraphBFS from '../pages/frontend/Graph/BFS'
import GraphDR from '../pages/frontend/Graph/DR'
import GraphSPP from '../pages/frontend/Graph/SPP'
import GraphCP from '../pages/frontend/Graph/CP'
import GraphSGA from '../pages/frontend/Graph/SGA'
import DPBase  from '../pages/frontend/DynamicProgramming/Base'
import DPFBP  from '../pages/frontend/DynamicProgramming/FBP'
import DPMC  from '../pages/frontend/DynamicProgramming/MC'
import DPLCS  from '../pages/frontend/DynamicProgramming/LCS'
import DPKNAPSACK  from '../pages/frontend/DynamicProgramming/KNAPSACK'
import DPCS  from '../pages/frontend/DynamicProgramming/CS'
import DPMS  from '../pages/frontend/DynamicProgramming/MS'
import DPLIS  from '../pages/frontend/DynamicProgramming/LIS'
import SortBase from '../pages/frontend/Sort/Sortbase'
import SortQuick from '../pages/frontend/Sort/Quick'
import SortMerge from '../pages/frontend/Sort/Merge'
import SortInsertion from '../pages/frontend/Sort/Insertion'
import SortBubble from '../pages/frontend/Sort/Bubble'
import SortSelection from '../pages/frontend/Sort/Selection'
import SortBucket from '../pages/frontend/Sort/Bucket'
import SortCounting from '../pages/frontend/Sort/Counting'
import SortRadix from '../pages/frontend/Sort/Radix'
import OtherDiff from '../pages/frontend/Other/Diff'
import OtherFlatten from '../pages/frontend/Other/Flatten'
import OtherSR from '../pages/frontend/Other/SR'
import OtherAR from '../pages/frontend/Other/AR'
import OtherPC from '../pages/frontend/Other/PC'
import OtherOBC from '../pages/frontend/Other/OBC'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/app',
    element: <Layout />,      // 公共外壳
    children: [
      { index: true, element: <Welcome /> }, 
  
      {
        path: 'frontend',
        element: <Menu />,
        children:[
          {index: true, 
            element: <FrontendWelcome />},
          {path: 'html/base', 
            element: <HTMLBase />}, // HTML基础
          {path: 'html/advanced',
             element: <HTMLAdvance />},
          {path: 'html/interview', 
            element: <HTMLInterview  />},
          {path: 'css/base', 
            element: <CSSBase />},
          {path: 'css/advanced', 
            element: <CSSAdvanced />},
          {path: 'css/interview', 
            element: <CSSInterview />},
          {path: 'css/preprocessor', 
            element: <CSSPreprocessor />},
          {path: 'css/framework',
            element: <CSSFramework />},
          {path: 'css/select', 
            element: <CSSSelect />},
          {path: 'javascript/base',
             element: <JSBase />},
          {path: 'javascript/advanced',
             element: <JSAdvanced />},
          {path: 'javascript/interview', 
            element: <JSInterview />},
          {path: 'javascript/ts',
             element: < JSTS />},
          {path: 'react/base', 
            element: <ReactBase />},
          {path: 'react/advanced', 
            element: <ReactAdvanced />},
          {path: 'react/state', 
            element: <ReactState />},
          {path: 'react/interview', 
            element: <ReactInterview />},
          {path: 'vue/base', 
            element: <VueBase />},
          {path: 'vue/advanced', 
            element: <VueAdvanced />},
          {path: 'vue/state', 
            element: <VueState />},
          {path: 'vue/interview', 
            element: <VueInterview />},
          {path: 'build/webpack/base', 
            element: <WebpackBase />},
          {path: 'build/webpack/advanced', 
            element: <WebpackAdvanced />},
          {path: 'build/webpack/interview', 
            element: <WebpackInterview />},
          {path: 'build/vite/base',
             element: <ViteBase />},
          {path: 'build/vite/advanced',
             element: <ViteAdvanced />},
          {path: 'build/vite/interview', 
            element: <ViteInterview />},
          {path: 'compiler/babel',
             element: <Babel />},
          {path: 'compiler/swc', 
            element: <SWC />},
          {path: 'git/base',
             element: <Git />},
          {path: 'git/platform',
            element: <GitPlatform />},
          {path: 'cicd/source', 
            element: <CICDSource />},
          {path: 'cicd/lint', 
            element: <CICDLint />},
          {path: 'cicd/unit',
             element: <CICDUnit />},
          {path: 'cicd/build', 
            element: <CICDBuild />},
          {path: 'cicd/deploy', 
            element: <CICDDeploy />},
          {path: 'cicd/monitor', 
            element: <CICDMonitor />},
          {path: 'network/basic/browserModel', 
            element: <NetworkBrowserModel />},
          {path: 'network/basic/http', 
            element: <NetworkHTTP />},
          {path: 'network/basic/cors',
             element: <NetworkCors />},
          {path: 'network/basic/cache', 
            element: <NetworkCache />},
          {path: 'network/basic/https', 
            element: <NetworkHTTPS />},
          {path: 'network/basic/security', 
            element: <NetworkSecurity />},
          {path: 'network/basic/debug',
             element: <NetworkDebug />},
          {path: 'network/advanced/transport', 
            element: <NetworkTransport />},
          {path: 'network/advanced/gateway',
             element: <NetworkGateway />},
          {path: 'network/advanced/loadBalance',
             element: <NetworkLoadBalance />},
          {path: 'network/advanced/attack', 
            element: <NetworkAttack />},
          {path: 'network/advanced/observability',
             element: <NetworkObservability />},
          {path: 'network/advanced/zeroTrust',
             element: <NetworkZeroTrust />},
          {path: 'network/advanced/global', 
            element: <NetworkGlobal />},
          {path: 'engineering/nodeBase',
             element: < EngineeringNodeBase/>},
          {path: 'engineering/nodeAdvance', 
            element: <EngineeringNodeAdvance />},
          {path: 'engineering/cross',
             element: <EngineeringCross />},
          {path: 'engineering/debug',
             element: < EngineeringDebug/>},
          {path: 'engineering/lint/eslint', 
            element: <LintESLint />},
          {path: 'engineering/lint/prettier', 
            element: <LintPrettier />},
          {path: 'engineering/lint/husky', 
            element: <LintHusky />},
          {path: 'engineering/lint/lintStaged', 
            element: <LintLintStaged />},
          {path: 'engineering/lint/commitlint',
             element: < LintCommitlint />},
          {path: 'engineering/lint/editorConfig',
             element: <LintEditorConfig />},
          {path: 'engineering/monorepo/lerna', 
            element: <MonorepoLerna />},
          {path: 'engineering/monorepo/turbo', 
            element: <MonorepoTurbo />},
          {path: 'engineering/monorepo/yarn', 
            element: <MonorepoYarn />},
          {path: 'engineering/monorepo/pnpm', 
            element: <MonorepoPnpm />},
          {path: 'engineering/monorepo/rush', 
            element: <MonorepoRush />},
          {path: 'engineering/monorepo/bazel',
             element: <MonorepoBazel />},
          {path: 'engineering/docker/base', 
            element: <DockerBase />},
          {path: 'engineering/docker/advanced', 
            element: <DockerAdvanced />},
          {path: 'engineering/docker/image', 
            element: <DockerImage />},
          {path: 'engineering/docker/container',
             element: <DockerContainer />},
          {path: 'engineering/docker/network', 
            element: <DockerNetwork />},
          {path: 'engineering/docker/volume',
             element: < DockerVolume />},
          {path: 'engineering/nginx/base',
             element: <NginxBase />},
          {path: 'engineering/nginx/advanced', 
            element: <NginxAdvanced />},
          {path: 'engineering/nginx/config', 
            element: <NginxConfig />},
          {path: 'engineering/nginx/optimize', 
            element: <NginxOptimize />},
          {path: 'engineering/nginx/cache', 
            element: <NginxCache />},
          {path: 'A&S/ArrayBase',
            element: <ArrayBase />},
          {path: 'A&S/TwoSum',
            element: <TwoSum />},
          {path: 'A&S/3Sum',
            element: <ThreeSum />},
          {path: 'A&S/LSWRC',
            element: <LSWRC />},
          {path: 'A&S/CWMW',
            element: <CWMW />},
          {path: 'A&S/MZ',
            element: <MZ />},
          {path: 'A&S/MSA',
            element: <MSA />},
          {path: 'A&S/PIS',
            element: <PIS />},
          {path: 'LinkedList/LinkedListBase',
            element: <LinkedListBase />},
          {path: 'LinkedList/RLL',
            element: <LinkedListRLL />},
          {path: 'LinkedList/LLCD',
            element: <LinkedListLLCD />},
          {path: 'LinkedList/MTSL',
            element: <LinkedListMTSL />},
          {path: 'LinkedList/RNNFEOL',
            element: <LinkedListRNNFEOL />},
          {path: 'LinkedList/IOTLL',
            element: <LinkedListIOTLL />},
          {path: 'Stack&Queue/S&Qbase',
            element: <SQBase/>},
          {path: 'Stack&Queue/VP',
            element: <SQVP />},
          {path: 'Stack&Queue/IQUS',
            element: <SQIQUS />},
          {path: 'Stack&Queue/MS',
            element: <SQMS />},
          {path: 'Tree/TreeBase',
            element: <TreeBase />},
          {path: 'Tree/BTLOT',
            element: <TreeBTLOT />},
          {path: 'Tree/VBST',
            element: <TreeVBST />},
          {path: 'Tree/MDOBT',
            element: <TreeMDOBT />},
          {path: 'Tree/LCAOBT',
            element: <TreeLCAOBT />},
          {path: 'Tree/BTZLOT',
            element: <TreeBTZLOT />},
          {path: 'Tree/ATT',
            element: <TreeATT />},
          {path:'HashTable/Base',
            element: <HashTableBase />},
          {path:'HashTable/IHT',
            element: <HashTableIHT />},
          {path:'HashTable/LC',
            element: < HashTableLC />},
          {path:'HashTable/GA',
            element: <HashTableGA />},
          {path:'Heap/Base',
            element: <HeapBase />},
          {path:'Heap/KLEIAA',
            element: <HeapKLEIAA />},
          {path:'Heap/MKSL',
            element: <HeapMKSL />},
          {path:'Heap/TKFE',
            element: <HeapTKFE />},
          {path:'Graph/Base',
            element: <GraphBase />},
          {path:'Graph/DFS',
            element: <GraphDFS />},
          {path:'Graph/BFS',
            element: <GraphBFS />},
          {path:'Graph/DR',
            element: < GraphDR />},
          {path:'Graph/SPP',
            element: <GraphSPP />},
          {path:'Graph/CP',
            element: <GraphCP />},
          {path:'Graph/SGA',
            element: <GraphSGA />},
          {path:'DynamicProgramming/Base',
            element: <DPBase />},
          {path:'DynamicProgramming/FBP',
            element: <DPFBP />},
          {path:'DynamicProgramming/MC',
            element: <DPMC />},
          {path:'DynamicProgramming/LCS',
            element: <DPLCS />},
          {path:'DynamicProgramming/KNAPSACK',
            element: <DPKNAPSACK />},
          {path:'DynamicProgramming/CS',
            element: <DPCS />},
          {path:'DynamicProgramming/MS',
            element: <DPMS />},
          {path:'DynamicProgramming/LIS',
            element: <DPLIS />},
          {path:'Sort/SortBase',
            element: <SortBase />},
          {path:'Sort/Quick',
            element: <SortQuick />},
          {path:'Sort/Merge',
            element: <SortMerge />},
          {path:'Sort/Insertion',
            element: <SortInsertion />},
          {path:'Sort/Bubble',
            element: <SortBubble />},
          {path:'Sort/Selection',
            element: <SortSelection />},
          {path:'Sort/Bucket',
            element: <SortBucket />},
          {path:'Sort/Counting',
            element: <SortCounting />},
          {path:'Sort/Radix',
            element: <SortRadix />},
          {path:'Other/Diff',
            element: <OtherDiff />},
          {path:'Other/Flatten',
            element: < OtherFlatten />},
          {path:'Other/SR',
            element: < OtherSR />},
          {path:'Other/AR',
            element: < OtherAR />},
          {path:'Other/PC',
            element: < OtherPC />},
          {path:'Other/OBC',
            element: < OtherOBC />}, 


        ] 
      },
      {
        path: 'harmonyos',
        element: <HMMenu />,
        children:[
          {index: true, element: <Home />}
        ] 
      },
      {
        path: 'llm',
        element: <LLMMenu />,
        children:[
          {index: true, element: <Home />}
        ] 
      },
    ]
  },

  // 404
  { path: '*', element: <h1>404 Not Found</h1> }
], { basename: '/' });


export default function AppRouter() {
  return <RouterProvider router={router} />;
}
