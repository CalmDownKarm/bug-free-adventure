var p607278659=Date.now();var p607278660=false;var p607278661={};var p607278662={};var p607278663=true;var p607278664=[];var p607278665=0;var p607278666=0;var p607278667=window.attachEvent||window.addEventListener;var p607278668=window.attachEvent?"onbeforeunload":"beforeunload";p607278667(p607278668,function(e){if(e||window.event)oPageUnload()});var p607278714=window.location.href;p607278716=false;try{var p607278715=/console=([^&]+)/.exec(p607278714)[1];if(p607278715=="1")p607278716=true}catch(e){}
function p607278669(){var p607278670=0;for(p607278671=0;p607278671<oDv.length;p607278671++)if(p607278671==0&&p607278660==false){p607278662["ci"]=oDv[p607278671];p607278662["lt"]=p607278659;p607278660=oDv[p607278671]}else if(oDv[p607278671][0]==="v")for(p607278672=1;p607278672<oDv[p607278671].length;p607278672++){p607278662[oDv[p607278671][p607278672]]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];p607278662[oDv[p607278671][p607278672]][18]=1}else p607278662[oDv[p607278671]]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0];var p607278673=2;function p607278674(){function p607278675(){var p607278676=["webkit","moz","ms","o"];if("hidden"in window.parent.document)return"hidden";for(var p607278677=0;p607278677<p607278676.length;p607278677++)if(p607278676[p607278677]+"Hidden"in window.parent.document)return p607278676[p607278677]+"Hidden";return null}function p607278678(){var p607278679=p607278675();if(!p607278679)return false;return window.parent.document[p607278679]}var p607278680=p607278675();if(p607278680){var p607278681=
p607278680.replace(/[H|h]idden/,"")+"visibilitychange";window.parent.document.addEventListener(p607278681,p607278683)}function p607278682(){if(p607278678()==true)p607278670=0;else p607278670=1}p607278682();function p607278683(){p607278682()}}p607278674();var p607278684=Object.keys(p607278662);var p607278685=Object.keys(p607278684).length;var p607278686=p607278673;var p607278687=false;var p607278688=p607278665;var p607278695=null;var p607278696=null;var p607278697=null;var p607278713=0;var p607278689=
setInterval(function(){if(p607278665==p607278688){var p607278690=window.parent.innerHeight;var p607278691=window.parent.pageYOffset;while(p607278686<p607278685){if(p607278684){var p607278692=p607278684[p607278686];if(p607278662[p607278692][0]==0){var p607278693=document.getElementById(p607278692);if(p607278693)try{if(p607278662[p607278692][18]==1)var p607278694=document.getElementById(p607278692).getElementsByTagName("div")[0];else var p607278694=document.getElementById(p607278692).getElementsByTagName("div")[0].getElementsByTagName("iframe")[0]}catch(e$0){}finally{if(p607278694){p607278662[p607278692][0]=
1;p607278716==true&&console.log(p607278692+" loaded");if(p607278662[p607278692][1]==0)p607278662[p607278692][1]=Date.now()}}}if(p607278662[p607278692][0]==1){var p607278701="";try{if(!document.getElementById(p607278692))p607278716==true&&console.log("switch error stop "+p607278692);if(p607278662[p607278692][18]==1){if(document.getElementById(p607278692).className=="vdb_player "){if(p607278713==0){p607278716==true&&console.log("1 "+p607278692+" "+p607278713);p607278713=1;p607278716==true&&console.log("2"+
p607278692+" "+p607278713);document.getElementById(p607278692).vdb_Player.addEventListener(vidible.AD_PLAY,function(){p607278716==true&&console.log("ad start");p607278695=true});document.getElementById(p607278692).vdb_Player.addEventListener(vidible.AD_END,function(){p607278716==true&&console.log("ad stop");p607278695=false});p607278716==true&&console.log("Video Loop Done")}var p607278694=document.getElementById(p607278692).getElementsByTagName("iframe")[0]}}else if(document.getElementById(p607278692).getElementsByTagName("iframe")[1]&&
document.getElementById(p607278692).getElementsByTagName("iframe")[1].id.indexOf("ox_")>=0)var p607278694=document.getElementById(p607278692).getElementsByTagName("iframe")[1];else if(document.getElementById(p607278692).getElementsByTagName("iframe")[2]&&document.getElementById(p607278692).getElementsByTagName("iframe")[2].id.indexOf("ox_")>=0)var p607278694=document.getElementById(p607278692).getElementsByTagName("iframe")[2];else if(document.getElementById(p607278692).getElementsByTagName("div")[0].getElementsByTagName("iframe")[0])var p607278694=
document.getElementById(p607278692).getElementsByTagName("div")[0].getElementsByTagName("iframe")[0];else if(document.getElementById(p607278692).getElementsByTagName("div")[1].getElementsByTagName("iframe")[0].id.indexOf("goog")>=0)p607278694=document.getElementById(p607278692).getElementsByTagName("div")[1].getElementsByTagName("iframe")[0]}catch(e$1){p607278686++;if(p607278662[p607278692][7]>0){p607278716==true&&console.log("dfp ad unit cleared "+p607278692);p607278662[p607278692].unshift(0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);continue}else continue}if(p607278662[p607278692][18]==1)var p607278699=p607278694;else var p607278699=document.getElementById(p607278692);var p607278700=p607278699.getBoundingClientRect();p607278700=p607278700.top;p607278700=p607278700+p607278691;p607278701=window.getComputedStyle(p607278694,null);p607278662[p607278692][11]=parseInt(p607278701.getPropertyValue("height"));p607278662[p607278692][12]=parseInt(p607278701.getPropertyValue("width"));if(p607278662[p607278692][18]==
1)if(p607278695==true)p607278662[p607278692][15]=1;else if(p607278662[p607278692][15]==1){p607278686++;p607278716==true&&console.log("video ad unit cleared "+p607278692);p607278662[p607278692].unshift(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);continue}else p607278662[p607278692][15]=0;if(p607278701.width!==0&&p607278701.height!==0&&p607278701.opacity!==0&&p607278701.display!=="none"&&p607278701.visibility!=="hidden"&&p607278701.visibility!=="collapse"&&p607278694.offsetParent!==null){if(p607278662[p607278692][2]==
0){p607278662[p607278692][2]=Date.now();p607278666=1}if(p607278690+p607278691+p607278700+p607278662[p607278692][11]>0)if(p607278662[p607278692][9]>=3E3&&p607278662[p607278692][3]==0||p607278662[p607278692][8]!==0&&Date.now()-p607278662[p607278692][8]>=15E3)p607278662[p607278692][3]=Date.now()-3E3;if(p607278690+p607278691>p607278700+p607278662[p607278692][11]/2&&p607278691<p607278700+p607278662[p607278692][11]/2&&p607278670==1){if(p607278662[p607278692][8]==0)p607278662[p607278692][8]=Date.now();if((p607278662[p607278692][9]>=
3E3||Date.now()-p607278662[p607278692][8]>=15E3)&&p607278662[p607278692][18]==0){if(p607278662[p607278692][6]==0){p607278662[p607278692][10]++;p607278662[p607278692][6]=1;p607278716==true&&console.log(p607278692+" d v")}if(p607278662[p607278692][4]==0){p607278662[p607278692][4]=Date.now();p607278712="X% Not Enough Historic Viewability";if(typeof window.oVa!=="undefined"&&window.oVa.length>0){if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"K")>0)p607278712=
"0-49% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"F")>0)p607278712="50% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"E")>0)p607278712="60% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"D")>0)p607278712="70% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+
"x"+p607278662[p607278692][11]+"C")>0)p607278712="80% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"B")>0)p607278712="90% Historic Viewability";if(window.oVa[p607278692].indexOf(p607278662[p607278692][12]+"x"+p607278662[p607278692][11]+"A")>0)p607278712="100% Historic Viewability"}p607278661[p607278692]="Optimera Load Times Div: "+p607278692+" Div Load: 0ms, DFP Load: "+(p607278662[p607278692][1]-p607278662["lt"])+"ms, DFP Response: "+
(p607278662[p607278692][2]-p607278662["lt"])+"ms, Ad Load: "+(p607278662[p607278692][3]-p607278662["lt"])+"ms, Ad Viewable/Loaded: "+(p607278662[p607278692][4]-p607278662["lt"])+"ms, Current Viewability Score: "+p607278712;p607278716==true&&console.log(p607278661[p607278692])}}p607278662[p607278692][9]+=100;if(p607278662[p607278692][15]==1){p607278662[p607278692][17]+=100;if(p607278662[p607278692][17]==3E3){p607278662[p607278692][10]++;p607278716==true&&console.log(p607278692+" v v")}}}else{if(p607278662[p607278692][9]<
3E3)p607278662[p607278692][9]=0;if(p607278662[p607278692][6]==0)p607278662[p607278692][8]=0}if(p607278662[p607278692][13]==0)p607278662[p607278692][13]=1;if(p607278662[p607278692][15]==1)p607278662[p607278692][16]+=100;p607278662[p607278692][7]+=100}else if(p607278687==false){p607278716==true&&console.log("iframeError "+p607278692);p607278687=true}}}p607278686++}p607278702=[];for(var p607278677 in p607278662)p607278702.push(encodeURI(p607278677)+"="+encodeURI(p607278662[p607278677]));p607278664=p607278702;
p607278686=p607278673}else{clearInterval(p607278689);return}},100);window.focus();if(p607278665==0)window.addEventListener("blur",p607278703);function p607278703(){p607278704=p607278673;while(p607278704<p607278685){p607278692=p607278684[p607278704];if(p607278662[p607278692][2]>0)if(document.activeElement==document.getElementById(p607278692).getElementsByTagName("div")[0].getElementsByTagName("iframe")[0]){p607278662[p607278692][5]++;p607278716==true&&console.log(p607278692+" c");break}p607278704++}}
}
function oPageUnload(p607278711){if(p607278663==true){var p607278705=window.location.hostname;var p607278706=window.location.pathname;var p607278664=[];for(var p607278677 in p607278662)p607278664.push(encodeURI(p607278677)+"="+encodeURI(p607278662[p607278677]));var p607278707="ver=2.012&h="+p607278705+"&p="+p607278706+"&cI="+p607278660+"&"+p607278664;var p607278708=document.createElement("img");p607278708.src="https://sqs.us-east-1.amazonaws.com/397719490216/ClientViewabilityDumpSqs_Queue?Action=SendMessage&MessageBody="+encodeURIComponent(p607278707);
var p607278709=document.getElementsByTagName("body")[0];p607278709.appendChild(p607278708);var p607278710=+new Date;while(+new Date<p607278710+100);p607278663=false}if(p607278711=="1"){p607278665++;p607278659=Date.now();p607278660=false;p607278661={};p607278662={};p607278663=true;p607278664=[];p607278666=0;p607278669()}}p607278717=0;
var p607278718=setInterval(function(){try{if(window.oDv.length>0){clearInterval(p607278718);p607278669()}}catch(e$2){p607278717+=100;if(p607278717>=1E4){p607278716==true&&console.log("oDv does not exist");clearInterval(p607278718)}}},100);