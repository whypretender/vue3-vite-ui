import SButton from "./Button";
import { App } from "vue";

export { SButton };

SButton.install = function (app: App) {
  app.component(SButton.name, SButton);
};
export default SButton;
// export default {
//   install(app: App) {
//     app.component(SButton.name, SButton);
//   }
// };
