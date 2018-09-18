/*
 * RNN reduxHOC
 *
 * Use Navigation.events().bindComponent(this) from inside your component's constructor
 * and all methods will be automatically triggered just for this component
 *
 * Created by Phuong <phuong.to@getabstract.com> on 2018-07-16
 * Copyright © 2018 getAbstract. All rights reserved.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';
import { Navigation } from 'react-native-navigation';

export default function withRNNReduxHOC(Scene, store) {
  const sceneName = Scene.displayName || Scene.name || 'Scene';
  class WithRNNReduxHOC extends Component {
    static options = {
      ...Scene.options,
    };

    static displayName = `WithRNNReduxHOC(${sceneName})`;

    constructor(props) {
      super(props);
      this.setSceneChildRef = (element) => {
        this.sceneChild = element;
      };
      this.subscription = Navigation.events().bindComponent(this);
    }

    componentDidMount() {
      this.instance = this.sceneChild.getWrappedInstance();
    }

    componentWillUnmount() {
      this.subscription.remove();
    }

    resendEvent = (eventName, params) => {
      if (this.instance && this.instance[eventName]) {
        this.instance[eventName](params);
      }
    };

    componentDidAppear() {
      this.resendEvent('componentDidAppear');
    }

    navigationButtonPressed({ buttonId, componentId }) {
      this.resendEvent('navigationButtonPressed', buttonId, componentId);
    }

    render() {
      return (
        <Provider store={store}>
          <Scene
            ref={this.setSceneChildRef}
            {...this.props}
          />
        </Provider>
      );
    }
  }
  return hoistStatics(WithRNNReduxHOC, Component);
}
