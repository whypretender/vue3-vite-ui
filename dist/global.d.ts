// 全局组件类型声明文件 for Volar
import Button from './components/button';

declare module "vue" {
  // 全局组件需要定义 interface GlobalComponents
  export interface GlobalComponents {
    SButton: typeof Button;
  }
}

export {};
