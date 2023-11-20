

// getElementsByClassName
function getElementsByClassName(chkName,parentNode) {
var arr = new Array();
if (parentNode == null) {
var elems = document.getElementsByTagName("*");
}
else {
var elems = parentNode.getElementsByTagName("*");
}
for ( var chk, i = 0; ( elem = elems[i] ); i++ ) {
if ( elem.className == chkName ) {
arr[arr.length] = elem;
}
}
return arr;
}
function tabDisplay(tab,content,num,chk,over,type) {
for (var i=0; i<content.length; i++) {
tab[i].className = '';
tab[num].className = chk;
content[i].style.display = 'none';
content[num].style.display = 'block';
}
}
function tabAct(tab,content,num,chk,over,type) {
tab[num].onclick = function() {
tabDisplay(tab,content,num,chk);
return false;
a
}
if (type == true) {
tab[num].onmouseover = function() {
if (this.className != chk) {
this.className = over;
}
}
tab[num].onmouseout = function() {
if (this.className == over) {
this.className = '';
}
}
}
}

function tabMenu() {
	var tabs = document.getElementById('tabmenu');
	var tab = tabs.getElementsByTagName('a'); // 탭 요소
	var contents = document.getElementById('tabcontents');
	var content = getElementsByClassName('tabcontent',contents); // 컨텐츠 요소 class
	var chk = 'selected'; // 선택된 탭의 class
	var over = 'over'; // 롤오버된 탭의 class
	var type = true; // 롤오버의 true / false

	for (var i=0; i<tab.length; i++) {
		tabDisplay(tab,content,0,chk,over,true);
		tabAct(tab,content,i,chk,over,type);
	}
}

// getElementsByClassName
function getElementsByClassName(chkName,parentNode) {
var arr = new Array();
if (parentNode == null) {
var elems = document.getElementsByTagName("*");
}
else {
var elems = parentNode.getElementsByTagName("*");
}
for ( var chk, i = 0; ( elem = elems[i] ); i++ ) {
if ( elem.className == chkName ) {
arr[arr.length] = elem;
}
}
return arr;
}
function tabDisplay(tab,content,num,chk,over,type) {
for (var i=0; i<content.length; i++) {
tab[i].className = '';
tab[num].className = chk;
content[i].style.display = 'none';
content[num].style.display = 'block';
}
}
function tabAct(tab,content,num,chk,over,type) {
tab[num].onclick = function() {
tabDisplay(tab,content,num,chk);
return false;
a
}
if (type == true) {
tab[num].onmouseover = function() {
if (this.className != chk) {
this.className = over;
}
}
tab[num].onmouseout = function() {
if (this.className == over) {
this.className = '';
}
}
}
}


function tabMenu2() {
	var tabs = document.getElementById('tabmenu2');
	var tab = tabs.getElementsByTagName('a'); // 탭 요소
	var contents = document.getElementById('tabcontents2');
	var content = getElementsByClassName('tabcontent2',contents); // 컨텐츠 요소 class
	var chk = 'selected'; // 선택된 탭의 class
	var over = 'over'; // 롤오버된 탭의 class
	var type = true; // 롤오버의 true / false

	for (var i=0; i<tab.length; i++) {
		tabDisplay(tab,content,0,chk,over,true);
		tabAct(tab,content,i,chk,over,type);
	}
}


//window.onload = tabMenu;
