Object.defineProperty(exports,"__esModule",{value:true});exports.default=
{
out:function out(value){return{
opacity:value.interpolate({
inputRange:[0,0.5,0.5,1],
outputRange:[1,1,0,0]}),

backfaceVisibility:'hidden',
transform:[{
perspective:1000},
{
rotateX:value.interpolate({
inputRange:[0,1],
outputRange:['0deg','180deg']})}]};},




in:function _in(value){return{
opacity:value.interpolate({
inputRange:[0,0.5,0.5,1],
outputRange:[0,0,1,1]}),

backfaceVisibility:'hidden',
transform:[{
perspective:1000},
{
rotateX:value.interpolate({
inputRange:[0,1],
outputRange:['180deg','360deg']})}]};},




useNativeDriver:true};
//# sourceMappingURL=FlipY.js.map