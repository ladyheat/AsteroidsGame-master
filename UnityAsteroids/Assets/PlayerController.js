#pragma strict
var normalSpeed:int;
var turboSpeed:int;
static var health:int=100;

// gameover is declared as false
var gameover:boolean=false;

//this is the slot for the laser prefab
var laserprefab:Rigidbody;

//start time initialized to float and set to zero
var startTime:float=0.0;
var currentTime:float=0.0;
var elapsedTime:int=0;
static var score:int=0;


function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="asteroid")
	{
		//reduce 1% health
		health--;
	}
}


function Start () {
	//the time the player started playing
	startTime=Time.time;
}

function Update () {
	currentTime = Time.time;
	//il-hin li ghadda nahdmuh hekk:
	
	if (Input.GetKey(KeyCode.Escape))
	{
		Application.LoadLevel(0);
	}
	
	//kill the game after sixty seconds; '||' means 'or'
	if ((elapsedTime<60)||(health>0))
	{
		elapsedTime = currentTime - startTime;
		//enable borders using the borders function in BorderController
		BorderController.EnableBorders(transform);

		//rotation of the cube
		transform.Rotate(Vector3.forward * -40 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
		//fire is the Z key
		if(Input.GetKeyDown(KeyCode.Z))
		{
			//create a laser at the position of the space ship.
			Instantiate(laserprefab,transform.position,transform.rotation);
		}
	
		//speed / turbo speed
		if (Input.GetKey(KeyCode.Space))
		{
			transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		else
		{
			//if not holding space bar
			transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		
	} else {
		//the game is over
		gameover=true;
		//game over
		print("game over");
	}

}

function OnGUI()
{
	GUI.color = Color.green;
	GUI.Label(Rect(0,0,150,50),"Elapsed Time: "+elapsedTime);
	GUI.Label(Rect(0,20,150,50),"Score: "+score);
	GUI.Label(Rect(0,40,150,50),"Health: "+health);
	
	if(gameover==true)
	{
		GUI.Label(Rect(200,200,150,50),"Game Over!");
	}
}