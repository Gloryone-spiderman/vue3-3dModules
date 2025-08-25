/*
作者:Mr.Xie
创建时间:2020年05月29日
功能描述:3D机房封装
*/

export const ThreeData={
    "objects": [
        {
            "show": true,
            "uuid": "",
            "name": "floor",
            "objType": "cube",
            "width": 3000,
            "depth": 2000,
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
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1000,
                        "y": 120,
                        "z": 550
                    },
                    "endDot": {
                        "x": 1000,
                        "y": 120,
                        "z": 550
                    }
                },
                {
                    "uuid": "",
                    "name": "wall2",
                    "skin": {
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1000,
                        "y": 120,
                        "z": -500
                    },
                    "endDot": {
                        "x": 1000,
                        "y": 120,
                        "z": -500
                    },
                    "children": [
                        {
                            "show": true,
                            "uuid": "",
                            "name": "windowMessage",
                            "objType": "cube",
                            "depth": 2,
                            "height": 100,
                            "skinColor": 16777215,
                            "skin": {
                                "skin_fore": {
                                    "imgUrl": "message.jpg"
                                }
                            },
                            "startDot": {
                                "x": 850,
                                "y": 150,
                                "z": -490
                            },
                            "endDot": {
                                "x": 900,
                                "y": 150,
                                "z": -490
                            }
                        }
                    ]
                },
                {
                    "uuid": "",
                    "name": "wall3",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -1010,
                        "y": 120,
                        "z": -510
                    },
                    "endDot": {
                        "x": -1010,
                        "y": 120,
                        "z": 560
                    }
                },
                {
                    "uuid": "",
                    "name": "wall4",
                    "skin": {
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 1010,
                        "y": 120,
                        "z": -510
                    },
                    "endDot": {
                        "x": 1010,
                        "y": 120,
                        "z": 560
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 20,
                            "height": 210,
                            "startDot": {
                                "x": 1010,
                                "y": 90,
                                "z": -30
                            },
                            "endDot": {
                                "x": 1010,
                                "y": 90,
                                "z": 70
                            }
                        },
                        {
                            "show": true,
                            "uuid": "",
                            "name": "doorCaseLeft",
                            "objType": "cube",
                            "depth": 24,
                            "height": 200,
                            "startDot": {
                                "x": 1010,
                                "y": 100,
                                "z": -30
                            },
                            "endDot": {
                                "x": 1010,
                                "y": 100,
                                "z": 70
                            },
                            "skinColor": 16777215,
                            "skin": {
                                "skin_left": {
                                    "imgUrl": "door_right.png",
                                    "opacity": 1,
                                    "transparent": true
                                },
                                "skin_right": {
                                    "imgUrl": "door_left.png",
                                    "opacity": 1,
                                    "transparent": true
                                }
                            }
                        }
                    ]
                },
                {
                    "uuid": "",
                    "name": "wall5",
                    "skin": {
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 600,
                        "y": 120,
                        "z": -500
                    },
                    "endDot": {
                        "x": 600,
                        "y": 120,
                        "z": 550
                    },
                    "children": [
                        {
                            "show": true,
                            "uuid": "",
                            "name": "windowTV",
                            "objType": "cube",
                            "depth": 10,
                            "height": 120,
                            "skinColor": 1118481,
                            "skin": {
                                "skin_right": {
                                    "imgUrl": "tv.jpg"
                                }
                            },
                            "startDot": {
                                "x": 610,
                                "y": 130,
                                "z": 190
                            },
                            "endDot": {
                                "x": 610,
                                "y": 130,
                                "z": 520
                            }
                        },
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 20,
                            "height": 210,
                            "startDot": {
                                "x": 600,
                                "y": 90,
                                "z": -30
                            },
                            "endDot": {
                                "x": 600,
                                "y": 90,
                                "z": 70
                            }
                        },
                        {
                            "show": true,
                            "uuid": "",
                            "name": "doorRight",
                            "objType": "cube",
                            "depth": 24,
                            "height": 210,
                            "startDot": {
                                "x": 600,
                                "y": 100,
                                "z": -30
                            },
                            "endDot": {
                                "x": 600,
                                "y": 100,
                                "z": 70
                            },
                            "skinColor": 16777215,
                            "skin": {
                                "skin_left": {
                                    "imgUrl": "door_right.png",
                                    "opacity": 1,
                                    "transparent": true
                                },
                                "skin_right": {
                                    "imgUrl": "door_left.png",
                                    "opacity": 1,
                                    "transparent": true
                                }
                            }
                        }
                    ]
                },
                {
                    "uuid": "",
                    "name": "wall6",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 600,
                        "y": 120,
                        "z": -110
                    },
                    "endDot": {
                        "x": 1000,
                        "y": 120,
                        "z": -110
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 20,
                            "height": 210,
                            "startDot": {
                                "x": 675,
                                "y": 110,
                                "z": -110
                            },
                            "endDot": {
                                "x": 760,
                                "y": 110,
                                "z": -110
                            }
                        },
                        {
                            "show": true,
                            "uuid": "",
                            "name": "doorLeft",
                            "objType": "cube",
                            "depth": 24,
                            "height": 210,
                            "startDot": {
                                "x": 675,
                                "y": 110,
                                "z": -110
                            },
                            "endDot": {
                                "x": 760,
                                "y": 110,
                                "z": -110
                            },
                            "skinColor": 16777215,
                            "skin": {
                                "skin_behind": {
                                    "imgUrl": "door_right.png",
                                    "opacity": 1,
                                    "transparent": true
                                },
                                "skin_fore": {
                                    "imgUrl": "door_left.png",
                                    "opacity": 1,
                                    "transparent": true
                                }
                            }
                        },
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 20,
                            "height": 210,
                            "startDot": {
                                "x": 825,
                                "y": 110,
                                "z": -110
                            },
                            "endDot": {
                                "x": 910,
                                "y": 110,
                                "z": -110
                            }
                        },
                        {
                            "show": true,
                            "uuid": "",
                            "name": "doorLeft",
                            "objType": "cube",
                            "depth": 24,
                            "height": 210,
                            "startDot": {
                                "x": 825,
                                "y": 110,
                                "z": -110
                            },
                            "endDot": {
                                "x": 910,
                                "y": 110,
                                "z": -110
                            },
                            "skinColor": 16777215,
                            "skin": {
                                "skin_behind": {
                                    "imgUrl": "door_right.png",
                                    "opacity": 1,
                                    "transparent": true
                                },
                                "skin_fore": {
                                    "imgUrl": "door_left.png",
                                    "opacity": 1,
                                    "transparent": true
                                }
                            }
                        }
                    ]
                },
                {
                    "uuid": "",
                    "name": "wall7",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 600,
                        "y": 120,
                        "z": 160
                    },
                    "endDot": {
                        "x": 1000,
                        "y": 120,
                        "z": 160
                    },
                    "children": [
                        {
                            "op": "-",
                            "show": true,
                            "uuid": "",
                            "name": "doorhole",
                            "objType": "doorhole",
                            "depth": 20,
                            "height": 200,
                            "startDot": {
                                "x": 825,
                                "y": 110,
                                "z": 160
                            },
                            "endDot": {
                                "x": 910,
                                "y": 110,
                                "z": 160
                            }
                        },
                        {
                            "show": true,
                            "uuid": "",
                            "name": "doorLeft",
                            "objType": "cube",
                            "depth": 24,
                            "height": 200,
                            "startDot": {
                                "x": 825,
                                "y": 100,
                                "z": 160
                            },
                            "endDot": {
                                "x": 910,
                                "y": 100,
                                "z": 160
                            },
                            "skinColor": 0,
                            "skin": {
                                "skin_behind": {
                                    "imgUrl": "door_right.png",
                                    "opacity": 1,
                                    "transparent": true
                                },
                                "skin_fore": {
                                    "imgUrl": "door_left.png",
                                    "opacity": 1,
                                    "transparent": true
                                }
                            }
                        }
                    ]
                },
                {
                    "uuid": "",
                    "name": "wall8",
                    "skin": {
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 795,
                        "y": 120,
                        "z": -500
                    },
                    "endDot": {
                        "x": 795,
                        "y": 120,
                        "z": -110
                    }
                }
            ]
        },
        {
            "show": true,
            "uuid": "",
            "name": "aircondition",
            "objType": "cube",
            "width": 80,
            "depth": 60,
            "height": 220,
            "x": 940,
            "y": 110,
            "z": 460,
            "rotation": [
                {
                    "direction": "y",
                    "degree": -2.199114857512855
                }
            ],
            "style": {
                "skinColor": 16448250,
                "skin": {
                    "skin_fore": {
                        "imgUrl": "aircondition.png"
                    }
                }
            }
        },
        {
            "show": true,
            "uuid": "",
            "name": "annihilator",
            "objType": "objAnnihilator",
            "objHandle": [
                {
                    "direction": "arb",
                    "handleScale": [
                        0.008,
                        0.008,
                        0.008
                    ],
                    "handleRotale": [
                        0,
                        1,
                        0,
                        -1.5707963267948966
                    ]
                }
            ],
            "children": [
                {
                    "name": "annihilator-one",
                    "uuid": "",
                    "x": 980,
                    "y": 0,
                    "z": -300
                },
                {
                    "name": "annihilator-two",
                    "uuid": "",
                    "x": 980,
                    "y": 0,
                    "z": -330
                },
                {
                    "name": "annihilator-three",
                    "uuid": "",
                    "x": 980,
                    "y": 0,
                    "z": -360
                },
                {
                    "name": "annihilator-four",
                    "uuid": "",
                    "x": 980,
                    "y": 0,
                    "z": -390
                }
            ]
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 250,
                "depth": 70,
                "height": 200,
                "thick": 2
            },
            "x": 700,
            "y": 100,
            "z": -280,
            "rotation": [
                {
                    "direction": "y",
                    "degree": 1.5707963267948966
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
                ]
            },
            "data": {
                "name": "接入间",
                "alarmInfo": [

                ],
                "tipInfo": "接入间设备",
                "assetid": 186748
            }
        },

        {
            "show": true,
            "name": "sprite",
            "objType": "sprite",
            "x": -200,
            "y": 200,
            "z": -340,
            "data": {
                "assetid": 186748,
                "tem_max": 19,
                "tem_min": 1,
                "hum_max": 99,
                "hum_min": 98
            }
        },
        {
            "show": true,
            "name": "sprite",
            "objType": "sprite",
            "x": -200,
            "y": 200,
            "z": 0,
            "data": {
                "assetid": 186748
            }
        },
        {
            "show": true,
            "name": "sprite",
            "objType": "sprite",
            "x": -200,
            "y": 200,
            "z": 370,
            "data": {
                "assetid": 186748
            }
        },
        {
            "show": true,
            "name": "sprite",
            "objType": "sprite",
            "x": 690,
            "y": 230,
            "z": -220,
            "data": {
                "assetid": 186748
            }
        },
        {
            "show": true,
            "name": "sprite",
            "objType": "sprite",
            "x": 500,
            "y": 200,
            "z": 370,
            "data": {
                "assetid": 186968
            }
        }
    ]
}

let cabinet = {
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
    "z": 470,
    "rotation": [
    {
        "direction": "y",
        "degree": Math.PI
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
        "alarmInfo": [

    ],
        "tipInfo": "服务器",
        "assetid": 186748
}
}

let name = ['F', 'E', 'D', 'C', 'B', 'A']
let zList = [470, 330, 100, -40, -270, -410]
let degree = Math.PI
for (let i = 0; i < name.length; i++) {
    let x = 370
    let y = 100
    let z = zList[i]
    // if (i % 2 === 0) {
    //     degree = Math.PI
    // } else {
    //     degree = -Math.PI
    // }
    for (let j = 1; j <= 20; j++) {
        let t = JSON.parse(JSON.stringify(cabinet))
        t['x'] = x
        t['y'] = y
        t['z'] = z
        t['rotation']['degree'] = degree
        x -= 60
        t['data']['name'] = name[i] + j
        ThreeData['objects'].push(t)

    }
}
