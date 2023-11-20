
function ajax_happy_coupon_check()
{
	var coupon_number	= document.getElementById('use_coupon_number');

	if ( coupon_number == undefined || coupon_number == null )
	{
		return;
	}

	if ( coupon_folder == null || coupon_folder == undefined || coupon_folder == "" )
	{
		coupon_folder		= 'coupon';
	}

	var linkUrl			= coupon_folder + '/ajax_coupon_check.php';
	linkUrl				+= '?val=' + encodeURI(coupon_number.value);
	linkUrl				+= '&baro='+ document.getElementById('baro').value;

	happyStartRequest( linkUrl,'ajax_happy_coupon_check_return')
}

function ajax_happy_coupon_check_return()
{
	if ( happyResponse != '' && happyResponse != undefined )
	{
		var returnVal	= happyResponse.split('___CUT___');
		var msg_layer	= document.getElementById('use_coupon_check_layer');

		if ( msg_layer == undefined || msg_layer == null )
		{
			return;
		}

		if ( returnVal[0] == 'ok' )
		{
			msg_layer.innerHTML = '<font color=green>'+returnVal[1]+'</font>';

			if ( returnVal[2] != '' && returnVal[2] != undefined )
			{
				msg_layer.innerHTML += returnVal[2];
			}

			return;
		}
		else if ( returnVal[0] == 'no' )
		{
			msg_layer.innerHTML = '<font color=red>'+returnVal[1]+'</font>';
			if ( returnVal[2] != '' && returnVal[2] != undefined )
			{
				msg_layer.innerHTML += returnVal[2];
			}

			return;
		}
		else if ( returnVal[0] == 'error' )
		{
			alert(returnVal[1]);
			return;
		}
		else
		{
			return;
		}
	}
}

function happy_coupon_use_ok()
{
	if ( !confirm(" 쿠폰을 적용하시겠습니까?") )
	{
		return;
	}
	
	var form				= document.forms["basket"];

	//쿠폰을 사용할 상품번호를 입력
	for ( var f=0 ; f<form.length ; f++ )
	{
		if ( form.elements[f].name == "coupon_use_cart_check" && form.elements[f].checked == true )
		{
			document.getElementById('coupon_use_cart_number').value = form.elements[f].value;
		}
	}

	var coupon_money		= document.getElementById('use_coupon_discount_point');		//쿠폰 할인금액 또는 %
	var coupon_unit			= document.getElementById('use_coupon_discount_unit');		//할인단위(원 또는 %)
	var use_point_val		= document.getElementById('use_point').value;				//사용할 포인트
	var total_price_val		= document.getElementById('total_price').value;				//장바구니 총금액
	var cart_number			= document.getElementById('coupon_use_cart_number').value;	//쿠폰 사용할 카트번호
	var cart_price			= document.getElementById('coupon_use_cart_point_'+cart_number).value;	//쿠폰 사용할 카트의 금액
	var discount_val		= 0;

	if ( use_point_val == '' )
	{
		use_point_val			= 0;
	}

	switch ( coupon_unit.value )
	{
		case 'money' :
		{
			discount_val = parseInt(coupon_money.value);
			break;
		}
		case 'percent' :
		{
			discount_val = (parseInt(cart_price)/100) *parseInt(coupon_money.value);
			break;
		}
	}

	total_price_val = parseInt(total_price_val) - parseInt(use_point_val) - discount_val;

	if ( total_price_val < 0 )
	{
		alert(" 구매할 상품의 금액이 없습니다. \n 확인 후 재사용 바랍니다. ");
		return;
	}

	document.getElementById('use_point_view').innerHTML = use_point_val.toString().number_format();
	document.getElementById('use_coupon_view').innerHTML = discount_val.toString().number_format();
	document.getElementById('real_use_coupon_discount_point').value = discount_val;
	document.getElementById('pay_money').value = total_price_val;
	document.getElementById('total_price_view').innerHTML = total_price_val.toString().number_format();
	
	//0원이 되면 무료결제버튼 출력 hong
	if ( document.getElementById('pay_zero_btn') != undefined )
	{
		if ( document.getElementById('pay_money').value == 0 )
		{
			document.getElementById('pay_zero_btn').style.display = "";
		}
		else
		{
			document.getElementById('pay_zero_btn').style.display = "none";
		}
	}

	//포인트결제버튼 숨김
	if ( document.getElementById('pay_point_btn') != undefined )
	{
		if ( document.getElementById('use_point').value > 0 )
		{
			document.getElementById('pay_point_btn').style.display = "none";
		}
		else
		{
			document.getElementById('pay_point_btn').style.display = "";
		}
	}

	//쿠폰사용 관련 버튼 숨기고 입력창 막음
	document.getElementById('use_coupon_number').disabled			= true;
	document.getElementById('use_coupon_number').style.display	= '';
	document.getElementById('reset_coupon_check_btn').style.display	= '';
	document.getElementById('use_coupon_check_btn').style.display	= 'none';
	document.getElementById('coupon_use_select_layer').style.display= 'none';
	document.getElementById('use_coupon_check_layer').style.display = 'none';
	document.getElementById('coupon_list').style.display = 'none';
}