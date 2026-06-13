const TEXT = {
  brand: { en: "Humanoid Atlas", zh: "仿人机器人图谱" },
  tagline: { en: "From anatomy to robot foundation models", zh: "从机械解剖到机器人基础模型" },
  home: { en: "Home", zh: "首页" },
  footer: {
    en: "A bilingual living textbook for learning humanoid robots from first principles to founder-level judgment.",
    zh: "一本双语动态教材：从零基础理解仿人机器人，再走到创始人级判断。"
  },
  start: { en: "Start with the head", zh: "从头部开始" },
  overview: { en: "See all systems", zh: "查看全部系统" },
  founderMode: { en: "Founder Mode", zh: "创始人模式" },
  founderButton: { en: "AI + company deep dive", zh: "AI 与公司深度课" },
  homeEyebrow: { en: "Interactive founder-ready textbook", zh: "创始人也能用的互动教材" },
  homeTitle: { en: "Learn humanoids deeply.", zh: "深入学习仿人机器人。" },
  homeLead: {
    en: "Start with the body, then connect every part to perception, control, data, VLA models, safety, manufacturing, and business judgment. The goal is simple language without shallow thinking.",
    zh: "先从身体结构入门，再把每个部位连接到感知、控制、数据、VLA 模型、安全、制造和商业判断。目标是语言易懂，但思考不浅。"
  },
  statsParts: { en: "major systems", zh: "主要系统" },
  statsDepth: { en: "learning levels", zh: "学习层级" },
  statsLang: { en: "languages", zh: "语言" },
  statsFounder: { en: "founder lens", zh: "创始人视角" },
  mapTitle: { en: "Open a system", zh: "打开一个系统" },
  mapLead: {
    en: "The labels point to major robot systems. A real humanoid may arrange them differently, but the learning map is the same.",
    zh: "这些标签指向主要系统。真实机器人布局可能不同，但学习路线基本相同。"
  },
  inside: { en: "Inside this part", zh: "这个部分里面有什么" },
  insideLead: {
    en: "Follow the smaller parts below to move one level deeper.",
    zh: "点击下面的小部件，进入更深一层。"
  },
  open: { en: "Open lesson", zh: "打开课程" },
  simple: { en: "Simple idea", zh: "简单理解" },
  scientist: { en: "Scientist note", zh: "科学家提示" },
  check: { en: "Beginner check", zh: "初学者观察点" },
  concepts: { en: "Key concepts", zh: "关键概念" },
  analogy: { en: "Mental model", zh: "类比理解" },
  location: { en: "Highlighted location", zh: "高亮位置" },
  noChildren: { en: "This is the smallest lesson in this branch.", zh: "这是该分支的最小课程。" },
  backHome: { en: "Back to robot", zh: "返回机器人" },
  learningDepth: { en: "Learning depth", zh: "学习层级" },
  levelWord: { en: "Level", zh: "第" },
  levelSuffix: { en: "", zh: "层" },
  founderEyebrow: { en: "Current robotics AI map", zh: "最新机器人 AI 主线" },
  founderTitle: {
    en: "What a humanoid company must understand now.",
    zh: "现在办一家机器人公司，必须理解什么。"
  },
  founderLead: {
    en: "The modern humanoid is not only motors and batteries. It is a stack: hardware, sensors, real-time control, safety, robot data, foundation models, and a painful path to reliable deployment.",
    zh: "今天的仿人机器人不只是电机和电池，而是一整套系统：硬件、传感器、实时控制、安全、机器人数据、基础模型，以及通向可靠部署的艰难工程路径。"
  },
  founderUpdated: {
    en: "Updated with 2023-2026 VLA and robot foundation model concepts",
    zh: "已加入 2023-2026 年 VLA 与机器人基础模型概念"
  },
  founderAudience: {
    en: "For founders, investors, and serious beginners",
    zh: "面向创始人、投资人和认真入门者"
  },
  founderSources: { en: "Research Sources", zh: "研究来源" },
  founderSourcesTitle: {
    en: "Where this deep mode is grounded.",
    zh: "这套深度模式的资料锚点。"
  },
  founderSourcesLead: {
    en: "This page uses public papers and official research posts as anchors. The field moves fast, so treat it as a living reading map.",
    zh: "本页以公开论文和官方研究资料作为锚点。这个领域变化很快，所以应把它当作动态阅读地图。"
  },
  sourceOpen: { en: "Open paper or source", zh: "打开论文或资料" }
};

const accent = {
  head: "#0f9fb8",
  torso: "#2c8c69",
  arms: "#d46a4c",
  legs: "#b88a26",
  brain: "#7462b8",
  safety: "#4f7d62"
};

