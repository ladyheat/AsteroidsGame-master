#pragma strict
var laserspeed:int;


function Start () {

}

function Update () {
	//all the laser needs is forward motion
	transform.Translate(Vector3.up * laserspeed * Time.deltaTime);

}

//when the laser exits the scene
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	//if object is tagged as asteriod
	if (other.gameObject.tag == "asteroid")
	{
		//destroy laser
		Destroy(this.gameObject);
		//destroy asteriod
		Destroy(other.gameObject);
		//increment the score by 1
		PlayerController.score++;
	}
	
	if (other.gameObject.tag == "powerup")
	{
		//destroy laser
		Destroy(this.gameObject);
		//destroy asteriod
		Destroy(other.gameObject);
		//increment health if health is less than 100 
		if (PlayerController.health < 100)
		{
		PlayerController.health++;
		}
		
		var player:GameObject;
		//get player on screen
		player = GameObject.FindGameObjectWithTag("player");
		
		//gettingplayer without a static variable
		var playerScript:PlayerController;
		
		//get player controller java script 
		playerScript = player.GetComponent("PlayerController");
		
		//turns spaceship red
		player.renderer.sharedMaterial = playerScript.colours[2];
		
	}
}