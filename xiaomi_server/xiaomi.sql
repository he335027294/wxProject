set names utf8;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=utf8;
USE xiaomi;
#homepage图片 xm_imagelist
CREATE TABLE xm_imagelist(
   id      INT PRIMARY KEY AUTO_INCREMENT,
   img_url VARCHAR(255),
   title   VARCHAR(50),
   pic_type VARCHAR(16)
);

INSERT INTO xm_imagelist VALUES
(null,'http://127.0.0.1:3000/img/home/banner/banner1.jpg','banner1','banner'),
(null,'http://127.0.0.1:3000/img/home/banner/banner2.jpg','banner2','banner'),
(null,'http://127.0.0.1:3000/img/home/banner/banner3.jpg','banner3','banner'),
(null,'http://127.0.0.1:3000/img/home/banner/banner4.jpg','banner4','banner'),
(null,'http://127.0.0.1:3000/img/home/banner/banner5.jpg','banner5','banner'),
(null,'http://127.0.0.1:3000/img/home/breif/daily.png','每日新品','breif'),
(null,'http://127.0.0.1:3000/img/home/breif/gather.png','小米众筹','breif'),
(null,'http://127.0.0.1:3000/img/home/breif/special.png','星品驾到','breif'),
(null,'http://127.0.0.1:3000/img/home/breif/hot.png','当季热卖','breif'),
(null,'http://127.0.0.1:3000/img/home/breif/suggest.png','王牌推荐','breif'),
(null,'http://127.0.0.1:3000/img/home/breif/hongbao.png','hongbao','hongbao');



