window.console||(console={log:function(){}}),window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""));var FooBar=function($){var iframehelper=function(){var expandserver=function(url){var server=/dev\.|stag\.|sand[0-9]+\./.exec(document.location.href);return server=server?"-"+server[0].replace(/sand[0-9]+/,"dev"):".",url.replace("@@server@@",server)},transport=0;return{expandserver:expandserver,clearpopup:function(){transport.destroy()},makepopup:function(url,iframeclass,overlayclass,continuation,args){url=escape(expandserver(url));var server=expandserver("https://www@@server@@usnews.com");if(!$("."+(iframeclass||"loginiframe")).length){var $overlay=$("<div/>").html("&nbsp;").addClass(overlayclass||"loginoverlay").appendTo("body"),$ifr_container=$("<div/>").addClass(iframeclass||"loginiframe").appendTo("body"),$ifr=0;transport=new easyXDM.Socket({remote:server+"/scripts/iframehost.html?page="+url,container:$ifr_container[0],onMessage:function(message,origin){switch($ifr=$ifr_container.find("iframe:first"),message=message.split(":"),message[0]){case"size":if(2==message.length){var $body=$("body"),dim=message[1].split("x");$ifr.css({width:dim[0],height:dim[1]}),$ifr.parent().css({left:Math.floor($body.width()/2)-parseInt(Math.floor(dim[0]/2),10)})}break;case"sizereset":$ifr.css({width:"",height:""});break;case"close":transport.destroy(),$overlay.remove(),$ifr_container.remove(),continuation&&continuation.apply(null,args||[message]);break;case"logout":foobar.requestlogout()}$ifr.trigger(message[0])}})}}}}(),htmlAreaOptions={toolbar:["bold","italic","orderedlist","unorderedlist"],inlinecss:"body{font-family:monospace;}"},configurejhtmlarea=function($el){var area=$el.find("textarea.jHtmlArea");area.length&&($.fn.htmlarea?area.htmlarea(htmlAreaOptions):area.keyup(function(){area.trigger("change")}),area.data("lastvalue",area.val()),area.data("autosavetimer",0),area.change(function(){var schoolid=$("#myschools .active").attr("id");area.val()==area.data("lastvalue")||area.data("autosavetimer")||area.data("autosavetimer",setTimeout(function(){if(area.val()!=area.data("lastvalue"))return area.data("lastvalue",area.val()),void area.data("autosavetimer",setTimeout(arguments.callee,2e3));area.data("autosavetimer",0),savenotes(schoolid,area.val(),function(){var notification=$el.find(".savednotification");notification.show().fadeIn().delay(1e3).fadeOut(function(){notification.hide()})})},2e3))}))},configureschoolctrlpanel=function($el){$("#foobar .trash").click(function(evt){var ctrlpanel=$(this).closest(".ctrlpanel"),toDelete=ctrlpanel.data("hoveredOver"),selectAnother=function(){if(toDelete.find(".ui-tabs-selected").length>0){var next=toDelete.next();0===next.length&&(next=toDelete.prev()),next.find("a").click()}};removeschool(toDelete.find("a[href]").eq(0).attr("href").substring(1),selectAnother),ctrlpanel.hide()}),$("#foobar .ctrlpanel").hover(function(evt){$(evt.currentTarget).show()},function(evt){$(evt.currentTarget).hide()})},configureDragNDrop=function(el){var options={onDrop:function($item,container,_super){var order=$.map($("#myschools .sortable input"),function(i){return $(i).val()});sortschools(order),$item.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")},onMousedown:function(e){},distance:2,tolerance:-1};$(el).sortable(options)},enablesizing=function($el){$el.css({visibility:"hidden",position:"absolute"}),$el.addClass("overridedisplay")},disablesizing=function($el){$el.removeClass("overridedisplay"),$el.css({visibility:"",position:""})},waitforsize=function($el,continuation){var sizer=$("<div/>").html("&nbsp;").addClass("sizer").appendTo($el);setTimeout(function(){if(sizer.length&&!sizer.outerHeight(!1)){var f=arguments.callee,a=arguments,_self=this;return void setTimeout(function(){f.apply(_self,a)},0)}sizer.remove(),continuation()},0)},initializedtabs={},initfunctions={aboutme:function($el){waitforsize($el.parent(),function(){var url=commerce.foobarPageUrl,s=new easyXDM.Socket({remote:iframehelper.expandserver(url),container:$el.find(".configpanel")[0],onMessage:function(message,origin){if(message=message.split(":"),message.length>=2)if("dialog"==message[0]){var url=unescape(message[1]);iframehelper.makepopup(url,"foobariframe","loginoverlay"),$(".foobariframe").bind("passwordchanged",function(){s.postMessage("passwordchanged")})}else if("degree"==message[0]){var base=foobar.getelement().find("#myschools .tabcontent");base.tabs("select",-1),myschoolsdata=0,setoption("proj",message[1]),removealltabs("myschools"),getschooldata()}}})})},myschools:function($el){var autocompleteUrls;myschoolsdata||getschooldata(arguments.callee,[$el]),$el.find("a.compare").click(function(){var appendix=(opts.isgrad?opts.grad_comparison_url:opts.coll_comparison_url)+opts.proj+"/index";return $("#myschools .ui-tabs-nav input").each(function(i,item){item.checked&&(appendix+="/item+"+item.value)}),appendix&&(document.location.href=appendix),!1}),$.fn.autocomplete&&(autocompleteUrls={"best-colleges":"/college-names","top-business-schools":"/best-graduate-schools/autocomplete?program=top-business-schools","top-law-schools":"/best-graduate-schools/autocomplete?program=top-law-schools","top-medical-schools":"/best-graduate-schools/autocomplete?program=top-medical-schools","top-engineering-schools":"/best-graduate-schools/autocomplete?program=top-engineering-schools","top-education-schools":"/best-graduate-schools/autocomplete?program=top-education-schools","top-nursing-schools":"/best-graduate-schools/autocomplete?program=top-nursing-schools"},$el.find(".foobar-autocomplete").autocomplete({serviceUrl:autocompleteUrls[opts.proj]||"/college-names",paramName:"name",onSelect:function(suggestion){var suggestions={},cachedResponses=$el.find(".foobar-autocomplete").autocomplete().cachedResponse;$.each(cachedResponses,function(index,cachedResponse){$.each(cachedResponse.suggestions,function(index,cachedSuggestion){suggestions[cachedSuggestion.value]=cachedResponse.data[index]})}),$(this).data("schoolid",suggestions[suggestion.value])},beforeRender:function($container){var width=$container.width();$container.css({width:"auto","min-width":width})}}),$("#foobar .addnew .button").click(function(){saveschool($el.find(".foobar-autocomplete").data("schoolid"),opts.proj),$el.find(".foobar-autocomplete").val("")}))},__all__:function($el){enablesizing($el);$el.children(".tabcontent:first");initfunctions[$el.attr("id")]&&initfunctions[$el.attr("id")]($el),initializedtabs[$el.attr("id")]=1,disablesizing($el)}},contains=function(array,obj){for(var i=0;i<array.length;i++)if(array[i]==obj)return!0;return!1},setcookie=function(name,value,expiredays){var datetime=new Date;datetime.setDate(datetime.getDate()+expiredays),document.cookie=name+"="+value+";expires="+datetime.toUTCString()+";domain=usnews.com;path=/"},clearcookie=function(name){setcookie(name,"",-1)},commerce=function(){var fix_c_cookie=function(custId){var existed=getCookieValue("c");existed&&String(existed)==String(custId)||setcookie("c",custId,7)},bindCustomerInfo=function(data,callbackUpdateUI){if(data&&data.username){for(setoption("proj",data.compass_degree||"best-colleges"),setoption("namefirst",data.first_name||"First"),setoption("namelast",data.last_name||"Last"),setoption("is_premium",data.compass_is_premium),setoption("profile_url",data.profile_url),setoption("login_url",data.login_url),setoption("logout_url",data.logout_url),setoption("loginurl",data.login_url),setoption("logouturl",data.logout_url),products=data.products,degree=data.compass_degree,cust_has_college_ebook=!1,cust_has_grad_ebook=!1,i=0,len=products.length;i<len;i++)10115!=products[i].id&&1126!=products[i].id||(cust_has_college_ebook=!0,college_book_url=products[i].url),10131==products[i].id&&(cust_has_grad_ebook=!0,grad_book_url=products[i].url);cust_has_college_ebook?cust_has_grad_ebook?"best-colleges"==degree?(setoption("ebook_url",college_book_url),setoption("ebook_title","eBook")):(setoption("ebook_url",grad_book_url),setoption("ebook_title","eBook")):(setoption("ebook_url",college_book_url),setoption("ebook_title","eBook")):cust_has_grad_ebook&&(setoption("ebook_url",grad_book_url),setoption("ebook_title","eBook")),commerce.user=data.username,commerce.isAuthorized=!0,commerce.custId=data.c,fix_c_cookie(commerce.custId)}else commerce.user="Unknown customer",commerce.isAuthorized=!1,commerce.tk=null,commerce.custId=0;callbackUpdateUI&&callbackUpdateUI()},getCookieValue=function(name){try{var i;for(cookies=document.cookie.split(";"),i=0;i<cookies.length;i++)if(cookie=cookies[i],key=cookie.substr(0,cookie.indexOf("=")),key=key.replace(/^\s+|\s+$/g,""),key===name)return value=cookie.substr(cookie.indexOf("=")+1),unescape(value)}catch(err){}return null},get_real_url=function(url){var server=/dev\.|stag[1-9]*\.|sand[1-9]+\.|uat[1-9]+\.|commsand[1-9]\.|commdev[1-9]\./.exec(document.location.href);return server=server?"-"+server:".",new_url=url.replace("@@server@@",server),new_url},init=function(callback){if(callbackUpdateUI=callback,commerce.tk=commerce.getCookieValue("tk"),commerce.foobarPageUrl=get_real_url("https://www@@server@@usnews.com/commerce/foobar"),commerce.foobarPageUrl+="?tk="+commerce.tk,commerce.foobarJsonUrl=commerce.foobarPageUrl+"&json",commerce.tk=commerce.getCookieValue("tk"),commerce.isLoggedIn=!0,!commerce.tk)return void bindCustomerInfo(null,callbackUpdateUI);window.foobarCallbak=function(data){},$.ajax({url:commerce.foobarJsonUrl,async:!1,cache:!1,dataType:"jsonp",crossDomain:!0,success:function(data){bindCustomerInfo(data,callbackUpdateUI)},error:function(response,errorThrown){200!=errorThrown.status&&bindCustomerInfo(null,callbackUpdateUI)},jsonpCallback:"foobarCallback"})},tk=null;return{init:init,getCookieValue:getCookieValue,tk:function(){return tk},user:function(){return null},isAuthorized:function(){return!!tk},custId:function(){return custId},foobarPageUrl:null}}(),opts={},myschoolsdata=0,custid=null,foobar=function(){var tab,scrollTop,lasturl=0,lastelem=0,isloggedin=!1,sub_tab_waitforsize=!1,xhr=0,initloggedin=function($elem){initfunctions.aboutme($("#aboutme")),$elem.easytabs({tabs:".foobar_button-container",uiTabs:!0,collapsedByDefault:!0,collapsedClass:"foobar_collapsed",collapsible:!0,panelActiveClass:"foobar_selected",updateHash:!1,transitionIn:"slideDown",transitionOut:"slideUp"}),$elem.find(".closebutton").on("click",function(){tab=$(this).parent().eq(0).attr("id"),$("#"+tab+"-button .foobar_button").trigger("click")}),$elem.on("easytabs:before",function(evt,clickedTab,targetPanel,settings){scrollTop=$(window).scrollTop(),$(window).scroll(function(evt){evt.preventDefault(),$(window).scrollTop(scrollTop)}),initfunctions.__all__($(targetPanel))}),$elem.on("easytabs:midTransition",function(evt,clickedTab,targetPanel,settings){$(window).unbind("scroll")}),$elem.on("easytabs:after",function(e,clicked,target,settings){configurejhtmlarea($("#myschools .active"))}),opts.savedschools.length&&setmyschoolscount(opts.savedschools.length),lastelem.before($('<div id="foobaroverlay">&nbsp;</div>').click(function(){$("li.ui-tabs-selected a").click()})),opts.is_premium&&lastelem.find(".no_premium").remove(),opts.ebook_url&&(foobar_buttons=$("#foobar ul.main_buttons"),new_btn=$("<li>").attr("id","ebook-button"),new_btn.attr("class","foobar_ebook t t-medium button-secondary foobar_button-container ui-state-default ui-corner-top"),new_btn.append($("<div>").attr("class","foobar_selected_arrow")),new_btn_link=$("<a>").attr("href",opts.ebook_url),new_btn_link.attr("class","foobar_button t t-medium"),new_btn_link.attr("target","_blank"),new_btn_link.append(opts.ebook_title),new_btn.append(new_btn_link),foobar_buttons.append(new_btn)),$(".foobar_button").click(function(){$(".foobar_buttons > .ui-tabs-selected").length?$("#foobaroverlay").fadeIn():$("#foobaroverlay").fadeOut()})},initloggedout=function($elem){var gradplaces=["best-graduate","MBA-admissions-strictly-business","law-admissions-lowdown","medical-school-admissions-doctor","graduate-school-road-map"],isGradPlace=function(){var href=window.location.href,matches=$.map(gradplaces,function(item){return-1!==href.indexOf(item)});return-1!==$.inArray(!0,matches)},greeting="",link="",collegeLink="https://www.usnews.com/usnews/store/college_compass.htm?src=bar",gradLink="https://www.usnews.com/usnews/store/grad_school_compass?src=bar",collegeGreeting="<a href='"+collegeLink+"' class='highlight-blue'>Get instant online access to full college rankings and complete school data.</a>",gradGreeting="<a href='"+gradLink+"' class='highlight-blue'>Get instant online access to full rankings and complete school data.</a>";isGradPlace()?(link=gradLink,greeting=gradGreeting,$("#foobar_logo img").attr("src","https://www.usnews.com/dbimages/master/47785/foobar-grad.png").wrap("<a href='"+link+"'/>")):(link=collegeLink,greeting=collegeGreeting,$("#foobar_logo img").attr("src","https://www.usnews.com/dbimages/master/47784/foobar-colleges.png").wrap("<a href='"+link+"'/>")),lastelem.find("#userlogin-button").click(function(){return requirelogin(!1,!1,"?src=bar_login"),!1}),lastelem.find("#usersignup-button").click(function(e){e.preventDefault(),window.location.href=link}),lastelem.find("#greeting").html(greeting)},requestfoobar=function(isLoggedIn,frankurl,callback,custid){var toolbar_url=window.location.origin+frankurl+(custid?"/"+custid:"");return $.ajax({url:toolbar_url,type:"GET",dataType:"html",success:callback,cache:!isLoggedIn})},init=function(elem,url,callback){if(url&&elem){var $elem=elem.length?elem.first?elem.first():$(elem[0]):$(elem);lastelem=elem,lasturl=url,initializedtabs={},myschoolsdata=0,xhr&&xhr.abort();var finishload=function(){customerId=0,custid=0,isloggedin=!1,commerce.isAuthorized&&(isloggedin=!0,custid=commerce.custId,customerId=custid),xhr=requestfoobar(isloggedin,url,function(foobarhtml){xhr=0,$elem.html(foobarhtml),commerce.isAuthorized?initloggedin($elem):initloggedout($elem),$elem.find("#foobar-close").toggle(function(){$elem.addClass("closed")},function(){$elem.removeClass("closed")}),callback&&callback(),$elem.trigger("foobarinit")},customerId)};commerce.init(finishload)}},requestpremium=function(continuation,args){opts.store_path&&opts.store_appendix&&(document.location.href=opts.store_path+opts.store_appendix)},requirelogin=function(continuation,args,tracker){if(!isloggedin&&opts.loginurl){var refParam=$.param({ref:document.URL});tracker?(tracker=tracker.split("#").shift(),-1===tracker.indexOf("ref=")&&(tracker=[tracker,refParam].join("&"))):tracker="?"+refParam,document.location.href=opts.loginurl+tracker}else continuation&&continuation.apply(null,args||[])};return{init:init,requestpremium:requestpremium,requirelogin:requirelogin,requestlogout:function(continuation,args){clearcookie("c"),clearcookie("c_savedschools"),custid="",isloggedin=!1,document.location.href=opts.logouturl},isloggedin:function(){return isloggedin},getelement:function(){return lastelem},sub_tab_waitforsize:function(disable){sub_tab_waitforsize=disable}}}();(function(){this.el=0,this.parent=0,this.init=function(){this.specialinit()},this.specialinit=function(){}}).prototype={};var reloadTabs=(function(){}(),function(tabTarget){var compareButton=$(tabTarget).find(".compare"),myschoolsContainer=$(tabTarget).find(".subnav");$(compareButton).show(),$(myschoolsContainer).show(),configureschoolctrlpanel(tabTarget),"myschools"===$(tabTarget).parent().attr("id")&&configureDragNDrop(tabTarget.find(".subnav"));var items=$("#myschools .subnav li");0===items.find(".first-tab").length&&items.find("div").first().addClass("first-tab"),$(tabTarget).find(".sortable").children().length>0?$(tabTarget).easytabs({tabs:".subnav div.link",defaultTab:".first-tab",panelContext:tabTarget.find(".panelcontainer"),uiTabs:!0,collapsedByDefault:!1,collapsible:!1,updateHash:!1,transitionIn:"fadeIn",transitionOut:"fadeOut"}):($(compareButton).hide(),$(myschoolsContainer).hide())}),dragging=!1,addtab=function(section,id,tabhtml,contenthtml,index,htmlclass){var subnav=foobar.getelement().find("#"+section).find(".tabcontent"),newcontent=$(contenthtml).attr("id",id),newtabhtml=$(tabhtml),ctrlPanelTimer=null;htmlclass=htmlclass||"",subnav.find(".panelcontainer").append($(newcontent)),showCtrlPanel=function(ctrlpanel,elemOffsetY){window.clearTimeout(ctrlPanelTimer),ctrlpanel.show().css("margin-top",elemOffsetY)},hideCtrlPanel=function(){ctrlPanelTimer=window.setTimeout(function(){$("#foobar").find(".ctrlpanel").hide()},1500)},newtabhtml.hover(function(evt){if(!dragging){var ctrlpanel=$("#foobar").find(".ctrlpanel"),elemOffsetY=$(evt.currentTarget).position().top;showCtrlPanel(ctrlpanel,elemOffsetY),ctrlpanel.data("hoveredOver",$(evt.currentTarget))}},function(evt){hideCtrlPanel()}),newtabhtml.mousedown(function(){dragging=!0,$(".ctrlpanel").hide()}),newtabhtml.mouseup(function(e){dragging=!1}),0===$(".subnav div.link").length&&newtabhtml.find("div.link").addClass("first-tab"),subnav.find(".subnav").append(newtabhtml),subnav.data("easytabs")&&subnav.easytabs("refresh"),0===$(".foobar_collapsed").length?$("#myschools a[href$="+id+"]").click():(setTimeout(function(){$("#myschools .panelcontainer .secondarytab").css("display","none")},200),$("#myschools a[href$="+id+"]").click()),setTimeout(function(){configurejhtmlarea($("#myschools .active"))},100)},removetab=function(section,id){var base=$("#foobar #"+section+" .tabcontent"),subnav=base.find(".subnav");base.find("#"+id).remove(),subnav.find("a[href$="+id+"]").closest("li").remove(),subnav.data("easytabs")&&subnav.easytabs("refresh")},removealltabs=function(section){var base=$("#foobar #"+section+" .tabcontent"),iter=base.tabs("length");if(iter)for(;iter--;)base.tabs("remove",0)},setmyschoolscount=function(count){$("#foobar ul.main_buttons #myschools-button a").html("My Schools ("+count+")")},getschooldata=function(callback,args){custid&&$.ajax({url:opts.myschools_url+opts.proj+"/"+custid,data:"",success:function(data){updateschools(data),callback&&callback.apply(null,args||[])},dataType:"json",cache:!1})},updateschools=function(schools){if(FooBar.initialized){var addthese=schools.__order__.slice(),removethese=[];$("#foobar #myschools .secondarytab").each(function(ind,val){removethese.push(val.id)});for(var j=0;j<addthese.length;j++)for(var i=0;i<removethese.length;i++)if(addthese[j]==removethese[i]){addthese.splice(j--,1),removethese.splice(i,1);break}var subnav=$("#foobar #myschools .subnav"),$tabs=subnav.parent(),j=($tabs.find("li").length,0),time=40;!function(){for(var d=new Date,max=j+Math.max(1,50-time);j<max&&j<addthese.length;j++){var s=addthese[j],content=schools[s].content;addtab("myschools",s,schools[s].tab,content,j),initializedtabs[s]=0}if(time=new Date-d,j<addthese.length)setTimeout(arguments.callee,Math.min(time,50));else{for(var i=0;i<removethese.length;i++)removetab("myschools",removethese[i]);reloadTabs($tabs),schools.__order__.length?foobar.getelement().find("#myschools .myschools-empty").hide():foobar.getelement().find("#myschools .myschools-empty").show()}}()}myschoolsdata=schools,setmyschoolscount(schools.__order__.length),setoption("savedschools",schools.__order__)},savenotes=function(schoolid,noteshtml,continuation){var notes={notes:[schoolid,noteshtml]};foobar.requirelogin(function(){$.post(opts.myschools_url+opts.proj+"/"+custid,notes,continuation,"json")})},saveschool=function(schoolid,schooltype){foobar.requirelogin(function(){var poststring=schoolid;if(schooltype)poststring+=":"+schooltype;else{poststring+=-1!=document.location.href.indexOf("best-colleges")?":best-colleges":":best-graduate-schools"}$.post(opts.myschools_url+opts.proj+"/"+custid,{add:poststring},updateschools,"json")})},removeschool=function(schoolid,callback){foobar.requirelogin(function(){var sid=schoolid;if(!myschoolsdata[sid]){sid=0;for(var s in myschoolsdata)if(myschoolsdata[s].usnews_id==schoolid){sid=myschoolsdata[s].usnews_id;break}}sid&&$.post(opts.myschools_url+opts.proj+"/"+custid,{remove:sid},updateschools,"json")}),callback&&callback()},sortschools=function(order){foobar.requirelogin(function(){$.post(opts.myschools_url+opts.proj+"/"+custid,{sort:order},updateschools,"json")})},issaved=function(schoolid){return!!opts.savedschools&&contains(opts.savedschools,schoolid)},setoption=function(key,value){if("savedschools"==key){for(var cookievalue="",i=0;i<value.length;i++)cookievalue+=", "+value[i];cookievalue.length&&(cookievalue=cookievalue.substring(2)),setcookie("c_savedschools",cookievalue,7)}else if("initialoptionsset"==key)foobar.getelement().trigger("foobarinitoptions");else if("proj"==key){opts.isgrad="best-colleges"!==value;var store_appendices={"best-colleges":"college_compass.htm","top-business-schools":"/business_school_compass.htm","top-education-schools":"/education_compass.htm","top-engineering-schools":"/engineering_compass.htm","top-law-schools":"/law_school_compass.htm","top-medical-schools":"/medical_school_compass.htm"};store_appendices[opts.proj]?opts.store_appendix=store_appendices[opts.proj]:opts.store_appendix=store_appendices["best-colleges"];var tools_select=opts.isgrad&&"top-law-schools"!=value&&"top-business-schools"!=value?"best-graduate-schools":value;foobar.getelement().find("#mytools .mytools-content").removeClass("best-colleges top-law-schools top-business-schools best-graduate-schools").addClass(tools_select)}opts[key]=value},getname=function(){return opts.namefirst+" "+opts.namelast};opts.savedschools=[];var init=function(elem,url){if(elem&&url)for(var scriptserver="/static/scripts/",scripts=[[$.fn.htmlarea,"jquery/jquery.jHtmlArea-0.7.0.js"],[window.easyXDM,"easyXDM.min.js"],[$.fn.easytabs,"jquery/jquery.easytabs.js"],[$.fn.nonUiSortable,"jquery/jquery.sortable.js"],[$.fn.usnAutocomplete,"jquery/autocomplete.js"]],scriptsloaded=0,i=0;i<scripts.length;i++){var dependency=scripts[i][0],urlappendix=scripts[i][1];dependency?scriptsloaded++:$.ajax({url:scriptserver+urlappendix,success:function(){++scriptsloaded==scripts.length&&($(elem).bind("foobarinit",function(){$.extend(FooBar,afterinit)}),foobar.init(elem,url))},dataType:"script",cache:!0})}},wrapFoobar=function(name){return function(){return foobar[name].apply(foobar,arguments)}},afterinit={init:function(){},initialized:!0},isloggedin=function(){return commerce.isAuthorized};if(jQuery)return{init:init,initialized:!1,setoption:setoption,getname:getname,issaved:issaved,saveschool:saveschool,removeschool:removeschool,dologin:wrapFoobar("requirelogin"),requestpremium:wrapFoobar("requestpremium"),dologout:wrapFoobar("requestlogout"),isloggedin:isloggedin}}(jQuery);