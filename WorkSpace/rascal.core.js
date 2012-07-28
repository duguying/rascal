//rascal.core.js is the core file for rascal_datashow project
//Project Manager RexLee. Email:duguying2008@gmail.com
//developer:RexLee.
//v 1.0.1
(function(){
	setting={};
	setting.bar_color="blue"
	setting.rascal_data1="";
	setting.rascal_data2="";
	setting.tag=true;
	setting.label=true;
	})()

inf=function(ele){
	//get information
	//inf={};
	inf.browser=(function(){  
		if(navigator.userAgent.indexOf("MSIE")>0) {  
	        return "MSIE";//IE浏览器
		}  
		if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
	        return "Firefox";//火狐
		}  
		if(isSafari=navigator.userAgent.indexOf("Safari")>0){
	        return "Safari";//谷歌
		}
		if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
	        return "Camino";//Camino浏览器
		}  
		if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
	        return "Gecko";//Gecko浏览器
		} else{
			return "other";//其他
		}})();
	inf.width=ele.offsetWidth;
	inf.height=ele.offsetHeight;
	inf.top=ele.offsetTop;
}

rascal=function(id){
	//rascal={};
	ele=eval(id);//Get DOM Object
	ele.setAttribute("class",'rascal');
	inf(ele);//Create Object
	rascal.draw=function(num){//drawing
		rascal.draw={};
		rascal.draw.barnum=num;
		var i=rascal.draw.barnum;
		rascal.draw.dx=rascal.draw.dbar=inf.width/(rascal.draw.barnum*2);
		rascal.draw.bar=function(i,n,m){//n为百分比,i为第i个bar
			/////////////CREATE BARS/////////////////////
			var bar=document.createElement("div");
			bar.setAttribute("id",'bar'+i);//id="bar1" class="bar"
			bar.setAttribute("class",'bar');
			/////////////////////////////////////////////
			var top=inf.height*(1-n);//定位
			var left=(2*i-1)*rascal.draw.dx;//定位
			var height=n*inf.height;
			var fix_left;
			var fix_top;
			var fix_height
				fix_left=3;//IE,FF,GG=3
				fix_top=1;
				fix_height=2;//IE,FF,GG=3
			left-=fix_left;
			top-=fix_top
			height-=fix_height
			if(height<=0){
				height=0;
				top=top-2;
				}
			/////////////CREATE BARS/////////////////////
			bar.style.position="absolute";
			bar.style.left=Math.floor(left)+'px';
			bar.style.top=Math.floor(top)+'px';
			bar.style.width=Math.floor(rascal.draw.dbar)+'px';
			bar.style.height=Math.floor(height)+'px';
			bar.style.backgroundColor=setting.bar_color;
			ele.appendChild(bar);//create elememt
			/////////////////////////////////////////////
			////////////CREATE TAGS//////////////////////
			var tag=document.createElement("div");
			var tag_fix_left=rascal.draw.dbar/2;
			var tag_fix_top=rascal.draw.dbar+2;
			tag.setAttribute("id",'tag'+i);//id="bar1" class="bar"
			tag.setAttribute("class",'tag');
			if(setting.tag==false){
				tag.style.visibility="hidden";
			}
			tag.style.position="absolute";
			tag.style.left=Math.floor(left-tag_fix_left)+'px';
			tag.style.top=Math.floor(top-tag_fix_top)+'px';
			tag.style.width=(Math.floor(rascal.draw.dbar)*2)+'px';
			tag.style.height=Math.floor(rascal.draw.dbar)+'px';
			tag.style.fontSize=Math.floor(rascal.draw.dbar)+'px';
			tag.innerHTML=n*100+"%";
			ele.appendChild(tag);//create elememt
			///////////CREATE LABELS/////////////////////
			var label=document.createElement("div");
			label.setAttribute("id",'label'+i);//id="bar1" class="bar"
			label.setAttribute("class",'label');
			if(setting.label==false){
				label.style.visibility="hidden";
			}
			label.style.position="absolute";
			label.style.left=Math.floor((2*i-1)*rascal.draw.dx-2)+'px';
			label.style.top=Math.floor(inf.height)+'px';
			label.style.width=Math.floor(rascal.draw.dbar)+'px';
			label.style.fontSize=Math.floor(rascal.draw.dbar)+'px';
			label.style.lineHeight=(Math.floor(rascal.draw.dbar)+2)+'px';
			label.innerHTML=m;
			ele.appendChild(label);//create elememt
			/////////////////////////////////////////////
			};
		}
	
	rascal.init=function(){
		rascal.init={};
		rascal.draw(eval(setting.rascal_data1+".length"));//draw 10 bars
		//init data
		rascal.init.create=function(){
				for(i=1;i<=rascal.draw.barnum;i++){
				rascal.draw.bar(i,eval(setting.rascal_data1+"[i-1]"),eval(setting.rascal_data2+"[i-1]"));
				}
			}
		rascal.init.create();//开始创建

		
		};
		
}









///////Example
//rascal(id);
//rascal.set.bar_color="red";
//rascal_data1=Array('0.1','0.2','0.8','0.4','0.6','0.5');
//rascal.init();//Init rascal




