import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.christ.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    // iOS specific configs if needed
  }
} as NativeScriptConfig;
