// detail.php
function go_buy_price(str,buy_type)
{
	var link			= '';

	var buy_streaming	= document.getElementById('buy_streaming');
	var buy_download	= document.getElementById('buy_download');

	if(buy_streaming.checked == false && buy_download.checked == false)
	{
		alert('[스트리밍] 혹은 [다운로드] 를 선택해주십시오.');
		return false;
	}
	else if(buy_streaming.checked == true && buy_download.checked == true)
	{
		location.href	= str.href + '&price_type=streaming,download&buy_type=' + buy_type;
	}
	else
	{
		if(buy_streaming.checked == true)
		{
			link	= 'streaming';
		}
		else if(buy_download.checked == true)
		{
			link	= 'download';
		}
		else
		{
			alert('선택해주십시오.');
			return false;
		}

		if(link != '')
			location.href	= str.href + '&price_type=' + link + '&buy_type=' + buy_type;
	}
}

// detail.php
function go_buy_price2_old(str,buy_type)
{
	var link			= '';

	var buy_streaming	= document.getElementById('buy_streaming');
	var buy_download	= document.getElementById('buy_download');

	if( (buy_streaming != undefined && buy_streaming.checked == false && buy_streaming.disabled == false))
	{
		alert('[스트리밍] 을 선택해주십시오.');
		return false;
	}
	else if( (buy_download != undefined && buy_download.checked == false && buy_download.disabled == false))
	{
		alert('[다운로드] 을 선택해주십시오.');
		return false;
	}
	else if( (buy_streaming != undefined && buy_streaming.checked == false) && (buy_download != undefined && buy_download.checked == false) )
	{
		alert('[스트리밍] 혹은 [다운로드] 를 선택해주십시오.');
		return false;
	}
	else if(buy_streaming.checked == true && buy_download.checked == true)
	{
		location.href	= str.href + '&price_type=streaming,download&buy_type=' + buy_type;
	}
	else
	{
		if(buy_streaming.checked == true)
		{
			link	= 'streaming';
		}
		else if(buy_download.checked == true)
		{
			link	= 'download';
		}
		else
		{
			alert('선택해주십시오.');
			return false;
		}

		if($("select[name=option]").length>0){
			var option;
			for(var i=0; i<$("select[name=option]").length; i++){
				if($("select[name=option]").eq(i).val() == ""){
					alert("옵션을 선택해주세요");
					return false;
				}
				if(option){
					option
				}
				option = option?option+"$":"";
				option = option+$("select[name=option]").eq(i).attr("id")+"|"+$("select[name=option]:eq("+i+") option").index($("select[name=option]:eq("+i+") option:selected"));
			}
			location.href = str.href+"&option="+option;
			return false;
		}

		if(link != '')
			location.href	= str.href + '&price_type=' + link + '&buy_type=' + buy_type;
	}
}

// 선택
function checkedArticle(name,url)
{
     if(name == '' || name == null || name == 'undefined')     alert('Error : No Element Name');
     if(url == '' || url == null || url == 'undefined')     alert('Error : No Url');

     var obj          = document.getElementsByName(name);
     var tmp          = new Array();
     var k          = 0;

     for( var i = 0; i < obj.length; i++)
     {
          if(obj[i].checked == true)
          {
               tmp[k] = obj[i].value;
               k++;
          }
     }
     tmp.join(",");
     //alert(tmp);

     if(tmp != '')
     {
          location.href = url + tmp;
     }
}

// 전체 선택
function checkedArticleAll(chk,name)
{
     //if(chk == '' || chk == null || chk == 'undefined')          alert('Error : No Checked');
     if(name == '' || name == null || name == 'undefined')     alert('Error : No Element Name');

     var lng          = document.getElementsByName(name).length;

     for( var i = 0; i < lng; i++)
     {
          document.getElementsByName(name)[i].checked = chk;
     }
}

function go_buy(this2,no,type)
{
	if(no != '')
	{
		tmpLink		= this2.href + '&sub_number=' + no + '&ajax=on';
	}
	if(tmpLink != '')
	{
		$.ajax({
				type	: "GET",
				url		: tmpLink,
				success	: function(response) {
					//alert(response);
					if(response != 'error')
					{
						alert('상품을 장바구니에 담았습니다.');
						location.href	= "./happy_cart.php";
					}
					else
					{
						alert('자신이 판매하는 상품을 구매하실수는 없습니다.');
						return false;
					}
				}
		});
	}
	return false;
}

function go_check_buy(no,type)
{
	var	name	= 'no';
	var obj		= document.getElementsByName(name);
	var tmp		= new Array();
	var k		= 0;

	var tmpLink	= '';

	for( var i = 0; i < obj.length; i++)
	{
		if(obj[i].checked == true)
		{
			tmp[k]	= obj[i].value;
			k++;
		}
	}
	if(obj.length == tmp.length)
	{
		//alert('다 구입하신다면, 전체구매를 이용해주세요.');
		//return false;
	}

	tmp.join(",");
	//alert(tmp);

	if(tmp != '')
	{
		tmpLink	= 'happy_cart_reg.php?links_number=' + no + '&buy_type=one&price_type=' + type + '&sub_number=' + tmp;
	}
	else
	{
		alert("선택하신 것이 없습니다.\n구매하실 영상을 선택해주세요.");
		return false;
	}

	if(tmpLink != '')
	{
		alert('선택하신 강좌를 담았습니다');
		location.href	= tmpLink;
/*
		$.ajax({
				type	: "GET",
				url		: tmpLink,
				success	: function(response) {
					//alert(response);
					//if(confirm('[확인] 클릭시 장바구니로 이동합니다.'))
					location.href	= "./happy_cart.php";
					//else
					//return false;
				}
		});
*/
	}
	return false;
}

function buy_all_price_display(str)
{
	var tr_price_streaming	= document.getElementById('tr_price_streaming');
	var tr_price_download	= document.getElementById('tr_price_download');

	var streaming			= document.getElementById('streaming');
	var download			= document.getElementById('download');

	if(str.checked == true)
	{
		if(streaming.checked == true)
			tr_price_streaming.style.display	= '';
		if(download.checked == true)
			tr_price_download.style.display		= '';
	}
	else
	{
		tr_price_streaming.style.display	= 'none';
		tr_price_download.style.display		= 'none';
	}
}

// detail.html 에서 사용
function go_orderby(str,url)
{
	var order_str	= str.options[str.selectedIndex].value;

	location.replace(url + '&order=' + order_str);
	//alert(order_str + ' / ' + url);
}



