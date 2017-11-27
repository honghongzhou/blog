var sprite=document.getElementsByClassName('nav-container')[0];
var a=sprite.getElementsByTagName('a');
for(var i=0;i<a.length;i++){
	(function(){
		a[i].onmouseover=function(){
			this.className='on';
		}
		a[i].onmouseout=function(){
			this.className='';
		}
	})(i);
}
