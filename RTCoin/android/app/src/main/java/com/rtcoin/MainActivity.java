package com.rtcoin;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;
import cn.jpush.android.api.JPushInterface;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RTCoin";
    }

      @Override
        protected void onCreate(Bundle saveInstanceState){
            SplashScreen.show(this);
            super.onCreate(saveInstanceState);
            JPushInterface.init(this);
        }

        @Override
            protected void onPause() {
                super.onPause();
                JPushInterface.onPause(this);
            }

            @Override
            protected void onResume() {
                super.onResume();
                JPushInterface.onResume(this);
            }

            @Override
            protected void onDestroy() {
                super.onDestroy();
            }
}
