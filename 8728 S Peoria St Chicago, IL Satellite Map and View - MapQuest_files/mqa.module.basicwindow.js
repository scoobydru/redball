MQA.Loader.registerCss("basicwindow",".mqabasicwnd{position:absolute;font-family:arial,verdana,helvetica,sans-serif;font-size:10px;color:#434343;cursor:default;}.mqabasicwnd-client{font-size:1em;position:relative;background-color:white;overflow:hidden;padding-bottom:2px;}.mqabasicwnd-border{position:absolute;top:0;left:0;}.mqabasicwnd-corner div{background-repeat:no-repeat;width:10px;height:10px;}.mqabasicwnd-close{position:absolute;top:-18px;right:-18px;width:21px;height:21px;background-position:-395px -294px;}.mqabasicwnd-close:hover{cursor:pointer;background-position:-395px -324px;}.mqabasicwnd-pointer-bottom{background-position:-325px -349px;bottom:-20px;position:absolute;width:20px;height:20px;}.mqabasicwnd-pointer-top{background-position:-324px -299px;position:absolute;height:20px;top:-24px;width:20px;}.mqabasicwnd-pointer-left{background-position:-324px -299px;position:absolute;height:20px;top:-24px;width:20px;}.mqabasicwnd-pointer-middleLeft{background-position:-304px -324px;position:absolute;top:-24px;width:20px;height:20px;z-index:1;}.mqabasicwnd-pointer-middleRight{background-position:-347px -324px;position:absolute;top:-24px;width:20px;height:20px;z-index:1;}.mqabasicwnd-pointer-topLeft{background-position:-324px -299px;position:absolute;top:-24px!important;width:20px;height:20px;z-index:1;}.mqabasicwnd-pointer-topRight{background-position:-324px -299px;position:absolute;top:-24px;width:20px;height:20px;z-index:1;}.mqabasicwnd-pointer-bottomLeft{background-position:-324px -344px;position:absolute;bottom:-24px;width:20px;height:20px;z-index:1;}.mqabasicwnd-pointer-bottomRight{background-position:-324px -344px;position:absolute;bottom:-24px;width:20px;height:20px;z-index:1;}.mqabasicwnd-btop div{position:absolute;top:-10px;height:10px;background-position:top center;}.mqabasicwnd-bbottom div{position:absolute;height:10px;bottom:-10px;left:0;background-position:bottom center;}.mqabasicwnd-bleft div{position:absolute;width:10px;left:-10px;background-position:center left;}.mqabasicwnd-bright div{position:absolute;width:10px;right:-10px;top:0;background-position:center right;}.mqabasicwnd-bul{position:absolute;width:10px;height:10px;top:-10px;left:-10px;}.mqabasicwnd-corner .mqabasicwnd-bur{position:absolute;top:-10px;right:-10px;width:10px;height:10px;background-position:top right;}.mqabasicwnd-corner .mqabasicwnd-bll{position:absolute;left:-10px;bottom:-10px;width:10px;height:10px;background-position:bottom left;}.mqabasicwnd-corner .mqabasicwnd-blr{position:absolute;bottom:-10px;right:-10px;width:10px;height:10px;background-position:bottom right;}.mqaie6 .mqabasicwnd-close{background-position:-384px -330px;}.mqaie6 .mqabasicwnd-pointer-bottom{width:13px;background-position:-256px -334px;}.mqaie6 .mqabasicwnd-pointer-top{width:13px;background-position:-302px -334px;}.mqaie6 .mqabasicwnd-pointer-left{width:13px;height:20px;bottom:-20px;background-position:-279px -332px;}.mqaie6 .mqabasicwnd-bbottom div{height:21px;bottom:-20px;}.mqaie6 .mqabasicwnd-bright div{width:21px;right:-20px;}.mqaie6 .mqabasicwnd-corner .mqabasicwnd-bur{right:-20px;width:20px;}.mqaie6 .mqabasicwnd-corner .mqabasicwnd-bll{height:20px;bottom:-20px;}.mqaie6 .mqabasicwnd-corner .mqabasicwnd-blr{bottom:-20px;right:-20px;width:20px;height:20px;}.mqabasicwnd-titletext,.trafficInfoWindowTitle{font-size:1.4em;font-weight:bold;color:#51214D;padding:5px 10px;}.trafficInfoWindowContent{font-size:1.2em;font-weight:normal;width:250px;line-height:1.3em;padding:0 10px;}.trafficInfoWindowRollover{font-size:1.4em;white-space:nowrap;color:#009ade;font-weight:bold;cursor:pointer;}.trafficInfoWindowZoomLink{font-size:1.2em;line-height:2em;padding:5px 10px 10px;}.transitRollover .timeEstimate{display:block;white-space:nowrap;font-size:11px;font-weight:normal;}");(function(){var I=window.MQA,L=I.Util,M=I.EventUtil,J=M.EventCallback,A=M.observe,N=M.stopObserving,K=M.stop,F=M.AddDOMEventProtocol,D=M.element,O=I.Event,C=I.EventManager.trigger,G=I.ZIndex.set;I.Loader.requireCss("basicwindow");var E="['div#root.mqabasicwnd',[0,'div#border.mqabasicwnd-border',[0,'div.mqabasicwnd-edge',[0,'div#topEdge.mqabasicwnd-btop',[],0,'div#bottomEdge.mqabasicwnd-bbottom',[],0,'div#leftEdge.mqabasicwnd-bleft',[],0,'div#rightEdge.mqabasicwnd-bright',[],0,'div#pointer.mqabasicwnd-pointer-bottom',[],0],0,'div.mqabasicwnd-corner',[0,'div.mqabasicwnd-bul',[],0,'div.mqabasicwnd-bll',[],0,'div.mqabasicwnd-bur',[],0,'div.mqabasicwnd-blr',[],0],0],0,'div#client.mqabasicwnd-client',[0,'div#titlebar.mqabasicwnd-titlebar',[0,'h1#titletext.mqabasicwnd-titletext',[],0],0,'div#content.mqabasicwnd-content',[],0],0,'div#close.mqabasicwnd-close',[],0]]";function H(Q,X){var S=X.width,b=X.height,W=Q.pointer,a=X.pointerOffset,c,U,T,Z=X.iconHeight||0,Y=X.iconWidth||0;function R(f,d,e){Q[f].style[d]=e}R("client","width",S+"px");R("client","height",b+"px");R("border","width",S+"px");R("border","height",b+"px");R("titlebar","display",X.titleVisible?"block":"none");R("close","display",X.closeVisible?"block":"none");function V(g,l,k,i,f){var e=g.firstChild,j=0,d,h;while(l>0){if(!e){e=document.createElement("div");g.appendChild(e)}d=l;if(d>k){d=k}e.style[f]=j+"px";e.style[i]=d+"px";j+=d;l-=d;e=e.nextSibling}while(e){h=e;e=e.nextSibling;g.removeChild(h)}}V(Q.topEdge,S,600,"width","left");V(Q.bottomEdge,S,600,"width","left");V(Q.leftEdge,b,600,"height","top");V(Q.rightEdge,b,600,"height","top");switch(X.pointerEdge){case"bottomLeft":c="bottom";W.style.left=a+"px";U=a+7;T=b+20;break;case"bottomRight":c="bottom";W.style.left=(S-a-20)+"px";U=S-(a+7);T=b+20;break;case"topLeft":c="top";W.style.left=a+"px";U=a+7;T=-(20+Z);break;case"topRight":c="top";W.style.left=(S-a-20)+"px";U=S-(a+7);T=-(20+Z);break;case"middleLeft":c="left";W.style.top=(b/2)+"px";W.style.left=(-20)+"px";U=-(20+(Y/2));T=b/2;break;case"middleRight":c="right";W.style.top=(b/2)+"px";W.style.left=(S+9)+"px";U=S+20+(Y/2);T=b/2;break;case"bottomMiddle":c="bottom";W.style.left=((S/2)-a-10)+"px";U=S/2;T=b+20;break;case"topMiddle":c="top";W.style.left=((S/2)-a-10)+"px";U=S/2;T=-(20+Z);break;default:c="none";U=0;T=0;break}X.offsetLeft=U;X.offsetTop=T;W.className="mqabasicwnd-pointer-"+c;R("content","display",X.contentVisible?"block":"none");R("border","display","block")}function B(Q,R){while(Q.lastChild){Q.removeChild(Q.lastChild)}if(typeof (R)=="string"){Q.innerHTML=R}else{Q.appendChild(R)}}function P(){if(typeof (E)=="string"){E=I._jsEval(E)}var Q=I.Util.html(E);this.elements=Q;I.Util.ie6Class(Q.root);this.addDOMEvent("touchstart","click","mouseover","mouseout");this.position={x:0,y:0};this._waitVisibleCount=0;this._constraintsChanged=true;this._positionChanged=true;this.zIndex="window";this.settings={width:0,height:0,pointerOffset:0,pointerEdge:"bottomLeft",titleVisible:true,closeVisible:true,contentVisible:true}}P.prototype={onOpen:function(Q){var R=this.elements;this.wm=Q;Q.map.connectSuppressEvents(R.root);this._wireDOMEvents(R.root);this._setupPosition();this.draw();this._applyZIndex()},bringToFront:function(){var Q=this.elements.root,R=Q.parentNode;if(R&&!Q.nextSibling){R.appendChild(Q)}},setVisible:function(Q){var R=!this.visible;this.visible=Q;if(R){this.draw()}this.elements.root.style.visibility=(Q?"":"hidden")},getVisible:function(){return this.visible},getNaturalDimensions:function(){function Z(g){return{elt:g,overflow:g.style.overflow,width:g.style.width,height:g.style.height}}function X(h){var g=h.elt;g.style.overflow=h.overflow;g.style.width=h.width;g.style.height=h.height}function V(g){g.style.overflow="visible";g.style.width="auto";g.style.height="auto"}var R=this.elements,U=R.client,b=R.titlebar,a=R.titletext,Y=R.content,d=R.root,T=Z(U),Q=Z(b),f=Z(a),c=Z(Y),S,e,W=this.visible;if(!W){this.visible=true;d.style.visibility="hidden";this.draw()}V(U);V(b);V(a);V(Y);if(I.browser.ie6){U.style.width="0"}S=U.offsetWidth;U.style.width=S+"px";e=U.offsetHeight;X(T);X(c);X(f);X(Q);if(!W){this.visible=false}return{width:S,height:e}},setPosition:function(Q){this.position=Q;this._positionChanged=true;this.draw()},_setupPosition:function(){var R=this.transform,Q=this.position,S,T;if(typeof (Q.lat)!="number"||typeof (Q.lng)!="number"){Q.global=false;return false}else{Q.global=true}if(!R){return false}S=R.latLngToDisplay(Q.lat,Q.lng);T=(S.x!=Q.x||S.y!=Q.y);Q.x=S.x;Q.y=S.y;return T},setDimensions:function(R,Q){this.settings.width=R;this.settings.height=Q;this._constraintsChanged=true;this.draw()},setCloseVisible:function(Q){this.settings.closeVisible=Q;this.draw()},setPointerVisible:function(R,Q){this.settings.pointerVisible=R;if(Q){this.settings.pointerEdge=Q}this._constraintsChanged=true;this.draw()},_setBackgrounds:function(U){try{U.close.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')";var Q=U.border.childNodes[1];if(Q){var T=Q.childNodes;for(var S=0;S<T.length;S++){T[S].style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')"}}if(U.bottomEdge.firstChild){U.bottomEdge.firstChild.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')";U.topEdge.firstChild.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')";U.leftEdge.firstChild.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')";U.rightEdge.firstChild.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')"}U.pointer.style.backgroundImage="url('"+MQCDN+"images/sprite_info_window.png')"}catch(R){}},draw:function(){var S,V=this.position,R=this.dimensions,T=this.settings,Y=this.wm,Q=this.elements,X=Q.root,W=Q.content,U=Q.border;if(!Y||!this.visible){return }S=V.global?Y.globalSurface:Y.screenSurface;if(S!==X.parentNode){if(X.parentNode){X.parentNode.removeChild(X)}S.appendChild(X)}if(this._positionChanged){this._setupPosition();this._positionChanged=false}T.pointerEdge=this.determineWindowDirection();T.iconHeight=V.iconHeight;T.iconWidth=V.iconWidth;if(this._constraintsChanged){H(Q,T);this._constraintsChanged=false}T.left=(parseInt(V.x)-T.offsetLeft+(V.offsetX||0));T.top=(parseInt(V.y)-T.offsetTop+(V.offsetY||0));X.style.left=T.left+"px";X.style.top=T.top+"px";this._setBackgrounds(Q)},determineWindowDirection:function(){var U=this.position,X=this.wm,R=this.settings;var V,Y=X.map.llToPix(new I.LatLng(U.lat,U.lng));var T=(R.height+U.iconHeight-U.offsetY);var W=(R.width+U.iconWidth-U.offsetX);var Q=((R.width/2)+U.iconWidth-U.offsetX),S=Y.x-Q>=0&&Y.x+Q<=X.map.getSize().width;if(S){return(T<Y.y?"bottom":"top")+"Middle"}if(T<Y.y){V="bottom"}else{if(T>Y.y&&T<(X.map.getSize().height-Y.y)){V="top"}else{V="middle"}}if(W<X.map.getSize().width-Y.x){V+="Left"}else{V=V+=(Y.x>X.map.getSize().width/2)?"Right":"Left"}return V},getBounds:function(){var Q=this.elements.root,S=this.settings,R={x1:S.left-20,y1:S.top-20};R.x2=R.x1+S.width+40;R.y2=R.y1+S.height+40;return R},_onDOMEvent:function(R){var T=this._mouseOverState,Q;switch(R.type){case"mouseover":if(!T){this._mouseOverState=true;Q=new O("MQA.BasicWindow.mouseoverstate",this);Q.isOver=true;C(this,"mouseoverstate",Q);C(this.opener,"infowindowmouseoverstate",new O("MQA.Poi.infowindowmouseoverstate",this))}break;case"mouseout":if(T){this._mouseOverState=false;Q=new O("MQA.BasicWindow.infowindowmouseoutstate",this);Q.isOver=false;C(this,"mouseoutstate",Q)}break;case"click":case"touchstart":if(D(R)===this.elements.close){K(R);if(this.wm&&!this.disposed){this.wm.close(this.id,this.opener);Q=new O("BasicWindow.clickclosewindow");Q.srcObject=this.opener;C(this.opener,"infowindowclose",Q);C(this.wm.map,"InfoWindowClose",Q)}return }break}var U=D(R);if(U.parentNode!=null){if((I.browser.os=="ipad"||I.browser.os=="iphone"||I.browser.os=="android")&&I.browser.name=="safari"){if(U.href!=undefined){window.location.href=R.target.href}var S=U.parentNode;if(S.href!=null){window.location.href=S.href}}}Q=new O("BasicWindow."+R.type,this);Q.domEvent=R;C(this,R.type,Q)},dispose:function(){if(this.disposed){return }var S=this.elements,Q=S.root,R;this.wm.map.disconnectSuppressEvents(S.root);Q.parentNode.removeChild(Q);this.disposed=true;R=new O("BasicWindow.dispose");R.srcObject=this.opener;C(this.opener,"infowindowdispose",R)},resetTransform:function(Q){this.transform=Q;this._positionChanged=true;this.draw()},setTitle:function(Q){B(this.elements.titletext,Q||"")},setTitleBackgroundColor:function(Q){this.elements.titletext.style.backgroundColor=Q},setContent:function(Q){B(this.elements.content,Q||"")},getZIndex:function(){return this.zIndex},setZIndex:function(Q){if(Q!=this.zIndex){this.zIndex=Q;this._applyZIndex()}},_applyZIndex:function(){if(this.wm){G(this.elements.root,this.zIndex)}}};F(P.prototype);I.BasicWindow=P;I.Loader._moduleLoaded("basicwindow")})();