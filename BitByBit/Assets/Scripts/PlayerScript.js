#pragma strict

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
}

function Update () {
	if (Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(-speed,0);
	}
	if (Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(speed,0);
	}
	if (Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(0,6);
	}
	if (Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(0,-6);
	}
}