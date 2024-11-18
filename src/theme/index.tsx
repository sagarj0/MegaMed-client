import { ConfigProvider } from "antd";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
          colorError: "#f34141",
          fontWeightStrong: 500,
        },

        components: {
          Spin: {
            colorPrimary: "blue",
          },
          DatePicker: {
            controlHeight: 34,
          },
          Input: {
            controlHeight: 34,
            activeShadow: "none",
          },
          InputNumber: {
            activeShadow: "none",
            controlHeight: 34,
          },

          Typography: {
            fontSizeHeading5: 14,
            colorTextHeading: "#2B2B2B",
            colorText: "#575F6E",
          },
          Descriptions: {
            titleMarginBottom: 10,
          },
          Button: {
            defaultShadow: "none",
            primaryShadow: "none",
            dangerShadow: "none",
          },
          Card: {
            padding: 20,
            headerFontSize: 20,
            colorBgContainer: "white",
            paddingLG: 24,
          },
          Form: {
            marginLG: 12,
            labelColor: "#3D3D3D",
          },
          Layout: {
            headerBg: "#f5f5f5",
          },

          Table: {
            headerBg: "white",
            // fontSize: 12,
            headerColor: "#757383",
            footerBg: "white",
            controlItemBgActive: "#e5e5f9",
            rowSelectedHoverBg: "#e5e5f9",
            rowHoverBg: "#f1f1fa",
            cellPaddingBlock: 10,
            cellPaddingInline: 10,
            selectionColumnWidth: 50,
          },
          Cascader: {
            optionSelectedBg: "rgb(240, 246, 223)",
          },
          Modal: {
            titleFontSize: 20,
          },
          Select: {
            controlHeight: 34,
            controlOutline: "none",
            optionSelectedBg: "#ededf7",
          },
          Menu: {
            itemSelectedColor: "white",
          },
          Tabs: {
            itemColor: "rgb(164, 164, 164)",
            cardBg: "rgb(255, 255, 255)",
            itemSelectedColor: "rgb(41, 41, 41)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppThemeProvider;
