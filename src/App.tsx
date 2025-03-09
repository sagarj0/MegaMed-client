import { App as AntdAppContext } from "antd";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { router } from "./router";
import CommonAntdTheme from "./theme/";

const App: React.FC = () => {
  console.log(document.title);

  return (
    <CommonAntdTheme>
      <AntdAppContext>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AntdAppContext>
    </CommonAntdTheme>
  );
};

export default App;
