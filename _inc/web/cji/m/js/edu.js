/****************************************************************************
*	사용조건																*
*	js/glm-ajax.js 을 먼저 호출해야함.										*
*	사용된 플레이어는 jplayer.org 에서 개발 가이드를 제공 받을 수 있다.		*
****************************************************************************/
var play_time		= 0;
var ajax_edu		= new GLM.AJAX();

var g_number		= '';
var g_sub_number	= '';
var g_sample		= '';
var g_file_type		= '';
var g_or_no			= '';

var is_play_check	= false;
var play_interval	= null;
var token_number	= null;

var playing_check	= false;


function make_ajax_token(number,sub_number,sample,file_type,or_no)
{
	g_number			= number;
	g_sub_number		= sub_number;
	g_sample			= sample;
	g_file_type			= file_type;
	g_or_no				= or_no;

	ajax_edu.callPage(
		'ajax_make_token.php?number='+number+'&sub_number='+sub_number+'&sample='+g_sample+'&or_no='+or_no,
		function(response) {
			//alert(response);
			ajax_receive_message	= response.split("/");
			if(ajax_receive_message[0] == 'SUCCESS')
			{
				token_number			= ajax_receive_message[4];
				player_jplayer(ajax_receive_message[1],ajax_receive_message[2],ajax_receive_message[3],g_sample,file_type);
				document.getElementById("player_body").style.display='';

				if( g_sample == 'y' )
				{
					is_play_check			= true;
				}
				else
				{
					ajax_play_jangboo_check('only_check');
				}
				//alert(play_check);
			}
			else
			{
				alert('불법적인 접근은 허용되지 않습니다.');
			}
		}
	);
}

function interval_check(play_type,function_name)								//interval 꼬임방지
{
	//alert(function_name);
	if( play_type == 'play' ){
		play_interval		= setInterval(play_check,play_check_time);
	}
	else{
		clearInterval(play_interval);
		play_interval		= null;
	}
}

function play()
{
	if( is_play_check == false )
	{
		alert('재생 가능한 시간을 모두 소진 하였습니다.');
		$("#jquery_jplayer_1").jPlayer().jPlayer('stop');
		return false;
	}

	document.getElementById("Play_Button").className 	= "btn_replay";
	if( g_sample != 'y' )
	{
		interval_check('play','function play');
	}
}

function pause()
{
	document.getElementById("Play_Button").className	= "btn_play";
	$("#jquery_jplayer_1").jPlayer().jPlayer('pause');
	if( g_sample != 'y' )
	{
		interval_check('no','function pause');
	}
}

function happy_play()
{
	if( is_play_check == false )
	{
		alert('재생 가능한 시간을 모두 소진 하였습니다.');
		$("#jquery_jplayer_1").jPlayer().jPlayer('stop');
		return false;
	}

	if( $('#jquery_jplayer_1').data().jPlayer.status.paused == true )			//재생중지 상태이므로 Clear
	{
		document.getElementById("Play_Button").className 	= "btn_replay";
		$("#jquery_jplayer_1").jPlayer().jPlayer("play");
	}
	else
	{
		document.getElementById("Play_Button").className	= "btn_play";
		$("#jquery_jplayer_1").jPlayer().jPlayer('pause');
	}
}

function happy_pause(){
	$("#jquery_jplayer_1").jPlayer().jPlayer('pause');
}

function happy_stop(){
	$("#jquery_jplayer_1").jPlayer().jPlayer('stop');
}


function play_check()
{
	play_time		+= parseInt(play_check_time)/1000;
	ajax_play_jangboo_check('play');

	if( is_play_check == false )
	{
		happy_stop();
		alert('재생 가능한 시간을 모두 소진 하였습니다.');
		return false;
	}

	if( $('#jquery_jplayer_1').data().jPlayer.status.paused == true )			//재생중지 상태이므로 Clear
	{
		return false;
	}
}

function ajax_play_jangboo_check(check_type)
{
	ajax_edu.callPage(
		'ajax_play_check.php?number='+g_number+'&sub_number='+g_sub_number+'&or_no='+g_or_no+'&check_type='+check_type+'&token_number='+token_number,
		function(response) {
			//alert(response);
			ajax_receive_message	= response.split("/");
			if(ajax_receive_message[0] == 'ONLY_CHECK_SUCCESS')
			{
				is_play_check			= true;
			}
			else if(ajax_receive_message[0] != 'PLAY_SUCCESS')
			{
				is_play_check			= false;
			}
		}
	);
}

function player_fullscreen()
{
	if( document.getElementById("happy_fullscreen").value == 'FullScreen' )
	{
		document.getElementById("happy_fullscreen").className 	= "btn_smallscreen";
		$("#jquery_jplayer_1").jPlayer("option", "fullScreen", true);
		document.getElementById("happy_fullscreen").value="FullScreen Cancel";
	}
	else
	{
		document.getElementById("happy_fullscreen").className 	= "btn_fullscreen";
		$("#jquery_jplayer_1").jPlayer("option", "fullScreen", false);
		document.getElementById("happy_fullscreen").value="FullScreen";
	}
}

function player_jplayer(number,sub_number,mem_id,sample,file_type)
{
	sample_url			= "";
	if( sample == 'y' )
	{
		sample_url		 = '&sample=y';
	}

	movie_type_url		= "";
	if( movie_type == 'low' )
	{
		movie_type_url			= "&movie_type="+movie_type;
	}

	$(document).ready(function(){
		$("#jquery_jplayer_1").jPlayer({
			ready: function () {
				if( file_type == 'mp3' )
				{
					$(this).jPlayer("setMedia", {
						title: movie_title,
						mp3: './movie_file.php?number='+number+'/'+sub_number+'/'+mem_id+'/'+token_number+sample_url,
						poster: img_url
					})
				}
				else
				{
					$(this).jPlayer("setMedia", {
						title: movie_title,
						m4v: './movie_file.php?number='+number+'/'+sub_number+'/'+mem_id+'/'+token_number+sample_url+movie_type_url,
						poster: img_url
					});
				}
			},
			pause  : function(){ pause(); },
			play : function(){ play(); },
			ended   : function(){ interval_check(); },
			/*		Repeat  설정
			ended: function() {					// The $.jPlayer.event.ended event
				$(this).jPlayer("play");		// Repeat the media
			},
			*/
			/*		재생시간 설정 맛보기 동영상에 이용하면 좋을듯.*/
			timeupdate: function(event) { // 4Hz
				// Restrict playback to first 60 seconds.
				if ( ( event.jPlayer.status.currentTime > sample_play_time && sample == 'y') && is_sample != 'y' ){
					$(this).jPlayer('stop');
				}
			},
			swfPath: "./player_js",
			solution: "html,flash",
			supplied: "mp3,m4v",
			size: {
				width: "100%",
				height: "185px",
				cssClass: "jp-video-360p"
			},
			useStateClassSkin: true,
			autoBlur: true,
			smoothPlayBar: true,
			keyEnabled: true,
			remainingDuration: true,
			toggleDuration: true
		});
	});

	//alert($("#jquery_jplayer_1").jPlayer);
}