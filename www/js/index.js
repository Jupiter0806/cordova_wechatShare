/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

angular.module('starter', ['ionic'])

.controller('ctrl', function ($scope) {
        $scope.test = 'test';

        $scope.isInstalled = function () {
          Wechat.isInstalled(function (installed) {
              alert("Wechat installed: " + (installed ? "Yes" : "No"));
          }, function (reason) {
              alert("Failed: " + reason);
          })
        };

        $scope.auth = function () {
            Wechat.auth("snsapi_userinfo", function (response) {
                alert(JSON.stringify(response));
            }, function (reason) {
                alert("Failed: " + reason);
            })
        };

        $scope.shareTest = function () {
          Wechat.share({
              text: "test",
              scene: Wechat.Scene.TIMELINE
          }, function () {
              alert("Success");
          }, function (reason) {
              alert("Failed: " + reason);
          });
        };

        $scope.shareMedia = function () {

        };

        $scope.shareAudio = function () {
          Wechat.share({
              message: {
                  title: 'music',
                  description: "test",
                  thumb: 'http://192.168.1.109/uploadfile/photo/20160713164125288_mediaphoto1.png',
                  media: {
                      type: Wechat.Type.MUSIC,
                      musicUrl: "http://192.168.1.109/uploadfile/media/20160712161226955_01 Title.mp3",
                      musicDataUrl: "http://192.168.1.109/uploadfile/media/20160712161226955_01 Title.mp3"
                  }
              },
              scene: Wechat.Scene.TIMELINE
          }, function () {
              alert("Success");
          }, function (reason) {
              alert("Failed: " + reason);
          });
        };

        $scope.shareLink = function () {
            Wechat.share({
                message: {
                    title: 'Hi, there',
                    description: "this is description",
                    thumb: 'www/img/logo.png',
                    mediaTagName : '这是第三方带的测试字段',
                    messageAction : '<action>dotalist</action>',
                    media : {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: "http://tech.qq.com/zt2012/tmtdecode/252.htm"
                    }
                },
                scene: Wechat.Scene.TIMELINE
            }, function () {
                alert("Success");
            }, function (reason) {
                alert("Failed: " + reason);
            });
        };
    })

;
