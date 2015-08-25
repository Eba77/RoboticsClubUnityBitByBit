#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(-6,0);
	}
	if (Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(6,0);
	}
	if (Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(0,6);
	}
	if (Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow)) {
		this.GetComponent.<Rigidbody2D>().velocity = Vector2(0,-6);
	}
}