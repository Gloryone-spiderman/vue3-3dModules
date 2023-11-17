import el from "element-ui/src/locale/lang/el";

export const ThreeData = {
    "objects": [
        {
            "show": true,
            "uuid": "",
            "name": "floor",
            "objType": "cube",
            "width": 3000,
            "depth": 2500,
            "height": 10,
            "style": {
                "skinColor": 7250357,
                "skin": {
                    "skin_up": {
                        "imgUrl": "floor.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    }
                }
            }
        },
        {
            "show": true,
            "uuid": "",
            "name": "wall",
            "objType": "wall",
            "depth": 20,
            "width": 100,
            "height": 240,
            "style": {
                "skinColor": 16777215
            },
            "wallData": [
                // 钢瓶间
                // 下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1337,
                        "y": 120,
                        "z": 1020 - 10
                    },
                    "endDot": {
                        "x": -677,
                        "y": 120,
                        "z": 1020 - 10
                    }
                },
                // 上 （门）
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1337,
                        "y": 120,
                        "z": 380 - 10
                    },
                    "endDot": {
                        "x": -677,
                        "y": 120,
                        "z": 380 - 10
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": -957,
                                "y": 90,
                                "z": 370
                            },
                            "endDot": {
                                "x": -857,
                                "y": 90,
                                "z": 370
                            }
                        },
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": -1037,
                                "y": 90,
                                "z": 370
                            },
                            "endDot": {
                                "x": -1137,
                                "y": 90,
                                "z": 370
                            }
                        }
                    ]
                },
                // 左
                {
                    "uuid": "",
                    "name": "wall3",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1337,
                        "y": 120,
                        "z": 1020
                    },
                    "endDot": {
                        "x": -1337,
                        "y": 120,
                        "z": -540
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": -1337,
                                "y": 90,
                                "z": 160
                            },
                            "endDot": {
                                "x": -1337,
                                "y": 90,
                                "z": 340
                            }
                        }
                    ]
                },
                // 右
                {
                    "uuid": "",
                    "name": "wall3",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -997,
                        "y": 120,
                        "z": 1020
                    },
                    "endDot": {
                        "x": -997,
                        "y": 120,
                        "z": 360
                    }
                },

                // 监控室
                // 下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1337,
                        "y": 120,
                        "z": 380 - 10 - 240
                    },
                    "endDot": {
                        "x": -677,
                        "y": 120,
                        "z": 380 - 10 -240
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": -1157,
                                "y": 90,
                                "z": 130
                            },
                            "endDot": {
                                "x": -1257,
                                "y": 90,
                                "z": 130
                            }
                        }
                    ]
                },
                // 上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1337,
                        "y": 120,
                        "z": 380 - 10 - 240 - 240 - 420
                    },
                    "endDot": {
                        "x": -677,
                        "y": 120,
                        "z": 380 - 10 -240 - 240 - 420
                    }
                },
                // 右
                {
                    "uuid": "",
                    "name": "wall3",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -667,
                        "y": 120,
                        "z": 1020
                    },
                    "endDot": {
                        "x": -667,
                        "y": 120,
                        "z": -1030
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": -667,
                                "y": 90,
                                "z": 160
                            },
                            "endDot": {
                                "x": -667,
                                "y": 90,
                                "z": 340
                            }
                        }
                    ]
                },

                // 机房
                // 上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -677,
                        "y": 120,
                        "z": -1020 - 10 - 10
                    },
                    "endDot": {
                        "x": 973,
                        "y": 120,
                        "z": -1020 - 10 - 10
                    }
                },
                // 下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -677,
                        "y": 120,
                        "z": 780 - 10
                    },
                    "endDot": {
                        "x": 973,
                        "y": 120,
                        "z": 780 - 10
                    }
                },
                // 右
                {
                    "uuid": "",
                    "name": "wall3",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 963,
                        "y": 120,
                        "z": 780
                    },
                    "endDot": {
                        "x": 963,
                        "y": 120,
                        "z": -1030
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 40,
                            "height": 210,
                            "startDot": {
                                "x": 963,
                                "y": 90,
                                "z": -90
                            },
                            "endDot": {
                                "x": 963,
                                "y": 90,
                                "z": 90
                            }
                        }
                    ]
                },

            ]
        },



    ]
}


let a = [
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 370,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F1",
            "alarmInfo": [],
            "tipInfo": "服务器",
            "cabinetId": 6
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 310,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F2",
            "alarmInfo": [],
            "tipInfo": "服务器",
            "cabinetId": 7
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 250,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F3",
            "alarmInfo": [],
            "tipInfo": "服务器",
            "cabinetId": 8
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 190,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F4",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 130,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F5",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 70,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F6",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": 10,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F7",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -50,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F8",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -110,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F9",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -170,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F10",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -230,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F11",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -290,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F12",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -350,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F13",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -410,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F14",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -470,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F15",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -530,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F16",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -590,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F17",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -650,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F18",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -710,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F19",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
    {
        "show": true,
        "name": "cabinet",
        "uuid": "",
        "objType": "emptyCabinet",
        "transparent": true,
        "size": {
            "width": 60,
            "depth": 60,
            "height": 200,
            "thick": 2
        },
        "x": -770,
        "y": 100,
        "z": -640,
        "rotation": [
            {
                "direction": "y",
                "degree": 3.141592653589793
            }
        ],
        "style": {
            "skin": {
                "skin_up": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_down": {
                    "imgUrl": "rack_top.jpg"
                },
                "skin_fore": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_behind": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_left": {
                    "imgUrl": "rack_back.jpg"
                },
                "skin_right": {
                    "imgUrl": "rack_back.jpg"
                }
            }
        },
        "doors": {
            "doorType": "lr",
            "doorname": [
                "cabinet_door"
            ],
            "skins": [
                {
                    "skin_fore": {
                        "imgUrl": "rack_right_door.jpg"
                    },
                    "skin_behind": {
                        "imgUrl": "rack_left_door.jpg"
                    }
                }
            ],
            "tipInfo": "服务器"
        },
        "data": {
            "name": "F20",
            "alarmInfo": [],
            "tipInfo": "服务器"
        }
    },
]
let x = -452
a.forEach(ele => {
    ele.x = x
    el.rotation = [
        {
            "direction": "y",
            "degree": Math.PI
        }
    ]
    x += 60
    ThreeData.objects.push(ele)
})
