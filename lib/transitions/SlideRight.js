Object.defineProperty(exports,"__esModule",{value:true});exports.default={
out:function out(value,bounds){return{
left:value.interpolate({
inputRange:[0,1],
outputRange:[0,bounds.width]}),

width:bounds.width};},

in:function _in(value,bounds){return{
left:value.interpolate({
inputRange:[0,1],
outputRange:[-bounds.width,0]}),

width:bounds.width};}};
//# sourceMappingURL=SlideRight.js.map