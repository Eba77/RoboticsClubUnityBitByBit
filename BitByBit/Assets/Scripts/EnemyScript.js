#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(collision:Collider2D) {
	var player:PlayerMarker;
	player = collision.gameObject.GetComponent(PlayerMarker);
	if (player!=null) {
		Debug.Log("I see you!");
	}
}