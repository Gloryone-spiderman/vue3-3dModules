export const ThreeData = {
  objects: [
    //测试添加新的台灯模型
    {
      "show": true,
      "uuid": "",
      "name": "lamp",
      "objType": "objLamp",  // 必须与 switch 中的值一致
      "children": [
        {
          "x": 0,
          "y": 150,
          "z": 0
        },
        {
          "x": 1000,
          "y": 500,
          "z": 0
        }
      ]
    },
    // 增加接入间房间标签
    {
      show: true,
      name: "roomLabel1",
      objType: "roomLabel",
      x: -842,
      y: 300,
      z: 865,
      data: {
        roomName: "接入间",
        type: "roomMarker"
      }
    },
    //接入间机柜配置
    //z轴
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 865,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 795,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 725,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 655,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 585,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 70,
        height: 200,
        thick: 2,
      },
      x: -842,
      y: 100,
      z: 515,
      rotation: [
        {
          direction: "y",
          degree: 1.5707963267948966,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
      },
      data: {
        name: "接入间",
        alarmInfo: [],
        tipInfo: "接入间设备",
        assetid: 186748,
      },
    },
    //机房机柜配置
    //x轴  F排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F1",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 6,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F2",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 7,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F3",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 8,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F4",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F5",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F6",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F7",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F8",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F9",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F11",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F12",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F13",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F14",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F15",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F16",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F17",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F18",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F19",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: -795,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "F20",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    //机房机柜配置
    //x轴  E排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E1",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E2",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E3",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E4",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E5",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E6",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E7",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E8",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E9",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E11",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E12",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E13",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E14",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E15",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E16",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E17",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E18",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E19",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: -645,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "E20",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    //机房机柜配置
    //x轴  D排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D1",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 42,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D2",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 43,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D3",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D4",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D5",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D6",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D7",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D8",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D9",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D11",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D12",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D13",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D14",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D15",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D16",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D17",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D18",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D19",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: -195,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "D20",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    //机房机柜配置
    //x轴  C排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C1",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 37,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C2",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 38,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C3",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C4",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C5",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C6",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 39,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C7",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C8",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 40,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C9",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 41,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C11",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C12",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C13",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C14",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C15",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C16",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C17",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C18",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C19",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: -45,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "C20",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    //机房机柜配置
    //x轴  B排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B1",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 22,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B2",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 23,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B3",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 24,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B4",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 25,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B5",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 26,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B6",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B7",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B8",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B9",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B11",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 27,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B12",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 28,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B13",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 29,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B14",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 30,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B15",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 31,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B16",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 32,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B17",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 33,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B18",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 34,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B19",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 25,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: 405,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "B20",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 36,
      },
    },
    //机房机柜配置
    //x轴  A排
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -322,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A1",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 6,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -262,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A2",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 7,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -202,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A3",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 9,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -142,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A4",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 10,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -82,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A5",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 11,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: -22,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A6",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 12,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 38,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A7",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 13,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 98,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A8",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 14,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 158,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A9",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 15,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 218,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A10",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 278,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A11",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 338,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A12",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 16,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 398,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A13",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 17,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 458,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A14",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 18,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 518,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A15",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 578,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A16",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 638,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A17",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 19,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 698,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A18",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 20,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 758,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A19",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 21,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 818,
      y: 100,
      z: 555,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "A20",
        alarmInfo: [],
        tipInfo: "服务器",
      },
    },
    //CA认证室机柜
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 1125,
      y: 100,
      z: 625,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 6,
      },
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 60,
        depth: 60,
        height: 200,
        thick: 2,
      },
      x: 1185,
      y: 100,
      z: 625,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      style: {
        skin: {
          skin_up: {
            imgUrl: "rack_top.jpg",
          },
          skin_down: {
            imgUrl: "rack_top.jpg",
          },
          skin_fore: {
            imgUrl: "rack_back.jpg",
          },
          skin_behind: {
            imgUrl: "rack_back.jpg",
          },
          skin_left: {
            imgUrl: "rack_back.jpg",
          },
          skin_right: {
            imgUrl: "rack_back.jpg",
          },
        },
      },
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skin_fore: {
              imgUrl: "rack_right_door.jpg",
            },
            skin_behind: {
              imgUrl: "rack_left_door.jpg",
            },
          },
        ],
        tipInfo: "服务器",
      },
      data: {
        name: "",
        alarmInfo: [],
        tipInfo: "服务器",
        cabinetId: 7,
      },
    },
    //机房空调
    {
      show: true,
      uuid: "",
      name: "cabinet",
      objType: "emptyCabinet",
      size: {
        width: 70,
        depth: 140,
        height: 200,
        thick: 2,
      },
      x: -500,
      y: 100,
      z: 450,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skinColor: 7501439,
          },
        ],
      },
      style: {
        skinColor: 7501439,
        skin: {
          skin_left: {
            imgUrl: "el.png",
          },
          skin_behind: {
            imgUrl: "el.png",
          },
        },
      },
      data: {
        name: "空调",
        alarmInfo: [],
        tipInfo: "空调",
        assetid: 186748,
      },
    },
    {
      show: true,
      uuid: "",
      name: "cabinet",
      objType: "emptyCabinet",
      size: {
        width: 70,
        depth: 140,
        height: 200,
        thick: 2,
      },
      x: -500,
      y: 100,
      z: -100,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skinColor: 7501439,
          },
        ],
      },
      style: {
        skinColor: 7501439,
        skin: {
          skin_left: {
            imgUrl: "el.png",
          },
        },
      },
      data: {
        name: "空调",
        alarmInfo: [],
        tipInfo: "空调",
        assetid: 186748,
      },
    },
    {
      show: true,
      uuid: "",
      name: "cabinet",
      objType: "emptyCabinet",
      size: {
        width: 70,
        depth: 140,
        height: 200,
        thick: 2,
      },
      x: -500,
      y: 100,
      z: -245,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skinColor: 7501439,
          },
        ],
      },
      style: {
        skinColor: 7501439,
        skin: {
          skin_left: {
            imgUrl: "el.png",
          },
        },
      },
      data: {
        name: "空调",
        alarmInfo: [],
        tipInfo: "空调",
        assetid: 186748,
      },
    },
    {
      show: true,
      uuid: "",
      name: "cabinet",
      objType: "emptyCabinet",
      size: {
        width: 70,
        depth: 140,
        height: 200,
        thick: 2,
      },
      x: -500,
      y: 100,
      z: -760,
      rotation: [
        {
          direction: "y",
          degree: 0,
        },
      ],
      doors: {
        doorType: "lr",
        doorname: ["cabinet_door"],
        skins: [
          {
            skinColor: 7501439,
          },
        ],
      },
      style: {
        skinColor: 7501439,
        skin: {
          skin_left: {
            imgUrl: "el.png",
          },
        },
      },
      data: {
        name: "空调",
        alarmInfo: [],
        tipInfo: "空调",
        assetid: 186748,
      },
    },
    //sprite温湿度显示
    {
      show: true,
      objType: "sprite",
      x: -543,
      y: 270,
      z: 91,
      data: {
        assetid: 9379616,
        data: [
          {
            name: "温度",
            itemid: "32508",
          },
          {
            name: "湿度",
            itemid: "32505",
          },
        ],
      },
    },
    {
      show: true,
      objType: "sprite",
      x: -543,
      y: 270,
      z: -191,
      data: {
        assetid: 9379631,
        data: [
          {
            name: "烟雾状态",
            itemid: "32518",
            mapping: [
              {
                value: 1,
                name: "正常",
              },
              {
                value: 0,
                name: "异常",
              },
            ],
          },
        ],
      },
    },
    {
      show: true,
      objType: "sprite",
      x: -543,
      y: 270,
      z: 380,
      data: {
        assetid: 9379595,
        data: [
          {
            name: "漏水状态",
            itemid: "32502",
            mapping: [
              {
                value: 1,
                name: "正常",
              },
              {
                value: 0,
                name: "异常",
              },
            ],
          },
        ],
      },
    },
    //sprite标题显示
    {
      show: true,
      name: "roomtitle",
      uuid: "",
      objType: "sprite",
      transparent: true,
      x: 100,
      y: 100,
      z: 100,
      data: {
        name: "监控室",
      },
    },
    //桌子
    {
      show: true,
      uuid: "",
      name: "wall",
      objType: "wall",
      depth: 150,
      width: 100,
      height: 80,
      style: {
        skinColor: 16777215,
      },
      wallData: [
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1007,
            y: 40,
            z: 0,
          },
          endDot: {
            x: -1007,
            y: 40,
            z: -400,
          },
        },
      ],
    },
    //墙壁
    {
      show: true,
      uuid: "",
      name: "wall",
      objType: "wall",
      depth: 20,
      width: 100,
      height: 240,
      style: {
        skinColor: 16777215,
      },
      wallData: [
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1337,
            y: 120,
            z: 1010,
          },
          endDot: {
            x: -677,
            y: 120,
            z: 1010,
          },
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1337,
            y: 120,
            z: 370,
          },
          endDot: {
            x: -677,
            y: 120,
            z: 370,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: -957,
                y: 90,
                z: 370,
              },
              endDot: {
                x: -857,
                y: 90,
                z: 370,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -957,
                y: 100,
                z: 370,
              },
              endDot: {
                x: -857,
                y: 100,
                z: 370,
              },
              skinColor: 16777215,
              skin: {
                skin_behind: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_fore: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: -1037,
                y: 90,
                z: 370,
              },
              endDot: {
                x: -1137,
                y: 90,
                z: 370,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -1037,
                y: 100,
                z: 370,
              },
              endDot: {
                x: -1137,
                y: 100,
                z: 370,
              },
              skinColor: 16777215,
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
            },
          ],
        },
        {
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1337,
            y: 120,
            z: 1020,
          },
          endDot: {
            x: -1337,
            y: 120,
            z: -540,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: -1337,
                y: 90,
                z: 160,
              },
              endDot: {
                x: -1337,
                y: 90,
                z: 340,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -1337,
                y: 100,
                z: 160,
              },
              endDot: {
                x: -1337,
                y: 100,
                z: 250,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -1337,
                y: 100,
                z: 340,
              },
              endDot: {
                x: -1337,
                y: 100,
                z: 250,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
          ],
        },
        {
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -997,
            y: 120,
            z: 1020,
          },
          endDot: {
            x: -997,
            y: 120,
            z: 360,
          },
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1337,
            y: 120,
            z: 130,
          },
          endDot: {
            x: -677,
            y: 120,
            z: 130,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: -1157,
                y: 90,
                z: 130,
              },
              endDot: {
                x: -1257,
                y: 90,
                z: 130,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -1157,
                y: 100,
                z: 130,
              },
              endDot: {
                x: -1257,
                y: 100,
                z: 130,
              },
              skinColor: 16777215,
              skin: {
                skin_fore: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_behind: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
          ],
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -1337,
            y: 120,
            z: -530,
          },
          endDot: {
            x: -677,
            y: 120,
            z: -530,
          },
        },
        {
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -667,
            y: 120,
            z: 1020,
          },
          endDot: {
            x: -667,
            y: 120,
            z: -1030,
          },
          children: [
            {
              show: true,
              uuid: "",
              name: "windowTV",
              objType: "cube",
              depth: 10,
              height: 120,
              skinColor: 1118481,
              skin: {
                skin_left: {
                  imgUrl: "tv.jpg",
                },
              },
              startDot: {
                x: -677,
                y: 130,
                z: -375,
              },
              endDot: {
                x: -677,
                y: 130,
                z: -45,
              },
            },
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: -667,
                y: 90,
                z: 160,
              },
              endDot: {
                x: -667,
                y: 90,
                z: 340,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -667,
                y: 100,
                z: 160,
              },
              endDot: {
                x: -667,
                y: 100,
                z: 250,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: -667,
                y: 100,
                z: 340,
              },
              endDot: {
                x: -667,
                y: 100,
                z: 250,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
          ],
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -677,
            y: 120,
            z: -1040,
          },
          endDot: {
            x: 973,
            y: 120,
            z: -1040,
          },
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -677,
            y: 120,
            z: 770,
          },
          endDot: {
            x: 1337,
            y: 120,
            z: 770,
          },
        },
        {
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 963,
            y: 120,
            z: 780,
          },
          endDot: {
            x: 963,
            y: 120,
            z: -1030,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: 963,
                y: 90,
                z: -90,
              },
              endDot: {
                x: 963,
                y: 90,
                z: 90,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 963,
                y: 100,
                z: -90,
              },
              endDot: {
                x: 963,
                y: 100,
                z: 0,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 963,
                y: 100,
                z: 0,
              },
              endDot: {
                x: 963,
                y: 100,
                z: 90,
              },
              skinColor: 16777215,
              skin: {
                skin_left: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_right: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
          ],
        },
        {
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 1337,
            y: 120,
            z: 780,
          },
          endDot: {
            x: 1337,
            y: 120,
            z: -120,
          },
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 963,
            y: 120,
            z: -120,
          },
          endDot: {
            x: 1347,
            y: 120,
            z: -120,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: 1245,
                y: 90,
                z: -120,
              },
              endDot: {
                x: 1065,
                y: 90,
                z: -120,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 1245,
                y: 100,
                z: -120,
              },
              endDot: {
                x: 1155,
                y: 100,
                z: -120,
              },
              skinColor: 16777215,
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
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 1155,
                y: 100,
                z: -120,
              },
              endDot: {
                x: 1065,
                y: 100,
                z: -120,
              },
              skinColor: 16777215,
              skin: {
                skin_behind: {
                  imgUrl: "door_right.png",
                  opacity: 1,
                  transparent: true,
                },
                skin_fore: {
                  imgUrl: "door_left.png",
                  opacity: 1,
                  transparent: true,
                },
              },
            },
          ],
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 963,
            y: 120,
            z: 120,
          },
          endDot: {
            x: 1347,
            y: 120,
            z: 120,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: 1307,
                y: 90,
                z: 120,
              },
              endDot: {
                x: 1207,
                y: 90,
                z: 120,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 1307,
                y: 100,
                z: 120,
              },
              endDot: {
                x: 1207,
                y: 100,
                z: 120,
              },
              skinColor: 16777215,
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
            },
          ],
        },
        {
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 16777215,
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 963,
            y: 120,
            z: 450,
          },
          endDot: {
            x: 1347,
            y: 120,
            z: 450,
          },
          children: [
            {
              op: "-",
              show: true,
              uuid: "",
              name: "doorhole",
              objType: "doorhole",
              depth: 40,
              height: 210,
              startDot: {
                x: 1307,
                y: 90,
                z: 450,
              },
              endDot: {
                x: 1207,
                y: 90,
                z: 450,
              },
            },
            {
              show: true,
              uuid: "",
              name: "doorCaseLeft",
              objType: "cube",
              depth: 24,
              height: 200,
              startDot: {
                x: 1307,
                y: 100,
                z: 450,
              },
              endDot: {
                x: 1207,
                y: 100,
                z: 450,
              },
              skinColor: 16777215,
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
            },
          ],
        },
      ],
    },
    //地板
    {
      show: true,
      uuid: "",
      name: "floor",
      objType: "cube",
      width: 3000,
      depth: 2500,
      height: 10,
      style: {
        skinColor: 7250357,
        skin: {
          skin_up: {
            imgUrl: "floor.jpg",
            repeatx: true,
            repeaty: true,
            width: 128,
            height: 128,
          },
        },
      },
    },
  ],
};
