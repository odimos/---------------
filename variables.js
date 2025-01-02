
export default{
    "gameDuration": 2,
    "stadiumHeight": 900,
    "ball":{
        "size": 32,
        "bigScale": 1.5,
        "smallScale":0.75,
        "maxSpeed": 200,
        "gravity":1,
        "bounce": 0.9,
        "friction": 0.01,
        "frictionAir": 0.01,
        "mass":1,
        "initialPosition":{
            "x":null,
            "y":200
        },
        "key": "ball"
    },
    "player":{
        "initialPosition":{
            "x":0,
            "y":0
        },
        "bigScale":1.5,
        "smallScale":0.75,
        "jumpSpeed": 8,
        "runSpeed": 5,
        "legSpeed": 20,
        "gravity":1,
        "key": ""
    },
    "goalPost":{
        "bigScale": 1.5,
        "smallScale": 0.75,
        "scale":1
    },
    "pop":{
        "lifeDuration": 6000,
        "minSpawnTime": 1000,
        "maxSpawnTime": 6000
    },
    "effect":{
        "duration": 3000
    },
    "atlases":{
    },
    "start_N":3
}