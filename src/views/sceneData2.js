export const ThreeData = {
    "objects": [
        {
            "show": true,
            "uuid": "",
            "name": "floor",
            "objType": "cube",
            "width": 6000,
            "depth": 4300,
            "height": 10,
            "style": {
                "skinColor": 7250357,
                "skin": {
                    "skin_up": {
                        "imgUrl": "floor2.png",
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
                // 右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 1,
                            "imgUrl": "wall.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": 1350
                    },
                    "endDot": {
                        "x": 2800,
                        "y": 120,
                        "z": -1350
                    }
                },
                // 上右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": -960
                    },
                    "endDot": {
                        "x": -10,
                        "y": 120,
                        "z": -960
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 2140,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1840,
                                y: 130,
                                z: -960
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wall2.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            startDot: {
                                x: 2140,
                                y: 50,
                                z: -960
                            },
                            endDot: {
                                x: 1840,
                                y: 50,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wall2.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "metal.png",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            startDot: {
                                x: 2140,
                                y: 210,
                                z: -960
                            },
                            endDot: {
                                x: 1840,
                                y: 210,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 2140,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 2135,
                                y: 130,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1845,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1840,
                                y: 130,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 2140,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1840,
                                y: 130,
                                z: -960
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 1780,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1480,
                                y: 130,
                                z: -960
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1780,
                                y: 50,
                                z: -960
                            },
                            endDot: {
                                x: 1480,
                                y: 50,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1780,
                                y: 210,
                                z: -960
                            },
                            endDot: {
                                x: 1480,
                                y: 210,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1780,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1775,
                                y: 130,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1485,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1480,
                                y: 130,
                                z: -960
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 1780,
                                y: 130,
                                z: -960
                            },
                            endDot: {
                                x: 1480,
                                y: 130,
                                z: -960
                            }
                        },

                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160+150,
                                y: 110,
                                z: -960
                            },
                            endDot: {
                                x: 2380+150,
                                y: 110,
                                z: -960
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160+150,
                                y: 110,
                                z: -960
                            },
                            endDot: {
                                x: 2165+150,
                                y: 110,
                                z: -960
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2380+150,
                                y: 110,
                                z: -960
                            },
                            endDot: {
                                x: 2375+150,
                                y: 110,
                                z: -960
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+150,
                                y: 220,
                                z: -960
                            },
                            endDot: {
                                x: 2165+150,
                                y: 220,
                                z: -960
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+150,
                                y: 5,
                                z: -960
                            },
                            endDot: {
                                x: 2165+150,
                                y: 5,
                                z: -960
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+150,
                                y: 112,
                                z: -960
                            },
                            endDot: {
                                x: 2165+150,
                                y: 112,
                                z: -960
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+150,
                                y: 112,
                                z: -960
                            },
                            endDot: {
                                x: 2375+150,
                                y: 112,
                                z: -960
                            },
                        },
                    ]
                },
                // 右上楼梯上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": -1350
                    },
                    "endDot": {
                        "x": 2150,
                        "y": 120,
                        "z": -1350
                    }
                },
                // 右上楼梯左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2160,
                        "y": 120,
                        "z": -1350
                    },
                    "endDot": {
                        "x": 2160,
                        "y": 120,
                        "z": -960
                    }
                },
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2160,
                        "y": 120,
                        "z": -860
                    },
                    "endDot": {
                        "x": 2160,
                        "y": 120,
                        "z": -300
                    }
                },
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2160,
                        "y": 120,
                        "z": -310
                    },
                    "endDot": {
                        "x": 1460,
                        "y": 120,
                        "z": -310
                    }
                },
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 1470,
                        "y": 120,
                        "z": -100
                    },
                    "endDot": {
                        "x": 1470,
                        "y": 120,
                        "z": -300
                    }
                },
                // 下右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": 1350
                    },
                    "endDot": {
                        "x": 710,
                        "y": 120,
                        "z": 1350
                    },
                    childrens: [
                        // 财务
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 2300,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 2200,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 2300,
                                y: 50,
                                z: 1350
                            },
                            endDot: {
                                x: 2200,
                                y: 50,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 2300,
                                y: 210,
                                z: 1350
                            },
                            endDot: {
                                x: 2200,
                                y: 210,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 2300,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 2295,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 2205,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 2200,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 2300,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 2200,
                                y: 130,
                                z: 1350
                            }
                        },
                        // 右总经办
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 2000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1900,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 2000,
                                y: 50,
                                z: 1350
                            },
                            endDot: {
                                x: 1900,
                                y: 50,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 2000,
                                y: 210,
                                z: 1350
                            },
                            endDot: {
                                x: 1900,
                                y: 210,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 2000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1995,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1905,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1900,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 2000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1900,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 1700,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1600,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1700,
                                y: 50,
                                z: 1350
                            },
                            endDot: {
                                x: 1600,
                                y: 50,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1700,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1695,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1605,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1600,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1700,
                                y: 210,
                                z: 1350
                            },
                            endDot: {
                                x: 1600,
                                y: 210,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 1700,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1600,
                                y: 130,
                                z: 1350
                            }
                        },
                        // 会议室
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 1410,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1310,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1410,
                                y: 50,
                                z: 1350
                            },
                            endDot: {
                                x: 1310,
                                y: 50,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1410,
                                y: 210,
                                z: 1350
                            },
                            endDot: {
                                x: 1310,
                                y: 210,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1410,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1405,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1315,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1310,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 1410,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 1310,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 1000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 800,
                                y: 130,
                                z: 1350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1000,
                                y: 50,
                                z: 1350
                            },
                            endDot: {
                                x: 800,
                                y: 50,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 1000,
                                y: 210,
                                z: 1350
                            },
                            endDot: {
                                x: 800,
                                y: 210,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 1000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 995,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 805,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 800,
                                y: 130,
                                z: 1350
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 1000,
                                y: 130,
                                z: 1350
                            },
                            endDot: {
                                x: 800,
                                y: 130,
                                z: 1350
                            }
                        },
                    ]
                },
                // 下右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 710,
                        "y": 120,
                        "z": 1250
                    },
                    "endDot": {
                        "x": 50,
                        "y": 120,
                        "z": 1250
                    },
                    childrens: [
                        // 行政
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 610,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 410,
                                y: 130,
                                z: 1250
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 610,
                                y: 50,
                                z: 1250
                            },
                            endDot: {
                                x: 410,
                                y: 50,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 610,
                                y: 210,
                                z: 1250
                            },
                            endDot: {
                                x: 410,
                                y: 210,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 610,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 605,
                                y: 130,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 415,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 410,
                                y: 130,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 610,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 410,
                                y: 130,
                                z: 1250
                            }
                        },
                        // 销售
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            startDot: {
                                x: 290,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 90,
                                y: 130,
                                z: 1250
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 290,
                                y: 50,
                                z: 1250
                            },
                            endDot: {
                                x: 90,
                                y: 50,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            startDot: {
                                x: 290,
                                y: 210,
                                z: 1250
                            },
                            endDot: {
                                x: 90,
                                y: 210,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 290,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 285,
                                y: 130,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            startDot: {
                                x: 95,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 90,
                                y: 130,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: 290,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: 90,
                                y: 130,
                                z: 1250
                            }
                        },
                    ]
                },
                // 右办公区（技术）上墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": -100
                    },
                    "endDot": {
                        "x": 700,
                        "y": 120,
                        "z": -100
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160+50,
                                y: 110,
                                z: -100
                            },
                            endDot: {
                                x: 2380+50,
                                y: 110,
                                z: -100
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160+50,
                                y: 110,
                                z: -100
                            },
                            endDot: {
                                x: 2165+50,
                                y: 110,
                                z: -100
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2380+50,
                                y: 110,
                                z: -100
                            },
                            endDot: {
                                x: 2375+50,
                                y: 110,
                                z: -100
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+50,
                                y: 220,
                                z: -100
                            },
                            endDot: {
                                x: 2165+50,
                                y: 220,
                                z: -100
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+50,
                                y: 5,
                                z: -100
                            },
                            endDot: {
                                x: 2165+50,
                                y: 5,
                                z: -100
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+50,
                                y: 112,
                                z: -100
                            },
                            endDot: {
                                x: 2165+50,
                                y: 112,
                                z: -100
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+50,
                                y: 112,
                                z: -100
                            },
                            endDot: {
                                x: 2375+50,
                                y: 112,
                                z: -100
                            },
                        },
                    ]
                },
                // 右办公区（技术）右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2150,
                        "y": 120,
                        "z": -100
                    },
                    "endDot": {
                        "x": 2150,
                        "y": 120,
                        "z": 500
                    }
                },
                // 右办公区（技术）左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 710,
                        "y": 120,
                        "z": -100
                    },
                    "endDot": {
                        "x": 710,
                        "y": 120,
                        "z": 500
                    }
                },
                // 右下楼梯口上墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2800,
                        "y": 120,
                        "z": 490
                    },
                    "endDot": {
                        "x": 2150,
                        "y": 120,
                        "z": 490
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2380,
                                y: 110,
                                z: 490
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2165,
                                y: 110,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2380,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2375,
                                y: 110,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375,
                                y: 220,
                                z: 490
                            },
                            endDot: {
                                x: 2165,
                                y: 220,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375,
                                y: 5,
                                z: 490
                            },
                            endDot: {
                                x: 2165,
                                y: 5,
                                z: 490
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270,
                                y: 112,
                                z: 490
                            },
                            endDot: {
                                x: 2165,
                                y: 112,
                                z: 490
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270,
                                y: 112,
                                z: 490
                            },
                            endDot: {
                                x: 2375,
                                y: 112,
                                z: 490
                            },
                        },

                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160+330,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2380+330,
                                y: 110,
                                z: 490
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160+330,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2165+330,
                                y: 110,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2380+330,
                                y: 110,
                                z: 490
                            },
                            endDot: {
                                x: 2375+330,
                                y: 110,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+330,
                                y: 220,
                                z: 490
                            },
                            endDot: {
                                x: 2165+330,
                                y: 220,
                                z: 490
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2375+330,
                                y: 5,
                                z: 490
                            },
                            endDot: {
                                x: 2165+330,
                                y: 5,
                                z: 490
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+330,
                                y: 112,
                                z: 490
                            },
                            endDot: {
                                x: 2165+330,
                                y: 112,
                                z: 490
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2270+330,
                                y: 112,
                                z: 490
                            },
                            endDot: {
                                x: 2375+330,
                                y: 112,
                                z: 490
                            },
                        },
                    ]
                },
                // 财务右墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2400,
                        "y": 120,
                        "z": 490
                    },
                    "endDot": {
                        "x": 2400,
                        "y": 120,
                        "z": 1350
                    }
                },
                // 财务左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2100,
                        "y": 120,
                        "z": 755
                    },
                    "endDot": {
                        "x": 2100,
                        "y": 120,
                        "z": 1350
                    }
                },
                // 总经办左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 1500,
                        "y": 120,
                        "z": 755
                    },
                    "endDot": {
                        "x": 1500,
                        "y": 120,
                        "z": 1350
                    }
                },
                // 会议室左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 710,
                        "y": 120,
                        "z": 755
                    },
                    "endDot": {
                        "x": 710,
                        "y": 120,
                        "z": 1360
                    }
                },
                // 行政左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 310,
                        "y": 120,
                        "z": 755
                    },
                    "endDot": {
                        "x": 310,
                        "y": 120,
                        "z": 1250
                    },
                    childrens: [
                        // 行政门
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 310,
                                y: 110,
                                z: 710+60
                            },
                            endDot: {
                                x: 310,
                                y: 110,
                                z: 820+60
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 310,
                                y: 110,
                                z: 710+60
                            },
                            endDot: {
                                x: 310,
                                y: 110,
                                z: 715+60
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 310,
                                y: 110,
                                z: 820+60
                            },
                            endDot: {
                                x: 310,
                                y: 110,
                                z: 815+60
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 310,
                                y: 220,
                                z: 820+60
                            },
                            endDot: {
                                x: 310,
                                y: 220,
                                z: 710+60
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_right: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                                skin_left: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 310,
                                y: 112,
                                z: 815+60
                            },
                            endDot: {
                                x: 310,
                                y: 112,
                                z: 715+60
                            },
                        },
                    ]
                },
                // 会议室上墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 2400,
                        "y": 120,
                        "z": 760
                    },
                    "endDot": {
                        "x": 310,
                        "y": 120,
                        "z": 760
                    },
                    childrens: [
                        // 财务门
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2270,
                                y: 110,
                                z: 760
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2165,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2270,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2265,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2270,
                                y: 220,
                                z: 760
                            },
                            endDot: {
                                x: 2160,
                                y: 220,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2265,
                                y: 112,
                                z: 760
                            },
                            endDot: {
                                x: 2165,
                                y: 112,
                                z: 760
                            },
                        },
                        // 总经办门
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 2160-580,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2270-580,
                                y: 110,
                                z: 760
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2160-580,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2165-580,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 2270-580,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 2265-580,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 2270-580,
                                y: 220,
                                z: 760
                            },
                            endDot: {
                                x: 2160-580,
                                y: 220,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 2265-580,
                                y: 112,
                                z: 760
                            },
                            endDot: {
                                x: 2165-580,
                                y: 112,
                                z: 760
                            },
                        },
                        // 会议室门
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 1060-250,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 1170-250,
                                y: 110,
                                z: 760
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 1060-250,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 1065-250,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 1170-250,
                                y: 110,
                                z: 760
                            },
                            endDot: {
                                x: 1165-250,
                                y: 110,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 1170-250,
                                y: 220,
                                z: 760
                            },
                            endDot: {
                                x: 1160-250,
                                y: 220,
                                z: 760
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 1165-250,
                                y: 112,
                                z: 760
                            },
                            endDot: {
                                x: 1065-250,
                                y: 112,
                                z: 760
                            },
                        },
                    ]
                },
                // 茶室门厅上墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -560,
                        "y": 120,
                        "z": 160
                    },
                    "endDot": {
                        "x": 700,
                        "y": 120,
                        "z": 160
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: -460,
                                y: 110,
                                z: 160
                            },
                            endDot: {
                                x: -240,
                                y: 110,
                                z: 160
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: -460,
                                y: 110,
                                z: 160
                            },
                            endDot: {
                                x: -455,
                                y: 110,
                                z: 160
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: -240,
                                y: 110,
                                z: 160
                            },
                            endDot: {
                                x: -245,
                                y: 110,
                                z: 160
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: -460,
                                y: 220,
                                z: 160
                            },
                            endDot: {
                                x: -240,
                                y: 220,
                                z: 160
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: -460,
                                y: 5,
                                z: 160
                            },
                            endDot: {
                                x: -240,
                                y: 5,
                                z: 160
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: -455,
                                y: 112,
                                z: 160
                            },
                            endDot: {
                                x: -350,
                                y: 112,
                                z: 160
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: -245,
                                y: 112,
                                z: 160
                            },
                            endDot: {
                                x: -350,
                                y: 112,
                                z: 160
                            },
                        },
                    ]
                },
                // 茶室左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 400,
                        "y": 120,
                        "z": 170
                    },
                    "endDot": {
                        "x": 400,
                        "y": 120,
                        "z": 500
                    }
                },
                // 门厅左墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 100,
                        "y": 120,
                        "z": 170
                    },
                    "endDot": {
                        "x": 100,
                        "y": 120,
                        "z": 500
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 100,
                                y: 110,
                                z: 225
                            },
                            endDot: {
                                x: 100,
                                y: 110,
                                z: 445
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 100,
                                y: 110,
                                z: 445
                            },
                            endDot: {
                                x: 100,
                                y: 110,
                                z: 440
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 100,
                                y: 110,
                                z: 225
                            },
                            endDot: {
                                x: 100,
                                y: 110,
                                z: 220
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 100,
                                y: 220,
                                z: 225
                            },
                            endDot: {
                                x: 100,
                                y: 220,
                                z: 445
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 100,
                                y: 5,
                                z: 225
                            },
                            endDot: {
                                x: 100,
                                y: 5,
                                z: 445
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_right: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_left: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 100,
                                y: 112,
                                z: 220
                            },
                            endDot: {
                                x: 100,
                                y: 112,
                                z: 330
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_right: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_left: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 100,
                                y: 112,
                                z: 440
                            },
                            endDot: {
                                x: 100,
                                y: 112,
                                z: 330
                            },
                        },
                    ]
                },
                // 门厅下墙
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -100,
                        "y": 120,
                        "z": 490
                    },
                    "endDot": {
                        "x": 100,
                        "y": 120,
                        "z": 490
                    }
                },
                // 电梯上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/8
                        }
                    ],
                    "startDot": {
                        "x": -250,
                        "y": 120,
                        "z": 470
                    },
                    "endDot": {
                        "x": -50,
                        "y": 120,
                        "z": 470
                    }
                },
                // 电梯下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/8
                        }
                    ],
                    "startDot": {
                        "x": -340,
                        "y": 120,
                        "z": 673
                    },
                    "endDot": {
                        "x": -5,
                        "y": 120,
                        "z": 673
                    }
                },
                // 电梯右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI * 3/8
                        }
                    ],
                    "startDot": {
                        "x": -207,
                        "y": 120,
                        "z": 600
                    },
                    "endDot": {
                        "x": -7,
                        "y": 120,
                        "z": 600
                    }
                },
                // 电梯左
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI * 3/8
                        }
                    ],
                    "startDot": {
                        "x": -380,
                        "y": 120,
                        "z": 515
                    },
                    "endDot": {
                        "x": -180,
                        "y": 120,
                        "z": 515
                    }
                },
                // 销售左上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": -26,
                        "y": 120,
                        "z": 727
                    },
                    "endDot": {
                        "x": -26,
                        "y": 120,
                        "z": 1127
                    }
                },
                // 销售左下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI/6
                        }
                    ],
                    "startDot": {
                        "x": 12,
                        "y": 120,
                        "z": 1105
                    },
                    "endDot": {
                        "x": 12,
                        "y": 120,
                        "z": 1270
                    }
                },
                // 销售上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "startDot": {
                        "x": 310,
                        "y": 120,
                        "z": 950
                    },
                    "endDot": {
                        "x": -26,
                        "y": 120,
                        "z": 950
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            startDot: {
                                x: 150,
                                y: 110,
                                z: 950
                            },
                            endDot: {
                                x: 260,
                                y: 110,
                                z: 950
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 150,
                                y: 110,
                                z: 950
                            },
                            endDot: {
                                x: 155,
                                y: 110,
                                z: 950
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            startDot: {
                                x: 260,
                                y: 110,
                                z: 950
                            },
                            endDot: {
                                x: 255,
                                y: 110,
                                z: 950
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            startDot: {
                                x: 260,
                                y: 220,
                                z: 950
                            },
                            endDot: {
                                x: 150,
                                y: 220,
                                z: 950
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_behind: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                                skin_fore: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                            },
                            startDot: {
                                x: 155,
                                y: 112,
                                z: 950
                            },
                            endDot: {
                                x: 255,
                                y: 112,
                                z: 950
                            },
                        },
                    ]
                },
                // 杂物室右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI*3/10
                        }
                    ],
                    "startDot": {
                        "x": -312,
                        "y": 120,
                        "z": 1445
                    },
                    "endDot": {
                        "x": 148,
                        "y": 120,
                        "z": 1445
                    }
                },
                // 杂物间下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/5
                        }
                    ],
                    "startDot": {
                        "x": -360,
                        "y": 120,
                        "z": 1590
                    },
                    "endDot": {
                        "x": -200,
                        "y": 120,
                        "z": 1590
                    }
                },
                // 杂物间左
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI*3/10
                        }
                    ],
                    "startDot": {
                        "x": -820,
                        "y": 120,
                        "z": 1510
                    },
                    "endDot": {
                        "x": 180,
                        "y": 120,
                        "z": 1510
                    },
                    childrens: [

                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI*3/10
                                }
                            ],
                            startDot: {
                                x: 70-200,
                                y: 110,
                                z: 1445-270
                            },
                            endDot: {
                                x: 180-200,
                                y: 110,
                                z: 1445-270
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI*3/10
                                }
                            ],
                            startDot: {
                                x: 94-200,
                                y: 110,
                                z: 1490-270
                            },
                            endDot: {
                                x: 89-200,
                                y: 110,
                                z: 1490-270
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI*3/10
                                }
                            ],
                            startDot: {
                                x: 160-200,
                                y: 110,
                                z: 1400-270
                            },
                            endDot: {
                                x: 155-200,
                                y: 110,
                                z: 1400-270
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            "skin": {
                                "skin_behind": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_fore": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_left": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_right": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                },
                                "skin_up": {
                                    "skinColor": 16777215,
                                    "imgUrl": "wood.jpg",
                                    "repeatx": true,
                                    "repeaty": true,
                                    "width": 128,
                                    "height": 128
                                }
                            },
                            depth: 24,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI*3/10
                                }
                            ],
                            startDot: {
                                x: 70-200,
                                y: 220,
                                z: 1445-270
                            },
                            endDot: {
                                x: 180-200,
                                y: 220,
                                z: 1445-270
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_fore: {
                                    imgUrl: "door_wood_right.png",
                                    transparent: true,
                                },
                                skin_behind: {
                                    imgUrl: "door_wood_left.png",
                                    transparent: true,
                                },
                            },
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI*3/10
                                }
                            ],
                            startDot: {
                                x: 75-200,
                                y: 112,
                                z: 1445-270
                            },
                            endDot: {
                                x: 175-200,
                                y: 112,
                                z: 1445-270
                            },
                        },
                    ]
                },
                // 左下楼梯左
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI*3/10
                        }
                    ],
                    "startDot": {
                        "x": -1080,
                        "y": 120,
                        "z": 1373
                    },
                    "endDot": {
                        "x": -230,
                        "y": 120,
                        "z": 1373
                    }
                },
                // 左下楼梯下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/5
                        }
                    ],
                    "startDot": {
                        "x": -940,
                        "y": 120,
                        "z": 1810
                    },
                    "endDot": {
                        "x": -570,
                        "y": 120,
                        "z": 1810
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 20,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -840,
                                y: 130,
                                z: 1810
                            },
                            endDot: {
                                x: -670,
                                y: 130,
                                z: 1810
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -840,
                                y: 50,
                                z: 1810
                            },
                            endDot: {
                                x: -670,
                                y: 50,
                                z: 1810
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -840,
                                y: 210,
                                z: 1810
                            },
                            endDot: {
                                x: -670,
                                y: 210,
                                z: 1810
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -820,
                                y: 130,
                                z: 1760
                            },
                            endDot: {
                                x: -825,
                                y: 130,
                                z: 1760
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -690,
                                y: 130,
                                z: 1860
                            },
                            endDot: {
                                x: -685,
                                y: 130,
                                z: 1860
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -840,
                                y: 130,
                                z: 1810
                            },
                            endDot: {
                                x: -670,
                                y: 130,
                                z: 1810
                            }
                        },
                    ]
                },
                // 左下楼梯上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/5
                        }
                    ],
                    "startDot": {
                        "x": -445,
                        "y": 120,
                        "z": 1135
                    },
                    "endDot": {
                        "x": -95,
                        "y": 120,
                        "z": 1135
                    }
                },
                // 会客室下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/5
                        }
                    ],
                    "startDot": {
                        "x": -2550,
                        "y": 120,
                        "z": 1000
                    },
                    "endDot": {
                        "x": -630,
                        "y": 120,
                        "z": 1000
                    },
                    childrens: [
                        // 卫生间
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1030,
                                y: 130,
                                z: 1480
                            },
                            endDot: {
                                x: -820,
                                y: 130,
                                z: 1480
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1030,
                                y: 50,
                                z: 1480
                            },
                            endDot: {
                                x: -820,
                                y: 50,
                                z: 1480
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1030,
                                y: 210,
                                z: 1480
                            },
                            endDot: {
                                x: -820,
                                y: 210,
                                z: 1480
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1015,
                                y: 130,
                                z: 1420
                            },
                            endDot: {
                                x: -1010,
                                y: 130,
                                z: 1420
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -840,
                                y: 130,
                                z: 1540
                            },
                            endDot: {
                                x: -835,
                                y: 130,
                                z: 1540
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1030,
                                y: 130,
                                z: 1480
                            },
                            endDot: {
                                x: -820,
                                y: 130,
                                z: 1480
                            }
                        },
                        // 会客室
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1060,
                                y: 130,
                                z: 1310
                            },
                            endDot: {
                                x: -1260,
                                y: 130,
                                z: 1310
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1060,
                                y: 50,
                                z: 1310
                            },
                            endDot: {
                                x: -1260,
                                y: 50,
                                z: 1310
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1060,
                                y: 210,
                                z: 1310
                            },
                            endDot: {
                                x: -1260,
                                y: 210,
                                z: 1310
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1240,
                                y: 130,
                                z: 1250
                            },
                            endDot: {
                                x: -1245,
                                y: 130,
                                z: 1250
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1075,
                                y: 130,
                                z: 1370
                            },
                            endDot: {
                                x: -1080,
                                y: 130,
                                z: 1370
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1060,
                                y: 130,
                                z: 1310
                            },
                            endDot: {
                                x: -1260,
                                y: 130,
                                z: 1310
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1280,
                                y: 130,
                                z: 1150
                            },
                            endDot: {
                                x: -1480,
                                y: 130,
                                z: 1150
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1280,
                                y: 50,
                                z: 1150
                            },
                            endDot: {
                                x: -1480,
                                y: 50,
                                z: 1150
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1280,
                                y: 130,
                                z: 1150
                            },
                            endDot: {
                                x: -1480,
                                y: 130,
                                z: 1150
                            }
                        },
                        // 技术
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1480,
                                y: 130,
                                z: 1010
                            },
                            endDot: {
                                x: -1680,
                                y: 130,
                                z: 1010
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1480,
                                y: 50,
                                z: 1010
                            },
                            endDot: {
                                x: -1680,
                                y: 50,
                                z: 1010
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1480,
                                y: 210,
                                z: 1010
                            },
                            endDot: {
                                x: -1680,
                                y: 210,
                                z: 1010
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1660,
                                y: 130,
                                z: 950
                            },
                            endDot: {
                                x: -1665,
                                y: 130,
                                z: 950
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1495,
                                y: 130,
                                z: 1070
                            },
                            endDot: {
                                x: -1500,
                                y: 130,
                                z: 1070
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1480,
                                y: 130,
                                z: 1010
                            },
                            endDot: {
                                x: -1680,
                                y: 130,
                                z: 1010
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1680,
                                y: 130,
                                z: 860
                            },
                            endDot: {
                                x: -1880,
                                y: 130,
                                z: 860
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1880,
                                y: 50,
                                z: 860
                            },
                            endDot: {
                                x: -1680,
                                y: 50,
                                z: 860
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1880,
                                y: 210,
                                z: 860
                            },
                            endDot: {
                                x: -1680,
                                y: 210,
                                z: 860
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1865,
                                y: 130,
                                z: 800
                            },
                            endDot: {
                                x: -1860,
                                y: 130,
                                z: 800
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1700,
                                y: 130,
                                z: 920
                            },
                            endDot: {
                                x: -1695,
                                y: 130,
                                z: 920
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1880,
                                y: 130,
                                z: 860
                            },
                            endDot: {
                                x: -1680,
                                y: 130,
                                z: 860
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2080,
                                y: 130,
                                z: 700
                            },
                            endDot: {
                                x: -1930,
                                y: 130,
                                z: 700
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2080,
                                y: 50,
                                z: 700
                            },
                            endDot: {
                                x: -1930,
                                y: 50,
                                z: 700
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2080,
                                y: 210,
                                z: 700
                            },
                            endDot: {
                                x: -1930,
                                y: 210,
                                z: 700
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2065,
                                y: 130,
                                z: 655
                            },
                            endDot: {
                                x: -2060,
                                y: 130,
                                z: 655
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -1950,
                                y: 130,
                                z: 745
                            },
                            endDot: {
                                x: -1945,
                                y: 130,
                                z: 745
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -2080,
                                y: 130,
                                z: 700
                            },
                            endDot: {
                                x: -1930,
                                y: 130,
                                z: 700
                            }
                        },
                        // 会议室
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2160,
                                y: 130,
                                z: 510
                            },
                            endDot: {
                                x: -2360,
                                y: 130,
                                z: 510
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2160,
                                y: 50,
                                z: 510
                            },
                            endDot: {
                                x: -2360,
                                y: 50,
                                z: 510
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2160,
                                y: 210,
                                z: 510
                            },
                            endDot: {
                                x: -2360,
                                y: 210,
                                z: 510
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2340,
                                y: 130,
                                z: 450
                            },
                            endDot: {
                                x: -2345,
                                y: 130,
                                z: 450
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            startDot: {
                                x: -2145,
                                y: 130,
                                z: 570
                            },
                            endDot: {
                                x: -2140,
                                y: 130,
                                z: 570
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/5
                                }
                            ],
                            skin: {
                                skin_fore: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_behind: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -2160,
                                y: 130,
                                z: 510
                            },
                            endDot: {
                                x: -2360,
                                y: 130,
                                z: 510
                            }
                        },
                    ]
                },

                // 左会议室上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI* (1/2 - 1/20)
                        }
                    ],
                    "startDot": {
                        "x": -2070,
                        "y": 120,
                        "z": -350
                    },
                    "endDot": {
                        "x": -2070,
                        "y": 120,
                        "z": 50
                    },
                    // childrens: [
                    //     {
                    //         op: '-',
                    //         show: true,
                    //         uuid: "",
                    //         name: 'doorhole',
                    //         objType: 'doorhole',
                    //         depth: 30,
                    //         height: 220,
                    //         "rotation": [
                    //             {
                    //                 "direction": "y",
                    //                 "degree": Math.PI* (1/2 - 1/20)
                    //             }
                    //         ],
                    //         startDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: -310
                    //         },
                    //         endDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: -200
                    //         },
                    //     },
                    //     {
                    //         show: true,
                    //         uuid: "",
                    //         name: 'doorCaseRight',
                    //         objType: 'cube',
                    //         "skin": {
                    //             "skin_behind": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_fore": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_left": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_right": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_up": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             }
                    //         },
                    //         depth: 24,
                    //         height: 220,
                    //         "rotation": [
                    //             {
                    //                 "direction": "y",
                    //                 "degree": Math.PI* (1/2 - 1/20)
                    //             }
                    //         ],
                    //         startDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: 1490-270
                    //         },
                    //         endDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: 1490-270
                    //         },
                    //         skinColor:0xc0dee0,
                    //     },
                    //     {
                    //         show: true,
                    //         name: 'doorCaseLeft',
                    //         uuid: "",
                    //         objType: 'cube',
                    //         "skin": {
                    //             "skin_behind": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_fore": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_left": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_right": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_up": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             }
                    //         },
                    //         depth: 24,
                    //         height: 220,
                    //         "rotation": [
                    //             {
                    //                 "direction": "y",
                    //                 "degree": Math.PI* (1/2 - 1/20)
                    //             }
                    //         ],
                    //         startDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: 1400-270
                    //         },
                    //         endDot: {
                    //             x: -2070,
                    //             y: 110,
                    //             z: 1400-270
                    //         },
                    //         skinColor:0xc0dee0,
                    //     },
                    //     {
                    //         show: true,
                    //         name: 'doorCaseTop',
                    //         uuid: "",
                    //         objType: 'cube',
                    //         "skin": {
                    //             "skin_behind": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_fore": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_left": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_right": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             },
                    //             "skin_up": {
                    //                 "skinColor": 16777215,
                    //                 "imgUrl": "wood.jpg",
                    //                 "repeatx": true,
                    //                 "repeaty": true,
                    //                 "width": 128,
                    //                 "height": 128
                    //             }
                    //         },
                    //         depth: 24,
                    //         height: 5,
                    //         "rotation": [
                    //             {
                    //                 "direction": "y",
                    //                 "degree": Math.PI* (1/2 - 1/20)
                    //             }
                    //         ],
                    //         startDot: {
                    //             x: -2070,
                    //             y: 220,
                    //             z: 1445-270
                    //         },
                    //         endDot: {
                    //             x: -2070,
                    //             y: 220,
                    //             z: 1445-270
                    //         },
                    //         skinColor:0xc0dee0,
                    //     },
                    //     {
                    //         show: true,
                    //         name: 'doorLeft',
                    //         uuid: "",
                    //         objType: 'cube',
                    //         depth: 4,
                    //         height: 210,
                    //         skinColor: 0x51443e,
                    //         skin: {
                    //             skin_fore: {
                    //                 imgUrl: "door_wood_right.png",
                    //                 transparent: true,
                    //             },
                    //             skin_behind: {
                    //                 imgUrl: "door_wood_left.png",
                    //                 transparent: true,
                    //             },
                    //         },
                    //         "rotation": [
                    //             {
                    //                 "direction": "y",
                    //                 "degree": Math.PI* (1/2 - 1/20)
                    //             }
                    //         ],
                    //         startDot: {
                    //             x: -2070,
                    //             y: 112,
                    //             z: 1445-270
                    //         },
                    //         endDot: {
                    //             x: -2070,
                    //             y: 112,
                    //             z: 1445-270
                    //         },
                    //     },
                    // ]
                },
                // 左会议室右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI/40
                        }
                    ],
                    "startDot": {
                        "x": -1870,
                        "y": 120,
                        "z": -120
                    },
                    "endDot": {
                        "x": -1870,
                        "y": 120,
                        "z": 200
                    }
                },
                // 左会议室右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/5
                        }
                    ],
                    "startDot": {
                        "x": -2000,
                        "y": 120,
                        "z": 150
                    },
                    "endDot": {
                        "x": -2000,
                        "y": 120,
                        "z": 650
                    }
                },
                // 会客室左
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/6
                        }
                    ],
                    "startDot": {
                        "x": -1350,
                        "y": 120,
                        "z": 570
                    },
                    "endDot": {
                        "x": -1350,
                        "y": 120,
                        "z": 1120
                    }
                },
                // 会客室右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/6
                        }
                    ],
                    "startDot": {
                        "x": -900,
                        "y": 120,
                        "z": 800
                    },
                    "endDot": {
                        "x": -900,
                        "y": 120,
                        "z": 1440
                    }
                },
                // 会客室上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI* 14/40
                        }
                    ],
                    "startDot": {
                        "x": -905,
                        "y": 120,
                        "z": 420
                    },
                    "endDot": {
                        "x": -905,
                        "y": 120,
                        "z": 1120
                    },
                    childrens: [
                        // {
                        //     op: '-',
                        //     show: true,
                        //     uuid: "",
                        //     name: 'doorhole',
                        //     objType: 'doorhole',
                        //     depth: 30,
                        //     height: 220,
                        //     "rotation": [
                        //         {
                        //             "direction": "y",
                        //             "degree": Math.PI* 14/40
                        //         }
                        //     ],
                        //     startDot: {
                        //         x: -905-200,
                        //         y: 110,
                        //         z: 410+200
                        //     },
                        //     endDot: {
                        //         x: -905-200,
                        //         y: 110,
                        //         z: 300+200
                        //     },
                        // },
                        // {
                        //     show: true,
                        //     uuid: "",
                        //     name: 'doorCaseRight',
                        //     objType: 'cube',
                        //     "skin": {
                        //         "skin_behind": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_fore": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_left": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_right": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_up": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         }
                        //     },
                        //     depth: 24,
                        //     height: 220,
                        //     "rotation": [
                        //         {
                        //             "direction": "y",
                        //             "degree": Math.PI* 14/40
                        //         }
                        //     ],
                        //     startDot: {
                        //         x: -855-200,
                        //         y: 110,
                        //         z: 380+200
                        //     },
                        //     endDot: {
                        //         x: -855-200,
                        //         y: 110,
                        //         z: 375+200
                        //     },
                        //     skinColor:0xc0dee0,
                        // },
                        // {
                        //     show: true,
                        //     name: 'doorCaseLeft',
                        //     uuid: "",
                        //     objType: 'cube',
                        //     "skin": {
                        //         "skin_behind": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_fore": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_left": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_right": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_up": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         }
                        //     },
                        //     depth: 24,
                        //     height: 220,
                        //     "rotation": [
                        //         {
                        //             "direction": "y",
                        //             "degree": Math.PI* 14/40
                        //         }
                        //     ],
                        //     startDot: {
                        //         x: -955-200,
                        //         y: 110,
                        //         z: 330+200
                        //     },
                        //     endDot: {
                        //         x: -955-200,
                        //         y: 110,
                        //         z: 335+200
                        //     },
                        //     skinColor:0xc0dee0,
                        // },
                        // {
                        //     show: true,
                        //     name: 'doorCaseTop',
                        //     uuid: "",
                        //     objType: 'cube',
                        //     "skin": {
                        //         "skin_behind": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_fore": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_left": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_right": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         },
                        //         "skin_up": {
                        //             "skinColor": 16777215,
                        //             "imgUrl": "wood.jpg",
                        //             "repeatx": true,
                        //             "repeaty": true,
                        //             "width": 128,
                        //             "height": 128
                        //         }
                        //     },
                        //     depth: 24,
                        //     height: 5,
                        //     "rotation": [
                        //         {
                        //             "direction": "y",
                        //             "degree": Math.PI* 14/40
                        //         }
                        //     ],
                        //     startDot: {
                        //         x: -905-200,
                        //         y: 220,
                        //         z: 410+200
                        //     },
                        //     endDot: {
                        //         x: -905-200,
                        //         y: 220,
                        //         z: 300+200
                        //     },
                        //     skinColor:0xc0dee0,
                        // },
                        // {
                        //     show: true,
                        //     name: 'doorLeft',
                        //     uuid: "",
                        //     objType: 'cube',
                        //     depth: 4,
                        //     height: 210,
                        //     skinColor: 0x51443e,
                        //     skin: {
                        //         skin_right: {
                        //             imgUrl: "door_wood_right.png",
                        //             transparent: true,
                        //         },
                        //         skin_left: {
                        //             imgUrl: "door_wood_left.png",
                        //             transparent: true,
                        //         },
                        //     },
                        //     "rotation": [
                        //         {
                        //             "direction": "y",
                        //             "degree": Math.PI* 14/40
                        //         }
                        //     ],
                        //     startDot: {
                        //         x: -905-200,
                        //         y: 112,
                        //         z: 405+200
                        //     },
                        //     endDot: {
                        //         x: -905-200,
                        //         y: 112,
                        //         z: 305+300
                        //     },
                        // },
                    ]
                },

                // 左总经办左
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/20
                        }
                    ],
                    "startDot": {
                        "x": -2210,
                        "y": 120,
                        "z": 460
                    },
                    "endDot": {
                        "x": -2210,
                        "y": 120,
                        "z": -1640
                    },
                    childrens: [
                        // 销售
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2245,
                                y: 130,
                                z: -300
                            },
                            endDot: {
                                x: -2245,
                                y: 130,
                                z: -400
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2245,
                                y: 50,
                                z: -300
                            },
                            endDot: {
                                x: -2245,
                                y: 50,
                                z: -400
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2245,
                                y: 210,
                                z: -300
                            },
                            endDot: {
                                x: -2245,
                                y: 210,
                                z: -400
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2250,
                                y: 130,
                                z: -300
                            },
                            endDot: {
                                x: -2250,
                                y: 130,
                                z: -305
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2240,
                                y: 130,
                                z: -395
                            },
                            endDot: {
                                x: -2240,
                                y: 130,
                                z: -400
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            skin: {
                                skin_left: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_right: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -2245,
                                y: 130,
                                z: -300
                            },
                            endDot: {
                                x: -2245,
                                y: 130,
                                z: -400
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2180,
                                y: 130,
                                z: -900
                            },
                            endDot: {
                                x: -2180,
                                y: 130,
                                z: -700
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2180,
                                y: 50,
                                z: -900
                            },
                            endDot: {
                                x: -2180,
                                y: 50,
                                z: -700
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2180,
                                y: 210,
                                z: -900
                            },
                            endDot: {
                                x: -2180,
                                y: 210,
                                z: -700
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2165,
                                y: 130,
                                z: -900
                            },
                            endDot: {
                                x: -2165,
                                y: 130,
                                z: -895
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2195,
                                y: 130,
                                z: -705
                            },
                            endDot: {
                                x: -2195,
                                y: 130,
                                z: -700
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            skin: {
                                skin_left: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_right: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -2180,
                                y: 130,
                                z: -900
                            },
                            endDot: {
                                x: -2180,
                                y: 130,
                                z: -700
                            }
                        },
                        // 总经办
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2130,
                                y: 130,
                                z: -1000
                            },
                            endDot: {
                                x: -2130,
                                y: 130,
                                z: -1200
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2130,
                                y: 50,
                                z: -1000
                            },
                            endDot: {
                                x: -2130,
                                y: 50,
                                z: -1200
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2130,
                                y: 210,
                                z: -1000
                            },
                            endDot: {
                                x: -2130,
                                y: 210,
                                z: -1200
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2115,
                                y: 130,
                                z: -1195
                            },
                            endDot: {
                                x: -2115,
                                y: 130,
                                z: -1200
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            startDot: {
                                x: -2145,
                                y: 50,
                                z: -1000
                            },
                            endDot: {
                                x: -2145,
                                y: 50,
                                z: -1005
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI/20
                                }
                            ],
                            skin: {
                                skin_left: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_right: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -2130,
                                y: 130,
                                z: -1000
                            },
                            endDot: {
                                x: -2130,
                                y: 130,
                                z: -1200
                            }
                        },
                    ]
                },
                // 左总经办左上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI* (1/2 - 1/20)
                        }
                    ],
                    "startDot": {
                        "x": -1830,
                        "y": 120,
                        "z": -1790
                    },
                    "endDot": {
                        "x": -1830,
                        "y": 120,
                        "z": -1370
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            startDot: {
                                x: -1830,
                                y: 130,
                                z: -1690
                            },
                            endDot: {
                                x: -1830,
                                y: 130,
                                z: -1470
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            startDot: {
                                x: -1830,
                                y: 50,
                                z: -1690
                            },
                            endDot: {
                                x: -1830,
                                y: 50,
                                z: -1470
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            startDot: {
                                x: -1830,
                                y: 210,
                                z: -1690
                            },
                            endDot: {
                                x: -1830,
                                y: 210,
                                z: -1470
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            startDot: {
                                x: -1937,
                                y: 130,
                                z: -1600
                            },
                            endDot: {
                                x: -1937,
                                y: 130,
                                z: -1595
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 30,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            startDot: {
                                x: -1723,
                                y: 130,
                                z: -1560
                            },
                            endDot: {
                                x: -1723,
                                y: 130,
                                z: -1565
                            },
                            skinColor:0x0a0707,
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'windowGlasses',
                            objType: 'glasses',
                            depth: 5,
                            height: 160,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": Math.PI* (1/2 - 1/20)
                                }
                            ],
                            skin: {
                                skin_left: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                                skin_right: {
                                    imgUrl: "glass.png",
                                    transparent: true,
                                    opacity: 0.15,
                                    repeatx: true,
                                    repeaty: true,
                                },
                            },
                            startDot: {
                                x: -1830,
                                y: 130,
                                z: -1690
                            },
                            endDot: {
                                x: -1830,
                                y: 130,
                                z: -1470
                            }
                        },
                    ]
                },
                // 左总经办中上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/20
                        }
                    ],
                    "startDot": {
                        "x": -1638,
                        "y": 120,
                        "z": -1560
                    },
                    "endDot": {
                        "x": -1638,
                        "y": 120,
                        "z": -1410
                    }
                },
                // 左总经办右上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI*7/80
                        }
                    ],
                    "startDot": {
                        "x": -1675,
                        "y": 120,
                        "z": -1190
                    },
                    "endDot": {
                        "x": 30,
                        "y": 120,
                        "z": -1190
                    }
                },
                // 左总经办右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI/20
                        }
                    ],
                    "startDot": {
                        "x": -1500,
                        "y": 120,
                        "z": -1360
                    },
                    "endDot": {
                        "x": -1500,
                        "y": 120,
                        "z": -195
                    }
                },
                // 左总经办下
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI* (1/2 - 1/20)
                        }
                    ],
                    "startDot": {
                        "x": -1830,
                        "y": 120,
                        "z": -1120
                    },
                    "endDot": {
                        "x": -1830,
                        "y": 120,
                        "z": -450
                    }
                },
                // 开发上
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": Math.PI* 31/80
                        }
                    ],
                    "startDot": {
                        "x": -1070,
                        "y": 120,
                        "z": -570
                    },
                    "endDot": {
                        "x": -1070,
                        "y": 120,
                        "z": 520
                    }
                },
                // 开发右
                {
                    "uuid": "",
                    "name": "wall1",
                    "skin": {
                        "skin_behind": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_fore": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_left": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_right": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        },
                        "skin_up": {
                            "skinColor": 16777215,
                            "imgUrl": "wall2.png",
                            "repeatx": true,
                            "repeaty": true,
                            "width": 128,
                            "height": 128
                        }
                    },
                    "rotation": [
                        {
                            "direction": "y",
                            "degree": -Math.PI*9/80
                        }
                    ],
                    "startDot": {
                        "x": -800,
                        "y": 120,
                        "z": 100
                    },
                    "endDot": {
                        "x": -800,
                        "y": 120,
                        "z": 790
                    },
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            depth: 30,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -855,
                                y: 110,
                                z: 710
                            },
                            endDot: {
                                x: -855,
                                y: 110,
                                z: 490
                            },
                        },
                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -907+15,
                                y: 110,
                                z: 750 -50
                            },
                            endDot: {
                                x: -907+15,
                                y: 110,
                                z: 755 - 50
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 220,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -833+15,
                                y: 110,
                                z: 545 -50
                            },
                            endDot: {
                                x: -833+15,
                                y: 110,
                                z: 550-50
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -870+15,
                                y: 220,
                                z: 760-50
                            },
                            endDot: {
                                x: -870+15,
                                y: 220,
                                z: 540-50
                            },
                            skinColor:0xc0dee0,
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            depth: 24,
                            height: 5,
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -870+15,
                                y: 5,
                                z: 760-50
                            },
                            endDot: {
                                x: -870+15,
                                y: 5,
                                z: 540-50
                            },
                            skinColor:0x5f7071,
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_right: {
                                    imgUrl: "door_right.png",
                                    transparent: true,
                                },
                                skin_left: {
                                    imgUrl: "door_left.png",
                                    transparent: true,
                                },
                            },
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -850+15,
                                y: 112,
                                z: 550-50
                            },
                            endDot: {
                                x: -850+15,
                                y: 112,
                                z: 655-50
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            depth: 4,
                            height: 210,
                            skinColor: 0x51443e,
                            skin: {
                                skin_right: {
                                    imgUrl: "door_left.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                                skin_left: {
                                    imgUrl: "door_right.png",
                                    opacity: 1,
                                    transparent: true,
                                },
                            },
                            "rotation": [
                                {
                                    "direction": "y",
                                    "degree": -Math.PI*9/80
                                }
                            ],
                            startDot: {
                                x: -890+15,
                                y: 112,
                                z: 645-50
                            },
                            endDot: {
                                x: -890+15,
                                y: 112,
                                z: 750-50
                            },
                        },
                    ]
                },



            ]
        },

        {
            show:true,
            uuid: "",
            name: '桌子',
            objType: 'desk',
            // objType: 'objPlant',
            objHandle:[{ direction: 'arb', handleScale: [100,100,100]}],
            childrens:[
                // 右办公区（技术）
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900+300,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900+300,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900+300,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900+300,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 900+300,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950+300,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950+300,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950+300,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950+300,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 950+300,
                    y: 0,
                    z: 50,
                },


                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 50,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 200,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 350,
                },


                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 50,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 200,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [100,100,100]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 350,
                },
            ]
        },

        {
            show:true,
            uuid: "",
            name: '椅子',
            objType: 'chair',
            // objType: 'objPlant',
            objHandle:[{ direction: 'arb', handleScale: [1,1,1]}],
            childrens: [

                // 右办公区（技术）
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850+300,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850+300,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850+300,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850+300,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 850+300,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000+300,
                    y: 0,
                    z: 450,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000+300,
                    y: 0,
                    z: 350,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000+300,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000+300,
                    y: 0,
                    z: 150,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-0.5*Math.PI},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1000+300,
                    y: 0,
                    z: 50,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 100,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1585,
                    y: 0,
                    z: 400,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 100,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 250,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 2040,
                    y: 0,
                    z: 400,
                },
                // 会议室
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1220,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1140,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1060,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 980,
                    y: 0,
                    z: 1180,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI}, { direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 1180,
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 920,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 920,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1300,
                    y: 0,
                    z: 920,
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1220,
                    y: 0,
                    z: 920
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1140,
                    y: 0,
                    z: 920
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1060,
                    y: 0,
                    z: 920
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 980,
                    y: 0,
                    z: 920
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 900,
                    y: 0,
                    z: 920
                },

                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:-Math.PI/2},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 1400,
                    y: 0,
                    z: 1050
                },
                {
                    name:"plant-right",
                    objHandle: [{ direction: 'y',degree:Math.PI/2},{ direction: 'arb', handleScale: [0.1,0.1,0.1]}],
                    uuid:"",
                    x: 800,
                    y: 0,
                    z: 1050
                },

            ]
        },

        {
            "show": true,
            "uuid": "",
            "name": "aircondition",
            "objType": "cube",
            "width": 60,
            "depth": 500,
            "height": 100,
            "x": 1500,
            "y": 50,
            "z": 250,
            "style": {
                "skinColor": 16448250,
                "skin": {
                    "skin_behind": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_fore": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_left": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_right": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_up": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    }
                },
            }
        },
        {
            "show": true,
            "uuid": "",
            "name": "aircondition",
            "objType": "cube",
            "width": 60,
            "depth": 500,
            "height": 100,
            "x": 2110,
            "y": 50,
            "z": 250,
            "style": {
                "skinColor": 16448250,
                "skin": {
                    "skin_behind": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_fore": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_left": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_right": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    },
                    "skin_up": {
                        "skinColor": 16777215,
                        "imgUrl": "wood2.png",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 128,
                        "height": 128
                    }
                },
            }
        },
        {
            "show": true,
            "uuid": "",
            "name": "会议桌",
            "objType": "cube",
            "width": 500,
            "depth": 200,
            "height": 10,
            "x": 1105,
            "y": 60,
            "z": 1050,
            "style": {
                "skinColor": 16448250,
                "skin": {
                    "skin_behind": {
                        "skinColor": 16777215,
                        "imgUrl": "wood.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 1280,
                        "height": 1280
                    },
                    "skin_fore": {
                        "skinColor": 16777215,
                        "imgUrl": "wood.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 1280,
                        "height": 1280
                    },
                    "skin_left": {
                        "skinColor": 16777215,
                        "imgUrl": "wood.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 1280,
                        "height": 1280
                    },
                    "skin_right": {
                        "skinColor": 16777215,
                        "imgUrl": "wood.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 1280,
                        "height": 1280
                    },
                    "skin_up": {
                        "skinColor": 16777215,
                        "imgUrl": "wood.jpg",
                        "repeatx": true,
                        "repeaty": true,
                        "width": 1280,
                        "height": 1280
                    }
                },
            }
        },


    ]
}
