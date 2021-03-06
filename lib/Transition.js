Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');


var _Fade=require('./transitions/Fade');var _Fade2=_interopRequireDefault(_Fade);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
overflow:'hidden'},

animatedContainer:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0}});



var uniqueId=0;

var createUniqueId=function createUniqueId(){
uniqueId+=1;
return uniqueId;
};

var createTransition=function createTransition(){var _class,_temp;var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_Fade2.default;var animation=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_reactNative.Animated.timing;
var instance=null;

return _temp=_class=function(_Component){_inherits(Transition,_Component);_createClass(Transition,null,[{key:'show',value:function show(




























element){var customStyle=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var customAnimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;
if(instance===null){
throw new Error('No transition component rendered to show a transition');
}


return instance.show(element,customStyle,customAnimation);
}}]);

function Transition(props){_classCallCheck(this,Transition);var _this=_possibleConstructorReturn(this,(Transition.__proto__||Object.getPrototypeOf(Transition)).call(this,
props));_this.





































































__animate=function(){var _this$state=
_this.state,children=_this$state.children,value=_this$state.value;var _this$props=

_this.props,onTransitioned=_this$props.onTransitioned,onLayout=_this$props.onLayout,other=_objectWithoutProperties(_this$props,['onTransitioned','onLayout']);





if(children.length!==2){
return;
}


var item=children[1];

var config=_extends({},other,{
toValue:1,
useNativeDriver:false});


_this.__animation=item.animation(value,config);
_this.__animation.start(function(complete){
_this.__animation=null;



if(complete){
var newChildren=_this.state.children.slice();


newChildren.shift();



var skipped=newChildren.splice(1,newChildren.length-2);

if(onTransitioned){
onTransitioned(newChildren[0].id);

skipped.forEach(function(itm){return onTransitioned(itm.id);});
}



_this.setState({
children:newChildren,
value:new _reactNative.Animated.Value(0)},
_this.__animate);
}
});
};_this.

__onLayout=function(_ref){var nativeEvent=_ref.nativeEvent;
_this.setState({
bounds:{
width:nativeEvent.layout.width,
height:nativeEvent.layout.height}},

function(){return _this.props.onLayout&&_this.props.onLayout(_this.state.bounds);});
};_this.

__renderElement=function(item,idx,allItems){

if(!item){
return null;
}


if(idx>1){
return null;
}var _this$state2=

_this.state,bounds=_this$state2.bounds,value=_this$state2.value;


if(!bounds){
return null;
}



var userStyle=allItems.length>1?allItems[1].style:item.style;






var styler=idx===0?userStyle.out:userStyle.in;

var animatedStyle=styler(value,bounds,_this.props);
return(
_react2.default.createElement(_reactNative.Animated.View,{key:item.id,style:[styles.animatedContainer,animatedStyle]},
item.element));


};instance=_this;_this.state={bounds:null,children:[{id:createUniqueId(),element:_react2.default.Children.only(props.children),style:style,animation:animation}],value:new _reactNative.Animated.Value(0),animStyle:null};_this.__animation=null;return _this;}_createClass(Transition,[{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.__animation){this.__animation.stop();this.__animation=null;}}},{key:'show',value:function show(element){var customStyle=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var customAnimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var children=this.state.children;var id=createUniqueId();this.setState({children:children.concat({id:id,element:element,style:customStyle||style,animation:customAnimation||animation})},this.__animate);return id;}},{key:'getBounds',value:function getBounds(){return this.state.bounds;}},{key:'render',value:function render()

{var
children=this.state.children;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,onLayout:this.__onLayout},
children.map(this.__renderElement)));


}}]);return Transition;}(_react.Component),_class.propTypes={children:_propTypes2.default.element.isRequired,onTransitioned:_propTypes2.default.func,onLayout:_propTypes2.default.func},_class.defaultProps={onTransitioned:undefined,onLayout:undefined},_temp;

};exports.default=

createTransition;
//# sourceMappingURL=Transition.js.map