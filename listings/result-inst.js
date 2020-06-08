[
  {
    "block": 7,
    "line": 0,
    "type": "instruction",
    "text": "robbot_instance.rot=0"
  },
  {
    "block": 7,
    "line": 1,
    "type": "instruction",
    "text": "robbot_user_var_dir=-1"
  },
  {
    "block": 7,
    "line": 2,
    "type": "instruction",
    "text": "robbot_user_var_static=30"
  },
  {
    "block": 2,
    "line": 0,
    "type": "instruction",
    "text": "robbot_user_var_diff=robbot_instance.distanceSensor/3*robbot_user_var_dir"
  },
  {
    "block": 2,
    "line": 1,
    "type": "instruction",
    "text": "robbot_instance.speed=robbot_user_var_static*robbot_user_var_dir+robbot_user_var_diff"
  },
  {
    "type": "condition",
    "block": 3,
    "text": "robbot_instance.distanceSensor<150&&robbot_instance.distanceSensor>130||robbot_instance.distanceSensor>600&&robbot_instance.distanceSensor<100",
    "jmpFalse": 8
  },
  {
    "block": 4,
    "line": 0,
    "type": "instruction",
    "text": "robbot_user_var_dir=robbot_user_var_dir*-1"
  },
  {
    "type": "jump",
    "text": 8
  },
  {
    "block": 6,
    "line": 0,
    "type": "timer",
    "text": "50"
  },
  {
    "type": "jump",
    "text": 3
  }
]