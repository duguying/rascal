// JavaScript Document
inf=function(){
	  inf.x=document.getElementById("box").offsetLeft;
	  inf.y=document.getElementById("box").offsetTop;
	  inf.w=document.getElementById("box").offsetWidth;
	  inf.h=document.getElementById("box").offsetHeight;
	  //alert(inf.w-2);
	};
	
(function(){
	setting={};
	setting.arrname="arr";
	setting.point_color="red";
	
	})();

curve=function(){
	curve.create=function(p,x,y){
	  var c_point=document.createElement("div");
	  c_point.setAttribute("class","p");
	  c_point.setAttribute("id","p"+p)
	  c_point.style.left=x+"px";
	  c_point.style.top=y+"px";
	  document.getElementById("box").appendChild(c_point);
	}
	
	curve.move=function(p,x,y){
	  m_point=document.getElementById("p"+p);
	  m_point.style.borderStyle="solid";
	  m_point.style.borderColor=setting.point_color;
	  m_point.style.borderWidth="1px";
	  m_point.style.left=x+"px";
	  m_point.style.top=y+"px";
	}
	
	curve.init=function(){
		inf();
		for(i=0;i<inf.w-3;i++){
			curve.create(i,i,inf.h);
			}
		}
	//画线段
	curve.line=function(x1,y1,x2,y2){//x1<x2
		y1=inf.h-y1;
		y2=inf.h-y2;
		var fix_y=3;
		var dx=x2-x1;
		var dy=y2-y1;
		var ddy=dy/dx;
		//alert(ddy);
		for(var i=0;i<dx;i++){
			curve.move(i,x1+i,y1+i*ddy-fix_y);
			}
		}
	
	
	curve.draw=function(){
		var arr=eval(setting.arrname);
		var len=arr.length;
		//alert(len);
		var d=inf.w/(len-1);
		for(var i=0;i<len;i++){
			curve.line(i*d,arr[i],(i+1)*d,arr[i+1]);
			alert("pause");
			if(i==len-2){break;};
			}

		}	
	
	
	
	curve.init();
	curve.draw();
	


};
