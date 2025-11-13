/*
作者:Mr.Xie
创建时间:2020年05月29日
功能描述:3D机房封装
*/

export const ThreeData = {
  // 房间配置信息
  rooms: [
    {
      name: "主机房",
      position: { x: 0, y: 200, z: 0 }, // 位置可以根据实际房间布局调整
      color: "#ffffff",
      fontSize: 24
    },
    {
      name: "设备间",
      position: { x: -400, y: 200, z: 500 },
      color: "#ffffff",
      fontSize: 24
    },
    {
      name: "控制室",
      position: { x: 600, y: 200, z: 0 },
      color: "#ffffff",
      fontSize: 24
    }
  ],
  objects: [
    //地板
    {
      show: true,
      uuid: "",
      name: "floor",
      objType: "cube",
      width: 2000,
      depth: 1500,
      height: 10,
      style: {
        skinColor: 0x6ea1b5,
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
    //墙体
    {
      show: true,
      uuid: "",
      name: "wall",
      objType: "wall",
      depth: 20,
      width: 100, //根据实际的宽度来的
      height: 240,
      style: {
        skinColor: 0xffffff,
      },
      wallData: [
        {
          //前面墙
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_fore: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -700,
            y: 120,
            z: 650,
          },
          endDot: {
            x: 250,
            y: 120,
            z: 650,
          },
        },

        {
          //前面墙
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_fore: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 250,
            y: 120,
            z: 400,
          },
          endDot: {
            x: 900,
            y: 120,
            z: 400,
          },
        },

        {
          //前面墙
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_fore: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -700,
            y: 120,
            z: 400,
          },
          endDot: {
            x: -900,
            y: 120,
            z: 400,
          },
        },
        {
          //左面墙
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_left: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -700,
            y: 120,
            z: 660,
          },
          endDot: {
            x: -700,
            y: 120,
            z: 390,
          },
        },
        {
          //左面墙
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_left: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 250,
            y: 120,
            z: 660,
          },
          endDot: {
            x: 250,
            y: 120,
            z: 390,
          },
        },

        {
          //后面墙
          uuid: "",
          name: "wall2",
          skin: {
            skin_fore: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -900,
            y: 120,
            z: -690,
          },
          endDot: {
            x: 900,
            y: 120,
            z: -690,
          },
        },
        {
          //左面墙
          uuid: "",
          name: "wall3",
          skin: {
            skin_right: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_left: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: -910,
            y: 120,
            z: -700,
          },
          endDot: {
            x: -910,
            y: 120,
            z: 410,
          },
          // 可选：指定此墙属于哪个房间
          roomId: "mainRoom",
        },
        {
          //右面墙
          uuid: "",
          name: "wall4",
          skin: {
            skin_left: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "wall.png",
              repeatx: true,
              repeaty: true,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 910,
            y: 120,
            z: -700,
          },
          endDot: {
            x: 910,
            y: 120,
            z: 410,
          },
        },
      ],
    },
    //墙体
    {
      show: true,
      uuid: "",
      name: "wall",
      objType: "wall",
      depth: 400,
      width: 100, //根据实际的宽度来的
      height: 220,
      style: {
        skinColor: 0xffffff,
      },
      wallData: [
        {
          //前面墙
          uuid: "",
          name: "wall1",
          skin: {
            skin_behind: {
              skinColor: 0xffffff,
              imgUrl: "glass.png",
              repeatx: true,
              repeaty: true,
              transparent: true, // 必须开启透明
              opacity: 0.7,
              width: 128,
              height: 128,
            },
            skin_fore: {
              skinColor: 0xffffff,
              imgUrl: "glass.png",
              repeatx: true,
              repeaty: true,
              transparent: true, // 必须开启透明
              opacity: 0.7,
              width: 128,
              height: 128,
            },
            skin_down: {
              skinColor: 0xffffff,
              imgUrl: "glass.png",
              repeatx: true,
              repeaty: true,
              transparent: true, // 必须开启透明
              opacity: 0.7,
              width: 128,
              height: 128,
            },
            skin_up: {
              skinColor: 0xffffff,
              imgUrl: "glass.png",
              repeatx: true,
              repeaty: true,
              transparent: true, // 必须开启透明
              opacity: 0.7,
              width: 128,
              height: 128,
            },
          },
          startDot: {
            x: 30,
            y: 110,
            z: 75,
          },
          endDot: {
            x: 150,
            y: 110,
            z: 75,
          },
        },
      ],
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 70,
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: -650,
      y: 100,
      z: 350,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: -260,
      y: 100,
      z: 350,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: 350,
      y: 100,
      z: 130,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: -670,
      y: 100,
      z: -650,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: -370,
      y: 100,
      z: -650,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: 250,
      y: 100,
      z: -650,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
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
        depth: 60,
        height: 200,
        thick: 1,
      },
      x: 850,
      y: 100,
      z: -650,
      rotation: [],
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
              imgUrl: "UPS_black.png",
            },
            skin_behind: {
              imgUrl: "UPS_black.png",
            },
          },
        ],
      },
    },

    // 机柜
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -550,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 200,
        thick: 2,
      },
      x: -770,
      y: 100,
      z: -600 + 600 + 150,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 100,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 + 150,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270,
      y: 100,
      z: -600 + 150 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300,
      y: 100,
      z: -600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300,
      y: 100,
      z: -600 + 150,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300,
      y: 100,
      z: -600 + 150 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300,
      y: 100,
      z: -600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300,
      y: 100,
      z: -600 + 150,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300,
      y: 100,
      z: -600 + 150 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300,
      y: 100,
      z: -600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300,
      y: 100,
      z: -600 + 150,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300,
      y: 100,
      z: -600 + 150 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300 + 300,
      y: 100,
      z: -600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300 + 300,
      y: 100,
      z: -600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300 + 300,
      y: 100,
      z: -600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300 + 300,
      y: 100,
      z: -600 + 150,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 270 + 300 + 300 + 300 + 300,
      y: 100,
      z: -600 + 150 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 100 + 600 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 50,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 200 + 1000 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600 + 100,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 - 150 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },

    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 50,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 600 + 100,
      rotation: [],
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
    },
    {
      show: true,
      name: "cabinet",
      uuid: "",
      objType: "emptyCabinet",
      transparent: true,
      size: {
        width: 100,
        depth: 50,
        height: 250,
        thick: 2,
      },
      x: -770 + 600 + 380 + 270,
      y: 100,
      z: -600 - 100 + 150 + 150 + 600,
      rotation: [],
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
    },
  ],
};