const atlas = {
  id: "robot",
  children: [
    {
      id: "head",
      accent: accent.head,
      title: { en: "Head & Perception", zh: "头部与感知" },
      short: {
        en: "Where the robot sees, hears, speaks, and points its attention.",
        zh: "机器人看、听、说和转移注意力的地方。"
      },
      simple: {
        en: "The head is the robot's sensor tower. It collects light, sound, distance, and direction clues so the control computer can understand the nearby world.",
        zh: "头部像机器人的传感器塔。它收集光线、声音、距离和方向信息，让控制计算机理解周围环境。"
      },
      scientist: {
        en: "Perception is never a single sensor. Reliable humanoids combine cameras, depth sensing, microphones, joint encoders, and software that estimates what is probably true.",
        zh: "感知从来不是单个传感器完成的。可靠的仿人机器人会结合相机、深度传感器、麦克风、关节编码器，以及估计真实世界的软件。"
      },
      check: {
        en: "Ask what the robot must know before moving: Where is the person? How far is the table? Which direction is the voice coming from?",
        zh: "观察时先问：机器人移动前必须知道什么？人在哪里？桌子多远？声音来自哪个方向？"
      },
      analogy: {
        en: "Think of it as eyes, ears, and a neck mounted on a small weather station.",
        zh: "可以把它想成装在小型观测站上的眼睛、耳朵和脖子。"
      },
      concepts: [
        { en: "sensing", zh: "传感" },
        { en: "field of view", zh: "视野" },
        { en: "depth", zh: "深度" },
        { en: "calibration", zh: "标定" }
      ],
      highlight: { top: 5, left: 36, width: 28, height: 19 },
      children: [
        {
          id: "vision",
          title: { en: "Vision Module", zh: "视觉模块" },
          short: {
            en: "Cameras and depth sensors turn light into useful geometry.",
            zh: "相机和深度传感器把光变成可用的空间几何信息。"
          },
          simple: {
            en: "Vision lets the robot recognize objects, estimate distance, read human posture, and avoid obstacles.",
            zh: "视觉让机器人识别物体、估计距离、读取人的姿态，并避开障碍物。"
          },
          scientist: {
            en: "A stereo pair estimates depth by comparing two slightly different images. Depth cameras add active light or timing to measure distance more directly.",
            zh: "双目相机会比较两张略有差异的图像来估计深度。深度相机则通过主动光或时间测量更直接地获得距离。"
          },
          check: {
            en: "If a robot hesitates, the vision system may be uncertain, not lazy. Shiny, transparent, and dark objects are hard to see.",
            zh: "如果机器人犹豫，可能是视觉不确定，而不是动作慢。反光、透明、深色物体都很难看清。"
          },
          analogy: {
            en: "Like using two eyes plus a measuring tape made of light.",
            zh: "像用两只眼睛，再加一把由光组成的卷尺。"
          },
          concepts: [
            { en: "camera", zh: "相机" },
            { en: "stereo", zh: "双目" },
            { en: "depth map", zh: "深度图" },
            { en: "object detection", zh: "物体检测" }
          ],
          highlight: { top: 8, left: 39, width: 22, height: 10 },
          children: [
            {
              id: "image-sensor",
              title: { en: "Image Sensor", zh: "图像传感器" },
              short: {
                en: "A chip that converts light into pixel values.",
                zh: "把光转换成像素数值的芯片。"
              },
              simple: {
                en: "The image sensor is a grid of tiny light buckets. Each bucket measures brightness and color, then the computer turns the grid into an image.",
                zh: "图像传感器像一张由微小光桶组成的网格。每个光桶测量亮度和颜色，计算机再把网格变成图像。"
              },
              scientist: {
                en: "Sensor size, shutter type, noise, and exposure control affect whether fast robot motion looks crisp or blurry.",
                zh: "传感器尺寸、快门类型、噪声和曝光控制，会影响快速运动时图像是清晰还是模糊。"
              },
              check: {
                en: "Bright windows and dim rooms are a stress test. The sensor must keep enough detail in both places.",
                zh: "明亮窗户和昏暗房间是压力测试。传感器必须同时保留两处的细节。"
              },
              analogy: {
                en: "A digital retina that counts photons instead of nerve signals.",
                zh: "像数字视网膜，只是它数的是光子而不是神经信号。"
              },
              concepts: [
                { en: "pixels", zh: "像素" },
                { en: "exposure", zh: "曝光" },
                { en: "noise", zh: "噪声" }
              ],
              highlight: { top: 10, left: 42, width: 16, height: 6 },
              children: [
                {
                  id: "pixel-array",
                  title: { en: "Pixel Array", zh: "像素阵列" },
                  short: {
                    en: "The grid of tiny light measuring sites.",
                    zh: "由微小测光点组成的网格。"
                  },
                  simple: {
                    en: "The pixel array is the actual light catching surface. More useful pixels can reveal more detail, but only if the lens and lighting are good enough.",
                    zh: "像素阵列是真正捕捉光的表面。更多有效像素能显示更多细节，但前提是镜头和光照也足够好。"
                  },
                  scientist: {
                    en: "Pixel pitch affects light sensitivity. Small pixels can be sharp in bright light but noisy in dim scenes.",
                    zh: "像素间距会影响感光能力。小像素在亮处清晰，但在暗处可能噪声更大。"
                  },
                  check: {
                    en: "Resolution alone is not vision quality. Ask whether the robot can see clearly while moving indoors.",
                    zh: "分辨率本身不等于视觉质量。要问机器人在室内运动时是否仍能看清。"
                  },
                  analogy: {
                    en: "A tray of tiny cups collecting raindrops of light.",
                    zh: "像一盘小杯子，收集一滴滴光雨。"
                  },
                  concepts: [
                    { en: "pixel pitch", zh: "像素间距" },
                    { en: "resolution", zh: "分辨率" },
                    { en: "sensitivity", zh: "灵敏度" }
                  ],
                  highlight: { top: 10, left: 42, width: 16, height: 6 }
                },
                {
                  id: "exposure-control",
                  title: { en: "Exposure Control", zh: "曝光控制" },
                  short: {
                    en: "Adjusts how long and how strongly the sensor collects light.",
                    zh: "调整传感器收集光的时间和强度。"
                  },
                  simple: {
                    en: "Exposure control keeps images useful when the robot moves from a dark hallway into bright sunlight.",
                    zh: "曝光控制让机器人从昏暗走廊走到强光下时，图像仍然可用。"
                  },
                  scientist: {
                    en: "Short exposure reduces motion blur, but it needs more light or more sensor gain.",
                    zh: "短曝光能减少运动模糊，但需要更多光线或更高增益。"
                  },
                  check: {
                    en: "If fast motion looks smeared, exposure time may be too long.",
                    zh: "如果快速运动看起来拖影，曝光时间可能太长。"
                  },
                  analogy: {
                    en: "Opening a window just long enough to measure the room.",
                    zh: "把窗户打开足够短的一段时间来测量房间。"
                  },
                  concepts: [
                    { en: "shutter", zh: "快门" },
                    { en: "gain", zh: "增益" },
                    { en: "motion blur", zh: "运动模糊" }
                  ],
                  highlight: { top: 10, left: 42, width: 16, height: 6 }
                },
                {
                  id: "noise-reduction",
                  title: { en: "Noise Reduction", zh: "降噪" },
                  short: {
                    en: "Cleans random sensor variation before perception uses the image.",
                    zh: "在感知使用图像前，清理传感器随机波动。"
                  },
                  simple: {
                    en: "Noise reduction makes images steadier, especially in dim scenes, but too much smoothing can erase small details.",
                    zh: "降噪让图像更稳定，尤其在暗处。但过度平滑会抹掉小细节。"
                  },
                  scientist: {
                    en: "Perception software must know the difference between noise and a real tiny object.",
                    zh: "感知软件必须区分噪声和真实的小物体。"
                  },
                  check: {
                    en: "A clean image is useful only if it preserves the edges the robot needs for action.",
                    zh: "干净图像只有在保留机器人行动所需边缘时才有用。"
                  },
                  analogy: {
                    en: "Removing static from a radio signal without losing the music.",
                    zh: "从收音机信号中去掉杂音，但不能丢掉音乐。"
                  },
                  concepts: [
                    { en: "filtering", zh: "滤波" },
                    { en: "detail", zh: "细节" },
                    { en: "low light", zh: "弱光" }
                  ],
                  highlight: { top: 10, left: 42, width: 16, height: 6 }
                }
              ]
            },
            {
              id: "lens-stack",
              title: { en: "Lens Stack", zh: "镜头组" },
              short: {
                en: "Lenses focus the world onto the sensor.",
                zh: "镜头把外部世界聚焦到传感器上。"
              },
              simple: {
                en: "A lens chooses how wide the robot sees and how sharply light lands on the sensor.",
                zh: "镜头决定机器人看得多宽，以及光线落在传感器上有多清晰。"
              },
              scientist: {
                en: "Wide lenses help navigation but distort shape. Calibration tables tell software how to correct that distortion.",
                zh: "广角镜头利于导航，但会扭曲形状。标定表告诉软件如何校正这种畸变。"
              },
              check: {
                en: "A clean lens matters. Dust can look like a permanent obstacle to a cautious robot.",
                zh: "镜头清洁很重要。灰尘可能被谨慎的机器人误认为固定障碍。"
              },
              analogy: {
                en: "Eyeglasses for a machine eye.",
                zh: "机器眼睛的眼镜。"
              },
              concepts: [
                { en: "focus", zh: "聚焦" },
                { en: "distortion", zh: "畸变" },
                { en: "field of view", zh: "视场角" }
              ],
              highlight: { top: 10, left: 41, width: 18, height: 7 }
            },
            {
              id: "depth-sensing",
              title: { en: "Depth Sensing", zh: "深度感知" },
              short: {
                en: "Estimates how far surfaces are from the robot.",
                zh: "估计物体表面离机器人有多远。"
              },
              simple: {
                en: "Depth sensing adds the missing third dimension, turning flat pictures into a rough 3D map.",
                zh: "深度感知补上第三维，把平面图像变成粗略的三维地图。"
              },
              scientist: {
                en: "Stereo, structured light, time of flight, and lidar each have different strengths. Many robots mix methods.",
                zh: "双目、结构光、飞行时间和激光雷达各有优缺点。许多机器人会混合使用。"
              },
              check: {
                en: "Glass, sunlight, and black fabric can confuse some depth methods.",
                zh: "玻璃、阳光和黑色织物可能让某些深度方法出错。"
              },
              analogy: {
                en: "A range finder that paints distance over every visible surface.",
                zh: "像把距离颜色涂到每个可见表面的测距仪。"
              },
              concepts: [
                { en: "point cloud", zh: "点云" },
                { en: "range", zh: "距离" },
                { en: "3D map", zh: "三维地图" }
              ],
              highlight: { top: 9, left: 39, width: 22, height: 9 }
            }
          ]
        },
        {
          id: "audio",
          title: { en: "Audio Module", zh: "音频模块" },
          short: {
            en: "Microphones and speakers support speech and direction finding.",
            zh: "麦克风和扬声器支持语音交流与声源定位。"
          },
          simple: {
            en: "The audio module helps the robot hear commands, locate voices, and answer people clearly.",
            zh: "音频模块帮助机器人听懂指令、定位说话者，并清楚地回应。"
          },
          scientist: {
            en: "A microphone array compares arrival time and loudness at several microphones to estimate where a voice came from.",
            zh: "麦克风阵列会比较声音到达多个麦克风的时间和响度，从而估计声源方向。"
          },
          check: {
            en: "Factories, kitchens, and classrooms are noisy. Good audio needs filtering, echo control, and confidence estimates.",
            zh: "工厂、厨房和教室都很吵。好的音频系统需要滤波、回声控制和置信度估计。"
          },
          analogy: {
            en: "A pair of ears with a compass attached.",
            zh: "像带指南针的耳朵。"
          },
          concepts: [
            { en: "microphone array", zh: "麦克风阵列" },
            { en: "speaker", zh: "扬声器" },
            { en: "echo cancellation", zh: "回声消除" }
          ],
          highlight: { top: 7, left: 31, width: 38, height: 13 },
          children: [
            {
              id: "microphones",
              title: { en: "Microphones", zh: "麦克风" },
              short: {
                en: "Small sensors that convert air pressure into signals.",
                zh: "把空气压力变化转换成信号的小传感器。"
              },
              simple: {
                en: "A microphone feels tiny pressure waves in the air and turns them into numbers.",
                zh: "麦克风感受到空气中的微小压力波，并把它们变成数字。"
              },
              scientist: {
                en: "Spacing matters. If microphones are arranged carefully, software can separate the user's voice from room noise.",
                zh: "间距很重要。麦克风排列得好，软件就能把用户声音和环境噪声分开。"
              },
              check: {
                en: "Covering one microphone can reduce direction accuracy.",
                zh: "遮住一个麦克风可能降低声源定位精度。"
              },
              analogy: {
                en: "Several tiny ears voting on where a sound began.",
                zh: "几只小耳朵一起投票判断声音来自哪里。"
              },
              concepts: [
                { en: "signal", zh: "信号" },
                { en: "noise", zh: "噪声" },
                { en: "direction", zh: "方向" }
              ],
              highlight: { top: 8, left: 30, width: 40, height: 10 }
            },
            {
              id: "speaker",
              title: { en: "Speaker", zh: "扬声器" },
              short: {
                en: "Turns electrical signals back into sound.",
                zh: "把电信号重新变成声音。"
              },
              simple: {
                en: "The speaker moves air so people can hear the robot's voice, warnings, and status tones.",
                zh: "扬声器推动空气，让人听到机器人的声音、警告和状态提示音。"
              },
              scientist: {
                en: "Speech must be loud enough to hear but not startling. Human robot interaction often depends on polite audio design.",
                zh: "语音要足够清楚，但不能吓人。人机交互常常取决于礼貌的声音设计。"
              },
              check: {
                en: "A useful robot should sound understandable from different directions.",
                zh: "好用的机器人应当从不同方向听起来都清楚。"
              },
              analogy: {
                en: "The robot's mouth as an air-moving instrument.",
                zh: "机器人的嘴巴，实际上是推动空气的乐器。"
              },
              concepts: [
                { en: "volume", zh: "音量" },
                { en: "clarity", zh: "清晰度" },
                { en: "tone", zh: "提示音" }
              ],
              highlight: { top: 10, left: 38, width: 24, height: 8 }
            }
          ]
        },
        {
          id: "neck",
          title: { en: "Neck & Gaze", zh: "颈部与视线" },
          short: {
            en: "A compact joint system aims sensors and makes interaction natural.",
            zh: "紧凑的关节系统用来瞄准传感器，并让互动更自然。"
          },
          simple: {
            en: "The neck turns the head so sensors can look at what matters without moving the whole body.",
            zh: "颈部转动头部，让传感器看向重点，而不必移动整个身体。"
          },
          scientist: {
            en: "Neck motion is often limited by cable routing, collision with the shell, and the need to keep cameras stable.",
            zh: "颈部动作常受线缆走向、外壳碰撞和相机稳定性的限制。"
          },
          check: {
            en: "Smooth gaze makes a robot easier to trust. Jerky gaze feels uncertain even when the software is working.",
            zh: "平滑的视线让机器人更容易被信任。即使软件正常，突然转头也会让人觉得不安。"
          },
          analogy: {
            en: "A camera tripod with manners.",
            zh: "像一个有礼貌的相机云台。"
          },
          concepts: [
            { en: "yaw", zh: "偏航" },
            { en: "pitch", zh: "俯仰" },
            { en: "gaze control", zh: "视线控制" }
          ],
          highlight: { top: 18, left: 42, width: 16, height: 8 },
          children: [
            {
              id: "yaw-joint",
              title: { en: "Yaw Joint", zh: "偏航关节" },
              short: {
                en: "Turns the head left and right.",
                zh: "让头部左右转动。"
              },
              simple: {
                en: "Yaw is the side to side motion you use when looking left or right.",
                zh: "偏航就是看左或看右时的左右旋转。"
              },
              scientist: {
                en: "The yaw joint needs precise position feedback so the robot knows where its cameras are pointing.",
                zh: "偏航关节需要精确的位置反馈，这样机器人知道相机正指向哪里。"
              },
              check: {
                en: "If the head turns but tracking lags, the robot may lose a moving person.",
                zh: "如果头转了但跟踪滞后，机器人可能会丢失移动的人。"
              },
              analogy: {
                en: "The swivel on a desk chair, but smaller and more precise.",
                zh: "像办公椅的旋转座，但更小也更精确。"
              },
              concepts: [
                { en: "rotation", zh: "旋转" },
                { en: "encoder", zh: "编码器" },
                { en: "tracking", zh: "跟踪" }
              ],
              highlight: { top: 19, left: 43, width: 14, height: 5 }
            },
            {
              id: "pitch-joint",
              title: { en: "Pitch Joint", zh: "俯仰关节" },
              short: {
                en: "Tilts the head up and down.",
                zh: "让头部上下俯仰。"
              },
              simple: {
                en: "Pitch lets the robot look at the floor, a person's face, or a high shelf.",
                zh: "俯仰让机器人能看地面、人的脸，或高处的架子。"
              },
              scientist: {
                en: "Pitch range is usually smaller than human neck motion because cables and camera stability matter.",
                zh: "俯仰范围通常小于人类脖子，因为线缆和相机稳定性很重要。"
              },
              check: {
                en: "A robot that cannot look down will struggle with steps, dropped tools, and small objects.",
                zh: "不能低头的机器人会难以处理台阶、掉落工具和小物体。"
              },
              analogy: {
                en: "A nodding motion for aiming sensors.",
                zh: "用于瞄准传感器的点头动作。"
              },
              concepts: [
                { en: "tilt", zh: "倾斜" },
                { en: "range of motion", zh: "运动范围" },
                { en: "stability", zh: "稳定性" }
              ],
              highlight: { top: 18, left: 42, width: 16, height: 6 }
            }
          ]
        },
        {
          id: "status",
          title: { en: "Face & Status", zh: "面部与状态" },
          short: {
            en: "Displays, lights, and facial cues tell humans what the robot is doing.",
            zh: "显示屏、灯光和面部提示告诉人类机器人正在做什么。"
          },
          simple: {
            en: "A humanoid needs to communicate before, during, and after action. Face cues reduce guessing.",
            zh: "仿人机器人需要在动作前、动作中和动作后进行沟通。面部提示可以减少人的猜测。"
          },
          scientist: {
            en: "Status design is part of safety. A light that means planning, listening, or blocked can prevent people from stepping into a risky motion.",
            zh: "状态设计也是安全的一部分。表示规划、聆听或受阻的灯光，可以避免人走进危险动作区域。"
          },
          check: {
            en: "A useful cue answers one question: What should the human expect next?",
            zh: "有用的提示会回答一个问题：人接下来应该期待什么？"
          },
          analogy: {
            en: "Dashboard lights, but placed where people naturally look.",
            zh: "像仪表盘指示灯，只是放在人自然会看的位置。"
          },
          concepts: [
            { en: "LED", zh: "LED灯" },
            { en: "expression", zh: "表情" },
            { en: "intent signal", zh: "意图信号" }
          ],
          highlight: { top: 8, left: 38, width: 24, height: 12 }
        }
      ]
    },
    {
      id: "torso",
      accent: accent.torso,
      title: { en: "Torso & Power", zh: "躯干与能源" },
      short: {
        en: "The protected center for structure, batteries, cooling, and computers.",
        zh: "结构、电池、散热和计算机的受保护中心。"
      },
      simple: {
        en: "The torso is the robot's trunk. It carries heavy parts close to the center so the robot can balance and protect its most valuable systems.",
        zh: "躯干是机器人的主干。它把重的部件放在靠近中心的位置，帮助机器人保持平衡，并保护最重要的系统。"
      },
      scientist: {
        en: "Good torso design is a trade between stiffness, weight, service access, heat flow, impact protection, and cable routing.",
        zh: "好的躯干设计要在刚度、重量、维修便利、散热、抗冲击和线缆布置之间取平衡。"
      },
      check: {
        en: "When you inspect a humanoid, ask where mass, heat, and high voltage live. The torso usually answers all three.",
        zh: "观察仿人机器人时，问自己：重量、热量和高电压在哪里？答案通常都在躯干。"
      },
      analogy: {
        en: "A backpack, rib cage, and laptop case combined.",
        zh: "像背包、肋骨和电脑机箱的组合。"
      },
      concepts: [
        { en: "center of mass", zh: "质心" },
        { en: "battery", zh: "电池" },
        { en: "cooling", zh: "散热" },
        { en: "frame", zh: "框架" }
      ],
      highlight: { top: 23, left: 32, width: 36, height: 26 },
      children: [
        {
          id: "frame",
          title: { en: "Frame & Shell", zh: "框架与外壳" },
          short: {
            en: "The internal skeleton and outer protective panels.",
            zh: "内部骨架和外部保护面板。"
          },
          simple: {
            en: "The frame holds precise distances between joints. The shell protects people and components from sharp or fragile parts.",
            zh: "框架保持关节之间的精确距离。外壳保护人和内部部件，避免接触尖锐或脆弱结构。"
          },
          scientist: {
            en: "A frame must be stiff enough for control, but light enough that motors are not wasting energy lifting structure.",
            zh: "框架要足够刚，控制才准确；又要足够轻，否则电机只是在搬动结构本身。"
          },
          check: {
            en: "A good shell has service doors and smooth edges, not just a pretty surface.",
            zh: "好的外壳不仅漂亮，还应该有检修口和圆滑边缘。"
          },
          analogy: {
            en: "Bones plus armor.",
            zh: "骨骼加护甲。"
          },
          concepts: [
            { en: "load path", zh: "受力路径" },
            { en: "stiffness", zh: "刚度" },
            { en: "serviceability", zh: "可维护性" }
          ],
          highlight: { top: 24, left: 32, width: 36, height: 25 },
          children: [
            {
              id: "spine",
              title: { en: "Spine Rail", zh: "脊柱梁" },
              short: {
                en: "The central load path through the torso.",
                zh: "躯干中的中央受力路径。"
              },
              simple: {
                en: "The spine rail ties the shoulder area to the pelvis so arm forces do not twist the whole body.",
                zh: "脊柱梁把肩部和骨盆连接起来，避免手臂受力时扭动整个身体。"
              },
              scientist: {
                en: "Tiny flex at the torso becomes large error at the hand. That is why stiffness matters.",
                zh: "躯干的微小变形会变成手部的大误差，所以刚度很关键。"
              },
              check: {
                en: "If a robot shakes while lifting, the frame may be flexing or the controller may be fighting resonance.",
                zh: "如果机器人搬东西时抖动，可能是框架在变形，或控制器在和共振对抗。"
              },
              analogy: {
                en: "The robot's backbone.",
                zh: "机器人的脊梁。"
              },
              concepts: [
                { en: "torsion", zh: "扭转" },
                { en: "resonance", zh: "共振" },
                { en: "alignment", zh: "对齐" }
              ],
              highlight: { top: 25, left: 44, width: 12, height: 24 }
            },
            {
              id: "panels",
              title: { en: "Service Panels", zh: "检修面板" },
              short: {
                en: "Removable covers for inspection and repair.",
                zh: "用于检查和维修的可拆外盖。"
              },
              simple: {
                en: "Service panels let engineers reach batteries, computers, and connectors without disassembling the entire robot.",
                zh: "检修面板让工程师不用拆掉整台机器人，就能接触电池、计算机和接口。"
              },
              scientist: {
                en: "Panel seams should avoid pinch points, water paths, and high heat areas.",
                zh: "面板接缝应避开夹手点、进水路径和高热区域。"
              },
              check: {
                en: "If routine maintenance takes too long, the robot will spend less time working.",
                zh: "如果日常维护太耗时，机器人就会减少真正工作的时间。"
              },
              analogy: {
                en: "The access doors on a machine, scaled for a humanoid body.",
                zh: "机器上的检修门，只是缩放到人形身体上。"
              },
              concepts: [
                { en: "maintenance", zh: "维护" },
                { en: "fasteners", zh: "紧固件" },
                { en: "protection", zh: "保护" }
              ],
              highlight: { top: 25, left: 34, width: 32, height: 18 }
            }
          ]
        },
        {
          id: "power",
          title: { en: "Power System", zh: "能源系统" },
          short: {
            en: "Battery, protection electronics, power buses, and charging.",
            zh: "电池、保护电子、电源总线和充电系统。"
          },
          simple: {
            en: "The power system stores energy and delivers the right voltage and current to motors, computers, sensors, and safety devices.",
            zh: "能源系统储存能量，并把合适的电压和电流送给电机、计算机、传感器和安全设备。"
          },
          scientist: {
            en: "Humanoids draw bursts of power while standing up, catching balance, or lifting. The battery must handle peaks safely.",
            zh: "仿人机器人在起身、保持平衡或搬运时会瞬间需要很大功率。电池必须安全处理这些峰值。"
          },
          check: {
            en: "Battery life is not just hours. It is also heat, peak current, charge time, and safety margin.",
            zh: "电池续航不只是几个小时，还包括热量、峰值电流、充电时间和安全余量。"
          },
          analogy: {
            en: "A fuel tank and electrical traffic controller in one.",
            zh: "油箱和电力交通指挥员的结合。"
          },
          concepts: [
            { en: "voltage", zh: "电压" },
            { en: "current", zh: "电流" },
            { en: "BMS", zh: "电池管理系统" },
            { en: "charging", zh: "充电" }
          ],
          highlight: { top: 31, left: 35, width: 30, height: 18 },
          children: [
            {
              id: "battery-pack",
              title: { en: "Battery Pack", zh: "电池包" },
              short: {
                en: "Cells grouped into a protected energy module.",
                zh: "把电芯组合成受保护的能量模块。"
              },
              simple: {
                en: "A battery pack contains many cells connected to provide the voltage and energy a humanoid needs.",
                zh: "电池包包含许多电芯，通过连接提供仿人机器人所需的电压和能量。"
              },
              scientist: {
                en: "Cell chemistry affects energy density, power output, aging, and safety behavior under abuse.",
                zh: "电芯化学体系影响能量密度、功率输出、老化速度以及异常情况下的安全表现。"
              },
              check: {
                en: "The safest battery is one the robot monitors constantly.",
                zh: "最安全的电池，是机器人持续监控的电池。"
              },
              analogy: {
                en: "Many small fuel cans wired together.",
                zh: "很多小油箱接在一起。"
              },
              concepts: [
                { en: "cells", zh: "电芯" },
                { en: "energy density", zh: "能量密度" },
                { en: "thermal runaway", zh: "热失控" }
              ],
              highlight: { top: 33, left: 35, width: 30, height: 15 }
            },
            {
              id: "bms",
              title: { en: "Battery Management", zh: "电池管理" },
              short: {
                en: "Electronics that watch battery health and limits.",
                zh: "监控电池健康和限制的电子系统。"
              },
              simple: {
                en: "The BMS prevents overcharge, overdischarge, overheating, and uneven cell behavior.",
                zh: "电池管理系统防止过充、过放、过热和电芯不均衡。"
              },
              scientist: {
                en: "The controller trusts BMS limits. If the BMS says no more current, motion planning must adapt immediately.",
                zh: "控制器会信任BMS限制。如果BMS要求停止大电流，运动规划必须立刻调整。"
              },
              check: {
                en: "A robot may slow down when the battery is hot, even if charge remains.",
                zh: "即使还有电，如果电池过热，机器人也可能降低速度。"
              },
              analogy: {
                en: "A health monitor for the fuel tank.",
                zh: "油箱的健康监护仪。"
              },
              concepts: [
                { en: "balancing", zh: "均衡" },
                { en: "temperature", zh: "温度" },
                { en: "protection", zh: "保护" }
              ],
              highlight: { top: 35, left: 38, width: 24, height: 11 }
            },
            {
              id: "power-bus",
              title: { en: "Power Bus", zh: "电源总线" },
              short: {
                en: "The distribution path from battery to loads.",
                zh: "从电池到各负载的分配路径。"
              },
              simple: {
                en: "A power bus is the main electrical highway. It carries energy to motors and converters.",
                zh: "电源总线像主要电力高速路，把能量送到电机和转换器。"
              },
              scientist: {
                en: "Designers separate noisy motor power from sensitive sensor power to avoid bad measurements.",
                zh: "设计者会把噪声较大的电机电源和敏感传感器电源分开，避免测量出错。"
              },
              check: {
                en: "Loose power connectors are dangerous because motion loads change quickly.",
                zh: "松动的电源接头很危险，因为运动负载变化很快。"
              },
              analogy: {
                en: "Electrical plumbing with pressure and flow.",
                zh: "有压力和流量的电力管道。"
              },
              concepts: [
                { en: "distribution", zh: "分配" },
                { en: "converter", zh: "转换器" },
                { en: "isolation", zh: "隔离" }
              ],
              highlight: { top: 28, left: 33, width: 34, height: 21 }
            }
          ]
        },
        {
          id: "cooling",
          title: { en: "Cooling", zh: "散热" },
          short: {
            en: "Moves heat away from motors, batteries, and computers.",
            zh: "把电机、电池和计算机产生的热量带走。"
          },
          simple: {
            en: "Robots turn electrical energy into motion, but some energy becomes heat. Cooling keeps parts inside safe temperatures.",
            zh: "机器人把电能变成运动，但一部分能量会变成热。散热系统让部件保持在安全温度内。"
          },
          scientist: {
            en: "Cooling can use metal conduction, heat pipes, fans, liquid loops, or software that reduces power before overheating.",
            zh: "散热可以依靠金属导热、热管、风扇、液冷回路，或在过热前降低功率的软件。"
          },
          check: {
            en: "Listen for fan changes. A loud robot may be working hard thermally, not mechanically.",
            zh: "注意风扇声音变化。机器人变吵可能是热负荷高，而不一定是机械负荷高。"
          },
          analogy: {
            en: "A body sweating through metal, air, and control limits.",
            zh: "机器身体通过金属、空气和控制限制来散热。"
          },
          concepts: [
            { en: "heat sink", zh: "散热片" },
            { en: "airflow", zh: "气流" },
            { en: "thermal limit", zh: "热限制" }
          ],
          highlight: { top: 26, left: 33, width: 34, height: 21 },
          children: [
            {
              id: "heat-path",
              title: { en: "Heat Path", zh: "热路径" },
              short: {
                en: "The route heat follows out of a component.",
                zh: "热量离开部件时走的路线。"
              },
              simple: {
                en: "A heat path moves heat from chips or motors into metal parts, then into air or liquid.",
                zh: "热路径把芯片或电机的热量传到金属部件，再传给空气或液体。"
              },
              scientist: {
                en: "A tiny air gap can ruin heat transfer, so mechanical contact and thermal pads matter.",
                zh: "微小空气间隙就会破坏导热，所以机械接触和导热垫很重要。"
              },
              check: {
                en: "Heat follows the easiest path, not the path you wish it would take.",
                zh: "热量会走最容易的路，而不是你希望它走的路。"
              },
              analogy: {
                en: "A road system for heat traffic.",
                zh: "热量交通的道路系统。"
              },
              concepts: [
                { en: "conduction", zh: "传导" },
                { en: "thermal pad", zh: "导热垫" },
                { en: "resistance", zh: "热阻" }
              ],
              highlight: { top: 27, left: 34, width: 32, height: 20 }
            },
            {
              id: "vents",
              title: { en: "Vents & Fans", zh: "通风口与风扇" },
              short: {
                en: "Airflow removes heat from the torso.",
                zh: "气流把热量从躯干带走。"
              },
              simple: {
                en: "Fans move cool air in and warm air out. Vents must not be blocked by clothing, dust, or the robot's own pose.",
                zh: "风扇让冷空气进入、热空气排出。通风口不能被衣物、灰尘或机器人自己的姿态挡住。"
              },
              scientist: {
                en: "Air cooling is simple, but it brings noise, dust management, and sealing challenges.",
                zh: "风冷简单，但会带来噪声、灰尘管理和密封挑战。"
              },
              check: {
                en: "A blocked vent can make a robot derate its performance in minutes.",
                zh: "通风口被堵，机器人可能几分钟内就降低性能。"
              },
              analogy: {
                en: "A laptop fan system inside a moving body.",
                zh: "移动身体里的笔记本风扇系统。"
              },
              concepts: [
                { en: "airflow", zh: "气流" },
                { en: "dust", zh: "灰尘" },
                { en: "noise", zh: "噪声" }
              ],
              highlight: { top: 24, left: 30, width: 40, height: 22 }
            }
          ]
        },
        {
          id: "compute",
          title: { en: "Compute Bay", zh: "计算舱" },
          short: {
            en: "The protected place for processors, storage, and communication boards.",
            zh: "处理器、存储和通信板卡所在的受保护空间。"
          },
          simple: {
            en: "The compute bay runs perception, planning, communication, logging, and sometimes high level control.",
            zh: "计算舱运行感知、规划、通信、日志记录，有时还运行高层控制。"
          },
          scientist: {
            en: "Robots often split real time motor control from heavier AI computing so one slow process does not destabilize balance.",
            zh: "机器人常把实时电机控制和较重的AI计算分开，避免某个慢任务影响平衡稳定。"
          },
          check: {
            en: "Look for separation between fast safety control and slower thinking tasks.",
            zh: "观察快速安全控制和较慢思考任务是否分离。"
          },
          analogy: {
            en: "A rugged computer closet inside the chest.",
            zh: "胸腔里的坚固小机房。"
          },
          concepts: [
            { en: "processor", zh: "处理器" },
            { en: "real time", zh: "实时" },
            { en: "network", zh: "网络" }
          ],
          highlight: { top: 24, left: 36, width: 28, height: 15 },
          children: [
            {
              id: "main-computer",
              title: { en: "Main Computer", zh: "主计算机" },
              short: {
                en: "Runs high level perception and planning.",
                zh: "运行高层感知和规划。"
              },
              simple: {
                en: "The main computer decides what the robot is seeing and what task should happen next.",
                zh: "主计算机判断机器人看到了什么，以及接下来应该执行什么任务。"
              },
              scientist: {
                en: "It may include CPUs, GPUs, neural accelerators, and timing hardware.",
                zh: "它可能包含CPU、GPU、神经网络加速器和计时硬件。"
              },
              check: {
                en: "A powerful computer still needs reliable sensor data and safe motor controllers.",
                zh: "强大的计算机仍然需要可靠的传感器数据和安全的电机控制器。"
              },
              analogy: {
                en: "The robot's workstation.",
                zh: "机器人的工作站电脑。"
              },
              concepts: [
                { en: "CPU", zh: "CPU" },
                { en: "GPU", zh: "GPU" },
                { en: "AI accelerator", zh: "AI加速器" }
              ],
              highlight: { top: 25, left: 37, width: 26, height: 13 }
            },
            {
              id: "io-hub",
              title: { en: "I/O Hub", zh: "输入输出集线器" },
              short: {
                en: "Routes data between sensors, computers, and actuators.",
                zh: "在传感器、计算机和执行器之间传输数据。"
              },
              simple: {
                en: "The I/O hub is where cables and digital messages are organized.",
                zh: "输入输出集线器负责整理线缆和数字消息。"
              },
              scientist: {
                en: "Timing, bandwidth, shielding, and connector reliability shape how well data moves through the robot.",
                zh: "时序、带宽、屏蔽和连接器可靠性决定数据在机器人中流动得多好。"
              },
              check: {
                en: "Bad data links can look like bad AI, because the brain is receiving broken information.",
                zh: "糟糕的数据连接可能看起来像糟糕的AI，因为大脑收到的是破碎信息。"
              },
              analogy: {
                en: "A train station for signals.",
                zh: "信号的火车站。"
              },
              concepts: [
                { en: "bus", zh: "总线" },
                { en: "latency", zh: "延迟" },
                { en: "connector", zh: "连接器" }
              ],
              highlight: { top: 29, left: 35, width: 30, height: 15 }
            }
          ]
        }
      ]
    },
    {
      id: "arms",
      accent: accent.arms,
      title: { en: "Arms & Hands", zh: "手臂与手" },
      short: {
        en: "Manipulators that reach, lift, place, feel, and grasp.",
        zh: "负责伸手、搬起、放置、触觉和抓握的操作系统。"
      },
      simple: {
        en: "The arms move tools and objects through space. The hands create contact, grip, and fine adjustment.",
        zh: "手臂把工具和物体移动到空间中的位置。手负责接触、抓握和精细调整。"
      },
      scientist: {
        en: "Manipulation is difficult because objects move when touched. The robot must control position, force, friction, and uncertainty at the same time.",
        zh: "操作很难，因为物体一被接触就可能移动。机器人必须同时控制位置、力、摩擦和不确定性。"
      },
      check: {
        en: "Watch the wrist and fingers. Beginners look at the shoulder, but most delicate work succeeds at the final centimeters.",
        zh: "注意手腕和手指。初学者常看肩膀，但精细工作往往成败在最后几厘米。"
      },
      analogy: {
        en: "Cranes for reaching, hands for negotiating with the object.",
        zh: "手臂像起重机负责到达，手像谈判者负责和物体接触。"
      },
      concepts: [
        { en: "degrees of freedom", zh: "自由度" },
        { en: "force control", zh: "力控制" },
        { en: "grasping", zh: "抓握" },
        { en: "tactile feedback", zh: "触觉反馈" }
      ],
      highlight: { top: 24, left: 14, width: 72, height: 34 },
      children: [
        {
          id: "shoulder",
          title: { en: "Shoulder", zh: "肩部" },
          short: {
            en: "A multi-axis joint that places the arm in a useful direction.",
            zh: "把手臂指向有用方向的多轴关节。"
          },
          simple: {
            en: "The shoulder gives the arm a large workspace. It swings the arm forward, sideways, and rotates it.",
            zh: "肩部给手臂提供大工作空间。它让手臂前后摆、左右抬，并能旋转。"
          },
          scientist: {
            en: "Shoulder joints carry heavy loads because every downstream part acts like a lever.",
            zh: "肩关节负荷很大，因为后面的每个部件都会像杠杆一样增加力矩。"
          },
          check: {
            en: "Heavy objects far from the body make the shoulder work much harder.",
            zh: "重物离身体越远，肩部越吃力。"
          },
          analogy: {
            en: "A compact robotic ball joint with muscles replaced by motors.",
            zh: "像紧凑的机器人球窝关节，只是肌肉换成了电机。"
          },
          concepts: [
            { en: "yaw", zh: "偏航" },
            { en: "pitch", zh: "俯仰" },
            { en: "roll", zh: "滚转" },
            { en: "torque", zh: "力矩" }
          ],
          highlight: { top: 24, left: 21, width: 58, height: 12 },
          children: [
            {
              id: "shoulder-actuator",
              title: { en: "Shoulder Actuator", zh: "肩部执行器" },
              short: {
                en: "Motor and gearbox that create shoulder motion.",
                zh: "产生肩部运动的电机和减速器。"
              },
              simple: {
                en: "An actuator converts electrical power into controlled rotation at the shoulder.",
                zh: "执行器把电能转换成肩部的可控旋转。"
              },
              scientist: {
                en: "Gear ratio trades speed for torque. Humanoid shoulders often need high torque more than high speed.",
                zh: "减速比在速度和力矩之间取舍。仿人肩部通常更需要高力矩，而不是高速度。"
              },
              check: {
                en: "A warm shoulder after lifting is normal; an overheating one means the task may exceed design limits.",
                zh: "搬运后肩部变热正常；过热则说明任务可能超过设计限制。"
              },
              analogy: {
                en: "An electric muscle with a built in transmission.",
                zh: "带变速箱的电肌肉。"
              },
              concepts: [
                { en: "motor", zh: "电机" },
                { en: "gearbox", zh: "减速器" },
                { en: "torque", zh: "力矩" }
              ],
              highlight: { top: 25, left: 22, width: 56, height: 9 }
            },
            {
              id: "shoulder-encoder",
              title: { en: "Position Encoder", zh: "位置编码器" },
              short: {
                en: "Measures where the shoulder is.",
                zh: "测量肩部所在的位置。"
              },
              simple: {
                en: "The encoder tells the controller the joint angle so commanded motion matches real motion.",
                zh: "编码器告诉控制器关节角度，让指令动作和真实动作一致。"
              },
              scientist: {
                en: "Without feedback, the robot would only guess where the arm is after each command.",
                zh: "没有反馈，机器人每次发出指令后只能猜手臂在哪里。"
              },
              check: {
                en: "Good movement starts with knowing the current joint position.",
                zh: "好的动作从知道当前关节位置开始。"
              },
              analogy: {
                en: "A protractor that reports itself thousands of times per second.",
                zh: "每秒报告上千次的量角器。"
              },
              concepts: [
                { en: "angle", zh: "角度" },
                { en: "feedback", zh: "反馈" },
                { en: "calibration", zh: "标定" }
              ],
              highlight: { top: 25, left: 24, width: 52, height: 9 }
            }
          ]
        },
        {
          id: "elbow",
          title: { en: "Elbow", zh: "肘部" },
          short: {
            en: "Bends the arm and changes reach.",
            zh: "弯曲手臂并改变伸手距离。"
          },
          simple: {
            en: "The elbow folds and extends the arm, making a compact arm become a long reach when needed.",
            zh: "肘部让手臂弯曲和伸展，使紧凑的手臂在需要时变成长距离伸手。"
          },
          scientist: {
            en: "Elbow torque depends strongly on object weight and distance from the joint.",
            zh: "肘部力矩强烈取决于物体重量以及物体离关节的距离。"
          },
          check: {
            en: "Robots often keep heavy loads close to the body to reduce elbow and shoulder torque.",
            zh: "机器人常把重物靠近身体，以减少肘部和肩部力矩。"
          },
          analogy: {
            en: "A folding boom arm.",
            zh: "像可折叠的吊臂。"
          },
          concepts: [
            { en: "hinge", zh: "铰链" },
            { en: "lever arm", zh: "力臂" },
            { en: "torque sensing", zh: "力矩感知" }
          ],
          highlight: { top: 36, left: 17, width: 66, height: 10 },
          children: [
            {
              id: "hinge",
              title: { en: "Hinge Joint", zh: "铰链关节" },
              short: {
                en: "One main bending axis.",
                zh: "一个主要弯曲轴。"
              },
              simple: {
                en: "A hinge joint constrains movement to a predictable bending path.",
                zh: "铰链关节把运动限制在可预测的弯曲路径上。"
              },
              scientist: {
                en: "Precise hinge alignment reduces friction and unwanted side forces.",
                zh: "精确的铰链对齐能减少摩擦和不必要的侧向力。"
              },
              check: {
                en: "A noisy hinge may indicate wear, overload, or bad alignment.",
                zh: "铰链噪声可能表示磨损、过载或对齐不良。"
              },
              analogy: {
                en: "A door hinge, but measured and powered.",
                zh: "像门铰链，但有测量和动力。"
              },
              concepts: [
                { en: "axis", zh: "轴" },
                { en: "friction", zh: "摩擦" },
                { en: "alignment", zh: "对齐" }
              ],
              highlight: { top: 36, left: 18, width: 64, height: 9 }
            },
            {
              id: "torque-sensor",
              title: { en: "Torque Sensor", zh: "力矩传感器" },
              short: {
                en: "Measures twist force at the joint.",
                zh: "测量关节处的扭转力。"
              },
              simple: {
                en: "A torque sensor helps the robot know whether it is pushing, lifting, or colliding.",
                zh: "力矩传感器帮助机器人知道自己是在推动、抬起，还是发生碰撞。"
              },
              scientist: {
                en: "Force feedback makes compliant motion possible, which is essential around people.",
                zh: "力反馈让柔顺运动成为可能，这对人与机器人共处非常重要。"
              },
              check: {
                en: "A safe elbow should notice unexpected resistance quickly.",
                zh: "安全的肘部应当快速察觉意外阻力。"
              },
              analogy: {
                en: "A sense of effort for a metal joint.",
                zh: "金属关节的用力感觉。"
              },
              concepts: [
                { en: "force", zh: "力" },
                { en: "compliance", zh: "柔顺性" },
                { en: "collision", zh: "碰撞" }
              ],
              highlight: { top: 36, left: 18, width: 64, height: 9 }
            }
          ]
        },
        {
          id: "wrist",
          title: { en: "Wrist", zh: "手腕" },
          short: {
            en: "Orients the hand for approach and final placement.",
            zh: "调整手的方向，用于接近和最终放置。"
          },
          simple: {
            en: "The wrist changes hand orientation without moving the whole arm much.",
            zh: "手腕可以改变手的朝向，而不必大幅移动整个手臂。"
          },
          scientist: {
            en: "Wrist joints are small but critical. They often carry force torque sensors for delicate contact.",
            zh: "手腕很小但很关键。它们常带有六维力传感器，用于精细接触。"
          },
          check: {
            en: "If a robot can reach an object but cannot align the hand, the wrist is the limiting part.",
            zh: "如果机器人能伸到物体旁但手对不准，限制通常在手腕。"
          },
          analogy: {
            en: "A camera gimbal for the hand.",
            zh: "手部的相机云台。"
          },
          concepts: [
            { en: "orientation", zh: "朝向" },
            { en: "force torque", zh: "力和力矩" },
            { en: "alignment", zh: "对齐" }
          ],
          highlight: { top: 49, left: 17, width: 66, height: 8 },
          children: [
            {
              id: "force-torque",
              title: { en: "Force Torque Sensor", zh: "六维力传感器" },
              short: {
                en: "Measures pushes and twists at the wrist.",
                zh: "测量手腕处的推力和扭矩。"
              },
              simple: {
                en: "This sensor tells the robot how hard the hand is pressing and in which direction.",
                zh: "这个传感器告诉机器人手压得多用力，以及力的方向。"
              },
              scientist: {
                en: "It is central to insertion tasks such as plugging in a cable or placing a peg in a hole.",
                zh: "它对插入任务非常重要，例如插线或把销放入孔中。"
              },
              check: {
                en: "Force control turns rigid motion into careful touch.",
                zh: "力控制把僵硬动作变成谨慎触碰。"
              },
              analogy: {
                en: "A bathroom scale for every direction at once.",
                zh: "像同时测量各个方向的体重秤。"
              },
              concepts: [
                { en: "six axis", zh: "六轴" },
                { en: "contact", zh: "接触" },
                { en: "insertion", zh: "插入" }
              ],
              highlight: { top: 49, left: 20, width: 60, height: 7 }
            }
          ]
        },
        {
          id: "hand",
          title: { en: "Dexterous Hand", zh: "灵巧手" },
          short: {
            en: "Fingers, palm, touch sensors, and grasp control.",
            zh: "手指、手掌、触觉传感器和抓握控制。"
          },
          simple: {
            en: "A dexterous hand shapes itself around objects and adjusts grip as the object moves.",
            zh: "灵巧手会围绕物体改变形状，并在物体移动时调整抓握。"
          },
          scientist: {
            en: "The hardest part is not closing fingers. It is knowing contact state, friction, object pose, and the right grip force.",
            zh: "难点不是合上手指，而是知道接触状态、摩擦、物体姿态以及合适的抓力。"
          },
          check: {
            en: "A good hand uses the minimum force that still keeps the object secure.",
            zh: "好的手会使用能稳住物体的最小力。"
          },
          analogy: {
            en: "A soft measuring tool that can also hold things.",
            zh: "像能握东西的柔性测量工具。"
          },
          concepts: [
            { en: "fingers", zh: "手指" },
            { en: "tactile pads", zh: "触觉垫" },
            { en: "grip force", zh: "抓握力" }
          ],
          highlight: { top: 52, left: 10, width: 80, height: 11 },
          children: [
            {
              id: "fingers",
              title: { en: "Fingers", zh: "手指" },
              short: {
                en: "Linked segments that wrap around objects.",
                zh: "围绕物体弯曲的连杆段。"
              },
              simple: {
                en: "Robot fingers use small joints to create many contact shapes.",
                zh: "机器人手指利用小关节形成多种接触形状。"
              },
              scientist: {
                en: "Some hands put motors inside each finger. Others use tendons that pull from the forearm.",
                zh: "有些手把电机放在每根手指里；有些手用从前臂拉动的腱绳。"
              },
              check: {
                en: "More finger joints help dexterity, but they add cost, weight, and control complexity.",
                zh: "更多手指关节提高灵巧性，但会增加成本、重量和控制复杂度。"
              },
              analogy: {
                en: "Small cranes arranged in a hand shape.",
                zh: "排列成手形的小吊臂。"
              },
              concepts: [
                { en: "links", zh: "连杆" },
                { en: "tendons", zh: "腱绳" },
                { en: "dexterity", zh: "灵巧性" }
              ],
              highlight: { top: 53, left: 11, width: 78, height: 10 }
            },
            {
              id: "tactile-pads",
              title: { en: "Tactile Pads", zh: "触觉垫" },
              short: {
                en: "Touch sensors on fingertips and palm.",
                zh: "手指和手掌上的触觉传感器。"
              },
              simple: {
                en: "Tactile pads tell the robot where contact happens and how pressure changes.",
                zh: "触觉垫告诉机器人哪里发生接触，以及压力如何变化。"
              },
              scientist: {
                en: "Touch fills the gap when cameras cannot see the hidden side of an object.",
                zh: "当相机看不到物体背面时，触觉会补上这部分信息。"
              },
              check: {
                en: "Slipping often begins before the object visibly moves. Touch can catch it early.",
                zh: "打滑通常在肉眼看到移动前就开始了，触觉能提前发现。"
              },
              analogy: {
                en: "Skin patches that report pressure as numbers.",
                zh: "把压力报告成数字的皮肤贴片。"
              },
              concepts: [
                { en: "pressure", zh: "压力" },
                { en: "slip", zh: "打滑" },
                { en: "contact map", zh: "接触图" }
              ],
              highlight: { top: 53, left: 11, width: 78, height: 10 }
            }
          ]
        }
      ]
    },
    {
      id: "legs",
      accent: accent.legs,
      title: { en: "Legs & Feet", zh: "腿部与脚" },
      short: {
        en: "The balance system that walks, absorbs impact, and stands safely.",
        zh: "负责行走、吸收冲击和安全站立的平衡系统。"
      },
      simple: {
        en: "Legs move the body while keeping the center of mass above a safe support area. Feet read the ground and manage contact.",
        zh: "腿在移动身体的同时，让质心保持在安全支撑区域内。脚负责读取地面并管理接触。"
      },
      scientist: {
        en: "Biped walking is controlled falling. The robot repeatedly plans where the next support will be before gravity wins.",
        zh: "双足行走是一种受控下落。机器人会在重力占上风之前，不断规划下一个支撑点。"
      },
      check: {
        en: "Stability depends on motion, not just standing still. Watch how quickly the feet recover from a push.",
        zh: "稳定性不只看静止站立，还看运动中的恢复。观察脚在被推后多快重新找回支撑。"
      },
      analogy: {
        en: "A moving tripod that only has two legs, so timing matters deeply.",
        zh: "像只有两条腿的移动三脚架，因此时机非常关键。"
      },
      concepts: [
        { en: "balance", zh: "平衡" },
        { en: "gait", zh: "步态" },
        { en: "support polygon", zh: "支撑多边形" },
        { en: "ground reaction", zh: "地面反力" }
      ],
      highlight: { top: 53, left: 30, width: 40, height: 43 },
      children: [
        {
          id: "hip",
          title: { en: "Hip", zh: "髋部" },
          short: {
            en: "Connects legs to the pelvis and redirects whole-body motion.",
            zh: "连接腿和骨盆，并改变全身运动方向。"
          },
          simple: {
            en: "The hip swings the leg and helps position the body over the foot.",
            zh: "髋部摆动腿，并帮助身体位于脚的上方。"
          },
          scientist: {
            en: "Hip control links walking, posture, and manipulation because the arms and torso ride on the pelvis.",
            zh: "髋部控制把行走、姿态和操作连接起来，因为手臂和躯干都由骨盆承载。"
          },
          check: {
            en: "A small hip error can make the foot land in the wrong place.",
            zh: "髋部的小误差可能让脚落在错误位置。"
          },
          analogy: {
            en: "The steering joint for each leg.",
            zh: "每条腿的转向关节。"
          },
          concepts: [
            { en: "pelvis", zh: "骨盆" },
            { en: "leg swing", zh: "摆腿" },
            { en: "posture", zh: "姿态" }
          ],
          highlight: { top: 48, left: 30, width: 40, height: 13 },
          children: [
            {
              id: "hip-actuator",
              title: { en: "Hip Actuator", zh: "髋部执行器" },
              short: {
                en: "High power joint motor for leg placement.",
                zh: "用于放置腿部的高功率关节电机。"
              },
              simple: {
                en: "The hip actuator moves the heavy leg quickly enough to catch balance.",
                zh: "髋部执行器要足够快地移动沉重的腿，才能恢复平衡。"
              },
              scientist: {
                en: "It must handle continuous walking loads and sudden recovery motions.",
                zh: "它必须承受持续行走负载和突然恢复动作。"
              },
              check: {
                en: "Hip power is a major reason humanoid legs are energy hungry.",
                zh: "髋部功率需求高，是仿人腿耗能大的主要原因之一。"
              },
              analogy: {
                en: "The engine at the top of a pendulum.",
                zh: "摆杆顶部的发动机。"
              },
              concepts: [
                { en: "power", zh: "功率" },
                { en: "swing", zh: "摆动" },
                { en: "recovery", zh: "恢复" }
              ],
              highlight: { top: 49, left: 31, width: 38, height: 11 }
            }
          ]
        },
        {
          id: "knee",
          title: { en: "Knee", zh: "膝部" },
          short: {
            en: "Extends and folds the leg for stepping and lifting.",
            zh: "让腿伸直和弯曲，用于迈步和抬腿。"
          },
          simple: {
            en: "The knee changes leg length. It helps clear the foot from the ground and absorb landing forces.",
            zh: "膝部改变腿长，帮助脚离开地面并吸收落地冲击。"
          },
          scientist: {
            en: "Knee control is central to walking efficiency because each step stores and dissipates energy.",
            zh: "膝部控制对行走效率很关键，因为每一步都涉及能量储存和耗散。"
          },
          check: {
            en: "Soft knee bending after landing is a sign of shock absorption.",
            zh: "落地后膝部柔和弯曲，是吸收冲击的迹象。"
          },
          analogy: {
            en: "A powered folding strut.",
            zh: "带动力的折叠支杆。"
          },
          concepts: [
            { en: "leg length", zh: "腿长" },
            { en: "impact", zh: "冲击" },
            { en: "efficiency", zh: "效率" }
          ],
          highlight: { top: 64, left: 32, width: 36, height: 12 },
          children: [
            {
              id: "series-elastic",
              title: { en: "Elastic Element", zh: "弹性元件" },
              short: {
                en: "Spring-like compliance that can absorb shock.",
                zh: "能吸收冲击的弹簧式柔顺结构。"
              },
              simple: {
                en: "An elastic element allows a small controlled give instead of transmitting every impact directly.",
                zh: "弹性元件允许可控的微小让步，而不是把每次冲击直接传递出去。"
              },
              scientist: {
                en: "Series elasticity can improve force sensing and safety, but it complicates fast position control.",
                zh: "串联弹性可改善力感知和安全性，但会让快速位置控制更复杂。"
              },
              check: {
                en: "Compliance is useful only when the controller understands it.",
                zh: "只有控制器理解柔顺性，它才有用。"
              },
              analogy: {
                en: "A shock absorber between motor and world.",
                zh: "电机和外部世界之间的减震器。"
              },
              concepts: [
                { en: "spring", zh: "弹簧" },
                { en: "compliance", zh: "柔顺性" },
                { en: "shock", zh: "冲击" }
              ],
              highlight: { top: 64, left: 33, width: 34, height: 11 }
            }
          ]
        },
        {
          id: "ankle",
          title: { en: "Ankle", zh: "踝部" },
          short: {
            en: "Keeps the foot aligned with the floor and adjusts balance.",
            zh: "让脚与地面保持合适角度，并调整平衡。"
          },
          simple: {
            en: "The ankle tilts the foot so the robot can stand on slopes, recover from pushes, and push off during walking.",
            zh: "踝部倾斜脚，让机器人能站在斜坡上、从推搡中恢复，并在行走时蹬地。"
          },
          scientist: {
            en: "Ankle torque changes the center of pressure under the foot, which is a key balance tool.",
            zh: "踝部力矩会改变脚下压力中心，这是平衡控制的重要工具。"
          },
          check: {
            en: "If ankles are weak, the robot must move its hips or take steps more often to stay balanced.",
            zh: "如果踝部弱，机器人就必须更频繁移动髋部或迈步来保持平衡。"
          },
          analogy: {
            en: "A fine steering wheel at ground contact.",
            zh: "地面接触处的精细方向盘。"
          },
          concepts: [
            { en: "center of pressure", zh: "压力中心" },
            { en: "push off", zh: "蹬地" },
            { en: "slope", zh: "斜坡" }
          ],
          highlight: { top: 84, left: 33, width: 34, height: 8 },
          children: [
            {
              id: "ankle-roll",
              title: { en: "Roll Axis", zh: "滚转轴" },
              short: {
                en: "Side to side tilt for uneven ground.",
                zh: "适应不平地面的左右倾斜轴。"
              },
              simple: {
                en: "The roll axis helps the foot stay flat when the ground tilts left or right.",
                zh: "滚转轴帮助脚在地面左右倾斜时仍尽量贴平。"
              },
              scientist: {
                en: "Roll control reduces the chance that the foot loads only one edge.",
                zh: "滚转控制减少脚只压在一侧边缘的风险。"
              },
              check: {
                en: "Uneven floors reveal ankle design quickly.",
                zh: "不平的地面很快会暴露踝部设计水平。"
              },
              analogy: {
                en: "A balance board under the robot.",
                zh: "机器人脚下的平衡板。"
              },
              concepts: [
                { en: "roll", zh: "滚转" },
                { en: "edge loading", zh: "边缘受力" },
                { en: "terrain", zh: "地形" }
              ],
              highlight: { top: 84, left: 34, width: 32, height: 8 }
            }
          ]
        },
        {
          id: "foot",
          title: { en: "Foot", zh: "脚" },
          short: {
            en: "Contact surface, sensors, toes, and support shape.",
            zh: "接触表面、传感器、脚趾和支撑形状。"
          },
          simple: {
            en: "The foot is where the robot negotiates with the ground. Shape, friction, and sensing all matter.",
            zh: "脚是机器人和地面协商的地方。形状、摩擦和传感都很重要。"
          },
          scientist: {
            en: "Foot sensors estimate ground reaction forces. The controller uses them to decide if the robot is balanced.",
            zh: "脚部传感器估计地面反力。控制器用这些信息判断机器人是否平衡。"
          },
          check: {
            en: "A large flat foot is easier for balance, but less humanlike and less agile on cluttered ground.",
            zh: "大而平的脚更容易平衡，但不够像人，在杂乱地面上也不够灵活。"
          },
          analogy: {
            en: "A smart shoe with scales hidden inside.",
            zh: "藏着秤的智能鞋。"
          },
          concepts: [
            { en: "sole", zh: "脚底" },
            { en: "friction", zh: "摩擦" },
            { en: "force plate", zh: "测力板" }
          ],
          highlight: { top: 90, left: 28, width: 44, height: 8 },
          children: [
            {
              id: "sole-sensors",
              title: { en: "Sole Sensors", zh: "脚底传感器" },
              short: {
                en: "Measure pressure under different areas of the foot.",
                zh: "测量脚底不同区域的压力。"
              },
              simple: {
                en: "Sole sensors show whether weight is on the heel, toe, inside edge, or outside edge.",
                zh: "脚底传感器显示重量是在脚跟、脚趾、内侧边还是外侧边。"
              },
              scientist: {
                en: "Pressure patterns reveal slipping, tipping, and whether the planned step really landed.",
                zh: "压力分布能揭示打滑、倾倒趋势，以及规划的步伐是否真的落地。"
              },
              check: {
                en: "Balance begins with knowing which parts of the foot are touching.",
                zh: "平衡从知道脚的哪些部分接触地面开始。"
              },
              analogy: {
                en: "A map of weight under the shoe.",
                zh: "鞋底下的重量地图。"
              },
              concepts: [
                { en: "pressure map", zh: "压力图" },
                { en: "contact", zh: "接触" },
                { en: "slip", zh: "打滑" }
              ],
              highlight: { top: 92, left: 29, width: 42, height: 6 }
            },
            {
              id: "toe-structure",
              title: { en: "Toe Structure", zh: "脚趾结构" },
              short: {
                en: "Front support that can help push off and clear terrain.",
                zh: "前部支撑，可帮助蹬地和通过地形。"
              },
              simple: {
                en: "Toes can improve walking efficiency and allow the foot to roll forward.",
                zh: "脚趾能提高行走效率，并让脚向前滚动。"
              },
              scientist: {
                en: "Some humanoids use simple rigid toes. Others add toe joints for more natural gait.",
                zh: "有些仿人机器人使用简单的刚性脚趾，有些会加入脚趾关节以获得更自然步态。"
              },
              check: {
                en: "Toe design is a trade between simplicity and humanlike walking.",
                zh: "脚趾设计是在简单性和人形步态之间取舍。"
              },
              analogy: {
                en: "The final lever in a step.",
                zh: "一步中的最后一根杠杆。"
              },
              concepts: [
                { en: "toe off", zh: "脚趾蹬离" },
                { en: "rolling contact", zh: "滚动接触" },
                { en: "gait", zh: "步态" }
              ],
              highlight: { top: 94, left: 27, width: 46, height: 4 }
            }
          ]
        }
      ]
    },
    {
      id: "brain",
      accent: accent.brain,
      title: { en: "Brain & Control", zh: "大脑与控制" },
      short: {
        en: "Software layers that perceive, plan, balance, and learn.",
        zh: "负责感知、规划、平衡和学习的软件层。"
      },
      simple: {
        en: "The brain is not one magic AI. It is a stack of programs that turn sensor data into safe motion.",
        zh: "大脑不是一个神奇AI，而是一层层程序，把传感器数据变成安全动作。"
      },
      scientist: {
        en: "A humanoid needs slow reasoning and fast reflexes. The fast loops keep it standing while the slower layers decide what task to do.",
        zh: "仿人机器人同时需要慢速推理和快速反射。快速循环负责站稳，较慢层决定做什么任务。"
      },
      check: {
        en: "When judging robot intelligence, separate knowing what to do from being physically able to do it.",
        zh: "判断机器人智能时，要区分知道该做什么和身体真的能做到。"
      },
      analogy: {
        en: "A team of specialists sharing a body.",
        zh: "一群专家共用一个身体。"
      },
      concepts: [
        { en: "perception", zh: "感知" },
        { en: "planning", zh: "规划" },
        { en: "control loop", zh: "控制循环" },
        { en: "learning", zh: "学习" }
      ],
      highlight: { top: 8, left: 34, width: 32, height: 35 },
      children: [
        {
          id: "perception-stack",
          title: { en: "Perception Stack", zh: "感知栈" },
          short: {
            en: "Turns sensor streams into objects, people, maps, and state estimates.",
            zh: "把传感器数据流变成物体、人、地图和状态估计。"
          },
          simple: {
            en: "Perception answers: what is around me, where is it, and how certain am I?",
            zh: "感知回答：周围有什么？在哪里？我有多确定？"
          },
          scientist: {
            en: "Sensor fusion combines imperfect clues. The output is usually a probability, not an absolute fact.",
            zh: "传感器融合会结合不完美线索。输出通常是概率，而不是绝对事实。"
          },
          check: {
            en: "A robot that asks for confirmation may be acting wisely because perception is uncertain.",
            zh: "机器人请求确认可能是明智行为，因为感知存在不确定性。"
          },
          analogy: {
            en: "A detective combining witness statements from sensors.",
            zh: "像侦探综合多个传感器证词。"
          },
          concepts: [
            { en: "sensor fusion", zh: "传感器融合" },
            { en: "world model", zh: "世界模型" },
            { en: "confidence", zh: "置信度" }
          ],
          highlight: { top: 10, left: 36, width: 28, height: 18 },
          children: [
            {
              id: "world-model",
              title: { en: "World Model", zh: "世界模型" },
              short: {
                en: "The robot's internal map of relevant reality.",
                zh: "机器人内部关于相关现实的地图。"
              },
              simple: {
                en: "The world model stores what the robot believes about objects, people, free space, and its own body.",
                zh: "世界模型存储机器人对物体、人、空闲空间和自身身体的理解。"
              },
              scientist: {
                en: "The model must update quickly and forget old beliefs when the world changes.",
                zh: "模型必须快速更新，并在世界变化时忘记旧判断。"
              },
              check: {
                en: "A stale world model makes a robot reach for objects that are no longer there.",
                zh: "过期的世界模型会让机器人去抓已经不在那里的东西。"
              },
              analogy: {
                en: "A living sketch of the room.",
                zh: "房间的一张会变化的草图。"
              },
              concepts: [
                { en: "map", zh: "地图" },
                { en: "state", zh: "状态" },
                { en: "update", zh: "更新" }
              ],
              highlight: { top: 10, left: 36, width: 28, height: 18 }
            },
            {
              id: "pose-estimation",
              title: { en: "Pose Estimation", zh: "姿态估计" },
              short: {
                en: "Estimates where the robot and objects are in space.",
                zh: "估计机器人和物体在空间中的位置与朝向。"
              },
              simple: {
                en: "Pose means position plus orientation. A cup's pose tells the robot where it is and how it is rotated.",
                zh: "姿态是位置加朝向。杯子的姿态告诉机器人杯子在哪里、旋转成什么角度。"
              },
              scientist: {
                en: "Pose estimates are filtered over time because any one sensor reading can be wrong.",
                zh: "姿态估计会随时间滤波，因为任何单次传感器读数都可能出错。"
              },
              check: {
                en: "If the robot grabs beside an object, pose estimation may be the issue.",
                zh: "如果机器人抓到物体旁边，问题可能在姿态估计。"
              },
              analogy: {
                en: "A GPS plus compass for every important thing.",
                zh: "给每个重要物体配上GPS和指南针。"
              },
              concepts: [
                { en: "position", zh: "位置" },
                { en: "orientation", zh: "朝向" },
                { en: "filter", zh: "滤波" }
              ],
              highlight: { top: 10, left: 36, width: 28, height: 18 }
            }
          ]
        },
        {
          id: "planning",
          title: { en: "Planning", zh: "规划" },
          short: {
            en: "Chooses tasks, paths, grasps, and motions before execution.",
            zh: "在执行前选择任务、路径、抓握和动作。"
          },
          simple: {
            en: "Planning decides what sequence of actions can achieve the goal without violating limits.",
            zh: "规划决定哪一串动作能达成目标，同时不违反限制。"
          },
          scientist: {
            en: "Task planning, motion planning, and grasp planning are different problems that must cooperate.",
            zh: "任务规划、运动规划和抓握规划是不同问题，但必须协同。"
          },
          check: {
            en: "A robot may pause because it is checking whether a motion is safe, not because it forgot the goal.",
            zh: "机器人暂停可能是在检查动作是否安全，而不是忘记目标。"
          },
          analogy: {
            en: "A route planner for actions, not just roads.",
            zh: "不是只规划道路，而是规划动作的导航系统。"
          },
          concepts: [
            { en: "task planner", zh: "任务规划器" },
            { en: "motion planner", zh: "运动规划器" },
            { en: "constraints", zh: "约束" }
          ],
          highlight: { top: 23, left: 34, width: 32, height: 20 },
          children: [
            {
              id: "motion-planner",
              title: { en: "Motion Planner", zh: "运动规划器" },
              short: {
                en: "Finds a collision-free path for the body.",
                zh: "为身体寻找无碰撞路径。"
              },
              simple: {
                en: "The motion planner searches for joint movements that reach the goal while avoiding obstacles and joint limits.",
                zh: "运动规划器寻找关节运动，使机器人到达目标，同时避开障碍和关节限制。"
              },
              scientist: {
                en: "A valid path is not always a good path. It must also be smooth, stable, and executable by motors.",
                zh: "可行路径不一定是好路径，还必须平滑、稳定，并能由电机执行。"
              },
              check: {
                en: "If a robot takes an odd route, it may be avoiding an invisible joint or balance limit.",
                zh: "如果机器人走了奇怪路线，可能是在避开看不见的关节或平衡限制。"
              },
              analogy: {
                en: "Solving a maze where every joint is a dimension.",
                zh: "在每个关节都是一个维度的迷宫中找路。"
              },
              concepts: [
                { en: "collision", zh: "碰撞" },
                { en: "trajectory", zh: "轨迹" },
                { en: "limits", zh: "限制" }
              ],
              highlight: { top: 23, left: 34, width: 32, height: 20 }
            }
          ]
        },
        {
          id: "control-loops",
          title: { en: "Control Loops", zh: "控制循环" },
          short: {
            en: "Fast feedback systems that keep motion stable and accurate.",
            zh: "让动作稳定准确的快速反馈系统。"
          },
          simple: {
            en: "A control loop compares the desired state with the measured state, then corrects the difference.",
            zh: "控制循环比较目标状态和测量状态，然后修正差异。"
          },
          scientist: {
            en: "Balance control runs quickly because gravity does not wait for high level reasoning.",
            zh: "平衡控制必须快速运行，因为重力不会等待高层推理。"
          },
          check: {
            en: "Smooth robots are usually running many small corrections per second.",
            zh: "动作平滑的机器人通常每秒进行许多小修正。"
          },
          analogy: {
            en: "A thermostat for motion, but much faster.",
            zh: "像运动的恒温器，只是快得多。"
          },
          concepts: [
            { en: "feedback", zh: "反馈" },
            { en: "PID", zh: "PID" },
            { en: "MPC", zh: "模型预测控制" }
          ],
          highlight: { top: 26, left: 30, width: 40, height: 65 },
          children: [
            {
              id: "pid",
              title: { en: "PID Control", zh: "PID控制" },
              short: {
                en: "A classic correction method based on error.",
                zh: "基于误差的经典修正方法。"
              },
              simple: {
                en: "PID uses present error, accumulated error, and error change rate to decide how hard to correct.",
                zh: "PID利用当前误差、累计误差和误差变化率，决定修正力度。"
              },
              scientist: {
                en: "PID is simple and powerful, but tuning matters. Bad gains can cause sluggishness or oscillation.",
                zh: "PID简单而强大，但参数很重要。不好的增益会导致迟钝或振荡。"
              },
              check: {
                en: "Overshoot and shaking often point to control tuning problems.",
                zh: "过冲和抖动常指向控制参数问题。"
              },
              analogy: {
                en: "Steering back to center with memory and anticipation.",
                zh: "带记忆和预判地回到中心。"
              },
              concepts: [
                { en: "error", zh: "误差" },
                { en: "gain", zh: "增益" },
                { en: "oscillation", zh: "振荡" }
              ],
              highlight: { top: 26, left: 30, width: 40, height: 65 }
            },
            {
              id: "balance",
              title: { en: "Balance Control", zh: "平衡控制" },
              short: {
                en: "Keeps the robot from falling during standing and walking.",
                zh: "让机器人在站立和行走时不摔倒。"
              },
              simple: {
                en: "Balance control keeps the body's motion compatible with where the feet can support it.",
                zh: "平衡控制让身体运动与脚能提供的支撑相匹配。"
              },
              scientist: {
                en: "It uses IMU, joint encoders, foot forces, and dynamic models to estimate falling risk.",
                zh: "它利用IMU、关节编码器、脚底力和动力学模型来估计跌倒风险。"
              },
              check: {
                en: "The best balance system recovers before a human notices much movement.",
                zh: "最好的平衡系统会在人明显察觉前就完成恢复。"
              },
              analogy: {
                en: "A tightrope walker doing math every millisecond.",
                zh: "每毫秒都在计算的走钢丝者。"
              },
              concepts: [
                { en: "IMU", zh: "惯性测量单元" },
                { en: "center of mass", zh: "质心" },
                { en: "recovery step", zh: "恢复步" }
              ],
              highlight: { top: 48, left: 28, width: 44, height: 47 }
            }
          ]
        },
        {
          id: "learning",
          title: { en: "Learning & Data", zh: "学习与数据" },
          short: {
            en: "Improves behaviors using simulation, logs, demonstrations, and testing.",
            zh: "利用仿真、日志、示教和测试来改进行为。"
          },
          simple: {
            en: "Learning helps the robot improve from data, but it must be wrapped in safety checks before real use.",
            zh: "学习让机器人从数据中改进，但真实使用前必须包在安全检查之内。"
          },
          scientist: {
            en: "Simulation lets engineers practice millions of motions, but real hardware still exposes friction, wear, timing, and unexpected contact.",
            zh: "仿真让工程师练习数百万次动作，但真实硬件仍会暴露摩擦、磨损、时序和意外接触。"
          },
          check: {
            en: "A learned policy is impressive only if it remains safe outside the demo case.",
            zh: "学习策略只有在演示之外仍然安全时，才真正令人信服。"
          },
          analogy: {
            en: "Practice in a simulator, then careful driving lessons in the real world.",
            zh: "先在模拟器练习，再到现实世界小心上路。"
          },
          concepts: [
            { en: "simulation", zh: "仿真" },
            { en: "dataset", zh: "数据集" },
            { en: "policy", zh: "策略" },
            { en: "validation", zh: "验证" }
          ],
          highlight: { top: 8, left: 34, width: 32, height: 84 },
          children: [
            {
              id: "simulation",
              title: { en: "Simulation", zh: "仿真" },
              short: {
                en: "A virtual world for training and testing motions.",
                zh: "用于训练和测试动作的虚拟世界。"
              },
              simple: {
                en: "Simulation lets robots fail cheaply before risking hardware or people.",
                zh: "仿真让机器人先以低成本失败，再去面对硬件和人。"
              },
              scientist: {
                en: "The sim to real gap is the difference between simulated physics and real physics.",
                zh: "仿真到现实差距，就是模拟物理和真实物理之间的差异。"
              },
              check: {
                en: "A policy that works only in perfect simulation is not ready.",
                zh: "只在完美仿真中有效的策略还没有准备好。"
              },
              analogy: {
                en: "A flight simulator for a body with legs and hands.",
                zh: "带腿和手的身体飞行模拟器。"
              },
              concepts: [
                { en: "physics", zh: "物理" },
                { en: "domain randomization", zh: "域随机化" },
                { en: "testing", zh: "测试" }
              ],
              highlight: { top: 8, left: 34, width: 32, height: 84 }
            }
          ]
        }
      ]
    },
    {
      id: "safety",
      accent: accent.safety,
      title: { en: "Skin & Safety", zh: "外壳皮肤与安全" },
      short: {
        en: "The layers that make contact understandable and human spaces safer.",
        zh: "让接触可理解、让人类空间更安全的多层系统。"
      },
      simple: {
        en: "Safety is physical design plus sensing plus software limits. It is not one emergency button.",
        zh: "安全是物理设计、传感和软件限制的组合，不只是一个急停按钮。"
      },
      scientist: {
        en: "A humanoid shares space with people, so safety must handle expected contact, unexpected contact, faults, and confused humans.",
        zh: "仿人机器人与人共享空间，所以安全必须处理预期接触、意外接触、故障和不确定的人类行为。"
      },
      check: {
        en: "A beautiful robot is not automatically safe. Ask how it limits speed, force, heat, pinch points, and fall risk.",
        zh: "漂亮的机器人不等于安全。要问它如何限制速度、力量、热量、夹点和跌倒风险。"
      },
      analogy: {
        en: "Seat belts, soft edges, senses, and traffic rules in one body.",
        zh: "安全带、圆滑边缘、感官和交通规则都装进一个身体。"
      },
      concepts: [
        { en: "tactile skin", zh: "触觉皮肤" },
        { en: "collision detection", zh: "碰撞检测" },
        { en: "E-stop", zh: "急停" },
        { en: "safe interaction", zh: "安全交互" }
      ],
      highlight: { top: 5, left: 21, width: 58, height: 91 },
      children: [
        {
          id: "shell",
          title: { en: "External Shell", zh: "外部壳体" },
          short: {
            en: "Smooth panels that cover moving and electrical parts.",
            zh: "覆盖运动和电气部件的光滑面板。"
          },
          simple: {
            en: "The shell prevents people from touching sharp edges, gears, hot surfaces, and high voltage areas.",
            zh: "壳体防止人接触锐边、齿轮、高温表面和高压区域。"
          },
          scientist: {
            en: "Shells must leave enough space for joint motion, heat flow, wiring, and service access.",
            zh: "壳体必须为关节运动、散热、布线和维修留出足够空间。"
          },
          check: {
            en: "Look for pinch points where two panels move near each other.",
            zh: "注意两个面板相互靠近运动的位置，那些地方可能夹手。"
          },
          analogy: {
            en: "The robot's protective clothing.",
            zh: "机器人的防护衣。"
          },
          concepts: [
            { en: "pinch point", zh: "夹点" },
            { en: "cover", zh: "覆盖" },
            { en: "impact", zh: "冲击" }
          ],
          highlight: { top: 5, left: 21, width: 58, height: 91 },
          children: [
            {
              id: "soft-edges",
              title: { en: "Soft Edges", zh: "柔和边缘" },
              short: {
                en: "Rounded or padded areas that reduce contact injury.",
                zh: "降低接触伤害的圆角或软垫区域。"
              },
              simple: {
                en: "Soft edges spread contact force over a larger area, making bumps less harmful.",
                zh: "柔和边缘把接触力分散到更大面积，让碰撞伤害更小。"
              },
              scientist: {
                en: "Padding changes contact dynamics, so the controller should know where compliant surfaces are.",
                zh: "软垫会改变接触动力学，所以控制器应知道哪里是柔顺表面。"
              },
              check: {
                en: "Hard corners near fast joints deserve extra attention.",
                zh: "快速关节附近的硬角需要特别注意。"
              },
              analogy: {
                en: "A bumper on a moving machine.",
                zh: "移动机器上的缓冲保险杠。"
              },
              concepts: [
                { en: "padding", zh: "软垫" },
                { en: "contact force", zh: "接触力" },
                { en: "injury reduction", zh: "伤害降低" }
              ],
              highlight: { top: 5, left: 21, width: 58, height: 91 }
            }
          ]
        },
        {
          id: "tactile-skin",
          title: { en: "Tactile Skin", zh: "触觉皮肤" },
          short: {
            en: "Distributed sensors that notice touch across the body.",
            zh: "分布在身体各处、感知触碰的传感器。"
          },
          simple: {
            en: "Tactile skin lets the robot notice contact outside the hands, such as a person touching its arm.",
            zh: "触觉皮肤让机器人注意到手之外的接触，例如有人碰到它的手臂。"
          },
          scientist: {
            en: "Large-area tactile sensing is hard because it needs many channels, flexible materials, durability, and fast interpretation.",
            zh: "大面积触觉很难，因为它需要许多通道、柔性材料、耐久性和快速解释。"
          },
          check: {
            en: "A safe robot should react differently to a gentle tap, a bump, and a trapped object.",
            zh: "安全机器人应对轻拍、碰撞和被夹物体做出不同反应。"
          },
          analogy: {
            en: "Skin that reports pressure to the control system.",
            zh: "会把压力报告给控制系统的皮肤。"
          },
          concepts: [
            { en: "pressure matrix", zh: "压力矩阵" },
            { en: "touch event", zh: "触碰事件" },
            { en: "flexible sensor", zh: "柔性传感器" }
          ],
          highlight: { top: 22, left: 17, width: 66, height: 67 },
          children: [
            {
              id: "pressure-matrix",
              title: { en: "Pressure Matrix", zh: "压力矩阵" },
              short: {
                en: "A grid that shows where pressure occurs.",
                zh: "显示压力发生位置的网格。"
              },
              simple: {
                en: "A pressure matrix converts touch into a map, similar to an image made of force instead of light.",
                zh: "压力矩阵把触摸转换成地图，像用力而不是光组成的图像。"
              },
              scientist: {
                en: "Resolution, drift, and calibration determine whether the map is useful for control.",
                zh: "分辨率、漂移和标定决定这张图是否对控制有用。"
              },
              check: {
                en: "Touch sensors need calibration just like cameras.",
                zh: "触觉传感器也像相机一样需要标定。"
              },
              analogy: {
                en: "A pixel screen for pressure.",
                zh: "压力的像素屏幕。"
              },
              concepts: [
                { en: "resolution", zh: "分辨率" },
                { en: "drift", zh: "漂移" },
                { en: "calibration", zh: "标定" }
              ],
              highlight: { top: 22, left: 17, width: 66, height: 67 }
            }
          ]
        },
        {
          id: "safety-layers",
          title: { en: "Safety Layers", zh: "安全层" },
          short: {
            en: "Limits and monitors that reduce risk during faults or surprises.",
            zh: "在故障或意外中降低风险的限制与监控。"
          },
          simple: {
            en: "Safety layers watch commands, measured forces, speed, temperature, power, and human proximity.",
            zh: "安全层监控指令、测得的力、速度、温度、电力和人类距离。"
          },
          scientist: {
            en: "Independent safety monitors are important because the main AI can be wrong or delayed.",
            zh: "独立安全监控很重要，因为主AI可能出错或延迟。"
          },
          check: {
            en: "Ask what happens when software freezes, a sensor fails, or a human steps too close.",
            zh: "要问：软件卡住、传感器失效或人走太近时会发生什么？"
          },
          analogy: {
            en: "Multiple brakes, each watching a different danger.",
            zh: "多套刹车，每套盯着不同危险。"
          },
          concepts: [
            { en: "emergency stop", zh: "急停" },
            { en: "speed limit", zh: "速度限制" },
            { en: "fault detection", zh: "故障检测" }
          ],
          highlight: { top: 5, left: 21, width: 58, height: 91 },
          children: [
            {
              id: "estop",
              title: { en: "Emergency Stop", zh: "急停" },
              short: {
                en: "A direct way to stop dangerous motion.",
                zh: "直接停止危险运动的方式。"
              },
              simple: {
                en: "An emergency stop cuts or inhibits motion power so the robot stops as safely as possible.",
                zh: "急停会切断或抑制运动动力，让机器人尽可能安全地停止。"
              },
              scientist: {
                en: "Stopping is not always simple for a walking robot. It must avoid making the fall risk worse.",
                zh: "对行走机器人来说，停止并不总简单，因为不能让跌倒风险更糟。"
              },
              check: {
                en: "Every shared-space robot should make emergency behavior clear to nearby humans.",
                zh: "每台共享空间机器人都应让附近的人清楚知道紧急行为。"
              },
              analogy: {
                en: "A brake that also thinks about balance.",
                zh: "还要考虑平衡的刹车。"
              },
              concepts: [
                { en: "brake", zh: "制动" },
                { en: "power cut", zh: "断电" },
                { en: "safe state", zh: "安全状态" }
              ],
              highlight: { top: 20, left: 30, width: 40, height: 35 }
            },
            {
              id: "collision-detection",
              title: { en: "Collision Detection", zh: "碰撞检测" },
              short: {
                en: "Detects unexpected contact or blocked motion.",
                zh: "检测意外接触或运动受阻。"
              },
              simple: {
                en: "Collision detection compares expected motion with actual forces and positions.",
                zh: "碰撞检测会比较预期运动和实际力、位置。"
              },
              scientist: {
                en: "A collision can be detected through motor current, torque sensors, tactile skin, vision, or motion mismatch.",
                zh: "碰撞可通过电机电流、力矩传感器、触觉皮肤、视觉或运动不匹配来检测。"
              },
              check: {
                en: "Fast detection matters because contact energy grows quickly with speed.",
                zh: "快速检测很重要，因为接触能量会随速度快速增加。"
              },
              analogy: {
                en: "A reflex that says something is not moving as expected.",
                zh: "一种反射：事情没有按预期运动。"
              },
              concepts: [
                { en: "unexpected force", zh: "意外力" },
                { en: "reflex", zh: "反射" },
                { en: "motion mismatch", zh: "运动不匹配" }
              ],
              highlight: { top: 22, left: 17, width: 66, height: 67 }
            }
          ]
        },
        {
          id: "interaction",
          title: { en: "Human Interaction", zh: "人机交互" },
          short: {
            en: "Signals, spacing, and behavior that make the robot understandable.",
            zh: "让机器人容易理解的信号、距离和行为。"
          },
          simple: {
            en: "Interaction design teaches people what the robot knows, what it will do next, and how to interrupt it.",
            zh: "交互设计告诉人们机器人知道什么、下一步会做什么，以及如何打断它。"
          },
          scientist: {
            en: "Safety improves when humans can predict robot intent before motion begins.",
            zh: "当人能在动作开始前预测机器人意图时，安全性会提高。"
          },
          check: {
            en: "A beginner-friendly robot should communicate uncertainty, not hide it.",
            zh: "适合初学者和普通人的机器人应表达不确定性，而不是隐藏它。"
          },
          analogy: {
            en: "Turn signals and eye contact for a machine body.",
            zh: "机器身体的转向灯和眼神交流。"
          },
          concepts: [
            { en: "intent", zh: "意图" },
            { en: "proximity", zh: "距离" },
            { en: "voice", zh: "语音" },
            { en: "gesture", zh: "手势" }
          ],
          highlight: { top: 7, left: 29, width: 42, height: 27 },
          children: [
            {
              id: "intent-signals",
              title: { en: "Intent Signals", zh: "意图信号" },
              short: {
                en: "Lights, gaze, sound, or motion previews that show what comes next.",
                zh: "用灯光、视线、声音或预动作展示接下来要做什么。"
              },
              simple: {
                en: "Intent signals let people prepare before the robot moves into shared space.",
                zh: "意图信号让人在机器人进入共享空间前做好准备。"
              },
              scientist: {
                en: "A signal should be consistent, immediate, and easy to learn without a manual.",
                zh: "信号应当一致、及时，并且不用读说明书也容易学会。"
              },
              check: {
                en: "If people step away before motion, the signal is probably working.",
                zh: "如果人在动作开始前就自然避让，说明信号可能有效。"
              },
              analogy: {
                en: "A turn signal before a lane change.",
                zh: "变道前的转向灯。"
              },
              concepts: [
                { en: "preview", zh: "预告" },
                { en: "timing", zh: "时机" },
                { en: "consistency", zh: "一致性" }
              ],
              highlight: { top: 7, left: 29, width: 42, height: 27 }
            }
          ]
        }
      ]
    }
  ]
};

