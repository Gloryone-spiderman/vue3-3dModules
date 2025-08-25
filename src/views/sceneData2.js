/*
作者:Mr.Xie
创建时间:2020年05月29日
功能描述:3D机房封装
*/

export const ThreeData={
    objects: [
        //地板
        {
            show: true,
            uuid: "",
            name: 'floor',
            objType: 'cube',
            width: 2000,
            depth: 1500,
            height: 10,
            style: {
                skinColor: 0x6EA1B5,
                skin: {
                    skin_up: {
                        imgUrl: "floor.jpg",
                        repeatx: true,
                        repeaty: true,
                        width: 128,
                        height: 128
                    },
                }
            }
        },
        //墙体
        {
            show: true,
            uuid: "",
            name: 'wall',
            objType: 'wall',
            depth: 20,
            width: 100, //根据实际的宽度来的
            height: 240,
            style:{
                skinColor: 0xb0cee0,
            },
            wallData: [
                {//前面墙
                    uuid: "",
                    name: 'wall1',
                    skin: {
                        skin_behind: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        }
                    },
                    startDot: {
                        x: -700,
                        y: 120,
                        z: 650
                    },
                    endDot: {
                        x: 250,
                        y: 120,
                        z: 650
                    }
                },

                {//前面墙
                    uuid: "",
                    name: 'wall1',
                    skin: {
                        skin_behind: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        }
                    },
                    startDot: {
                        x: 250,
                        y: 120,
                        z: 400
                    },
                    endDot: {
                        x: 900,
                        y: 120,
                        z: 400
                    }
                },

                {//前面墙
                    uuid: "",
                    name: 'wall1',
                    skin: {
                        skin_behind: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        }
                    },
                    startDot: {
                        x: -700,
                        y: 120,
                        z: 400
                    },
                    endDot: {
                        x: -900,
                        y: 120,
                        z: 400
                    }
                },
                {//左面墙
                    uuid: "",
                    name: 'wall3',
                    skin: {
                        skin_right: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },
                    },
                    startDot: {
                        x: -700,
                        y: 120,
                        z: 660
                    },
                    endDot: {
                        x: -700,
                        y: 120,
                        z: 390
                    },
                },
                {//左面墙
                    uuid: "",
                    name: 'wall3',
                    skin: {
                        skin_right: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },
                    },
                    startDot: {
                        x: 250,
                        y: 120,
                        z: 660
                    },
                    endDot: {
                        x: 250,
                        y: 120,
                        z: 390
                    },
                },

                {//后面墙
                    uuid: "",
                    name: 'wall2',
                    skin: {
                        skin_fore: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },

                    },
                    startDot: {
                        x: -900,
                        y: 120,
                        z: -690
                    },
                    endDot: {
                        x: 900,
                        y: 120,
                        z: -690
                    }
                },
                {//左面墙
                    uuid: "",
                    name: 'wall3',
                    skin: {
                        skin_right: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },
                    },
                    startDot: {
                        x: -910,
                        y: 120,
                        z: -700
                    },
                    endDot: {
                        x: -910,
                        y: 120,
                        z: 410
                    },
                },
                {//右面墙
                    uuid: "",
                    name: 'wall4',
                    skin: {
                        skin_left: {
                            skinColor: 0xb0cee0,
                            imgUrl: "wall.png",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        }
                    },
                    startDot: {
                        x: 910,
                        y: 120,
                        z: -700
                    },
                    endDot: {
                        x: 910,
                        y: 120,
                        z: 410
                    }
                },

            ],
        },


        // 机柜
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -600,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -550,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -600 + 100,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -600 + 600,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -600 + 600 + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 200,
                "thick": 2
            },
            "x": -770,
            "y": 100,
            "z": -600 + 600 + 100,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 600,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 600 + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 600 + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 600,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 600 + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 600 + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 150 + 600,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 150 + 600 + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 - 100 + 150 + 150 + 600 + 100,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 ,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600  + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600  + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 + 150,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270,
            "y": 100,
            "z": -600 + 150 + 50,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300,
            "y": 100,
            "z": -600 ,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300,
            "y": 100,
            "z": -600  + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300,
            "y": 100,
            "z": -600  + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300,
            "y": 100,
            "z": -600 + 150,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300,
            "y": 100,
            "z": -600 + 150 + 50,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300,
            "y": 100,
            "z": -600 ,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300,
            "y": 100,
            "z": -600  + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300,
            "y": 100,
            "z": -600  + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300,
            "y": 100,
            "z": -600 + 150,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300,
            "y": 100,
            "z": -600 + 150 + 50,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300,
            "y": 100,
            "z": -600 ,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300,
            "y": 100,
            "z": -600  + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300,
            "y": 100,
            "z": -600  + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300,
            "y": 100,
            "z": -600 + 150,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300,
            "y": 100,
            "z": -600 + 150 + 50,
            "rotation": [
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
            }
        },

        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300 + 300,
            "y": 100,
            "z": -600 ,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300 + 300,
            "y": 100,
            "z": -600  + 50,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300 + 300,
            "y": 100,
            "z": -600  + 100,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300 + 300,
            "y": 100,
            "z": -600 + 150,
            "rotation": [
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
            }
        },
        {
            "show": true,
            "name": "cabinet",
            "uuid": "",
            "objType": "emptyCabinet",
            "transparent": true,
            "size": {
                "width": 100,
                "depth": 50,
                "height": 250,
                "thick": 2
            },
            "x": -770 + 270 + 300 + 300 + 300 + 300,
            "y": 100,
            "z": -600 + 150 + 50,
            "rotation": [
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
            }
        },


    ]
}

