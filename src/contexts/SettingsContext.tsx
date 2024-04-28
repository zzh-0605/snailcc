import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import {
  getColorPresets,
  colorPresets,
  defaultPreset,
  IColorPreset,
  PresetsKey,
} from "../utils/getColorPresets";
// config
import { defaultSettings, cookiesKey, cookiesExpires } from "../config";
import { Direction } from "@mui/material";

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  onToggleStretch: () => {},
  onChangeLayout: () => {},
  onResetSetting: () => {},
  setColor: defaultPreset,
  colorOption: [] as Array<any>,
};

const SettingsContext = createContext<ISetting>(initialState);

interface ISettingsProviderProps {
  children: React.ReactNode;
  defaultSettings?: Partial<ISetting>;
}

function SettingsProvider({
  children,
  defaultSettings = {},
}: ISettingsProviderProps) {
  const [settings, setSettings] = useSettingCookies(defaultSettings);

  const onChangeMode = (event?: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: event?.target?.value,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings?.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeDirection = (event?: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: event?.target?.value as Direction,
    });
  };

  const onChangeColor = (event?: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: event?.target?.value,
    });
  };

  const onChangeLayout = (event?: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeLayout: event?.target?.value,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onToggleMode,
        onChangeDirection,
        onChangeColor,
        setColor: getColorPresets(
          (settings.themeColorPresets as PresetsKey) || "default"
        ),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        onToggleStretch,
        onChangeLayout,
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };

// ----------------------------------------------------------------------

interface ISetting {
  themeMode?: string;
  themeDirection?: Direction;
  themeColorPresets?: string;
  themeLayout?: string;
  themeStretch?: boolean;
  onChangeMode?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMode?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDirection?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeColor?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleStretch?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLayout?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onResetSetting?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  setColor?: IColorPreset;
  colorOption?: Array<any>;
}

const useSettingCookies = (defaultSettings: ISetting) => {
  const [settings, setSettings] = useState<ISetting>(defaultSettings);

  const onChangeSetting = () => {
    Cookies.set(cookiesKey.themeMode, settings.themeMode as string, {
      expires: cookiesExpires,
    });

    Cookies.set(cookiesKey.themeDirection, settings.themeDirection as string, {
      expires: cookiesExpires,
    });

    Cookies.set(
      cookiesKey.themeColorPresets,
      settings.themeColorPresets as string,
      {
        expires: cookiesExpires,
      }
    );

    Cookies.set(cookiesKey.themeLayout, settings.themeLayout as string, {
      expires: cookiesExpires,
    });

    Cookies.set(
      cookiesKey.themeStretch,
      JSON.stringify(settings.themeStretch),
      {
        expires: cookiesExpires,
      }
    );
  };

  useEffect(() => {
    onChangeSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  return [settings, setSettings] as [
    settings: ISetting,
    setSettings: React.Dispatch<React.SetStateAction<ISetting>>
  ];
};