const founderBadges = [
  { en: "LLM", zh: "LLM" },
  { en: "VLM", zh: "VLM" },
  { en: "VLA", zh: "VLA" },
  { en: "Robot foundation model", zh: "机器人基础模型" },
  { en: "Data flywheel", zh: "数据飞轮" },
  { en: "Deployment economics", zh: "部署经济性" }
];

const founderSections = [
  {
    id: "terms",
    accent: "#0f9fb8",
    eyebrow: { en: "01 / Vocabulary", zh: "01 / 先把词分清" },
    title: {
      en: "LLM, VLM, VLA, and action models are different layers.",
      zh: "LLM、VLM、VLA、Action Model 不是同一个东西。"
    },
    lead: {
      en: "A beginner often thinks the robot's brain is one giant AI. A founder needs a cleaner map: language reasoning, visual understanding, action generation, and real-time control have different jobs and different failure modes.",
      zh: "很多初学者会把机器人的“大脑”想成一个巨大的 AI。创始人需要更清楚的地图：语言推理、视觉理解、动作生成、实时控制各做各的事，失败方式也完全不同。"
    },
    cards: [
      {
        title: { en: "LLM: language and reasoning", zh: "LLM：语言与推理" },
        body: {
          en: "A large language model can explain, plan, write code, ask clarifying questions, and reason about goals. It does not by itself know the exact torque for a knee motor or the force needed to pinch a cup.",
          zh: "大语言模型擅长解释、规划、写代码、追问需求和做高层推理。但它本身并不知道膝关节电机该给多少扭矩，也不知道夹杯子需要多大力。"
        }
      },
      {
        title: { en: "VLM: vision plus language", zh: "VLM：视觉加语言" },
        body: {
          en: "A vision-language model links images with words. It can answer what is in a scene, where an object is, or which item matches a request. It is closer to perception and scene understanding.",
          zh: "视觉语言模型把图像和语言连起来。它能回答画面里有什么、物体在哪里、哪个东西符合指令。它更接近“看懂场景”。"
        }
      },
      {
        title: { en: "VLA: vision-language-action", zh: "VLA：视觉-语言-行动" },
        body: {
          en: "A VLA model takes images, language, and sometimes robot state, then predicts actions. This is the recent core idea behind models such as RT-2, OpenVLA, Gemini Robotics, GR00T N1, and pi-zero.",
          zh: "VLA 模型输入图像、语言，有时还输入机器人的关节状态，然后输出动作。这是 RT-2、OpenVLA、Gemini Robotics、GR00T N1、pi-zero 等路线的核心。"
        }
      },
      {
        title: { en: "Action model: the physical output layer", zh: "Action Model：物理输出层" },
        body: {
          en: "When people say large action model, they usually mean a model that converts understanding into executable motion. The hard part is not saying what to do, but producing safe, smooth, timed actions on a real body.",
          zh: "如果你说的 LA 是 Large Action Model，可以理解为“把理解变成可执行动作”的模型。难点不只是说出要做什么，而是让真实身体安全、平滑、按时地动起来。"
        }
      }
    ],
    note: {
      title: { en: "Founder translation", zh: "创始人翻译" },
      body: {
        en: "Do not ask only, what model do we use? Ask which layer creates value, which layer is commodity, and which layer is your defensible data loop.",
        zh: "不要只问“我们用什么模型”。要问：哪一层真正创造价值，哪一层会商品化，哪一层能形成你的数据闭环和壁垒。"
      }
    }
  },
  {
    id: "stack",
    accent: "#2c8c69",
    eyebrow: { en: "02 / From command to torque", zh: "02 / 从一句话到电机扭矩" },
    title: {
      en: "A humanoid brain is a stack, not one magic model.",
      zh: "仿人机器人的大脑是一套栈，不是一个魔法模型。"
    },
    lead: {
      en: "A useful robot must repeatedly convert messy reality into state, state into intent, intent into actions, and actions into motor commands while safety systems supervise the whole loop.",
      zh: "一个有用的机器人必须不断把混乱现实变成状态，把状态变成意图，把意图变成动作，再把动作变成电机命令，同时安全系统要监控整个闭环。"
    },
    cards: [
      {
        title: { en: "Perception", zh: "感知层" },
        body: {
          en: "Cameras, depth sensors, microphones, tactile sensors, IMUs, and joint encoders estimate what is happening. Bad perception makes every later layer look stupid.",
          zh: "相机、深度传感器、麦克风、触觉、IMU 和关节编码器估计现实世界发生了什么。感知差，后面每一层都会显得很笨。"
        }
      },
      {
        title: { en: "World state", zh: "世界状态" },
        body: {
          en: "The robot keeps a short-lived model of objects, people, surfaces, free space, contact, and its own body pose. This is the robot's working memory.",
          zh: "机器人需要维护一个短期世界模型：物体、人、桌面、空闲空间、接触状态，以及自己的身体姿态。这就是机器人的工作记忆。"
        }
      },
      {
        title: { en: "Planner", zh: "规划层" },
        body: {
          en: "A high-level planner decides the next subtask: open the drawer, grasp the handle, move the cup, or ask for help. LLMs and VLMs are useful here, especially for language and common-sense reasoning.",
          zh: "高层规划决定下一步子任务：打开抽屉、抓住把手、移动杯子，或请求帮助。LLM/VLM 在这里有价值，尤其是语言和常识推理。"
        }
      },
      {
        title: { en: "Policy or VLA", zh: "策略层或 VLA" },
        body: {
          en: "The policy turns observations and goals into action sequences. Newer VLA systems try to make this layer more general, so one model can adapt across tasks, objects, and sometimes robot bodies.",
          zh: "策略层把观察和目标变成动作序列。新的 VLA 系统试图让这一层更通用，让一个模型跨任务、跨物体，甚至部分跨机器人身体迁移。"
        }
      },
      {
        title: { en: "Low-level control", zh: "低层控制" },
        body: {
          en: "Whole-body control, impedance control, PID loops, and motor drivers keep the robot balanced and physically stable. This layer runs much faster than a language model.",
          zh: "全身控制、阻抗控制、PID 回路和电机驱动负责保持平衡和物理稳定。这一层的运行频率远高于语言模型。"
        }
      },
      {
        title: { en: "Safety shell", zh: "安全壳" },
        body: {
          en: "Limits on force, speed, joint range, collision zones, emergency stop, and forbidden actions must remain active even when the AI is uncertain or wrong.",
          zh: "力、速度、关节范围、碰撞区域、急停和禁行动作的限制，必须在 AI 不确定或犯错时仍然有效。"
        }
      }
    ],
    note: {
      title: { en: "Simple mental model", zh: "简单心智模型" },
      body: {
        en: "The LLM is more like a strategist. The VLA is closer to a trained operator. The low-level controller is the reflex system that keeps the body from falling or hurting someone.",
        zh: "LLM 更像战略顾问，VLA 更像训练过的操作员，低层控制器更像反射神经，负责不摔倒、不伤人。"
      }
    }
  },
  {
    id: "data",
    accent: "#b88a26",
    eyebrow: { en: "03 / Data engine", zh: "03 / 数据发动机" },
    title: {
      en: "The winning company is often the one that learns fastest from real work.",
      zh: "最后胜出的公司，往往是从真实工作中学习最快的公司。"
    },
    lead: {
      en: "Humanoid robotics is data hungry because the physical world has friction, lighting changes, clutter, fragile objects, and people doing unexpected things. A demo is not a data strategy.",
      zh: "仿人机器人极度吃数据，因为真实世界有摩擦、光照变化、杂乱环境、易碎物体，以及不可预测的人。一个演示视频不是数据战略。"
    },
    cards: [
      {
        title: { en: "Teleoperation demonstrations", zh: "遥操作示范" },
        body: {
          en: "Humans control the robot to show successful behavior. This creates paired data: observation, instruction, robot state, and action. The cost and speed of collecting this data matter enormously.",
          zh: "人类遥控机器人完成任务，产生“观察、指令、机器人状态、动作”的配对数据。采集成本和速度非常关键。"
        }
      },
      {
        title: { en: "Fleet learning", zh: "机队学习" },
        body: {
          en: "Once robots are deployed, every success, failure, intervention, and near-miss can improve the next model. This is where a deployment company may build a real moat.",
          zh: "机器人部署后，每次成功、失败、人工接管和险些出错，都可以改进下一版模型。这是部署型公司可能形成真正壁垒的地方。"
        }
      },
      {
        title: { en: "Simulation and synthetic data", zh: "仿真与合成数据" },
        body: {
          en: "Simulation can create rare scenes and scale practice, but the sim-to-real gap is brutal. The question is what transfers to the real robot, not how beautiful the simulator looks.",
          zh: "仿真能制造稀有场景并放大练习量，但 sim-to-real 差距很残酷。关键不是仿真多漂亮，而是什么能迁移到真实机器人。"
        }
      },
      {
        title: { en: "Human video and web knowledge", zh: "人类视频与网络知识" },
        body: {
          en: "Some modern models use web-scale visual and language knowledge, and sometimes human videos, to gain semantic priors. But a human video does not contain robot joint commands, so it must be grounded carefully.",
          zh: "现代模型会利用网络规模的视觉语言知识，有时也利用人类视频来获得语义先验。但人类视频没有机器人关节命令，必须谨慎落地。"
        }
      },
      {
        title: { en: "Evaluation discipline", zh: "评测纪律" },
        body: {
          en: "A serious team measures task success, recovery, latency, autonomy percentage, human intervention rate, damage rate, and time between failures. This separates engineering from storytelling.",
          zh: "严肃团队会测任务成功率、恢复能力、延迟、自主比例、人工接管率、损坏率和故障间隔。这能把工程和讲故事区分开。"
        }
      },
      {
        title: { en: "Post-training and fine-tuning", zh: "后训练与微调" },
        body: {
          en: "General robot models are rarely enough out of the box. The practical company needs a repeatable way to adapt models to its robot, customer site, and target workflow.",
          zh: "通用机器人模型通常不能开箱即用。真正落地的公司需要可重复的方法，把模型适配到自己的机器人、客户现场和目标流程。"
        }
      }
    ],
    note: {
      title: { en: "Investor translation", zh: "投资人翻译" },
      body: {
        en: "Ask how many real episodes the company collects per week, what percentage is useful, and how quickly a failure becomes a better policy.",
        zh: "要问公司每周采集多少真实 episode，其中多少有用，一个失败案例多久能变成更好的策略。"
      }
    }
  },
  {
    id: "research",
    accent: "#7462b8",
    eyebrow: { en: "04 / Research map", zh: "04 / 研究主线" },
    title: {
      en: "The frontier is robot foundation models, not only better parts.",
      zh: "前沿不只是更好的零件，而是机器人基础模型。"
    },
    lead: {
      en: "From 2023 onward, the most important papers pushed toward models that combine internet-scale semantics with robot trajectories, then adapt that knowledge to physical action.",
      zh: "从 2023 年开始，最重要的方向之一是把互联网规模语义知识和机器人轨迹数据结合，再把这些知识迁移到真实动作上。"
    },
    cards: [
      {
        title: { en: "RT-2", zh: "RT-2" },
        body: {
          en: "A major early VLA example: represent robot actions as tokens so a vision-language model can learn web knowledge and robot actions in one training recipe.",
          zh: "早期代表性 VLA：把机器人动作表示成 token，让视觉语言模型在同一套训练中学习网络知识和机器人动作。"
        }
      },
      {
        title: { en: "OpenVLA", zh: "OpenVLA" },
        body: {
          en: "An open-source VLA trained on large robot demonstration data, important because founders can study, fine-tune, and benchmark a real open recipe instead of only watching closed demos.",
          zh: "开源 VLA，使用大量机器人示范数据训练。它重要在于团队可以研究、微调、评测真实开放路线，而不是只能看闭源演示。"
        }
      },
      {
        title: { en: "pi-zero and pi-zero point five", zh: "pi-zero 与 pi-zero point five" },
        body: {
          en: "A move toward high-frequency continuous action generation and open-world generalization, closer to the dexterity needed for homes, kitchens, laundry, and messy manipulation.",
          zh: "这一路线强调高频连续动作生成和开放世界泛化，更接近家庭、厨房、洗衣和复杂操作需要的灵巧性。"
        }
      },
      {
        title: { en: "Gemini Robotics", zh: "Gemini Robotics" },
        body: {
          en: "Google DeepMind's VLA direction connects Gemini-style multimodal reasoning with physical actions, plus an embodied reasoning model for spatial understanding and robot tool use.",
          zh: "Google DeepMind 的 VLA 路线把 Gemini 式多模态推理连接到物理动作，并加入具身推理模型处理空间理解和机器人工具调用。"
        }
      },
      {
        title: { en: "GR00T N1", zh: "GR00T N1" },
        body: {
          en: "NVIDIA's open humanoid foundation model uses a dual-system idea: a slower vision-language reasoning layer and a faster action layer for real-time motor behavior.",
          zh: "NVIDIA 的开放仿人基础模型采用双系统思路：较慢的视觉语言推理层，加上较快的动作层，用于实时运动行为。"
        }
      },
      {
        title: { en: "3D, 4D, and world models", zh: "3D、4D 与世界模型" },
        body: {
          en: "A newer research direction asks the model to reason about 3D space, time, and future scene geometry, because real manipulation is about what will happen after contact.",
          zh: "更新的研究方向要求模型理解 3D 空间、时间和未来场景几何，因为真实操作的关键是接触之后会发生什么。"
        }
      }
    ],
    note: {
      title: { en: "How to read demos", zh: "如何看演示" },
      body: {
        en: "The frontier is real, but most systems are still early. Watch for number of trials, unseen environments, human intervention, failure recovery, hardware cost, and whether the robot repeats the task tomorrow.",
        zh: "前沿是真实的，但多数系统仍处早期。看演示时要关注试验次数、未见环境、人工接管、失败恢复、硬件成本，以及明天能否重复同样任务。"
      }
    }
  },
  {
    id: "company",
    accent: "#d46a4c",
    eyebrow: { en: "05 / Company building", zh: "05 / 公司判断" },
    title: {
      en: "A humanoid startup is judged by deployment truth, not robot beauty.",
      zh: "判断一家仿人机器人公司，不能只看机器人好不好看。"
    },
    lead: {
      en: "A beautiful body can hide bad economics. A clever AI demo can hide weak hardware. A founder needs to connect technical progress to a wedge market, operating model, and repeatable customer ROI.",
      zh: "漂亮外形可能掩盖糟糕经济性，聪明 AI 演示可能掩盖硬件脆弱。创始人需要把技术进展连接到切入市场、运营模式和可重复客户 ROI。"
    },
    cards: [
      {
        title: { en: "Choose a narrow wedge", zh: "选择狭窄切入点" },
        body: {
          en: "Start with one job where the humanoid form actually matters: human tools, human spaces, variable objects, or labor shortage. General purpose is a destination, not the first product.",
          zh: "先选一个仿人形态真正有意义的任务：使用人类工具、进入人类空间、处理变化物体，或解决缺工。通用是终点，不是第一款产品。"
        }
      },
      {
        title: { en: "Unit economics", zh: "单机经济性" },
        body: {
          en: "Track bill of materials, service cost, battery swaps, spare parts, remote operators, insurance, and uptime. A robot that works 60 percent of the time may still be commercially useless.",
          zh: "追踪 BOM、服务成本、换电、备件、远程操作员、保险和 uptime。一个 60% 时间可用的机器人，商业上可能仍然没用。"
        }
      },
      {
        title: { en: "Autonomy honesty", zh: "自主性诚实度" },
        body: {
          en: "Separate autonomous execution from remote assistance. Teleoperation is useful for data collection and fallback, but hiding it as autonomy destroys trust and unit economics.",
          zh: "必须区分自主执行和远程协助。遥操作对数据采集和兜底很有用，但如果伪装成自主，会摧毁信任和经济模型。"
        }
      },
      {
        title: { en: "Hardware bottlenecks", zh: "硬件瓶颈" },
        body: {
          en: "Hands, actuators, thermal design, battery, cabling, falls, and maintainability decide whether the AI can meet reality. Many AI strategies fail because the body cannot survive the job.",
          zh: "手、执行器、散热、电池、线束、跌倒和可维护性，决定 AI 能否碰到现实。很多 AI 策略失败，是因为身体扛不住任务。"
        }
      },
      {
        title: { en: "Safety and liability", zh: "安全与责任" },
        body: {
          en: "A company needs force limits, speed limits, safety-rated behavior, incident logging, audit trails, and a policy for what the robot must refuse to do.",
          zh: "公司需要力限制、速度限制、安全等级行为、事故记录、审计轨迹，以及机器人必须拒绝哪些行为的策略。"
        }
      },
      {
        title: { en: "Data moat", zh: "数据壁垒" },
        body: {
          en: "The strongest moat is not a slide saying AI. It is a loop where deployment creates proprietary task data, which improves performance, which wins more deployments.",
          zh: "最强壁垒不是 PPT 上写 AI，而是部署产生专有任务数据，数据提升性能，性能赢得更多部署的循环。"
        }
      }
    ],
    note: {
      title: { en: "Founder question", zh: "创始人自问" },
      body: {
        en: "If tomorrow the best open VLA model becomes free, what still makes your company hard to copy: data, hardware, customer access, operations, safety approval, or manufacturing?",
        zh: "如果明天最好的开源 VLA 免费了，你的公司还有什么难以复制：数据、硬件、客户入口、运营、安全认证，还是制造能力？"
      }
    }
  },
  {
    id: "red-flags",
    accent: "#4f7d62",
    eyebrow: { en: "06 / Diligence checklist", zh: "06 / 尽调清单" },
    title: {
      en: "Red flags that make a humanoid company look deeper than it is.",
      zh: "一些让机器人公司“看起来很深”、但实际很危险的信号。"
    },
    lead: {
      en: "For investment or company building, the key skill is not cynicism. It is knowing which questions expose the difference between a lab milestone and a repeatable business.",
      zh: "投资或创业时，关键能力不是唱衰，而是知道哪些问题能区分实验室里程碑和可重复商业。"
    },
    cards: [
      {
        title: { en: "Only edited demos", zh: "只有剪辑演示" },
        body: {
          en: "Ask for uncut runs, failure cases, number of attempts, and whether the robot can repeat the task after lighting, object, or layout changes.",
          zh: "要求看未剪辑运行、失败案例、尝试次数，以及光照、物体、布局变化后能否重复任务。"
        }
      },
      {
        title: { en: "No uptime numbers", zh: "没有 uptime 数据" },
        body: {
          en: "A commercial robot is a machine in service. If the company cannot discuss uptime, repair time, and intervention rate, it is probably not near deployment.",
          zh: "商业机器人是服务中的机器。如果公司说不清 uptime、维修时间和接管率，多半还没接近部署。"
        }
      },
      {
        title: { en: "AI claims ignore control", zh: "AI 叙事忽略控制" },
        body: {
          en: "If the story jumps from LLM to full-body motion with no discussion of control frequency, contacts, balance, force limits, or safety, the stack is incomplete.",
          zh: "如果故事从 LLM 直接跳到全身运动，却不谈控制频率、接触、平衡、力限制和安全，那技术栈不完整。"
        }
      },
      {
        title: { en: "No customer wedge", zh: "没有客户切入点" },
        body: {
          en: "A general humanoid market sounds huge, but early customers buy a solved job. Ask which painful workflow the robot owns first.",
          zh: "通用仿人市场听起来很大，但早期客户买的是一个被解决的具体工作。要问机器人先占住哪个痛点流程。"
        }
      },
      {
        title: { en: "Hidden remote labor", zh: "隐藏远程人工" },
        body: {
          en: "Remote help can be acceptable. The issue is whether the company measures it honestly and has a credible path to reduce it.",
          zh: "远程协助本身可以接受。问题是公司是否诚实计量，并有可信路径逐步降低。"
        }
      },
      {
        title: { en: "Hardware cost fantasy", zh: "硬件成本幻想" },
        body: {
          en: "Ask which parts are custom, which are commodity, expected cycle life, repair process, and whether the design was built for manufacturing from day one.",
          zh: "要问哪些部件自研、哪些商品化、预期寿命、维修流程，以及设计是否一开始就面向量产。"
        }
      }
    ],
    note: {
      title: { en: "Good sign", zh: "好的信号" },
      body: {
        en: "A strong team is usually honest about narrow scope, failure modes, intervention rate, and how each deployed robot improves the next one.",
        zh: "强团队通常会诚实说明范围很窄、失败模式、接管率，以及每台已部署机器人如何改进下一台。"
      }
    }
  }
];

