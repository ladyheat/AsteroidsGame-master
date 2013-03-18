#pragma strict
var powerup:Rigidbody;


function Start () {
	//Invoke repeating
	//wait 1 second before generating a powerup and then create a powerup every five seconds
	InvokeRepeating("generatepowerup",1.0,5.0);
}

function generatepowerup()
{
	//position of powerup. Rightmost,y=0, z=1, rotation0
	Instantiate(powerup,Vector3(BorderController.rightmost,0,1));
}

function Update () {
	BorderController.EnableBorders(this.transform);
}