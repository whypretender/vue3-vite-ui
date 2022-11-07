import { App } from "vue";
import { SButton } from "./components/button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import "uno.css";

const components = {
  SButton
};
Object.keys(components).forEach((key) => {
  components[key].install = function (app: App) {
    app.component(components[key].name, components[key]);
  };
});

// 导出单独组件
export { SButton, SFCButton, JSXButton };
// export * from "./button";
// 全局导出 ，编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