const founderQuestions = [
  {
    en: "Which exact task can the robot do today with measurable customer ROI?",
    zh: "机器人今天能完成哪个具体任务，并产生可测量的客户 ROI？"
  },
  {
    en: "What is the autonomy percentage without editing or hidden remote control?",
    zh: "不剪辑、不隐藏远程控制时，自主比例是多少？"
  },
  {
    en: "How many real robot episodes are collected weekly, and how do they improve the model?",
    zh: "每周采集多少真实机器人 episode，它们如何改进模型？"
  },
  {
    en: "Which failures are hardware, which are perception, which are policy, and which are operations?",
    zh: "失败分别来自硬件、感知、策略，还是运营？"
  },
  {
    en: "If the best open model becomes free, what remains proprietary and valuable?",
    zh: "如果最好的开源模型免费了，公司还剩下什么专有且有价值？"
  }
];

const founderSources = [
  {
    year: "2023",
    title: { en: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control", zh: "RT-2：把网络知识迁移到机器人控制" },
    note: {
      en: "Introduced a key VLA recipe: co-train vision-language knowledge and robot actions by representing actions as tokens.",
      zh: "代表性 VLA 路线：把视觉语言知识和机器人动作共同训练，并把动作表示成 token。"
    },
    url: "https://arxiv.org/abs/2307.15818"
  },
  {
    year: "2024",
    title: { en: "OpenVLA: An Open-Source Vision-Language-Action Model", zh: "OpenVLA：开源视觉-语言-行动模型" },
    note: {
      en: "Important open model and training recipe for studying VLA fine-tuning and deployment constraints.",
      zh: "研究 VLA 微调、部署限制和开放路线的重要模型。"
    },
    url: "https://arxiv.org/abs/2406.09246"
  },
  {
    year: "2024",
    title: { en: "pi-zero: A Vision-Language-Action Flow Model for General Robot Control", zh: "pi-zero：用于通用机器人控制的 VLA flow model" },
    note: {
      en: "Shows the shift toward continuous high-frequency action generation for dexterous robot behavior.",
      zh: "体现了向高频连续动作生成和灵巧行为迁移的趋势。"
    },
    url: "https://arxiv.org/abs/2410.24164"
  },
  {
    year: "2025",
    title: { en: "Gemini Robotics: Bringing AI into the Physical World", zh: "Gemini Robotics：把 AI 带入物理世界" },
    note: {
      en: "Google DeepMind's VLA and embodied reasoning direction, including spatial understanding and safety discussion.",
      zh: "Google DeepMind 的 VLA 与具身推理路线，包含空间理解和安全讨论。"
    },
    url: "https://arxiv.org/abs/2503.20020"
  },
  {
    year: "2025",
    title: { en: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots", zh: "GR00T N1：面向通用仿人机器人的开放基础模型" },
    note: {
      en: "NVIDIA's humanoid foundation model with a dual-system VLA architecture.",
      zh: "NVIDIA 的仿人基础模型，采用双系统 VLA 架构。"
    },
    url: "https://arxiv.org/abs/2503.14734"
  },
  {
    year: "2025",
    title: { en: "pi-zero point five: VLA Model with Open-World Generalization", zh: "pi-zero point five：具备开放世界泛化的 VLA" },
    note: {
      en: "A newer step toward long-horizon, messy real-world manipulation across new homes.",
      zh: "面向长时程、复杂真实环境操作的进一步探索。"
    },
    url: "https://arxiv.org/abs/2504.16054"
  },
  {
    year: "2025",
    title: { en: "Google DeepMind official Gemini Robotics post", zh: "Google DeepMind Gemini Robotics 官方文章" },
    note: {
      en: "Official explanation of Gemini Robotics, Gemini Robotics-ER, generality, interactivity, dexterity, and layered safety.",
      zh: "官方解释 Gemini Robotics、Gemini Robotics-ER、通用性、交互性、灵巧性和分层安全。"
    },
    url: "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/"
  },
  {
    year: "2026",
    title: { en: "StemVLA: 3D spatial geometry and 4D historical representation", zh: "StemVLA：3D 空间几何与 4D 历史表示" },
    note: {
      en: "An emerging research direction; useful for understanding why spatial and temporal world models matter.",
      zh: "新兴研究方向；帮助理解为什么空间和时间世界模型重要。"
    },
    url: "https://arxiv.org/abs/2602.23721"
  }
];

let lang = localStorage.getItem("humanoidAtlasLang") || "en";

const app = document.querySelector("#app");
const langButtons = [...document.querySelectorAll("[data-lang]")];

function t(value) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function routeParts() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash ? hash.split("/").filter(Boolean) : [];
}

function hrefFor(parts) {
  return `#/${parts.join("/")}`;
}

function findNode(parts) {
  let node = atlas;
  const ancestors = [];
  for (const id of parts) {
    const next = node.children?.find((child) => child.id === id);
    if (!next) return { node: atlas, ancestors: [] };
    ancestors.push(next);
    node = next;
  }
  return { node, ancestors };
}

function findRootAccent(ancestors) {
  return ancestors.find((item) => item.accent)?.accent || accent.head;
}

function nearestHighlight(ancestors) {
  for (let index = ancestors.length - 1; index >= 0; index -= 1) {
    if (ancestors[index].highlight) return ancestors[index].highlight;
  }
  return { top: 5, left: 21, width: 58, height: 91 };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStaticText() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(TEXT[key]);
  });
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
}

