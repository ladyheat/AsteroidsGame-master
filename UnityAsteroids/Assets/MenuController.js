#pragma strict
var logo:Texture2D;
var style:GUISkin;



function Start () {

}

function Update () {

}

function OnGUI()
{
	//a label with an embedded image
	GUI.Label(Rect(0,0,logo.width,logo.height),logo);
	
	if (GUI.Button(Rect(150,logo.height+10,200,200),"New Game"))
	{
		//start new game
		Application.LoadLevel(1);
	}
}