Object.defineProperty(exports,"__esModule",{value:true});exports.default={
out:function out(value,bounds){return{
top:value.interpolate({
inputRange:[0,1],
outputRange:[0,-bounds.height]}),

height:bounds.height};},

in:function _in(value,bounds){return{
top:value.interpolate({
inputRange:[0,1],
outputRange:[bounds.height,0]}),

height:bounds.height};}};
//# sourceMappingURL=SlideUp.js.map