function renderHome() {
  const systems = atlas.children;
  const hotspotPositions = {
    head: { top: 13, left: 70 },
    torso: { top: 34, left: 74 },
    arms: { top: 44, left: 22 },
    legs: { top: 72, left: 76 },
    brain: { top: 23, left: 23 },
    safety: { top: 59, left: 24 }
  };

  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">${escapeHtml(t(TEXT.homeEyebrow))}</span>
        <h1>${escapeHtml(t(TEXT.homeTitle))}</h1>
        <p class="lead">${escapeHtml(t(TEXT.homeLead))}</p>
        <div class="hero-actions">
          <a class="button primary" href="#/head">${escapeHtml(t(TEXT.start))} ></a>
          <a class="button secondary" href="#systems">${escapeHtml(t(TEXT.overview))}</a>
          <a class="button secondary emphasis" href="#/founder">${escapeHtml(t(TEXT.founderButton))}</a>
        </div>
        <div class="learning-stats" aria-label="Learning summary">
          <div class="stat"><strong>${systems.length}</strong><span>${escapeHtml(t(TEXT.statsParts))}</span></div>
          <div class="stat"><strong>4</strong><span>${escapeHtml(t(TEXT.statsDepth))}</span></div>
          <div class="stat"><strong>2</strong><span>${escapeHtml(t(TEXT.statsLang))}</span></div>
          <div class="stat"><strong>1</strong><span>${escapeHtml(t(TEXT.statsFounder))}</span></div>
        </div>
      </div>
      <div class="robot-panel" aria-label="Clickable humanoid robot">
        <div class="robot-stage">
          <img src="./assets/humanoid-robot.png" alt="${escapeHtml(t({ en: "Full body humanoid robot", zh: "全身仿人机器人" }))}" />
          ${systems
            .map((system) => {
              const pos = hotspotPositions[system.id];
              return `
                <a class="hotspot" style="--accent:${system.accent}; top:${pos.top}%; left:${pos.left}%;" href="#/${system.id}">
                  ${escapeHtml(t(system.title))}
                </a>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>

    <section id="systems" class="part-strip" aria-label="${escapeHtml(t(TEXT.mapTitle))}">
      ${systems
        .map(
          (system) => `
            <a class="part-card" style="--accent:${system.accent};" href="#/${system.id}">
              <span class="color-chip" aria-hidden="true"></span>
              <b>${escapeHtml(t(system.title))}</b>
              <span>${escapeHtml(t(system.short))}</span>
            </a>
          `
        )
        .join("")}
    </section>
  `;
}

function renderFounderCards(cards) {
  return cards
    .map(
      (card) => `
        <article class="founder-card" style="--accent:${card.accent || "var(--cyan)"};">
          <h3>${escapeHtml(t(card.title))}</h3>
          <p>${escapeHtml(t(card.body))}</p>
        </article>
      `
    )
    .join("");
}

function renderFounderSection(section) {
  return `
    <section class="founder-section" id="${escapeHtml(section.id)}" style="--accent:${section.accent};">
      <div class="section-heading">
        <span class="eyebrow">${escapeHtml(t(section.eyebrow))}</span>
        <h2>${escapeHtml(t(section.title))}</h2>
        <p>${escapeHtml(t(section.lead))}</p>
      </div>
      <div class="founder-grid">
        ${renderFounderCards(section.cards)}
      </div>
      <aside class="founder-note">
        <strong>${escapeHtml(t(section.note.title))}</strong>
        <p>${escapeHtml(t(section.note.body))}</p>
      </aside>
    </section>
  `;
}

function renderFounderQuestions() {
  return `
    <section class="founder-section investor-questions" style="--accent:#17201d;">
      <div class="section-heading">
        <span class="eyebrow">${escapeHtml(t({ en: "Boardroom questions", zh: "董事会问题" }))}</span>
        <h2>${escapeHtml(t({ en: "Five questions I would ask before starting or funding the company.", zh: "创业或投资前，我会先问这五个问题。" }))}</h2>
      </div>
      <ol>
        ${founderQuestions.map((question) => `<li>${escapeHtml(t(question))}</li>`).join("")}
      </ol>
    </section>
  `;
}

function renderFounderSources() {
  return `
    <section class="founder-section source-panel" style="--accent:#0f9fb8;">
      <div class="section-heading">
        <span class="eyebrow">${escapeHtml(t(TEXT.founderSources))}</span>
        <h2>${escapeHtml(t(TEXT.founderSourcesTitle))}</h2>
        <p>${escapeHtml(t(TEXT.founderSourcesLead))}</p>
      </div>
      <div class="source-list">
        ${founderSources
          .map(
            (source) => `
              <article class="source-item">
                <span>${escapeHtml(source.year)}</span>
                <h3>${escapeHtml(t(source.title))}</h3>
                <p>${escapeHtml(t(source.note))}</p>
                <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(t(TEXT.sourceOpen))} ></a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFounder() {
  app.innerHTML = `
    <section class="founder-shell">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="#/">${escapeHtml(t(TEXT.backHome))}</a>
        <span aria-hidden="true">/</span>
        <span>${escapeHtml(t(TEXT.founderMode))}</span>
      </nav>

      <section class="founder-hero">
        <div>
          <span class="eyebrow">${escapeHtml(t(TEXT.founderEyebrow))}</span>
          <h1>${escapeHtml(t(TEXT.founderTitle))}</h1>
          <p class="lead">${escapeHtml(t(TEXT.founderLead))}</p>
          <div class="founder-badges" aria-label="${escapeHtml(t(TEXT.founderUpdated))}">
            ${founderBadges.map((badge) => `<span>${escapeHtml(t(badge))}</span>`).join("")}
          </div>
        </div>
        <aside class="founder-summary">
          <strong>${escapeHtml(t(TEXT.founderAudience))}</strong>
          <p>${escapeHtml(t(TEXT.founderUpdated))}</p>
        </aside>
      </section>

      ${founderSections.map(renderFounderSection).join("")}
      ${renderFounderQuestions()}
      ${renderFounderSources()}
    </section>
  `;
}

function renderBreadcrumbs(ancestors) {
  const crumbs = [`<a href="#/">${escapeHtml(t(TEXT.backHome))}</a>`];
  ancestors.forEach((item, index) => {
    const path = ancestors.slice(0, index + 1).map((part) => part.id);
    crumbs.push(`<span aria-hidden="true">/</span>`);
    crumbs.push(
      index === ancestors.length - 1
        ? `<span>${escapeHtml(t(item.title))}</span>`
        : `<a href="${hrefFor(path)}">${escapeHtml(t(item.title))}</a>`
    );
  });
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs.join("")}</nav>`;
}

function renderConcepts(node) {
  const items = node.concepts || [];
  if (!items.length) return "";
  return `
    <article class="lesson-card">
      <h2>${escapeHtml(t(TEXT.concepts))}</h2>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(t(item))}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderChildren(node, ancestors) {
  const children = node.children || [];
  if (!children.length) {
    return `
      <section class="part-map">
        <div class="callout" style="--accent:${findRootAccent(ancestors)};">
          <strong>${escapeHtml(t(TEXT.noChildren))}</strong>
          <p>${escapeHtml(t(node.check))}</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="part-map">
      <header>
        <div>
          <h2>${escapeHtml(t(TEXT.inside))}</h2>
          <p>${escapeHtml(t(TEXT.insideLead))}</p>
        </div>
      </header>
      <div class="subpart-grid">
        ${children
          .map((child) => {
            const childPath = [...ancestors.map((part) => part.id), child.id];
            return `
              <article class="mini-card">
                <div>
                  <span class="color-chip" style="--accent:${findRootAccent(ancestors)};" aria-hidden="true"></span>
                  <h3>${escapeHtml(t(child.title))}</h3>
                  <p>${escapeHtml(t(child.short))}</p>
                </div>
                <a href="${hrefFor(childPath)}">${escapeHtml(t(TEXT.open))} ></a>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderDepthRail(ancestors) {
  return `
    <div class="depth-rail" aria-label="${escapeHtml(t(TEXT.learningDepth))}">
      ${[1, 2, 3, 4]
        .map(
          (level) =>
            `<span class="depth-pill ${ancestors.length === level ? "is-current" : ""}">${escapeHtml(t(TEXT.levelWord))}${lang === "zh" ? level : ` ${level}`}${escapeHtml(t(TEXT.levelSuffix))}</span>`
        )
        .join("")}
    </div>
  `;
}

function renderNode(parts) {
  const { node, ancestors } = findNode(parts);
  if (!ancestors.length) {
    renderHome();
    return;
  }

  const color = findRootAccent(ancestors);
  const highlight = nearestHighlight(ancestors);
  app.innerHTML = `
    <section class="page-shell" style="--accent:${color};">
      ${renderBreadcrumbs(ancestors)}
      <div class="lesson-hero">
        <aside class="visual-study">
          <div class="visual-frame">
            <img src="./assets/humanoid-robot.png" alt="${escapeHtml(t({ en: "Humanoid robot with highlighted part", zh: "带高亮部位的仿人机器人" }))}" />
            <span class="highlight-box" style="top:${highlight.top}%; left:${highlight.left}%; width:${highlight.width}%; height:${highlight.height}%;"></span>
          </div>
          <p class="visual-caption">${escapeHtml(t(TEXT.location))}: ${escapeHtml(t(node.title))}</p>
          ${renderDepthRail(ancestors)}
        </aside>

        <article class="lesson-copy">
          <span class="eyebrow">${escapeHtml(t(ancestors[0].title))}</span>
          <h1>${escapeHtml(t(node.title))}</h1>
          <p class="lead">${escapeHtml(t(node.simple))}</p>

          <div class="lesson-grid">
            <article class="lesson-card">
              <h2>${escapeHtml(t(TEXT.scientist))}</h2>
              <p>${escapeHtml(t(node.scientist))}</p>
            </article>
            <article class="lesson-card">
              <h2>${escapeHtml(t(TEXT.analogy))}</h2>
              <p>${escapeHtml(t(node.analogy))}</p>
            </article>
            <article class="lesson-card">
              <h2>${escapeHtml(t(TEXT.check))}</h2>
              <p>${escapeHtml(t(node.check))}</p>
            </article>
            ${renderConcepts(node)}
          </div>

          ${renderChildren(node, ancestors)}
        </article>
      </div>
    </section>
  `;
}

function render() {
  renderStaticText();
  const parts = routeParts();
  if (parts.length === 0) {
    renderHome();
  } else if (parts[0] === "founder") {
    renderFounder();
  } else {
    renderNode(parts);
  }
  app.focus({ preventScroll: true });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    localStorage.setItem("humanoidAtlasLang", lang);
    render();
  });
});

window.addEventListener("hashchange", render);
render();
