// 用于页面切换
import {
    StackNavigator
} from 'react-navigation'

// tab 插件
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

// 引入页面
import Main from './app/Main/IsMain'
import LauncherPage from './app/Main/LauncherPage'

const App = StackNavigator(
  {
        // 路线配置
    Main: {
      screen: Main
    },
    LauncherPage: {
      screen: LauncherPage
    }
  },
  {// 路由配置
        // 默认页面
    initialRouteName: 'LauncherPage',
    headerMode: 'none',
        // 首页切换动画
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  }
)

export default App
