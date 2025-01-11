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
          colorPrimary: "#4a3ae1",
        },

        components: {
          Spin: {
            colorPrimary: "#4a3ae1",
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
            fontSize: 13,
            fontSizeSM: 11,
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
            borderRadius: 16,
            borderRadiusLG: 16,
            borderRadiusSM: 14,
            defaultHoverBg: "transparent",
            textHoverBg: "transparent",
          },
          Card: {
            headerFontSize: 18,
            colorBgContainer: "white",
            padding: 20,
            paddingLG: 24,
            headerHeight: 56,
          },
          Form: {
            marginLG: 12,
            labelColor: "#3D3D3D",
          },
          Layout: {
            headerBg: "#f5f5f5",
          },

          Table: {
            headerBg: "transparent",
            fontSize: 12,
            cellPaddingBlock: 10,
            cellPaddingInline: 10,
            rowHoverBg: "transparent",
          },
          Modal: {
            titleFontSize: 20,
          },
          Select: {
            controlHeight: 34,
            controlOutline: "none",
          },
          Tabs: {
            fontSize: 13,
            fontSizeLG: 14,
            fontSizeSM: 13,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppThemeProvider;
