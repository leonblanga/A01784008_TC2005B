using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongGoal : MonoBehaviour
{
    [SerializeField] string side;
    //variable to reference another scripts
    pongManager manager;
    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<pongManager>();
    }

    //Detect when the ball goes out of bounds
    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
    }
}
