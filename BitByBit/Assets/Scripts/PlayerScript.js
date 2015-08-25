#pragma strict

public static var DEBUG = true;

//stats
public static var attack: int;
public static var maxHealth: int;
public static var health: int;
public static var defense: int;
public static var speed: int;

//bits
public static var bitsToSpend: int;
public static var bitsSpent: int[]; 
	//0 - sprite bits; 1 - atk; 2 - hp; 3 - def; 4 - spd; 
	
//world status
public static var levelCode: int;
public static var spawnLevelCode: int; //what the level code will be set to if you die.
public static var spawnPosition: Vector2;

//stat keeping
public static var timesDied: int;
public static var levelsEntered: int;

function Start () {
	bitsToSpend = 0;
	bitsSpent = new int[5];
	for (var i = 0;i<bitsSpent.length;i++) {
		bitsSpent[i] = 0;
	}
	attack = 5+bitsSpent[1];
	maxHealth = 5+bitsSpent[2];
	health = maxHealth;
	defense = 0+bitsSpent[3];
	speed = 6+bitsSpent[4];
	
	levelCode = -1;
	spawnLevelCode = -1;
	spawnPosition = Vector2(0,0);
	
	//stat keepers
	timesDied = 0;
	levelsEntered = 0;
}

function Update () {
	//movement
	var rigid = this.GetComponent.<Rigidbody2D>();
	if (Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow)) {
		rigid.velocity = Vector2(-speed,0);
	}
	if (Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow)) {
		rigid.velocity = Vector2(speed,0);
	}
	if (Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)) {
		rigid.velocity = Vector2(0,6);
	}
	if (Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow)) {
		rigid.velocity = Vector2(0,-6);
	}
	//status updates
	if (health<=0) die();
}

function die() {
	timesDied = 0;
	health = maxHealth;
	loadLevel(spawnLevelCode);
	this.GetComponent.<Transform>().position = spawnPosition;
}

function loadLevel(code:int) {
	var position = this.GetComponent.<Transform>().position;
	switch (code) {
		case -1:
			position = Vector2(0,0);
		break;
		default:
			if (position.x>0) {
				position = Vector2(-5,0);
			}
			else {
				position = Vector2(5,0);
			}
		break;
	}
	
	levelCode = code;
}

function takeDamage(damage:int) {
	health-=damage;
	if (DEBUG) Debug.Log("Ow: " + health + "/" + maxHealth);
}