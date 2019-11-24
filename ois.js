var params = new URLSearchParams(window.location.search);
var id = params.get('id');

var sidebar = document.querySelector('#rightContents .sidebar');
var panel = document.createElement('div');
panel.setAttribute('class', 'panel');
panel.innerHTML='<a href="steam://url/CommunityFilePage/' + id + '">Open In Steam</a>';
sidebar.appendChild(panel);
