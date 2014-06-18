function insertAtCursor(text) 
{   
var field = document.getElementById("obavijest");


if(document.selection) 
	{
	var range = document.selection.createRange();
	if(!range || range.parentElement() != field)
		{
		field.focus();
		range = field.createTextRange();
		range.collapse(false);
		}
	range.text = text;
	range.collapse(false);
	range.select();
	} 
else	{
	field.focus();
	var val = field.value;
	var selStart = field.selectionStart;
	var caretPos = selStart + text.length;
	field.value = val.slice(0, selStart) + text + val.slice(field.selectionEnd);
	field.setSelectionRange(caretPos, caretPos);
    	}
live_p();
}



function live_p()
{
var field = document.getElementById("obavijest");
document.getElementById("live_prev").innerHTML = field.value;
}



function getSelText()
{
var field = document.getElementById("obavijest");
var selText;


if(document.selection != undefined)
	{
	field.focus();
	var sel = document.selection.createRange();
	selText = sel.text;
	}
else	if(field.selectionStart != undefined)
		{
		var startPos = field.selectionStart;
		var endPos = field.selectionEnd;
		selText = field.value.substring(startPos,endPos);
		}
return selText;
}



function fontsize()
{
var text = getSelText();
insertAtCursor("<span style=\"font-size:18px\">"+text+"</span>");
}



function paragraph()
{
var text = getSelText();
insertAtCursor("<p>"+text+"</p>");
}



function bold()
{
var text = getSelText();
insertAtCursor("<b>"+text+"</b>");
}



function italic()
{
var text = getSelText();
insertAtCursor("<i>"+text+"</i>");	
}



function h(x)
{
var text = getSelText();
insertAtCursor("<h"+x+">"+text+"</h"+x+">");	
}



function lf()
{
var text = getSelText();
insertAtCursor(text+"<br />");
}



function list()
{
var text = getSelText();
insertAtCursor("<ul>\n<li>"+text+"</li>\n</ul>");
}



function list_node()
{
var text = getSelText();
insertAtCursor("<li>"+text+"</li>\n");
}



function pic()
{
var text = getSelText();
insertAtCursor("<img src=\""+text+"\" />");
}



function url()
{
var text = getSelText();
insertAtCursor("<a href=\""+text+"\"></a>");
}



function col()
{
var text = getSelText();
insertAtCursor("<span style=\"color:blue\">"+text+"</span>");
}



function slider()
{
var slider = document.getElementById("slide");
handleEvent();
}



function handleEvent(e)
{
 var evt = e ? e:window.event;
 var clickX=0, clickY=0;

 if((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft!=null) 
 	{
	clickX = evt.clientX + document.body.scrollLeft;
	clickY = evt.clientY + document.body.scrollTop;
	}
if((evt.clientX || evt.clientY) && document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.scrollLeft!=null)
	{
	clickX = evt.clientX + document.documentElement.scrollLeft;
	clickY = evt.clientY + document.documentElement.scrollTop;
 	}
if(evt.pageX || evt.pageY)
	{
	clickX = evt.pageX;
	clickY = evt.pageY;
	}
var slider = document.getElementById("slide");
var y = clickY - slider.offsetTop;
alert(slider.offsetTop + " " + slider.offsetLeft);
alert('pageX = ' + clickX +' pageY = ' + clickY);
return false;
}
