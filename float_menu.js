// JavaScript Document
start=function(div){///////////参数列表////////////////
	start.div=div;
	start.ul;//ul元素
	start.ul_left_fix=0;//ul定位修正参数，选填
	start.ul_top_fix=0;//ul定位修正参数，选填
	start.ul_border="#D6D6D6 solid 1px";//ul边框参数，选填，遵循css风格
	start.ul_listStyle="none";//ul的listStyle列表样式，选填
	start.ul_background="white";//ul背景颜色，选填
	start.ul_backgroundImage="";//ul背景图片，选填
	start.menu_onmouseover=0;//状态参数，自动生成
	start.num=10;//li数目参数，自动生成
	start.left=30;//li缩进参数
	start.height=19;//li行高参数，重要
	start.arr="";//数组名参数，重要
	start.menu_width;//ul宽度参数，重要
	start.fontFamily="微软雅黑";//li字体参数，选填
	start.lineHeight="20px";//li行高参数，选填
	};

create_ul=function(){
	//alert("cr"+start.div);
	if(start.div==""){alert("you've forget [start.div].");return false;}
	
	start.ul=document.createElement("ul");
	var m_left=0;
	
	var m_top=document.getElementById(start.div).offsetHeight;
	
	start.ul.style.position="absolute";
	start.ul.style.left=(m_left+start.ul_left_fix)+"px";//ul定位参数
	start.ul.style.top=(m_top+start.ul_top_fix)+"px";//ul定位参数
	start.ul.style.width=start.menu_width+"px";//ul宽度
	start.ul.style.height=(start.num*start.height+3)+"px";//ul高度参数，自动生成
	start.ul.style.zIndex="1";
	start.ul.style.border=start.ul_border;//ul边框风格
	start.ul.style.listStyle=start.ul_listStyle;//ul的listStyle列表样式
	start.ul.style.padding="0px";
	start.ul.style.margin="0px";
	start.ul.style.background="white";//ul背景颜色
	if(start.ul_backgroundImage!=""){start.ul.style.backgroundImage=start.ul_backgroundImage};//设定ul背景图片
	start.ul.style.visibility="hidden";
	
	start.ul.setAttribute("class","hover");
	
	document.getElementById(start.div).appendChild(start.ul);
	
	start.ul.onmouseover=function(){//菜单保持
		start.menu_onmouseover=1;
		};
	}

create_li=function(i){
	var li=document.createElement("li");
	li.style.lineHeight=start.lineHeight;
	li.style.fontFamily=start.fontFamily;
	li.style.position="absolute";
	li.style.left=start.left+"px";//li缩进定位
	li.style.top=(i*start.height)+"px";
	li.style.height=start.height+"px";
	li.innerHTML=eval(start.arr+"[i]");//内容填充
	start.ul.appendChild(li);
	};

menu=function(){
	//报错
	if(!(start.arr)){alert("you forget the [start.arr].");return false;};
	if(!(start.menu_width)){alert("you forget the [start.menu_width].");return false;};
	//初始化数据
	start.num=eval(start.arr+".length");
	//创建ul
	create_ul();
	//创建li
	for(var i=0;i<start.num;i++){
		create_li(i);
		}
		
	document.getElementById(start.div).setAttribute("onmouseover","mover(this)");
	document.getElementById(start.div).setAttribute("onmouseout","mout(this)");
	};

////////////////////动作函数//////////////////////////////////
m_show=function(ele){
	//alert(ele.lastChild.nodeName);
	ele.lastChild.style.visibility="visible";//ele的子节点
	};
m_hide=function(ele){
	if(start.menu_onmouseover==0){
		ele.lastChild.style.visibility="hidden";
		};
	ele.lastChild.onmouseout=function(){
		ele.lastChild.style.visibility="hidden";
		start.menu_onmouseover=0;
		}
	};
mout=function(ele){
	window.setTimeout(function(){m_hide(ele);},100);
	};	
mover=function(ele){
	m_show(ele);
	};
//////////////////////////////////////////////////////////////







