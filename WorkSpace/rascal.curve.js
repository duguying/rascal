// JavaScript Document
// Created By RexLee
inf=function(){
	  inf.x=document.getElementById("box").offsetLeft;
	  inf.y=document.getElementById("box").offsetTop;
	  inf.w=document.getElementById("box").offsetWidth;
	  inf.h=document.getElementById("box").offsetHeight;
	  inf.line_start=0;
	  inf.line_l=0;
	  inf.line_start_x;
	  inf.line_end_x;
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
	
	curve.move=function(p,x,y,l){//l为点型，即为点的长度
	  m_point=document.getElementById("p"+Math.floor(p));//字母f不能传进来
	  m_point.style.borderStyle="solid";
	  m_point.style.borderColor=setting.point_color;
	  m_point.style.borderWidth="1px";
	  try{
		  if(!(x==inf.line_start_x)){
			  m_point.style.height=inf.line_l+"px";
			  };
		  if(x==inf.line_end_x){
				m_point.style.height=inf.line_l*0+"px";
			  };
		  }catch(e){};
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
		x1=Math.floor(x1);
		x2=Math.floor(x2);//次出将x取整，不然40行无法抓取线段末尾点
		inf.line_l=Math.abs(ddy);
		inf.line_start_x=x1;
		inf.line_end_x=x2;
		for(var i=0;i<=dx;i++){
			try{curve.move(inf.line_start+i,x1+i,y1+i*ddy-fix_y);}catch(e){/*inf.line_end_x=i;alert(e+"  "+i);*/};//会溢出报错
			};
		}

	curve.draw=function(){
		var arr=eval(setting.arrname);
		var len=arr.length;
		var d=inf.w/(len-1);
		for(var i=0;i<len;i++){
			curve.line(i*d,arr[i],(i+1)*d,arr[i+1]);
			inf.line_start=(i+1)*d;
			if(i==len-2){break;};
			}

		};
		

	//启动画图
	curve.init();
	curve.draw();
};