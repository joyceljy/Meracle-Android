package com.meracle;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactlibrary.RNMindWaveMobilePackage;
import com.horcrux.svg.RNSvgPackage;
import com.horcrux.svg.RNSvgPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.horcrux.svg.RNSvgPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
           new RNMindWaveMobilePackage(),
            new RNSvgPackage(),
            new RNSvgPackage(),
            new ImagePickerPackage(),
            new VectorIconsPackage(),
            new MPAndroidChartPackage(),
	          new RNSvgPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
