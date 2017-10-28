!function($,window,undefined){function d(a,b){return Math.max(0,a[0]-b[0],b[0]-a[1])+Math.max(0,a[2]-b[1],b[1]-a[3])}function setDimensions(array,dimensions,tolerance,useOffset){var i=array.length,offsetMethod=useOffset?"offset":"position";for(tolerance=tolerance||0;i--;){var el=array[i].el?array[i].el:$(array[i]),pos=el[offsetMethod]();pos.left+=parseInt(el.css("margin-left"),10),pos.top+=parseInt(el.css("margin-top"),10),dimensions[i]=[pos.left-tolerance,pos.left+el.outerWidth()+tolerance,pos.top-tolerance,pos.top+el.outerHeight()+tolerance]}}function getRelativePosition(pointer,element){var offset=element.offset();return{left:pointer.left-offset.left,top:pointer.top-offset.top}}function sortByDistanceDesc(dimensions,pointer,lastPointer){pointer=[pointer.left,pointer.top],lastPointer=lastPointer&&[lastPointer.left,lastPointer.top];for(var dim,i=dimensions.length,distances=[];i--;)dim=dimensions[i],distances[i]=[i,d(dim,pointer),lastPointer&&d(dim,lastPointer)];return distances=distances.sort(function(a,b){return b[1]-a[1]||b[2]-a[2]||b[0]-a[0]})}function ContainerGroup(options){this.options=$.extend({},groupDefaults,options),this.containers=[],this.scrollProxy=$.proxy(this.scroll,this),this.dragProxy=$.proxy(this.drag,this),this.dropProxy=$.proxy(this.drop,this),this.options.parentContainer||(this.placeholder=$(this.options.placeholder),options.isValidTarget||(this.options.isValidTarget=undefined))}function Container(element,options){this.el=element,this.options=$.extend({},containerDefaults,options),this.group=ContainerGroup.get(this.options),this.rootGroup=this.options.rootGroup=this.options.rootGroup||this.group,this.parentContainer=this.options.parentContainer,this.handle=this.rootGroup.options.handle||this.rootGroup.options.itemSelector,this.el.on(eventNames.start,this.handle,$.proxy(this.dragInit,this)),this.options.drop&&this.group.containers.push(this)}var eventNames,pluginName="sortable",containerDefaults={drag:!0,drop:!0,exclude:"",nested:!0,vertical:!0},groupDefaults={afterMove:function($placeholder,container){},containerPath:"",containerSelector:"ol, ul",distance:0,handle:"",itemPath:"",itemSelector:"li",isValidTarget:function($item,container){return!0},onCancel:function($item,container,_super){},onDrag:function($item,position,_super){$item.css(position)},onDragStart:function($item,container,_super){$item.css({height:$item.height(),width:$item.width()}),$item.addClass("dragged"),$("body").addClass("dragging")},onDrop:function($item,container,_super){$item.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")},onMousedown:function($item,event,_super){event.preventDefault()},placeholder:'<li class="placeholder"/>',pullPlaceholder:!0,serialize:function($parent,$children,parentIsContainer){var result=$.extend({},$parent.data());return parentIsContainer?$children:($children[0]&&(result.children=$children,delete result.subContainer),delete result.sortable,result)},tolerance:0},containerGroups={},groupCounter=0,emptyBox={left:0,top:0,bottom:0,right:0};eventNames={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",drag:"touchmove.sortable mousemove.sortable",scroll:"scroll.sortable"},ContainerGroup.get=function(options){return containerGroups[options.group]||(options.group||(options.group=groupCounter++),containerGroups[options.group]=new ContainerGroup(options)),containerGroups[options.group]},ContainerGroup.prototype={dragInit:function(e,itemContainer){this.$document=$(itemContainer.el[0].ownerDocument),itemContainer.enabled()?(this.toggleListeners("on"),this.item=$(e.target).closest(this.options.itemSelector),this.itemContainer=itemContainer,this.setPointer(e),this.options.onMousedown(this.item,e,groupDefaults.onMousedown)):this.toggleListeners("on",["drop"]),this.dragInitDone=!0},drag:function(e){if(!this.dragging){if(!this.distanceMet(e))return;this.options.onDragStart(this.item,this.itemContainer,groupDefaults.onDragStart),this.item.before(this.placeholder),this.dragging=!0}this.setPointer(e),this.options.onDrag(this.item,getRelativePosition(this.pointer,this.item.offsetParent()),groupDefaults.onDrag);var x=e.pageX,y=e.pageY,box=this.sameResultBox,t=this.options.tolerance;(!box||box.top-t>y||box.bottom+t<y||box.left-t>x||box.right+t<x)&&(this.searchValidTarget()||this.placeholder.detach())},drop:function(e){this.toggleListeners("off"),this.dragInitDone=!1,this.dragging&&(this.placeholder.closest("html")[0]?this.placeholder.before(this.item).detach():this.options.onCancel(this.item,this.itemContainer,groupDefaults.onCancel),this.options.onDrop(this.item,this.getContainer(this.item),groupDefaults.onDrop),this.clearDimensions(),this.clearOffsetParent(),this.lastAppendedItem=this.sameResultBox=undefined,this.dragging=!1)},searchValidTarget:function(pointer,lastPointer){pointer||(pointer=this.relativePointer||this.pointer,lastPointer=this.lastRelativePointer||this.lastPointer);for(var distances=sortByDistanceDesc(this.getContainerDimensions(),pointer,lastPointer),i=distances.length;i--;){var index=distances[i][0];if(!distances[i][1]||this.options.pullPlaceholder){var container=this.containers[index];if(!container.disabled){if(!this.$getOffsetParent()){var offsetParent=container.getItemOffsetParent();pointer=getRelativePosition(pointer,offsetParent),lastPointer=getRelativePosition(lastPointer,offsetParent)}if(container.searchValidTarget(pointer,lastPointer))return!0}}}this.sameResultBox&&(this.sameResultBox=undefined)},movePlaceholder:function(container,item,method,sameResultBox){var lastAppendedItem=this.lastAppendedItem;!sameResultBox&&lastAppendedItem&&lastAppendedItem[0]===item[0]||(item[method](this.placeholder),this.lastAppendedItem=item,this.sameResultBox=sameResultBox,this.options.afterMove(this.placeholder,container))},getContainerDimensions:function(){return this.containerDimensions||setDimensions(this.containers,this.containerDimensions=[],this.options.tolerance,!this.$getOffsetParent()),this.containerDimensions},getContainer:function(element){return element.closest(this.options.containerSelector).data(pluginName)},$getOffsetParent:function(){if(this.offsetParent===undefined){var i=this.containers.length-1,offsetParent=this.containers[i].getItemOffsetParent();if(!this.options.parentContainer)for(;i--;)if(offsetParent[0]!=this.containers[i].getItemOffsetParent()[0]){offsetParent=!1;break}this.offsetParent=offsetParent}return this.offsetParent},setPointer:function(e){var pointer={left:e.pageX,top:e.pageY};if(this.$getOffsetParent()){var relativePointer=getRelativePosition(pointer,this.$getOffsetParent());this.lastRelativePointer=this.relativePointer,this.relativePointer=relativePointer}this.lastPointer=this.pointer,this.pointer=pointer},distanceMet:function(e){return Math.max(Math.abs(this.pointer.left-e.pageX),Math.abs(this.pointer.top-e.pageY))>=this.options.distance},scroll:function(e){this.clearDimensions(),this.clearOffsetParent()},toggleListeners:function(method,events){var that=this;events=events||["drag","drop","scroll"],$.each(events,function(i,event){that.$document[method](eventNames[event],that[event+"Proxy"])})},clearOffsetParent:function(){this.offsetParent=undefined},clearDimensions:function(){this.containerDimensions=undefined;for(var i=this.containers.length;i--;)this.containers[i].clearDimensions()}},Container.prototype={dragInit:function(e){var rootGroup=this.rootGroup;rootGroup.dragInitDone||1!==e.which||!this.options.drag||$(e.target).is(this.options.exclude)||rootGroup.dragInit(e,this)},searchValidTarget:function(pointer,lastPointer){var distances=sortByDistanceDesc(this.getItemDimensions(),pointer,lastPointer),i=distances.length,rootGroup=this.rootGroup,validTarget=!rootGroup.options.isValidTarget||rootGroup.options.isValidTarget(rootGroup.item,this);if(!i&&validTarget)return rootGroup.movePlaceholder(this,this.el,"append"),!0;for(;i--;){var index=distances[i][0];if(!distances[i][1]&&this.hasChildGroup(index)){if(this.getContainerGroup(index).searchValidTarget(pointer,lastPointer))return!0}else if(validTarget)return this.movePlaceholder(index,pointer),!0}},movePlaceholder:function(index,pointer){var item=$(this.items[index]),dim=this.itemDimensions[index],method="after",width=item.outerWidth(),height=item.outerHeight(),offset=item.offset(),sameResultBox={left:offset.left,right:offset.left+width,top:offset.top,bottom:offset.top+height};if(this.options.vertical){var yCenter=(dim[2]+dim[3])/2;pointer.top<=yCenter?(method="before",sameResultBox.bottom-=height/2):sameResultBox.top+=height/2}else{var xCenter=(dim[0]+dim[1])/2;pointer.left<=xCenter?(method="before",sameResultBox.right-=width/2):sameResultBox.left+=width/2}this.hasChildGroup(index)&&(sameResultBox=emptyBox),this.rootGroup.movePlaceholder(this,item,method,sameResultBox)},getItemDimensions:function(){return this.itemDimensions||(this.items=this.$getChildren(this.el,"item").filter(":not(.placeholder, .dragged)").get(),setDimensions(this.items,this.itemDimensions=[],this.options.tolerance)),this.itemDimensions},getItemOffsetParent:function(){var el=this.el;return"relative"===el.css("position")||"absolute"===el.css("position")||"fixed"===el.css("position")?el:el.offsetParent()},hasChildGroup:function(index){return this.options.nested&&this.getContainerGroup(index)},getContainerGroup:function(index){var childGroup=$.data(this.items[index],"subContainer");if(childGroup===undefined){var childContainers=this.$getChildren(this.items[index],"container");if(childGroup=!1,childContainers[0]){var options=$.extend({},this.options,{parentContainer:this,group:groupCounter++});childGroup=childContainers[pluginName](options).data(pluginName).group}$.data(this.items[index],"subContainer",childGroup)}return childGroup},enabled:function(){return!this.disabled&&(!this.parentContainer||this.parentContainer.enabled())},$getChildren:function(parent,type){var options=this.rootGroup.options,path=options[type+"Path"],selector=options[type+"Selector"];return parent=$(parent),path&&(parent=parent.find(path)),parent.children(selector)},_serialize:function(parent,isContainer){var that=this,childType=isContainer?"item":"container",children=this.$getChildren(parent,childType).not(this.options.exclude).map(function(){return that._serialize($(this),!isContainer)}).get();return this.rootGroup.options.serialize(parent,children,isContainer)},clearDimensions:function(){if(this.itemDimensions=undefined,this.items&&this.items[0])for(var i=this.items.length;i--;){var group=$.data(this.items[i],"subContainer");group&&group.clearDimensions()}}};var API={enable:function(ignoreChildren){this.disabled=!1},disable:function(ignoreChildren){this.disabled=!0},serialize:function(){return this._serialize(this.el,!0)}};$.extend(Container.prototype,API),$.fn.nonUiSortable=!0,$.fn[pluginName]=function(methodOrOptions){var args=Array.prototype.slice.call(arguments,1);return this.map(function(){var $t=$(this),object=$t.data(pluginName);return object&&API[methodOrOptions]?API[methodOrOptions].apply(object,args)||this:(object||methodOrOptions!==undefined&&"object"!=typeof methodOrOptions||$t.data(pluginName,new Container($t,methodOrOptions)),this)})}}(jQuery,window);