#商品表 xm_goodlist
CREATE TABLE xm_goodlist(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title   VARCHAR(128),
    info    VARCHAR(255),
    goodtype VARCHAR(64),
    goodtype_c VARCHAR(64),
    price   DECIMAL(9,2),
    ishot   Bit
);
INSERT INTO xm_goodlist VALUES
(null,"http://127.0.0.1:3000/img/goodimg/1.png","云米互联网燃气热水器1A 13L","变频恒温，节能省气，多重安全保护，智能APP控制","jiadian","家用电器",1099.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/2.png","莱克吉米除螨吸尘器","强力拍打,22cm宽幅除尘，除螨效果看得见，降噪静音","jiadian","家用电器",299.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/3.png","德玛尔高温除菌蒸汽拖把","高温蒸汽，杀菌除螨，即拖即干，呵护地面","jiadian","家用电器",249.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/4.png","米家扫地机器人","高精度激光测距，智能规划路径，1800Pa大风压澎湃吸力，远程智能控制，定时清扫，大电池持久清扫","jiadian","家用电器",1699.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/5.png","小米8","全球首款双频GPS/晓龙845处理器/红外人脸解锁/Al变焦双摄/三星AMOLED屏/AI语音助手/多功能NFC","shouji","手机电脑",2499.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/6.png","小米8 青春版","潮流镜面渐变色/2400万自拍旗舰/7.5mm超薄机身/6.26小刘海全面屏/AI裸妆美颜/晓龙660AIE处理器","shouji","手机电脑",1399.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/7.png","黑鲨游戏手机","晓龙845旗舰处理器 液冷散热/独立图像处理芯片/一键游戏模式/5.99 18:9全面屏 前置指纹识别/4000mAh大电量 支持快充","shouji","手机电脑",2899.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/8.png","红米6A","12nm高性能处理器 / 5.45 小巧全面屏 / 1300万高清相机 / “小杨柳腰” 机身","shouji","手机电脑",569.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/9.png","小米平板4","骁龙660高端处理器 / 超长续航 / AI人脸识别 / 后置1300万 / 前置500万 / 金属机身 / 超窄边框","shouji","手机电脑",1099.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/10.png","小米游戏本15.6英寸","性能怪兽/[冷酷]散热系统/一链高速散热/窄边框 高清屏/3+2包围式热管/杜比全景声加强款/四分区键盘背光","shouji","手机电脑",5999.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/11.png","小米笔记本Air13.3","四核增强版 /带独立显卡的轻薄笔记本 /指纹解锁","shouji","手机电脑",3999.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/12.png","米家蓝牙温湿度计 白色","可联动智能设备自动控制空调和加湿器等智能设备！","zhineng","智能家庭",69.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/13.png","米家PM2.5检测仪","可更智能控制小米净化器！高精度激光传感器，一体黑OLED频，智能联动，轻便小巧！","zhineng","智能家庭",399.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/14.png","小米手环3 NFC版","支持公交地铁刷卡 / 微信、QQ、来电等内容显示 / 多种运动数据实时可见 / 睡眠、计步自动检测 / 50 米游泳防水 / 24 个汉字一屏显示","zhineng","智能家庭",199.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/15.png","云麦好轻mini2智能体脂秤","17项数据 精准交流测脂 高清LED显示屏 已接入米家APP","zhineng","智能家庭",99.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/16.png","极蜂天文望远镜","90mm物镜口径/高分辨率成像/天地两用/连接手机拍照","huwai","出行户外",1199.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/17.png","Amazfit 运动手表","蓝牙听歌，GPS 实时轨迹，运动心率，全天候显示","zhineng","智能家庭",799.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/18.png","小米米家对讲机1S","轻薄机身，位置共享，手机写频，FM收音机","huwai","出行户外",249.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/19.png","凯登司轻质顺滑远投竿","抛投自如，加固滑轮座，防锈渔轮，便携套装","huwai","出行户外",379.00,0),
(null,"http://127.0.0.1:3000/img/goodimg/20.png","乐奥户外车载保温箱","滚塑工艺，长效保温，坚固耐摔，无需用电，7天长效保温","出行户外","huwai",599.00,0),
(null,"http://127.0.0.1:3000/img/goodimg/21.png","ninebot miniPRO","可伸缩脚控，镁合金车架，10.5寸轮胎，多项安全技术","huwai","出行户外",3699.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/22.png","小米米家电动滑板车","极简几何设计，1分钟轻松上手/30公里超长续航/双重刹车系统/便携折叠","huwai","出行户外",1999.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/23.png","小米米家后视镜行车记录仪","语音控制/5英寸IPS大屏/停车监控/前后双录","huwai","出行户外",399.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/24.png","贝医生声波电动牙刷","磁悬浮声波马达 / 双效双刷头 / IPX7防水 / 感应式充电 / 专利刷毛布局 / 两档模式","meizhuang","护肤美妆",399.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/25.png","贝医生 0+美白牙膏 3支装","安全配方/科学亮白/强效清洁/持久清新","meizhuang","护肤美妆",49.90,1),
(null,"http://127.0.0.1:3000/img/goodimg/26.png","须眉负离子护发电吹风","超大风量速干，双倍负离子，专利风道设计","meizhuang","护肤美妆",169.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/27.png","须眉四刀头剃须刀（往复式）","深层快速剃净，全身水洗，超长续航，TYPE-C充电口","meizhuang","护肤美妆",299.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/28.png","DUcare精致高档化妆刷（6支装）","亲肤柔和,曲线握感,方便收纳","meizhuang","护肤美妆",118.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/29.png","最生活长绒棉吸水毛巾 3条装","阿瓦提长绒棉，瑞典抗菌科技","meizhuang","护肤美妆",59.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/30.png","水肌美男士经典护肤三件套","日本进口原料/深层清洁  补水控油/舒爽保湿","meizhuang","护肤美妆",69.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/31.png","水肌美酵素补水面膜 6片装","日本酵素专利成分，深层补水滋润，温和亲肤之选","meizhuang","护肤美妆",59.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/32.png","阳澄湖大闸蟹（礼盒礼卡可选）","出口品质，生态养殖，鲜活到家","yinshi","饮食酒水",218.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/33.png","金华火腿整腿礼盒  2.95kg","非遗大师监制，传统金华火腿，《舌尖》同款","yinshi","饮食酒水",348.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/34.png","90分户外休闲中长款鹅绒羽绒服","80%鹅绒，4级防泼水，蓄热功能里布","yifu","服装配饰",599.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/35.png","90分无缝立体充绒羽绒服（中长款）","中长款连帽设计，90%白鸭绒，无缝防钻绒，保暖锁温","yifu","服装配饰",399.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/36.png","柒號城市雨衣夹克（情侣款）","北欧风格，环保PU，无缝防水，安全反光","yifu","服装配饰",169.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/37.png","MITOWN LIFE 全棉多袋休闲长裤","WORK系列，宽松版型，舒适透气，多种穿法","yifu","服装配饰",199.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/38.png","COTTONSMITH时尚牛仔短裤","潮流版型，舒适柔软，清爽透气，时尚穿搭","yifu","服装配饰",109.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/39.png","小米短袖T恤 机械米兔男款","机械米兔印花，棉氨面料，黑白...","yifu","服装配饰",109.00,1),
(null,"http://127.0.0.1:3000/img/goodimg/40.png","90分男士法兰绒衬衫（三色）","100%棉，英国高士线，绒质体感","yifu","服装配饰",109.00,1);

#用户表 xm_userlist
CREATE TABLE xm_userlist(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(128) default "../../assets/img/person/profile.png",
    uphone  VARCHAR(32),
    upwd    VARCHAR(32),
    uname   VARCHAR(64),
    uzone   VARCHAR(64) default "广东 广州",
    uaddress VARCHAR(128) default "-",
    usex    CHAR default 1,
    ubirth  VARCHAR(32) default "1970-1-1"
);
INSERT INTO xm_userlist VALUES
(null,default,"13660268680","123456","飞翔dei心","广东 韶关","广东省广州市越秀区喜剧广场3楼小桌子",default,"1994-11-14");

#订单列表 xm_shoplist
CREATE TABLE xm_orderlist(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    userId  INT,
    goodId  INT,
    goodCount INT
);
INSERT INTO xm_orderlist VALUES(null,1,4,1);
INSERT INTO xm_orderlist VALUES(null,1,32,1);




